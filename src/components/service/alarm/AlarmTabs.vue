<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/ac/alarm/alarm'), isActive('/ac/alarm/alarm/success'), isActive('/ac/alarm/alarm/inflow'), isActive('/ac/alarm/alarm/ip'), isActive('/ac/alarm/alarm/prepayment'), isActive('/ac/alarm/alarm/limits'), isActive('/ac/alarm/alarm/average')]">
        <a href="/ac/alarm/alarm">알람</a>
      </div>
      <div :class="['tab', isActive('/ac/alarm/receptGroup')]">
        <a href="/ac/alarm/receptGroup">수신그룹</a>
      </div>
      <div :class="['tab', isActive('/ac/alarm/recipient')]">
        <a href="/ac/alarm/recipient">수신자</a>
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
        case '/ac/alarm/alarm/inflow':
          return '알람 > 유입 알람 등록';
        case '/ac/alarm/alarm/ip':
          return '알람 > IP 체크 알람 등록';
        case '/ac/alarm/alarm/prepayment':
          return '알람 > 선불 금액 알람 등록';
        case '/ac/alarm/alarm/limits':
          return '알람 > 발송 제한 금액 알람 등록';
        case '/ac/alarm/alarm/average':
          return '알람 > 전달 일 평균 건수 초과 알람 등록';
        case '/ac/alarm/receptGroup':
          return '알람 > 수신그룹';
        case '/ac/alarm/recipient':
          return '알람 > 수신자';
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