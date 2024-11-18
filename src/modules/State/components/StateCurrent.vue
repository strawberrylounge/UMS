<template>
  <div class="tab-contents">
    <!-- 검색영역 Start -->
    <div class="search-section card border-0">
      <div class="search-section-forms">
        <div class="d-flex align-items-center flex-wrap mb-4">
          <label>조회기간</label>
          <div class="d-flex ml-3 datepicker-group">
            <CustomDatepicker ref="startDatePicker" />
            <span>~</span>
            <CustomDatepicker ref="endDatePicker" />
          </div>
          <button type="button" class="btn btn-filter" :class="{active: dateFilter === '1month'}" @click="setDateRange('1month')">1개월</button>
          <button type="button" class="btn btn-filter" :class="{active: dateFilter === '3month'}" @click="setDateRange('3month')">3개월</button>
          <button type="button" class="btn btn-filter" :class="{active: dateFilter === '6month'}" @click="setDateRange('6month')">6개월</button> 
        </div>

        <!-- Hideable section -->
        <transition name="slide-fade">
          <div v-show="!hideMenu" class="check-menu align-items-center mb-4">
            <label class="mr-3">채널</label>
            <b-form-checkbox>전체</b-form-checkbox>
            <b-form-checkbox>문자</b-form-checkbox>
            <b-form-checkbox>RCS</b-form-checkbox>
            <b-form-checkbox>카카오톡</b-form-checkbox>

            <i class="vertical-divider"></i>

            <label>채널</label>
            <b-form-radio name="type" v-model="radio" value="전체" class="ml-4">전체</b-form-radio>
          </div>
        </transition>

        <button type="button" class="btn btn-search-condition" @click="toggleMenu">
          <span>{{ hideMenu ? '검색 조건 펼치기' : '검색 조건 접기' }}</span>
          <IconArrowDown :class="{ rotated: hideMenu }" />
        </button>
      </div>
      <b-button variant="dark" class="btn-submit ml-auto">조회</b-button>
    </div>
    <!-- 검색영역 End -->

    <div class="mt-1 pt-3">
      <div class="row">
        <div class="col">
          <StateCurrentBarChart /> <!-- 이용(발송성공)건수 추이 -->
        </div>
        <div class="col">
          <StateCurrentDoughnutChart /> <!-- 이용서비스별추이 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import StateCurrentBarChart from '@/modules/State/components/StateCurrentBarChart.vue';
import StateCurrentDoughnutChart from '@/modules/State/components/StateCurrentDoughnutChart.vue';

export default {
  components: { CustomDatepicker, StateCurrentBarChart, StateCurrentDoughnutChart, IconArrowDown },
  name: "StateCurrent",
  data() {
    return {
      hideMenu: false, // 메뉴 숨김 상태
      dateFilter: '',
      radio: '전체'
    }
  },
  methods: {
    toggleMenu() {
      this.hideMenu = !this.hideMenu;
    },
    setDateRange(rangeType) {
      const endDate = new Date();
      let startDate = new Date();

      switch (rangeType) {
        case '1month':
          startDate.setMonth(endDate.getMonth() - 1);
          this.dateFilter = '1month'
          break;
        case '3month':
          startDate.setMonth(endDate.getMonth() - 3);
          this.dateFilter = '3month'
          break;
        case '6month':
          startDate.setMonth(endDate.getMonth() - 6);
          this.dateFilter = '6month'
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

.check-menu {
  display: flex;
}
.row {
  margin-right: -10px;
  margin-left: -10px;
  .col {
    width: 50%;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
