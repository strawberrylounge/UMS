<template>
  <div class="tab-contents">
    <!-- 검색영역 Start -->
    <div class="search-section card border-0">
      <div class="search-section-forms">
        <div class="d-flex align-items-center flex-wrap">
          <label>조회기간</label>
          <div class="d-flex ml-3 datepicker-group">
            <CustomDatepicker ref="startDatePicker" />
          </div>
          <b-button variant="outline-primary" @click="setDateRange('today')">오늘</b-button>

          <i class="vertical-divider"></i>

          <label class="c-gray500">수신자번호</label>
          <b-input placeholder="입력"></b-input>
        </div>
      </div>
      <b-button variant="dark" class="btn-submit ml-auto">검색</b-button>
    </div>
    <!-- 검색영역 End -->

    <!-- 리스트 영역 Start -->
    <div class="table-section card">
      <div class="d-flex align-items-center">
        <p class="list-count">전체 <span class="text-primary">10건</span></p>
        <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
          <template #button-content>
            <span>{{ pageCount }}개씩 보기</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button :class="pageCount == 10 ? 'active' : ''" @click="setPageCount(10)">10개씩 보기</b-dropdown-item-button>
          <b-dropdown-item-button :class="pageCount == 20 ? 'active' : ''" @click="setPageCount(20)">20개씩 보기</b-dropdown-item-button>
          <b-dropdown-item-button :class="pageCount == 30 ? 'active' : ''" @click="setPageCount(30)">30개씩 보기</b-dropdown-item-button>
        </b-dropdown>

        <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-auto">
          <span>엑셀 다운로드</span>
          <IconDownload />
        </b-button>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>일시</th>
              <th>수신자번호</th>
              <th>식별값(cliKey)</th>
              <th>발송구분</th>
              <th>요청채널</th>
              <th>최종채널</th>
              <th>실패사유</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
              <td>2024-09-02</td>
              <td>01012345678</td>
              <td>SMSeURSFze_1</td>
              <td>C</td>
              <td>SMS</td>
              <td>SMS</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
    <!-- 리스트 영역 End -->
  </div>
</template>

<script>
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import Pagination from '@/components/service/Pagination.vue';

export default {
  components: { CustomDatepicker, IconDownload, IconArrowDown, Pagination },
  name: "StateFail",
  data() {
    return {
      pageCount: 10,
    }
  },
  methods: {
    setPageCount(value) {
      this.pageCount = value
    },
    setDateRange(rangeType) {
      let startDate = new Date();

      switch (rangeType) {
        case 'today':
          this.$refs.startDatePicker.setDate(startDate);
          break;
        default:
          startDate = null;
          endDate = null;
      }

      this.$refs.startDatePicker.setDate(startDate);
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';

.btn-outline-primary {
  min-width: 75px;
  margin-left: 12px;
}
input.form-control {
  max-width: 355px;
  margin-left: 12px;
}
</style>
