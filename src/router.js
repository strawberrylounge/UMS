import Vue from "vue";
import Router from "vue-router";

import MainHome from "./modules/main/views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/public",
    },
    {
      path: "/public",
      component: MainHome,
    },
  ],
});

export default router;
