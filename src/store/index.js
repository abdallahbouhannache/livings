import Vue from "vue";
import Vuex from "vuex";

import Auth from "./modules/Auth";
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    Auth
  },
  strict: process.env.NODE_ENV === "development",
});
