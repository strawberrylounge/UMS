<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/uc/message/multiSendList')]">
        <a href="/uc/message/multiSendList">원스텝메시지</a>
      </div>
      <div :class="['tab', isActive('/uc/message/sendSms')]">
        <a href="/uc/message/sendSms">문자</a>
      </div>
      <div :class="['tab', isActive('/uc/rcsTemplateSend')]">
        <a href="/uc/rcsTemplateSend">RCS</a>
      </div>
      <div :class="['tab', isActive('/uc/message/sendAlimTalk')]">
        <a href="/uc/message/sendAlimTalk">카카오톡</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">발송 > 원스텝메시지</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "MessageTabs",
  methods: {
    isActive(link) {
      return window.location.pathname === link ? 'active' : '';
    }
  }
}
</script>