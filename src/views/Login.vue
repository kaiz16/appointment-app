<template>
<footer>
    <div id="login" class="container">
        <div class="columns is-centered">
            <div class="column is-two-fifths">

                <section>
                    <b-field label="Email">
                        <b-input required v-model="email" value="" maxlength="30" ></b-input>
                    </b-field>

                    <b-field label="Password" >
                        <b-input required v-model="password" value="" type="password" maxlength="30" ></b-input>
                    </b-field>

                    <div class="column is-half is-offset-one-quarter">
                        <div class="buttons">
                            <b-button type="is-primary" expanded v-on:click="login">Login</b-button>
                        </div>
                    </div>

                    <div class="field">
                        <b-checkbox>Remember Me</b-checkbox>
                        
                    </div>

                    <div class="field">
                        <b-switch :rounded="isRounded" :outlined="isOutlined" :size="size" :type="type" :left-label='leftLabel' :passive-type='passiveType'>Auto Sign In</b-switch>
                    </div>

                    <p><a href="www.google.com">Forgot your password?</a></p>
                     <a @click="takeMeToRegister">Have you Sign Up?</a>
                </section>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            hasError: false,
            size: '',
            type: null,
            passiveType: null,
            isRounded: false,
            isOutlined: false,
            leftLabel: false,
            email: "",
            password: ""
        };
    },
    methods: {
        
        async login() {
        if (this.email == null || this.email == "") {
        this.$buefy.toast.open({
          message: "<b>Your Email Can't Be Empty</b>",
          type: "is-danger"
        });
      } else if (this.password == null || this.password == "") {
        this.$buefy.toast.open({
          message: "<b>Your Password Can't Be Empty</b>",
          type: "is-danger"
        });
      } else{
             const {
                data,
                error
            } = await axios({
                url: "auth/login",
                data: {
                    email: this.email.toLowerCase(),
                    password: this.password
                },
                method: "POST"
            });
            if (error) {
                this.$buefy.toast.open("Error");
            } else {
                localStorage.setItem("auth-token", data.data.token);
                this.$router.push("/dashboard");
            }}
        },
        takeMeToRegister(){
            this.$router.push('/register')
        }
    }
};
</script>

<style>
footer {

    padding: 10px;

}
</style>
