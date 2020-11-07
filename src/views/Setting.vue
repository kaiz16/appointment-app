<template>
  <div>
    <p class="title">Setting events in here</p>
    <b-field label="Class Name">
      <b-input v-model="name" placeholder="Type Class Name"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input
        v-model="description"
        maxlength="200"
        type="textarea"
        placeholder="Your appointment form description"
      ></b-input>
    </b-field>
    <b-field label="Your Appointment Form URL">
      <b-input v-model="url" placeholder="Change Your Custom URL"></b-input>
    </b-field>
    <b-field label="Custom URL">
      <b-input
        v-model="customUrl"
        placeholder="Change Your Custom URL"
      ></b-input>
    </b-field>
    <b-field label="Available Hours">
      <div class="column is-3">
        <b-datepicker placeholder="Click to select..." v-model="dates" multiple>
        </b-datepicker>
      </div>
      <div class="column is-3">
        <b-timepicker
          placeholder="Click to select..."
          :min-time="minTime"
          :max-time="maxTime"
        >
        </b-timepicker>
      </div>
      <div class="column is-3">
        <b-timepicker
          placeholder="Click to select..."
          :min-time="minTime"
          :max-time="maxTime"
        >
        </b-timepicker>
      </div>
    </b-field>
    <div class="column is-6">
      <b-field label="Duration (Minutes)">
        <b-input
          v-model="duration"
          placeholder="How Long Is The Session"
        ></b-input>
      </b-field>
    </div>
    <br />
    <div class="field">
      <b-switch :value="lightMode" type="is-success">
        Require Marketing Agreement
      </b-switch>
    </div>
    <div class="column is-6">
      <b-field label="Short Text">
        <b-input v-model="shorttext" placeholder="I Agree to ......"></b-input>
      </b-field>
      <b-field label="Full Text">
        <b-input
          v-model="fulltext"
          maxlength="200"
          type="textarea"
          placeholder="Full Text Of Term And Conditions..."
        ></b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      url: "https://taskeo.co/a/my-class",
      customUrl: "my-class",
      dates: [],
      duration: "",
      lightMode: true,
      shorttext: "",
      fulltext: "",
    };
  },
};
</script>

<style></style>
