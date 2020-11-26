<template>
  <section>
    <div id="bookings">
      <navbar></navbar>
      <div class="columns is-centered" style="padding: 20px">
        <div class="column is-11">
          <div class="table">
            <b-table hoverable @click="showPortal" :data="data" :columns="columns"></b-table>
          </div>
          <!-- <b-table
            :data="isEmpty ? [] : data"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="first_name" label="First Name" v-slot="props">
                {{ props.row.first_name }}
            </b-table-column>

            <b-table-column field="last_name" label="Last Name" v-slot="props">
                {{ props.row.last_name }}
            </b-table-column>

            <b-table-column field="date" label="Date" centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </span>
            </b-table-column>

            <b-table-column label="Gender" v-slot="props">
                <span>
                    <b-icon pack="fas"
                        :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.gender }}
                </span>
            </b-table-column>

          </b-table>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/organisms/Navbar.vue";
import axios from "axios";
import { tokenConfig } from "@/auth";
export default {
  props: {
    event: {
      type: Object
    }
  },
  components: {
    navbar: Navbar
  },
  data() {
    return {
      data: [{ name: "Test", day: 30, month: "November", year: 2020 }],
      columns: [
        {
          field: "name",
          label: "Name"
        },
        {
          field: "day",
          label: "Day"
        },
        {
          field: "month",
          label: "Month"
        },
        {
          field: "year",
          label: "Year"
        }
      ]
    };
    // const data = [
    //     { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
    //     { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
    //     { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
    //     { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
    //     { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
    // ]

    // return {
    //     data,
    //     isEmpty: false,
    //     isBordered: false,
    //     isStriped: false,
    //     isNarrowed: false,
    //     isHoverable: false,
    //     isFocusable: false,
    //     isLoading: false,
    //     hasMobileCards: true
    // }
  },
  async mounted() {
    const { data, error } = await axios({
      url: "bookings/" + this.$route.params.id,
      method: "GET",
      headers: tokenConfig()
    });
    if (error) {
      this.$buefy.toast.open("Error");
    } else {
      this.data = data;
    }
  },
  methods: {
    showPortal(event) {
      this.$router.push({
        name: "ClientPortal",
        param: {
          id: event._id
        }
      });
    }
  }
};
</script>

<style>
.table {
  margin-top: 1.625rem !important;
}
</style>