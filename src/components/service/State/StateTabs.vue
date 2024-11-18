<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/use/state')]">
        <a href="/ac/use/state">이용상세</a>
      </div>
      <div :class="['tab', isActive('/')]">
        <a href="/">이용현황</a>
      </div>
      <div :class="['tab', isActive('/')]">
        <a href="/">실패현황</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">이용현황 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  props: {
  },
  name: "StateTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/use/state':
          return '이용상세';
        case '/':
          return '이용현황';
        case '/':
          return '실패현황';
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