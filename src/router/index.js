import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Event from '../views/Event.vue';
import Bookings from "../views/Bookings.vue";
import CreateEvent from "../views/CreateEvent.vue";
import Setting from "../views/Setting.vue";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import { guard } from '../auth' 
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: {
      name: "Dashboard",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
    beforeEnter: guard,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "bookings",
        name: "Bookings",
        component: Bookings,
      },
      {
        path: "setting",
        name: "Setting",
        component: Setting,
      },
    ],
  },
  {
    path: "/bookings",
    name: "Bookings",
    component: Bookings,
    beforeEnter: guard
  },
  {
    path: "/newbooking",
    name: "CreateEvent",
    component: CreateEvent,
    beforeEnter: guard
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
    beforeEnter: guard
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
