<template>
  <section id="app" class="section">
    <div id="setting">
      <navbar></navbar>
      <div class="meta-section">
        <div class="columns is-multiline">
          <div class="column is-three-quarters">
            <b-field label="Class Name">
              <b-input
                required
                aria-required="true"
                v-model="clonedEvent.title"
                placeholder="Type Class Name"
                type="is-danger"
              ></b-input>
            </b-field>
          </div>

          <div class="column is-three-quarters">
            <b-field label="Your Appointment Form URL" type="is-dark">
              <a
                :href="'http://localhost:8080/event/' + clonedEvent._id"
                target="_blank"
              >{{'http://localhost:8080/event/' + clonedEvent._id}}</a>
            </b-field>
          </div>

          <div class="column is-three-quarters">
            <b-field label="Description" type="is-dark">
              <b-input
                v-model="clonedEvent.description"
                maxlength="200"
                type="textarea"
                placeholder="Your appointment form description"
              ></b-input>
            </b-field>
          </div>
        </div>
      </div>

      <div class="schedules-section" style="width: 1000px">
        <p class="title is-6" style="margin-bottom: 0">Available Hours</p>
        <div class="columns is-vcentered" v-for="day in currentSchedules" :key="day.label">
          <div class="column is-2">
            <b-checkbox v-model="day.enabled" type="is-dark">
              <p class="title is-6">{{day.label}}</p>
            </b-checkbox>
          </div>
          <div class="column is-narrow">
            <b-field label="Start time" type="is-dark">
              <b-timepicker v-model="day.startTime" placeholder="Click to select..."></b-timepicker>
            </b-field>
          </div>
          <div class="column is-narrow">
            <b-field label="End time" type="is-dark">
              <b-timepicker v-model="day.endTime" placeholder="Click to select..."></b-timepicker>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column is-narrow">
            <b-field label="Duration (Minutes)" type="is-dark">
              <b-input
                required
                v-model="clonedEvent.duration"
                type="number"
                placeholder="Duration"
                validation-message="*required 1 ~ 180"
                min="1"
                max="180"
                pattern="[1-180]*"
              ></b-input>
            </b-field>
          </div>
        </div>
      </div>

      <div class="footer-section">
        <div class="columns">
          <div class="column is-narrow">
            <b-field label="Meeting type" type="is-dark">
              <b-select
                placeholder="Select session location"
                v-model="clonedEvent.meetingType"
                expanded
              >
                <option value="In Person">In-Person Meeting</option>
                <option value="Online">Zoom</option>
              </b-select>
            </b-field>
          </div>
        </div>

        <b-button type="is-dark" @click="saveChanges">Save</b-button>
      </div>
      <div class="column is-6" v-if="currentSchedules"></div>
      <br />
      <div class="column is-7"></div>
    </div>
  </section>
</template>

<script>
/*eslint-disable*/
import Navbar from "@/components/organisms/Navbar.vue";
import axios from "axios";
import { tokenConfig } from "@/auth";
export default {
  el: "#app",
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  components: {
    navbar: Navbar
  },
  data() {
    return {
      clonedEvent: {},
      time: "",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],

      currentSchedules: []
    };
  },
  mounted() {
    this.clonedEvent = JSON.parse(JSON.stringify(this.event));

    this.days.forEach(d => {
      // if (this.clonedEvent.schedules[d]){
      const startTime = this.clonedEvent.schedules[d].startTime;
      const endTime = this.clonedEvent.schedules[d].endTime;
      let convertedStartTime = new Date();
      let convertedEndTime = new Date();
      if (startTime && endTime) {
        let sH = startTime.substring(0, 2);
        let sM = startTime.substring(2, 4);
        let eH = endTime.substring(0, 2);
        let eM = endTime.substring(2, 4);

        convertedStartTime.setHours(+sH); // Set the hours, using implicit type coercion
        convertedStartTime.setMinutes(sM); // You can pass Number or String. It doesn't really matter
        convertedStartTime.setSeconds("00");

        convertedEndTime.setHours(+eH); // Set the hours, using implicit type coercion
        convertedEndTime.setMinutes(eM); // You can pass Number or String. It doesn't really matter
        convertedEndTime.setSeconds("00");
      }

      const schedule = {
        enabled: !!startTime,
        label: d,
        startTime: convertedStartTime,
        endTime: convertedEndTime
      };

      this.currentSchedules.push(schedule);
      // }
    });
  },

  methods: {
    async saveChanges() {
      const schedules = this.currentSchedules.filter(
        day => {
          if (day.enabled == true){
            return day
          }
        }
      )

      if (schedules.length == 0){
        this.$buefy.toast.open({
          message: "<b>Please Tick At Least 1 Checkbox</b>",
          type: "is-danger",
          queue: true
        });
        return
      }
      this.currentSchedules.forEach(d => {
        let sH;
        let sM;
        let sT;
        let eH;
        let eM;
        let eT;
        if (d.enabled == false) {
          sT = "";
          eT = "";
        } else {
          sH = d.startTime.getHours();
          sM = d.startTime.getMinutes();
          eH = d.endTime.getHours();
          eM = d.endTime.getMinutes();

          sT = `${("0" + sH).slice(-2)}${("0" + sM).slice(-2)}`;

          eT = `${("0" + eH).slice(-2)}${("0" + eM).slice(-2)}`;
        }

        this.clonedEvent.schedules[d.label].startTime = sT;
        this.clonedEvent.schedules[d.label].endTime = eT;
      });
      const { data, error } = await axios({
        url: "events/update/" + this.$route.params.id,
        headers: tokenConfig(),
        data: {
          title: this.clonedEvent.title,
          description: this.clonedEvent.description,
          duration: this.clonedEvent.duration,
          schedules: this.clonedEvent.schedules,
          meetingType: this.clonedEvent.meetingType
        },
        method: "POST"
      });
      if (error) {
        this.$buefy.toast.open("Error");
      } else {
        console.log(data);
        location.reload();
      }
    }
  }
};
</script>

<style>
.section {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
#event-view {
  padding: 0 !important;
}
.meta-section {
  padding-top: 0.925rem !important;
}
</style>
