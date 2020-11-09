<template>
  <div>
    <sidebar></sidebar>
    <div id="content-view">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Sidebar from './components/organisms/Sidebar.vue'

export default {
  components: {
    'sidebar': Sidebar,
  }
}
</script>
<style>
html, body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100vw;
}

#content-view{
  position: relative;
  left: 270px;
}
</style>
