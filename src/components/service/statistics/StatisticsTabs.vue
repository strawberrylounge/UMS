<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/uc/statisticsUser/realTime')]">
        <a href="/uc/statisticsUser/realTime">실시간</a>
      </div>
      <div :class="['tab', isActive('/uc/statisticsUser/sendByDay')]">
        <a href="/uc/statisticsUser/sendByDay">일별</a>
      </div>
      <div :class="['tab', isActive('/uc/statisticsUser/sendByMonth')]">
        <a href="/uc/statisticsUser/sendByMonth">월별</a>
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
        case '/uc/statisticsUser/realTime':
          return '실시간';
        case '/uc/statisticsUser/sendByDay':
          return '일별';
        case '/uc/statisticsUser/sendByMonth':
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