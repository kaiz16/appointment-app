import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.timeout = 30000;

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
