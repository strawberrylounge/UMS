<template>
  <div class="statistics-month list-view">
    <StatisticsTabs />

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label>조회기간</label>
            <div class="d-flex ml-3 datepicker-group">
              <CustomDatepicker ref="startDatePicker" />
              <span>~</span>
              <CustomDatepicker ref="endDatePicker" />
            </div>
            <button type="button" class="btn btn-filter" :class="{active: dateFilter === '3month'}" @click="setDateRange('3month')">3개월</button>      
            <button type="button" class="btn btn-filter" :class="{active: dateFilter === '6month'}" @click="setDateRange('6month')">6개월</button>      
            <button type="button" class="btn btn-filter" :class="{active: dateFilter === '12month'}" @click="setDateRange('12month')">12개월</button>      
          </div>
        </div>
        <b-button variant="dark" class="btn-submit ml-auto">조회</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <SendByMonthSubTabs :tab="tab" :setTab="setTab" />
        <StatusTabs :tab="graphTab" :setTab="setGraphTab" />
        <AllChart v-if="graphTab === 'all'" />
        <FailChart v-else />
      </div>
      <!-- 리스트 영역 End -->
    </div>
  </div>
</template>

<script>
import StatisticsTabs from '@/components/service/statistics/StatisticsTabs.vue'
import SendByMonthSubTabs from '@/modules/sendByMonth/components/SendByMonthSubTabs.vue';
import AllChart from '@/modules/sendByMonth/components/AllChart.vue';
import FailChart from '@/modules/sendByMonth/components/FailChart.vue';
import StatusTabs from '@/modules/sendByMonth/components/StatusTabs.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'

export default {
  components: { StatisticsTabs, SendByMonthSubTabs, CustomDatepicker, StatusTabs, AllChart, FailChart },
  name: "SendByDay",
  data() {
    return {
      dateFilter: '',
      tab: '총계',
      graphTab: 'fail',
    }
  },
  methods: {
    setTab(value) {
      this.tab = value
    },
    setGraphTab(value) {
      this.graphTab = value
    },
    setDateRange(rangeType) {
      const endDate = new Date();
      let startDate = new Date();

      switch (rangeType) {
        case '1week':
          startDate.setDate(endDate.getDate() - 7);
          this.dateFilter = '1week'
          break;
        case '15days':
          startDate.setDate(endDate.getDate() - 15);
          this.dateFilter = '15days'
          break;
        case '1month':
          startDate.setMonth(endDate.getMonth() - 1);
          this.dateFilter = '1month'
          break;
        default:
          startDate = null;
          endDate = null;
      }

      this.$refs.startDatePicker.setDate(startDate);
      this.$refs.endDatePicker.setDate(endDate);
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.search-section {
  .form-control {
    max-width: 355px;
  }
}
</style>
