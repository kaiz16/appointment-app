<template>
  <div class="card">
      <div class="card-content">
          <section>
            <b-field label="Title">
                <b-input v-model="title" value="johnsilver" maxlength="30"></b-input>
            </b-field>
            
            <b-button @click="submit">Submit</b-button>
        </section>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: ''
        }
    },
    methods: {
        submit(){
            this.$emit('close', this.title)
        }
    }
}
</script>

<style>

</style>