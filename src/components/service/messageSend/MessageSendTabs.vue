<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/sendInfo/msgSendNumber')]">
        <a href="/ac/sendInfo/msgSendNumber">문자 발신번호</a>
      </div>
      <div :class="['tab', isActive('/')]">
        <a href="/">RCS 발신번호</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">발신정보 > {{breadCrumbTitle}} {{ subTitle }}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  props: {
    subTitle: {
      type: String,
      default: ''
    }
  },
  name: "LimitSpamTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/sendInfo/msgSendNumber':
          return '문자 발신번호';
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