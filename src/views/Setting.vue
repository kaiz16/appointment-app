<template>
  <div class="main">
    <h1 class="title">Setting events in here</h1>

    <div class="column is-7">
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
    </div>

    <b-field label="Available Datetime">
     
        <div class="column is-one-third">
            <b-datetimepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
                :locale="locale"
                editable>
            </b-datetimepicker>
        </div>
  
    </b-field>

    

    <b-field label="To">
     
        <div class="column is-one-third">
            <b-datetimepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
                :locale="locale"
                editable>
            </b-datetimepicker>
        </div>
  
    </b-field>

    <div class="column is-2">
      <b-field label="Duration (Minutes)">
        <b-input
          v-model="duration"
          placeholder="Length of Session"
        ></b-input>
      </b-field>
    </div>

    <br />
    <div class="field">
      <b-switch :value="lightMode" type="is-success">
        Require Marketing Agreement
      </b-switch>
    </div>

    <div class="column is-7">
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
      <b-field label="Location">
        <b-select placeholder="Select session location" expanded>
          <option value="flint">In-Person Meeting</option>
          <option value="silver">Zoom</option>
        </b-select> </b-field
      ><br />
      <div class="buttons">
        <b-button type="is-link">Save</b-button>
        <b-button>Cancel</b-button><br />
      </div>
      
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

<style>
  .main {
    padding-left: 10%;
  }

</style>