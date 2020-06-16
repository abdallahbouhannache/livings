import Vue from "vue";
import Vuex from "vuex";
// import Auth from "./modules/Auth";
import Pixabay from "./modules/pixabay";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // Auth,
    Pixabay
  },
  strict: process.env.NODE_ENV === "development",
});