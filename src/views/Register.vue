<template>
  <div id="register" class="container">
    <div class="column is-half is-offset-one-quarter">
      <div class="column">
        <div class="border">
          <b-field label="Username">
            <b-input
              required
              aria-required="true"
              v-model="username"
              placeholder="Input your Username"
              type="is-danger"
            ></b-input>
          </b-field>

          <b-field label="Email">
            <b-input
              required
              aria-required="true"
              v-model="email"
              type="email"
              placeholder="Input your Email"
            ></b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              required
              aria-required="true"
              v-model="password"
              type="password"
              placeholder="Input your Password"
            ></b-input>
          </b-field>

          <a @click="takeMeToLogin">Already have an account? Login!</a>
          <br />
          <div class="columns">
            <div class="column is-full">
              <label class="checkbox">
                <input type="checkbox" />
                By submitting this form, I agree to booking's
                <a
                  href="#"
                >Term & Condition</a> and
                <a href="#">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <div class="column is-half is-offset-one-quarter">
            <b-button type="is-primary" v-on:click="submit" expanded>Submit</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// javascript
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async submit() {
      if (this.username == null || this.username == "") {
        this.$buefy.toast.open({
          message: "<b>Your Username Can't Be Empty</b>",
          type: "is-danger",
          position: "is-bottom"
        });
      } else if (this.email == null || this.email == "") {
        this.$buefy.toast.open({
          message: "<b>Your Email Can't Be Empty</b>",
          type: "is-danger",
          position: "is-bottom"
        });
      } else if (this.password == null || this.password == "") {
        this.$buefy.toast.open({
          message: "<b>Your Password Can't Be Empty</b>",
          type: "is-danger",
          position: "is-bottom"
        });
      } else {
        try {
          await axios({
            url: "auth/register",
            method: "POST",
            data: {
              username: this.username,
              email: this.email.toLowerCase(),
              password: this.password
            }
          })
        } catch (error) {
          this.$buefy.toast.open({
            message: `<b>${error.response.data}</b>`,
            type: "is-danger",
            position: "is-top"
          });
        }
      }
    },
    takeMeToLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.border {
  border: 2px solid #2f2f2f;
  border-radius: 10px;
  padding: 20px;
}
</style>