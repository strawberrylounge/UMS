import Vue from "vue";
import Router from "vue-router";

import MainHome from "./modules/main/views/Home.vue";

// 서비스
import ServiceLayout from '@/components/service/ServiceLayout.vue';
import acHome from "@/modules/acHome/views/Index.vue";
import ucMessageMultiSendList from "@/modules/ucMessageMultiSendList/views/Index.vue";
import ucMessageSendSms from "@/modules/ucMessageSendSms/views/Index.vue";
import ucMessageSmartSendMain from "@/modules/ucMessageSmartSendMain/views/Index.vue";
import ucRcsTemplateSend from "@/modules/ucRcsTemplateSend/views/Index.vue";

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
    {
      path: "/ac/home",
      component: ServiceLayout,
      children: [
        {
          path: '',
          component: acHome,
        },
      ]
    },
    {
      path: "/uc/message/multiSendList",
      component: ServiceLayout,
      children: [
        {
          path: '',
          component: ucMessageMultiSendList,
        },
      ]
    },
    {
      path: "/uc/message/sendSms",
      component: ServiceLayout,
      children: [
        {
          path: '',
          component: ucMessageSendSms,
        },
      ]
    },
    {
      path: "/uc/message/smartSendMain",
      component: ServiceLayout,
      children: [
        {
          path: '',
          component: ucMessageSmartSendMain,
        },
      ]
    },
    {
      path: "/uc/rcsTemplateSend",
      component: ServiceLayout,
      children: [
        {
          path: '',
          component: ucRcsTemplateSend,
        },
      ]
    },
  ],
});

export default router;
