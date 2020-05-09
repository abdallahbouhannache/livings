import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // loads from src/router/index.js

Vue.config.productionTip = false;

require("../src/assets/bulma-0.8.2/css/bulma.min.css");
require("../src/assets/fontawesome-free-5.13.0-web/css/all.min.css");
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
