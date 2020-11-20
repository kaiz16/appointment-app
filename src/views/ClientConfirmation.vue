<template>
  <section class="vbox">
    <div class="columns is-centered">
      <div class="column is-half">
        <div id class="client-appointments">
          <div id class="client-card">
            <div id class="client-padding">
              <div
                class="card"
                style="padding: 1rem; color: rgb(225, 236, 254); background-image: linear-gradient(242deg, rgb(63, 81, 181) 0%, rgb(156, 39, 176) 100%);"
              >
                <div style="position: relative;">
                  <div
                    style="color: rgb(225, 236, 254); position: absolute; height: 55px; top: 25px; right: 15px;"
                  >
                    <b-tooltip label="Carmen Choo">
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
                  <h2 class="title" style="color: rgb(225, 236, 254); padding-top: 4rem;">Ballet</h2>
                  <p style="color: rgb(225, 236, 254); font-weight: 600;"></p>
                  <p class="title-loacation" style="color: rgb(225, 236, 254);">
                    Location:
                    <span class="tl" style="font-weight: 600;">In-person Meeting</span>
                  </p>
                  <p class="title-duration" style="color: rgb(225, 236, 254);">
                    Duration:
                    <span class="td" style="font-weight: 600;">30 minutes</span>
                  </p>
                  <p class="title-time" style="color: rgb(225, 236, 254);">
                    When:
                    <span class="tt" style="font-weight: 600;">11:30 AM</span> on
                    <span class="tt" style="font-weight: 600;">Friday</span> ,
                    <span class="tt" style="font-weight: 600;">November</span>
                    <span class="tt" style="font-weight: 600;">20</span> ,
                    <span class="tt" style="font-weight: 600;">2020</span>
                  </p>
                </div>
              </div>
              <div class="name" style="padding: 1rem !important;">
                <b-field label="Full Name">
                  <b-input value="" placeholder="Your Fullname"></b-input>
                </b-field>
              </div>
              <div class="email" style="padding: 1rem !important;">
                <b-field label="Email" type="is-danger" message="This email is invalid">
                  <b-input type="email" value="" placeholder="Your Emaill" maxlength="30"></b-input>
                </b-field>
              </div>
              <div class="field" style="padding: 1rem !important;">
                <b-radio
                  v-model="radio"
                  native-value="success"
                  type="is-success"
                >I agree to receive communication. Click here to read full GDPR and Privacy Policy content.</b-radio>
              </div>
              <div class="field" style="padding: 1rem !important;">
                <b-radio
                  v-model="radio"
                  native-value="success"
                  type="is-success"
                >I agree to receive communication. Click here to read full Marketing Agreement.</b-radio>
              </div>
              <div class="columns" style="padding: 1rem !important; padding-left: 6rem !important;">
                <div class="column is-1">
                  <b-button type="is-primary" icon-left="arrow-left-bold-outline" outlined>Back</b-button>
                </div>
                <div class="column is-5 is-offset-7" style="padding: 1rem !important;">
                  <b-button type="is-success" icon-right="location-enter" outlined>Confirm</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; font-size: 0.8rem; text-align: center !important;">
      Create Your Own
      <a href style="color: rgb(19, 133, 229);">Appointments Booking Page</a> with
      <a href style="color: rgb(19, 133, 229);">Appointment App</a>
    </div>
  </section>
</template>

<script>
const thisMonth = new Date().getMonth();
export default {
  data() {
    return {
      radio: 'default',
      date: new Date(2017, thisMonth, 1),
      events: [
        new Date(2017, thisMonth, 2),
        new Date(2017, thisMonth, 6),
        {
          date: new Date(2017, thisMonth, 6),
          type: "is-info"
        },
        {
          date: new Date(2017, thisMonth, 8),
          type: "is-danger"
        },
        {
          date: new Date(2017, thisMonth, 10),
          type: "is-success"
        },
        {
          date: new Date(2017, thisMonth, 10),
          type: "is-link"
        },
        new Date(2017, thisMonth, 12),
        {
          date: new Date(2017, thisMonth, 12),
          type: "is-warning"
        },
        {
          date: new Date(2017, thisMonth, 16),
          type: "is-danger"
        },
        new Date(2017, thisMonth, 20),
        {
          date: new Date(2017, thisMonth, 29),
          type: "is-success"
        },
        {
          date: new Date(2017, thisMonth, 29),
          type: "is-warning"
        },
        {
          date: new Date(2017, thisMonth, 29),
          type: "is-info"
        }
      ]
    };
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
.title {
  margin: 0 0 0.5rem;
  font-weight: 600;
  margin-bottom: 0.625rem !important;
  margin-top: 0.625rem !important;
}
</style>