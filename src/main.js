import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import VueTimepicker from "vue2-timepicker";

import App from "./App.vue";
import router from "./router";

import "@/assets/scss/landing/main.scss";

Vue.use(BootstrapVue);
Vue.component("VueTimepicker", VueTimepicker);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
