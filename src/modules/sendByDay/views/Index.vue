<template>
  <div class="statistics-day list-view">
    <StatisticsTabs />

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="card search-section mb-1">
        <label class="mr-4">웹 발송여부</label>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="radio1">
            <b-form-radio name="type" value="전체">전체</b-form-radio>
            <b-form-radio name="type" value="예">예</b-form-radio>
            <b-form-radio name="type" value="아니요">아니요</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <i class="vertical-divider"></i>
        <label class="mr-4">전환발송</label>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="radio2">
            <b-form-radio name="type" value="전체2">전체</b-form-radio>
            <b-form-radio name="type" value="예2">예</b-form-radio>
            <b-form-radio name="type" value="아니요2">아니요</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-button variant="dark" class="btn-submit ml-auto">조회</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <StatisticsSubTabs :tab="tab" :setTab="setTab" />
        <SmsTable v-if="tab === 'SMS'" />
        <LmsTable v-if="tab === 'LMS'" />
        <MmsTable v-if="tab === 'MMS'" />
        <RcsTable v-if="tab === 'RCS'" />
        <TalkTable v-if="tab === '알림톡'" />
        
      </div>
      <!-- 리스트 영역 End -->
    </div>
  </div>
</template>

<script>
import StatisticsTabs from '@/components/service/statistics/StatisticsTabs.vue'
import StatisticsSubTabs from '@/modules/sendByDay/components/StatisticsSubTabs.vue';
import SmsTable from '@/modules/sendByDay/components/SmsTable.vue';
import LmsTable from '@/modules/sendByDay/components/LmsTable.vue';
import MmsTable from '@/modules/sendByDay/components/MmsTable.vue';
import RcsTable from '@/modules/sendByDay/components/RcsTable.vue';
import TalkTable from '@/modules/sendByDay/components/TalkTable.vue';

export default {
  components: { StatisticsTabs, StatisticsSubTabs, SmsTable, LmsTable, MmsTable, RcsTable, TalkTable, },
  name: "SendByDay",
  data() {
    return {
      radio1: '전체',
      radio2: '전체2',
      tab: 'SMS'
    }
  },
  methods: {
    setTab(value) {
      this.tab = value
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

</style>
