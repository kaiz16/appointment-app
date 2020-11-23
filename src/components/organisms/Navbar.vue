<template>
  <b-navbar shadow>
    <template slot="end">
      <b-navbar-item v-if="isLoggedIn">
        <b-button
          type="is-primary"
          @click="logout"
          style="margin-right: 10px; margin-bottom: 10px;"
          icon-left="logout"
        >Logout</b-button>
      </b-navbar-item>
      <b-navbar-item v-else>
        <b-button type="is-primary" style="margin-right: 10px">Login</b-button>
        <b-button type="is-primary" style="margin-right: 10px">Sign Up</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { tokenConfig } from "@/auth";
export default {
  name: "navbar",
  computed: {
    isLoggedIn() {
      return !!tokenConfig()["auth-token"];
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("auth-token");
      window.location.reload();
    }
  }
};
</script>

<style>
</style>