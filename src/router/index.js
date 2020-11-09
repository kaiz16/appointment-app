import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bookings from "../views/Bookings.vue";
import CreateEvent from "../views/CreateEvent.vue";
import Setting from "../views/Setting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bookings",
    name: "Bookings",
    component: Bookings,
  },
  {
    path: "/newbooking",
    name: "CreateEvent",
    component: CreateEvent,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
