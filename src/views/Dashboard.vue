<template>
  <div class="column is-half">
    <b-button @click="showNewEventModal">+ New</b-button>
    <div class="columns is-centered">
      <div class="mr-0 pt-5">
        <div class="table">
          <b-table hoverable @click="showEvent" :data="data" :columns="columns"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewEventForm from "@/components/organisms/NewEventForm";
import axios from "axios";
import { tokenConfig } from "@/auth";
export default {
  name: "Dashboard",
  data() {
    return {
      data: [
        { name: "Ballet", duration: "30 minutes", view: 0, booked: 0 },
        { name: "MyDanceComp", duration: "30 minutes", view: 12, booked: 4 },
        { name: "Yoga", duration: "30 minutes", view: 50, booked: 10 }
      ],
      columns: [
        {
          field: "title",
          label: "Title"
        },
        {
          field: "duration",
          label: "Duration"
        },
        {
          field: "view",
          label: "Views",
          numeric: true,
          default: 0
        },
        {
          field: "booked",
          label: "Booked",
          numeric: true,
          default: 0
        }
      ]
    };
  },
  async mounted() {
    const { data, error } = await axios({
      url: "events/",
      headers: tokenConfig()
    });
    if (error) {
      this.$buefy.toast.open("Error");
    } else {
      this.data = data;
    }
  },
  methods: {
    async createNewEvent(title) {
      const { data, error } = await axios({
        url: "events/create",
        data: {
          title
        },
        headers: tokenConfig(),
        method: "POST"
      });
      if (error) {
        this.$buefy.toast.open("Error");
      } else {
        this.data.push(data);
      }
    },
    showNewEventModal() {
      this.$buefy.modal.open({
        parent: this,
        component: NewEventForm,
        events: {
          close: title => {
            this.createNewEvent(title);
          }
        }
      });
    },
    showEvent(event) {
      this.$router.push({
        name: "Event",
        params: {
          id: event._id
        }
      });
    }
  }
};
</script>
