/*eslint-disable*/
import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Event from "../views/Event";
import Bookings from "../views/Bookings.vue";
import Setting from "../views/Setting.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import ClientPortalCalendar from "../views/ClientPortalCalendar";
import ClientPortalConfirmation from "../views/ClientPortalConfirmation";
import { guard } from "../auth";
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
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: guard,
  },
  {
    path: "/event/:id",
    name: "Event",
    component: Event,
    children: [
      {
        path: '',
        name: 'ClientPortal',
        component: ClientPortalCalendar
      },
      {
        path: 'confirm',
        name: 'ClientConfirmation',
        component: ClientPortalConfirmation,
        props: true,
      },
      {
        path: "bookings",
        name: "Bookings",
        component: Bookings,
        beforeEnter: guard,
      },
      {
        path: "setting",
        name: "Setting",
        component: Setting,
        beforeEnter: guard,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
