import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import notFound from "../views/notFound.vue";

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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
