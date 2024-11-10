<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/sendLimit/spam')]">
        <a href="/ac/sendLimit/spam">스팸문구</a>
      </div>
      <div :class="['tab', isActive('/ac/sendLimit/sendLimitAmount')]">
        <a href="/ac/sendLimit/sendLimitAmount">발송한도금액</a>
      </div>
      <div :class="['tab', isActive('/ac/sendLimit/rejct080Num')]">
        <a href="/ac/sendLimit/rejct080Num">수신거부관리</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">발신제한 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "LimitSpamTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/sendLimit/spam':
          return '스팸문구';
        case '/ac/sendLimit/sendLimitAmount':
          return '발송한도금액';
        case '/ac/sendLimit/rejct080Num':
          return '수신거부관리';
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