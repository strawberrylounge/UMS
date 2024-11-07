<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/alarm/alarm'), isActive('/ac/alarm/alarm/success')]">
        <a href="/ac/alarm/alarm">알람</a>
      </div>
      <div :class="['tab', isActive('/')]">
        <a href="/">수신그룹</a>
      </div>
      <div :class="['tab', isActive('/')]">
        <a href="/">수신자</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">알람 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "AlarmTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/alarm/alarm':
          return '알람';
        case '/ac/alarm/alarm/success':
          return '알람 > 메시지 발송 성공율 알람 등록';
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