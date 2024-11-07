<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/alarm/alarm')]">
        <a href="/ac/alarm/alarm">알람</a>
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
        case '/':
          return '';
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