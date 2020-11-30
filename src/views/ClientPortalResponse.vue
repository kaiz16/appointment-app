<template>
  <section class="vbox">
    <div class="columns is-centered">
      <div class="column is-half" style="width: 660px;">
        <div id class="client-appointments">
          <div id class="client-card">
            <div id class="client-padding">
              <div
                class="card"
                style="padding: 1rem; color: rgb(225, 236, 254); background-image: linear-gradient(242deg, rgb(63, 81, 181) 0%, rgb(156, 39, 176) 100%); padding-bottom: 2rem;"
              >
                <div style="position: relative;">
                  <div
                    style="color: rgb(225, 236, 254); position: absolute; height: 55px; top: 25px; right: 15px;"
                  >
                    <b-tooltip label="Carmen">
                      <b-button
                        rounded
                        size="is-medium"
                        type="is-primary"
                        style="border-radius: 100%;"
                        icon-left="account"
                        outlined
                      ></b-button>
                    </b-tooltip>
                  </div>
                  <h2
                    class="title"
                    style="color: rgb(225, 236, 254); padding-top: 4rem;"
                  >Classes by Admin</h2>
                  <p style="color: rgb(225, 236, 254); font-weight: 600;"></p>
                  <p class="title-loacation" style="color: rgb(225, 236, 254);">
                    Location:
                    <span class="tl" style="font-weight: 600;">Zoom</span>
                  </p>
                  <p class="title-duration" style="color: rgb(225, 236, 254);">
                    Duration:
                    <span class="td" style="font-weight: 600;">60 Minutes</span>
                  </p>
                  <p class="title-time" style="color: rgb(225, 236, 254);">
                    When:
                    <span class="tt" style="font-weight: 600;">29 November 2020 , 02 : 30 PM</span>
                  </p>
                </div>
              </div>

              <div class="columns is-vcenter" style="padding: 2rem !important; text-align: center !important;">
                <div class="column" float: left>
                  <b-button type="is-primary" icon-right="autorenew" outlined>Update My Schedule</b-button>
                </div>
                <div class="column" float: left style="padding: 1rem !important;">
                  <b-button type="is-success" icon-right="thumb-up" outlined>Cancel My Schedule</b-button>
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
export default {};
// import moment from "moment";
// import axios from "axios";
// export default {
//   props: [
//     "event",
//     "eventId",
//     "username",
//     "name",
//     "email",
//     "day",
//     "month",
//     "year",
//     "hour",
//     "minutes"
//   ],
//   data() {
//     return {
//       moment: moment,
//       gdpr: "default",
//       marketing: "default"
//     };
//   },
//   beforeCreate() {
//     this.moment = moment;
//   },
//   methods: {
//     goBack() {
//       this.$router.push({
//         name: "ClientPortal"
//       });
//     },
//     isEmailValid() {
//       return this.email == ""
//         ? ""
//         : this.reg.test(this.email)
//         ? "has-success"
//         : "has-error";
//     },
//     async confirm() {
//       // eslint-disable-next-line no-useless-escape
//       const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       if (this.name == null || this.name == "") {
//         this.$buefy.toast.open({
//           message: "<b>Your Name Can't Be Empty</b>",
//           type: "is-danger"
//         });
//       } else if (this.email == null || this.email == "") {
//         this.$buefy.toast.open({
//           message: "<b>Your Email Can't Be Empty</b>",
//           type: "is-danger"
//         });
//       } else if (!reg.test(this.email)) {
//         this.$buefy.toast.open({
//           message: "<b>Please Enter Correct Email</b>",
//           type: "is-danger"
//         });
//       } else {
//         const { data, error } = await axios({
//           url: "bookings/create",
//           data: {
//             eventId: this.$route.params.id,
//             username: this.username,
//             name: this.name,
//             email: this.email.toLowerCase(),
//             day: this.day,
//             month: this.month,
//             year: this.year,
//             hour: this.hour,
//             minutes: this.minutes
//           },
//           method: "POST"
//         });
//         if (error) {
//           this.$buefy.toast.open("Error");
//         } else {
//           console.log(data);
//         }
//       }
//     }
//   }
// };
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
  height: 330px;

  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;

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
.title {
  margin: 0 0 0.5rem;
  font-weight: 600;
  margin-bottom: 0.625rem !important;
  margin-top: 0.625rem !important;
}

.footer {
  width: 660px;
}
</style>







