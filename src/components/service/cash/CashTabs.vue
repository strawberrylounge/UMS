<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/cash/cashMain')]">
        <a href="/ac/cash/cashMain">충전관리</a>
      </div>
      <div :class="['tab', isActive('/ac/cash/history')]">
        <a href="/ac/cash/history">이용금액</a>
      </div>
      <div :class="['tab', isActive('/ac/cash/serviceHist')]">
        <a href="/ac/cash/serviceHist">서비스 요금</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">정산 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "CashTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/cash/cashMain':
          return '충전관리';
        case '/ac/cash/history':
          return '이용금액';
        case '/ac/cash/serviceHist':
          return '서비스 요금';
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