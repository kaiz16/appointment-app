<template>
    <div class="container">
        <div class="column is-half is-offset-one-quarter">
            <div class="column">
                <div class="border">
                    <b-field label="Username">
                        <b-input required v-model="username" value=""></b-input>
                    </b-field>

                    <b-field label="Email" type="is-danger">
                        <b-input required v-model="email" type="email" value="">
                        </b-input>
                    </b-field>

                    <b-field label="Password" type="is-danger">
                        <b-input required v-model="password" type="password" placeholder="Input your password">
                        </b-input>
                    </b-field>

                    <a @click="takeMeToLogin">Already have an account? Login!</a>
                    <br>
                    <div class="columns">
                        <div class="column is-full">
                            <label class="checkbox">
                                <input type="checkbox">
                                By submitting this form, I agree to booking's <a href="#">Term & Condition</a> and <a href="#">Privacy Policy</a>.
                            </label>
                        </div>
                    </div>

                    <div class="column is-half is-offset-one-quarter">
                        <b-button v-on:click="submit">Submit</b-button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script> // javascript
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async submit() {
            const data = await axios({
                url: 'auth/register',
                method: 'POST',
                data: {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
            })
            if (data.data.error){
                return
            }else{
                this.$router.push('/login')
            }
        },
        takeMeToLogin(){
            this.$router.push('/login')
        }
    },
}
</script>

<style>
.border {
    border: 2px solid #2f2f2f;
    border-radius: 10px;
    padding: 20px;
}
</style>