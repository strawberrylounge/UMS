<template>
  <header id="header" class="d-flex align-items-end justify-content-between header">
    <div class="d-flex align-items-end">
      <h2 class="m-0 heading1">{{ headerTitle }}</h2>
      <p v-if="showMsgDesc" class="msg-desc f-body4">야간 메시지 발송 제한으로 21:00 ~ 다음날 08:00까지 메시지를 발송할 수 없습니다.
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip">
          <IconQuestion isRed />
        </b-button>
      </p>
      <p v-else-if="showSmartMsgDesc" class="msg-desc f-body4">(친구톡 광고 메시지는 20시~8시 발송 시 실패 처리 됩니다.)야간 메시지 발송 제한으로 21:00 ~ 다음날 08:00 까지 메시지 발송을 할 수 없습니다.
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip">
          <IconQuestion isRed />
        </b-button>
      </p>
    </div>
    <div class="d-flex">
      <b-button variant="outline-primary" size="lg">이용 가이드</b-button>
      <b-dropdown id="dropdown-dropright" right text="Drop-Right" variant="primary" class="cash-dropdown" toggle-class="btn btn-svg btn-svg-left ml-3 btn-primary btn-lg">
        <template #button-content>
          <IconCoin />
          <span>캐시현황</span>
        </template>
        <b-dropdown-text>
          <span>남은 충전캐시</span>
          <span>30,000P</span>
        </b-dropdown-text>
        <b-dropdown-text>
          <span>남은 이벤트 캐시</span>
          <span>100P</span>
        </b-dropdown-text>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-text>
          <span>남은 캐시</span>
          <span class="text-primary">100P</span>
        </b-dropdown-text>
      </b-dropdown>
    </div>
  </header>
</template>

<script>
import IconCoin from '@/components/service/icons/IconCoin.vue'
import IconQuestion from '@/components/service/icons/IconQuestion.vue'
import '@/assets/scss/service/header.scss';

export default {
  components: { IconCoin, IconQuestion, },
  name: 'SerivceHeader',
  computed: {
    headerTitle() {
      switch (this.$route.path) {
        case '/ac/home':
          return '현황판';
        case '/uc/message/multiSendList':
          return '원스텝메시지';
        case '/uc/message/sendSms':
          return '문자';
        case '/uc/message/smartSendMain':
          return '통합 발송';
        case '/uc/rcsTemplateSend':
          return 'RCS';
        case '/uc/message/sendAlimTalk':
          return '알림톡';
        case '/uc/messageStatus':
          return '발송현황';
        case '/uc/webSend':
          return '발송내역';
        case '/uc/template/multiSendTemplateList':
        case '/uc/template/smsTemplateList':
        case '/uc/template/smsTemplateManage':
        case '/uc/template/rcsTemplateList':
        case '/uc/template/rcsTemplateManage':
        case '/uc/template/rcsTemplateManage/edit':
        case '/uc/template/alimTalkTemplateList':
        case '/uc/template/alimTalkTemplateManage':
        case '/uc/template/multiSendTemplateManage':
          return '템플릿'
        case '/ac/user/manage':
          return '사용자목록'
        case '/ac/channel/rcs':
        case '/ac/channel/kakao':
          return '채널 관리'
        case '/ac/apikey':
          return 'API KEY'
        case '/ac/address/manage':
        case '/ac/address/receiver/manage':
          return '주소록'
        case '/ac/alarm/alarm':
          return '알람'
        case '/ac/alarm/alarm/success':
          return '메시지 발송 성공율 알람'
        case '/ac/alarm/alarm/inflow':
          return '유입 알람'
        case '/ac/alarm/alarm/ip':
          return 'IP 체크 알람'
        case '/ac/alarm/alarm/prepayment':
          return '선불 금액 알람'
        case '/ac/alarm/alarm/limits':
          return '발송 제한 금액 알람'
        case '/ac/alarm/alarm/average':
          return '전달 일 평균 건수 초과 알람'
        case '/ac/alarm/receptGroup':
          return '수신그룹'
        case '/ac/alarm/recipient':
          return '수신자'
        case '/ac/sendLimit/spam':
        case '/ac/sendLimit/sendLimitAmount':
        case '/ac/sendLimit/rejct080Num':
          return '발신제한'
        case '/ac/cash/cashMain':
          return '충전관리'
        case '/ac/cash/history':
          return '이용금액'
        case '/ac/cash/serviceHist':
          return '서비스 요금'
        case '/uc/statisticsUser/sendByDay':
        case '/uc/statisticsUser/sendByMonth':
        case '/uc/statisticsUser/realTime':
          return '통계'
        case '/ac/sendInfo/msgSendNumber':
        case '/ac/sendInfo/rcsSendNumber':
          return '발신정보'
        case '/ac/use/state':
          return '이용현황'
        case '/ac/consoleQnA':
          return '나의 문의내역'
        default:
          return ''
      }
    },
    showMsgDesc() {
      return this.$route.path === '/uc/message/multiSendList';
    },
    showSmartMsgDesc() {
      return this.$route.path === '/uc/message/smartSendMain';
    }
  },
  methods: {
    msgTooltip() {
      return '<ul><li>프로젝트 기본정보에서 세팅 할 수 있습니다.</li></ul>'
    },
  }
};
</script>

<style scoped lang="scss">
.header {
  padding: 20px 40px 19px 40px;
  border-bottom: 1px solid var(--gray300);
  h2 {
    color: var(--gray700);
  }
  .msg-desc {
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;
    color: #FF6057;
    .btn {
      margin-left: 8px;
      padding: 0;
      background-color: transparent;
      border: none;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
