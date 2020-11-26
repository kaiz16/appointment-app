<template>
  <section class="vbox" v-if="event">
    <div class="columns is-centered">
      <div class="column is-half" style="width: 660px;">
        <div id class="client-appointments">
          <div id class="client-card">
            <div id class="client-padding">
              <div
                class="card"
                style="padding: 1rem; color: rgb(225, 236, 254); background-image: linear-gradient(242deg, rgb(63, 81, 181) 0%, rgb(156, 39, 176) 100%);"
              >
                <div style="position: relative;">
                  <h2
                    class="title"
                    style="color: rgb(225, 236, 254); padding-top: 4rem;"
                  >{{event.title}} by {{event.username}}</h2>
                  <p style="color: rgb(225, 236, 254); font-weight: 600;"></p>
                  <p class="title-loacation" style="color: rgb(225, 236, 254);">
                    Location:
                    <span
                      class="tl"
                      style="font-weight: 600;"
                    >{{event.meetingType}} Meeting</span>
                  </p>
                  <p class="title-duration" style="color: rgb(225, 236, 254);">
                    Duration:
                    <span class="td" style="font-weight: 600;">{{event.duration}} minutes</span>
                  </p>
                </div>
              </div>
              <div class="columns" style="height: 455px;">
                <div class="column is-narrow" style="height: 430px; float: left;">
                  <b-datepicker inline v-model="date" :events="events" size="is-medium"></b-datepicker>
                </div>
                <div
                  class="column is-4"
                  style="height: 93%; overflow-y: scroll; margin-top: .875rem !important; float: left;"
                >
                  <div class="buttons">
                    <b-button
                      type="is-primary"
                      @click="confirmApplication(time)"
                      expanded
                      outlined
                      v-for="time in availableTimes"
                      :key="time"
                    >{{moment(time, "HH:mm").format('hh:mm A')}}</b-button>
                    <p
                      class="title is-5 has-text-centered"
                      v-if="availableTimes.length == 0"
                    >Not available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 660px; font-size: 0.8rem; text-align: center !important;">
          Create Your Own
          <a href style="color: rgb(19, 133, 229);">Appointments Booking Page</a> with
          <a href style="color: rgb(19, 133, 229);">Appointment App</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";
import axios from "axios";
const thisMonth = new Date().getMonth();
const thisYear = new Date().getFullYear();
const thisDay = new Date().getDate();
export default {
  data() {
    return {
      moment: moment,
      event: null,
      availableTimes: null,
      date: null,
      events: []
    };
  },
  watch: {
    date: async function(date) {
      const { data } = await axios({
        url: "events/" + this.$route.params.id,
        params: {
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear()
        }
      });
      this.event = data.event;
      this.availableTimes = data.availableTimes;
    }
  },
  beforeCreate() {
    this.moment = moment;
  },
  mounted() {
    this.date = new Date(thisYear, thisMonth, thisDay);
  },
  methods: {
    confirmApplication(time) {
      const params = {
        event: this.event,
        day: this.date.getDate(),
        month: this.date.getMonth() + 1,
        year: this.date.getFullYear(),
        hour: moment(time, "HHmm").get("hour"),
        minutes: moment(time, "HHmm").get("minutes")
      };
      this.$router.push({
        name: "ClientConfirmation",
        params
      });
    },
    async findUsername() {
      const { username, error } = await axios({
        url: "events/username/:id",
        params: {
          _id: this.$route.params.id
        },
        method: "GET"
      });
      if (error) {
        this.$buefy.toast.open("Error");
      } else {
        print(this.username);
        return (this.username.username.data = username);
      }
    }
  }
};
</script>

<style>
.vbox {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  /*Align children vetically*/
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;

  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
}
.client-appointments {
  height: 100%;
  min-height: 100%;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  text-size-adjust: 100%;
  margin: 0;
  background-color: #fff;
  width: 100%;
}
.client-card {
  width: 660px;
  margin-bottom: 0.125rem;
  box-shadow: 0 1px 5px 0 rgba(45, 62, 80, 0.12);
  margin-top: 1.875rem !important;
}
.client-padding {
  margin-bottom: 0.625rem !important;
  position: relative;
  border: 1px solid #e6eaee;
  border-radius: 4px;
  background-color: #fff;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font: inherit;
  vertical-align: baseline;
  color: inherit;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased !important;
}
.title {
  padding-left: 0.625rem !important;
  font-size: 1.75rem;
}
.title .tl .td .tt {
  margin: 0 0 0.5rem;
  font-weight: 600;
  margin-bottom: 0.625rem !important;
  margin-top: 0.625rem !important;
}
.title-loacation .title-duration .title-time {
  padding-left: 0.625rem !important;
}
</style>