<template>
<footer>
    <div class="container">
        <div class="column is-half is-offset-one-quarter">
            <div class="column is-two-fifths">
                <div class="border">
                    <b-field label="Full Name">
                        <b-input v-modal="fullname" value=""></b-input>
                    </b-field>

                    <b-field label="Email" type="is-danger">
                        <b-input type="email" value="">
                        </b-input>
                    </b-field>

                    <b-field label="Mobile Number">
                        <b-input value="" maxlength="12"></b-input>
                    </b-field>

                    <b-field>
                        <b-input v-modal="password" type="password" placeholder="Input your password">
                        </b-input>
                    </b-field>

                    <b-field>
                        <b-input type="password" placeholder="Re-type your password" password-reveal>
                        </b-input>
                    </b-field>

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
</footer>
</template>

<script>
export default {
    data() {
        return {
            fullname: '',
            password: ''
        }
    },
    methods: {
        submit() {
            console.log('sign-up', this.fullname, this.password)
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