<template>
  <b-sidebar position="fixed" :fullheight="true" :can-cancel="false" type="is-white" open>
    <b-menu>
      <b-menu-list>
        <b-menu-item tag="router-link" :to="{name: 'Dashboard'}" icon="menu" label="Dashboard"></b-menu-item>
      </b-menu-list>
      <section class="section">
        <b-menu-list :label="title">
          <b-menu-item
            tag="router-link"
            :active="$route.name == 'Bookings'"
            :to="{name: 'Bookings'}"
            icon="bookmark-multiple-outline"
            label="Bookings"
          ></b-menu-item>
          <b-menu-item
            tag="router-link"
            :to="{name: 'Setting'}"
            :active="$route.name == 'Setting'"
            icon="cog-outline"
            label="Setting"
          ></b-menu-item>
          <b-menu-item
            tag="router-link"
            :to="{name: 'ClientPortalResponse'}"
            :active="$route.name == 'ClientPortalResponse'"
            icon="cog-outline"
            label="ClientPortalResponse"
          ></b-menu-item>
        </b-menu-list>
      </section>
    </b-menu>
  </b-sidebar>
</template>

<script>
export default {
  props: ["title"]
};
</script>