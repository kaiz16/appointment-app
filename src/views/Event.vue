<template>
  <div>
    <sidebar></sidebar>
    <div id="event-view">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/organisms/Sidebar.vue";

export default {
  components: {
    sidebar: Sidebar
  },
  mounted() {
    this.$router.push({
      name: "Bookings"
    });
  }
};
</script>
<style>
#event-view {
  position: relative;
  left: 270px;
  padding: 20px;
}
</style>