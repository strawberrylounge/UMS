import Vue from "vue";
import Router from "vue-router";

import mainRoutes from "./modules/main/router";
import Test from "./modules/main/views/bm-user-manage.vue";
// import acHomeRoutes from "./modules/acHome/router";
// import userRoutes from "./modules/user/router";
// import templateRoutes from "./modules/template/router";

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
      component: Test,
    },
  ],
});

export default router;
