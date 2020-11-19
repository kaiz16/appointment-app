<template>
  <div v-if="data">
    <sidebar :title="data.event.title"></sidebar>
    <div id="event-view">
      <router-view v-bind="{event: data.event}"/>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/organisms/Sidebar.vue'
import axios from 'axios'
import { tokenConfig } from '@/auth'
export default {
  components: {
    'sidebar': Sidebar,
  },
  data(){
    return {
      data: undefined
    }
  },
  async mounted(){
    if (this.$route.name != 'Bookings'){
      this.$router.push({
          name: 'Bookings'
      })
    }
    
    const { data, error } = await axios({ 
      url: 'events/' + this.$route.params.id, 
      headers: tokenConfig()
    })
    if (error){
      this.$buefy.toast.open('Error')
    }else{
        this.data = data
    }
  }
}
</script>
<style>
#event-view{
    position: relative;
    margin-left: 270px;
    padding: 20px;
}
</style>