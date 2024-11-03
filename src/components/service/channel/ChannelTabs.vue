<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/channel/rcs')]">
        <a href="/ac/channel/rcs">RCS</a>
      </div>
      <div :class="['tab', isActive('/ac/channel/kakao')]">
        <a href="/ac/channel/kakao">카카오톡</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">템플릿 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "ChannelTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/ac/channel/rcs':
          return 'RCS';
        case '/ac/channel/kakao':
          return '카카오톡';
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