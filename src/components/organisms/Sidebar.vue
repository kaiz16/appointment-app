<template>
  <b-sidebar
    position="fixed"
    :fullheight="true"
    :mobile="false"
    :can-cancel="false"
    type="is-primary"
    open
    >
        <b-menu>
            <b-menu-list>
                <b-menu-item 
                    tag="router-link"
                    to="/newbooking"
                    icon="calendar-month" 
                    label="Create Events"></b-menu-item>
                <b-menu-item 
                    tag="router-link"
                    to="/bookings"
                    icon="bookmark-multiple-outline" 
                    label="Bookings"></b-menu-item>
            </b-menu-list>
        </b-menu>
    </b-sidebar>
</template>

<script>
export default {

}
</script>

<style>

</style>