import Vue from "vue";
import VueRouter from "vue-router";

import {
  Home,
  About,
  Electronics,
  Watches,
  notFound,
  Jewellery,
  Health,
  Register,
  Login,
} from "../views/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/404",
    name: "404",
    component: notFound,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  { path: "*", redirect: { name: "404" } },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/health",
    name: "health",
    component: Health,
  },
  {
    path: "/electronics",
    name: "electronics",
    component: Electronics,
  },
  {
    path: "/watches",
    name: "watches",
    component: Watches,
  },
  {
    path: "/jewellery",
    name: "jewellery",
    component: Jewellery,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
