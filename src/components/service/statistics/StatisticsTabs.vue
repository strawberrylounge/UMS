<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/uc/statisticsUser/sendByDay')]">
        <a href="/uc/statisticsUser/sendByDay">실시간</a>
      </div>
      <div :class="['tab', isActive('/')]">
        <a href="/">일별</a>
      </div>
      <div :class="['tab', isActive('/m')]">
        <a href="/">월별</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">통계 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "StatisticsTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/uc/statisticsUser/sendByDay':
          return '실시간';
        case '/':
          return '일별';
        case '/':
          return '월별';
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