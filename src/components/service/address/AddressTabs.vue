<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/address/manage')]">
        <a href="/ac/address/manage">주소록</a>
      </div>
      <div :class="['tab', isActive('/ac/address/receiver/manage')]">
        <a href="/ac/address/receiver/manage">수신자</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">주소록 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "AddressTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/address/manage':
          return '주소록';
        case '/ac/address/receiver/manage':
          return '수신자';
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