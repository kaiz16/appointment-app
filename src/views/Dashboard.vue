<template>
  <div id="dashboard">
    <navbar></navbar>
    <div class="columns is-centered" style="padding: 20px">
      <div class="column is-10">
        <b-button @click="showNewEventModal">+ New</b-button>
        <div class="table">
          <b-table hoverable @click="showEvent" :data="data" :columns="columns"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar.vue";
import NewEventForm from "@/components/organisms/NewEventForm";
import axios from "axios";
import { tokenConfig } from "@/auth";
export default {
  name: "Dashboard",
  components: {
    navbar: Navbar
  },
  data() {
    return {
      data: [
        { title: "Ballet", duration: "30 minutes", view: 0, booked: 0 },
        { title: "MyDanceComp", duration: "30 minutes", view: 12, booked: 4 },
        { title: "Yoga", duration: "30 minutes", view: 50, booked: 10 }
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
      method: "GET",
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
