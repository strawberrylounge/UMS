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
import Channel from "./modules/main/views/Channel.vue";
import Customer from "./modules/main/views/Customer.vue";
import NoticeDetail from "./modules/main/views/customer/Notice/NoticeDetail.vue";
import ucMessageStatus from "@/modules/ucMessageStatus/views/Index.vue";
import ucWebSend from "@/modules/ucWebSend/views/Index.vue";
import ucMultiSendTemplateList from "@/modules/ucMultiSendTemplateList/views/Index.vue";
import ucSmsTemplateList from "@/modules/ucSmsTemplateList/views/Index.vue";
import ucSmsTemplateManage from "@/modules/ucSmsTemplateManage/views/Index.vue";
import ucRcsTemplateList from "@/modules/ucRcsTemplateList/views/Index.vue";
import ucRcsTemplateManage from "@/modules/ucRcsTemplateManage/views/Index.vue";
import ucRcsTemplateManageEdit from "@/modules/ucRcsTemplateManageEdit/views/Index.vue";
import ucAlimTalkTemplateList from "@/modules/ucAlimTalkTemplateList/views/Index.vue";
import ucAlimTalkTemplateManage from "@/modules/ucAlimTalkTemplateManage/views/Index.vue";
import ucTemplateMultiSendTemplateManage from "@/modules/ucTemplateMultiSendTemplateManage/views/Index.vue";
import userManage from "@/modules/userManage/views/Index.vue";
import channelRcs from "@/modules/channelRcs/views/Index.vue";
import channelKaKao from "@/modules/channelKaKao/views/Index.vue";
import apiKey from "@/modules/apiKey/views/Index.vue";
import addressManage from "@/modules/addressManage/views/Index.vue";
import addressReceiver from "@/modules/addressReceiver/views/Index.vue";
import alarm from "@/modules/alarm/views/Index.vue";
import alarmSucess from "@/modules/alarmSuccess/views/Index.vue";
import alarmInflow from "@/modules/alarmInflow/views/Index.vue";
import alarmIp from "@/modules/alarmIp/views/Index.vue";
import alarmPrepayment from "@/modules/alarmPrepayment/views/Index.vue";
import alarmLimits from "@/modules/alarmLimits/views/Index.vue";
import alarmAverage from "@/modules/alarmAverage/views/Index.vue";
import alarmReceptGroup from "@/modules/alarmReceptGroup/views/Index.vue";
import alarmRecipient from "@/modules/alarmRecipient/views/Index.vue";
import sendLimitSpam from "@/modules/sendLimitSpam/views/Index.vue";
import sendLimitAmount from "@/modules/sendLimitAmount/views/Index.vue";
import rejctNum from "@/modules/rejctNum/views/Index.vue";
import cashMain from "@/modules/cashMain/views/Index.vue";
import cashHistory from "@/modules/cashHistory/views/Index.vue";
import cashServiceHist from "@/modules/cashServiceHist/views/Index.vue";
import realTime from "@/modules/realTime/views/Index.vue";
import sendByDay from "@/modules/sendByDay/views/Index.vue";
import sendByMonth from "@/modules/sendByMonth/views/Index.vue";
import msgSendNumber from "@/modules/msgSendNumber/views/Index.vue";
import rcsSendNumber from "@/modules/rcsSendNumber/views/Index.vue";
import State from "@/modules/State/views/Index.vue";
import ConsoleQnA from "@/modules/consoleQnA/views/Index.vue";

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
      path: "/public/channel",
      component: Channel,
    },
    {
      path: "/public/customer",
      component: Customer,
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
    {
      path: "/uc/template/rcsTemplateManage/edit",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucRcsTemplateManageEdit,
        },
      ],
    },
    {
      path: "/uc/template/alimTalkTemplateList",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucAlimTalkTemplateList,
        },
      ],
    },
    {
      path: "/uc/template/alimTalkTemplateManage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucAlimTalkTemplateManage,
        },
      ],
    },
    {
      path: "/uc/template/multiSendTemplateManage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ucTemplateMultiSendTemplateManage,
        },
      ],
    },
    {
      path: "/ac/user/manage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: userManage,
        },
      ],
    },
    {
      path: "/ac/channel/rcs",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: channelRcs,
        },
      ],
    },
    {
      path: "/ac/channel/kakao",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: channelKaKao,
        },
      ],
    },
    {
      path: "/ac/apikey",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: apiKey,
        },
      ],
    },
    {
      path: "/ac/address/manage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: addressManage,
        },
      ],
    },
    {
      path: "/ac/address/receiver/manage",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: addressReceiver,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarm,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm/success",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmSucess,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm/inflow",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmInflow,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm/ip",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmIp,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm/prepayment",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmPrepayment,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm/limits",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmLimits,
        },
      ],
    },
    {
      path: "/ac/alarm/alarm/average",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmAverage,
        },
      ],
    },
    {
      path: "/ac/alarm/receptGroup",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmReceptGroup,
        },
      ],
    },
    {
      path: "/ac/alarm/recipient",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: alarmRecipient,
        },
      ],
    },
    {
      path: "/ac/sendLimit/spam",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: sendLimitSpam,
        },
      ],
    },
    {
      path: "/ac/sendLimit/sendLimitAmount",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: sendLimitAmount,
        },
      ],
    },
    {
      path: "/ac/sendLimit/rejct080Num",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: rejctNum,
        },
      ],
    },
    {
      path: "/ac/cash/cashMain",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: cashMain,
        },
      ],
    },
    {
      path: "/ac/cash/history",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: cashHistory,
        },
      ],
    },
    {
      path: "/ac/cash/serviceHist",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: cashServiceHist,
        },
      ],
    },
    {
      path: "/uc/statisticsUser/realTime",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: realTime,
        },
      ],
    },
    {
      path: "/uc/statisticsUser/sendByDay",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: sendByDay,
        },
      ],
    },
    {
      path: "/uc/statisticsUser/sendByMonth",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: sendByMonth,
        },
      ],
    },
    {
      path: "/ac/sendInfo/msgSendNumber",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: msgSendNumber,
        },
      ],
    },
    {
      path: "/ac/sendInfo/rcsSendNumber",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: rcsSendNumber,
        },
      ],
    },
    {
      path: "/ac/use/state",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: State,
        },
      ],
    },
    {
      path: "/ac/consoleQnA",
      component: ServiceLayout,
      children: [
        {
          path: "",
          component: ConsoleQnA,
        },
      ],
    }
  ],
});

export default router;
