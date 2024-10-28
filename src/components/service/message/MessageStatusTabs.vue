<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/uc/messageStatus')]">
        <a href="/uc/messageStatus">발송현황</a>
      </div>
      <div :class="['tab', isActive('/uc/webSend')]">
        <a href="/uc/webSend">발송내역</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">조회 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "MessageStatusTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/uc/messageStatus':
          return '발송현황';
        case '/uc/webSend':
          return '발송내역';
        default:
          return ''
      }
    },
  },
  methods: {
    isActive(link) {
      return window.location.pathname === link ? 'active' : '';
    }
  }
}
</script>