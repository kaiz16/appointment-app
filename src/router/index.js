import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Event from '../views/Event'
import Bookings from "../views/Bookings.vue";
import Setting from "../views/Setting.vue";
import Login from '../views/Login'
import Register from '../views/Register'
import { guard } from '../auth' 
Vue.use(VueRouter);


const routes = [
  {
    path: '*',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/login",
    name: "Login",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: guard
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
    beforeEnter: guard,
    children: [
      {
        path: 'bookings',
        name: 'Bookings',
        component: Bookings,
      },
      {
        path: 'setting',
        name: 'Setting',
        component: Setting,
        props: true
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;