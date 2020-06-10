import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // loads the router component
import store from "./store"; // loads the store management vuex utility

Vue.config.productionTip = false;
Vue.config.devtools = true

require("../src/assets/bulma-0.8.2/css/bulma.min.css");
require("../src/assets/fontawesome-free-5.13.0-web/css/all.min.css");
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
