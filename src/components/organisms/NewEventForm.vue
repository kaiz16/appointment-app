<template>
  <div class="card">
    <div class="card-content">
      <section>
        <b-field label="Title">
          <b-input v-model="title" placeholder="Your Event Title" maxlength="30" required></b-input>
        </b-field>

        <b-button @click="submit">Submit</b-button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    submit() {
      if (this.title == "" || this.title == null) {
        this.$buefy.toast.open({
          message: "<b>Title Can't Be Empty</b>",
          type: "is-danger",
          position: "is-bottom"
        });
      } else {
        this.$emit("close", this.title);
      }
    }
  }
};
</script>

<style>
</style>