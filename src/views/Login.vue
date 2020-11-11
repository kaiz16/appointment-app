<template>
  <section>
     <b-field label="Email">
        <b-input v-model="email" value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
          <b-input type="password"
              v-model="password"
              password-reveal>
          </b-input>
      </b-field>
    
    <b-button @click="login">Submit</b-button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login(){
      const { data, error } = await axios({ 
            url: 'auth/login', 
            data: {
              email: this.email,
              password: this.password
            },
            method: 'POST'
        })
      if (error){
        this.$buefy.toast.open('Error')
      }else{
        localStorage.setItem('auth-token', data.data.token)
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<style>

</style>