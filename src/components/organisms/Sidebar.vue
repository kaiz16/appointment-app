<template>
  <b-sidebar
    position="fixed"
    :fullheight="true"
    :mobile="false"
    :can-cancel="false"
    type="is-white"
    open
  >
    <b-menu>
      <b-menu-list>
        <b-menu-item
          tag="router-link"
          :active="$route.name == 'Bookings'"
          :to="{name: 'Bookings'}"
          cus
          icon="bookmark-multiple-outline"
          label="Bookings"
        ></b-menu-item>
        <b-menu-item 
          tag="router-link" 
          :to="{name: 'Setting'}"
          :active="$route.name == 'Setting'"
          icon="cog-outline" 
          label="Setting"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </b-sidebar>
</template>

<script>
export default {};
</script>