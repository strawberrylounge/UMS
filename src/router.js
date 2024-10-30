import Vue from "vue";
import Router from "vue-router";

// 랜딩페이지
import MainHome from "./modules/main/views/Home.vue";
import Pricing from "./modules/main/views/Pricing.vue";

// 서비스
import ServiceLayout from "@/components/service/ServiceLayout.vue";
import acHome from "@/modules/acHome/views/Index.vue";
import ucMessageMultiSendList from "@/modules/ucMessageMultiSendList/views/Index.vue";
import ucMessageSendSms from "@/modules/ucMessageSendSms/views/Index.vue";
import ucMessageSmartSendMain from "@/modules/ucMessageSmartSendMain/views/Index.vue";
import ucRcsTemplateSend from "@/modules/ucRcsTemplateSend/views/Index.vue";
import ucMessageSendAlimTalk from "@/modules/ucMessageSendAlimTalk/views/Index.vue";
import ucMessageStatus from "@/modules/ucMessageStatus/views/Index.vue";
import ucWebSend from "@/modules/ucWebSend/views/Index.vue";
import ucMultiSendTemplateList from "@/modules/ucMultiSendTemplateList/views/Index.vue";
import ucSmsTemplateList from "@/modules/ucSmsTemplateList/views/Index.vue";
import ucSmsTemplateManage from "@/modules/ucSmsTemplateManage/views/Index.vue";
import ucRcsTemplateList from "@/modules/ucRcsTemplateList/views/Index.vue";
import ucRcsTemplateManage from "@/modules/ucRcsTemplateManage/views/Index.vue";

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
      path: "/public/pricing",
      component: Pricing,
    },
    {
      path: "/ac/home",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: acHome,
        },
      ],
    },
    {
      path: "/uc/message/multiSendList",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucMessageMultiSendList,
        },
      ],
    },
    {
      path: "/uc/message/sendSms",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucMessageSendSms,
        },
      ],
    },
    {
      path: "/uc/message/smartSendMain",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucMessageSmartSendMain,
        },
      ],
    },
    {
      path: "/uc/rcsTemplateSend",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucRcsTemplateSend,
        },
      ],
    },
    {
      path: "/uc/message/sendAlimTalk",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucMessageSendAlimTalk,
        },
      ],
    },
    {
      path: "/uc/messageStatus",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucMessageStatus,
        },
      ],
    },
    {
      path: "/uc/webSend",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucWebSend,
        },
      ],
    },
    {
      path: "/uc/template/multiSendTemplateList",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucMultiSendTemplateList,
        },
      ],
    },
    {
      path: "/uc/template/smsTemplateList",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucSmsTemplateList,
        },
      ],
    },
    {
      path: "/uc/template/smsTemplateManage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucSmsTemplateManage,
        },
      ],
    },
    {
      path: "/uc/template/rcsTemplateList",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucRcsTemplateList,
        },
      ],
    },
    {
      path: "/uc/template/rcsTemplateManage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucRcsTemplateManage,
        },
      ],
    },
  ],
});

export default router;
