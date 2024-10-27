<template>
  <div class="tabs-wrap">
    <div class="service-tabs">
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
export default {
  name: "MessageTabs",
  methods: {
    isActive(link) {
      return window.location.pathname === link ? 'active' : '';
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-wrap {
  display: flex;
  align-items: center;
  padding: 28px 40px 0;
  border-bottom: 1px solid var(--border-color);
}
.breadcrumb {
  margin: 0 0 0 auto;
  padding: 0;
  white-space: nowrap;
}
.service-tabs {
  display: flex;
  width: 100%;
  padding-bottom: 16px;
  &:has(.btn) {
    padding-bottom: 0;
  }
  .tab {
    padding-left: 40px;
    &:first-child {
      padding: 0;
    }
    &.active a,
    &.active button {
      border-bottom: 4px solid var(--primary);
      color: var(--gray900);
    }
    a,
    button {
      padding: 0;
      padding-bottom: 16px;
      border: none;
      border-radius: 0;
      background-color: transparent;
      font-size: 20px;
      font-weight: 700;
      line-height: 140%; /* 28px */
      letter-spacing: -0.4px;
      color: var(--gray500);
    }
  }
}
</style>