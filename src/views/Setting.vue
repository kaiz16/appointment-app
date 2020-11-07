<template>
  <div>
    <p class="title">Setting events in here</p>
    <b-field label="Class Name">
      <b-input v-model="name" placeholder="Type Class Name"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input maxlength="200" type="textarea" placeholder="Your appointment form description"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>

<style>
</style>