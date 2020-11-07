<template>
    <div class="columns is-centered">
        <div class="column is-half">
            <b-field label="Username"
                type="is-success"
                message="This username is available">
                <b-input 
                    v-model="username"
                    value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
                <b-input type="password"
                    value="iwantmytreasure"
                    v-model="password"
                    password-reveal>
                </b-input>
            </b-field>

            <b-button v-on:click="login">Submit</b-button>
        </div>
    </div>
  
</template>

<script>
export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            console.log('logged in', this.username, this.password)
        }
    }
}
</script>

<style>

</style>