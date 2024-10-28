<template>
  <div class="ac-home">
    <div class="d-flex slide-wrap w-100">
      <NoticeSlide :title="notice.title" :data="notice.data" />
      <QnaSlide :title="qna.title" :data="qna.data" />
    </div>
    <div class="d-flex staus-wrap">
      <StatusCard v-for="status in statusList" :key="status.id" :item="status" />
    </div>
    <MonthlyChart />
    <div class="d-flex chart-wrap">
      <div class="wrap">
        <PercentChart />
      </div>
      <div class="wrap">
        <TodayChart />
      </div>
    </div>
  </div>
</template>
<script>
import QnaSlide from '@/modules/acHome/components/QnaSlide.vue';
import StatusCard from '@/modules/acHome/components/StatusCard.vue';
import MonthlyChart from '@/modules/acHome/components/MonthlyChart.vue';
import PercentChart from '@/modules/acHome/components/PercentChart.vue';
import TodayChart from '@/modules/acHome/components/TodayChart.vue';
import '@/assets/scss/service/home.scss';
import NoticeSlide from '@/modules/acHome/components/NoticeSlide.vue';

export default {
  components: { QnaSlide, StatusCard, MonthlyChart, TodayChart, PercentChart, NoticeSlide },
  name: "acHome",
  data() {
    return {
      notice: {
        title: '공지사항',
        data: [
          {
            title: '1111 테스트. 공지사항 내용이 노출됩니다. 테스트. 공지사항 내용이 노출됩니다.테스트. 공지사항 내용이 노출됩니다. 테스트. 공지사항 내용이 노출됩니다.',
            date: '20214.10.12'
          },
          {
            title: '22222222 테스트. 공지사항 내용이 노출됩니다. 테스트. 공지사항 내용이 노출됩니다.테스트. 공지사항 내용이 노출됩니다. 테스트. 공지사항 내용이 노출됩니다.',
            date: '20214.10.24'
          },
          {
            title: '33 테스트. 공지사항 내용이 노출됩니다. 테스트. 공지사항 내용이 노출됩니다.테스트. 공지사항 내용이 노출됩니다. 테스트. 공지사항 내용이 노출됩니다.',
            date: '20214.10.30'
          }
        ]
      },
      qna: {
        title: '1:1 문의',
        data: [
          {
            title: '템플릿은 어떻게 이용하나요?',
            status: '(미답변)',
            description: '이렇게 사용하시면 됩니다.이렇게 사용하시면 됩니다.이렇게 사용하시면 됩니다.이렇게 사용하시면 됩니다.이렇게 사용하시면 됩니다.',
          },
          {
            title: '알림 발송 내역은 어디서 확인하나요??',
            status: '(답변완료)',
            description: '여기서 확인하시면 됩니다.',
          },
        ]
      },
      statusList: [
        { id: 0, type: 'request', title: '발송요청', value: '2,000' },
        { id: 1, type: 'request', title: '발송중', value: '600' },
        { id: 2, type: 'waiting', title: '발송대기', value: '1,000' },
        { id: 3, type: 'success', title: '발송성공', value: '600' },
        { id: 4, type: 'failure', title: '발송실패', value: '0' }
      ]
    }
  }
};
</script>
<style scoped lang="scss">
  .ac-home {
    padding: 20px 40px 47px 40px;
  }
  .slide-wrap > div {
    width: calc(50% - 13px);
    &:last-child {
      margin-left: 26px;
    }
  }
  .staus-wrap {
    margin: 40px -12.5px 32px;
  }
  .chart-wrap {
    margin: 40px -13px 0;
    & > div {
      flex: 0 0 50%;
      width: 50%;
      padding: 0 13px;
    }
  }
</style>
