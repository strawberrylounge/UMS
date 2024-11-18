<template>
  <div class="state list-view">
    <StateTabs />

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label>발송일</label>
            <div class="d-flex ml-3 datepicker-group">
              <CustomDatepicker ref="startDatePicker" :mode="radio1 == '일별' ? 'day' : 'month'" />
              <span>~</span>
              <CustomDatepicker ref="endDatePicker" :mode="radio1 == '일별' ? 'day' : 'month'" />
              <CustomVueDatepicker :mode="radio1 == '일별' ? 'day' : 'month'" />
            </div>
            <b-form-group class="radio-group m-0">
              <b-form-radio-group inline v-model="radio1">
                <b-form-radio name="type" value="일별">일별</b-form-radio>
                <b-form-radio name="type" value="월별">월별</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <i class="vertical-divider"></i>

            <label class="mr-2">사업자</label>
            <b-form-group class="radio-group m-0">
              <b-form-radio-group inline v-model="radio2">
                <b-form-radio name="type" value="사업자">사업자</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </div>
        </div>
        <b-button variant="dark" class="btn-submit ml-auto">조회</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <ul>
            <li>발송일 기준 최근 12개월까지 조회가 가능합니다. (최대 조회 가능 범위 : 1개월)</li>
          </ul>

          <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-auto">
            <span>엑셀 다운로드</span>
            <IconArrowLineDown />
          </b-button>
        </div>
        <p class="m-0 mt-5 pt-1 f-body2 c-gray400 text-right">건수 / 금액(원,VAT 별도)</p>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>사업자</th>
                <th>합계</th>
                <th>SMS</th>
                <th>LMS</th>
                <th>MMS</th>
                <th>RCS<br />
                  템플릿</th>
                <th>RCS<br />
                  SMS</th>
                <th>RCS<br />
                  LMS</th>
                <th>RCS<br />
                  MMS</th>
                <th>알림톡</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.08.01</td>
                <td></td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
              </tr>
              <tr>
                <td>2024.09.02</td>
                <td></td>
                <td>5<br/>50</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
                <td>0<br/>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-4 mb-0">검색된 내용이 없는 경우 테이블 입니다.</p>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>사업자</th>
                <th>합계</th>
                <th>SMS</th>
                <th>LMS</th>
                <th>MMS</th>
                <th>RCS<br />
                  템플릿</th>
                <th>RCS<br />
                  SMS</th>
                <th>RCS<br />
                  LMS</th>
                <th>RCS<br />
                  MMS</th>
                <th>알림톡</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="12" class="no-row">검색된 내용이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>
  </div>
</template>

<script>
import StateTabs from '@/components/service/State/StateTabs.vue'
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import CustomVueDatepicker from '@/components/service/form/CustomVueDatepicker.vue'
import IconArrowLineDown from '@/components/service/icons/IconArrowLineDown.vue';

export default {
  components: { CustomDatepicker, StateTabs, IconArrowLineDown, CustomVueDatepicker },
  name: "State",
  data() {
    return {
      radio1: '일별',
      radio2: '사업자',
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';

.table-section {
  ul {
    margin: 0;
    padding-left: 24px;
    li {
      @include typography.font-style(14px, 400, 180%, -0.28px);
      color: var(--gray500);
    }
  }
}
.list-view .table-section .table-responsive {
  margin-top: 12px;
  tr:last-child td {
    border-bottom: none;
  }
  th,td {
    width: calc(100% / 12);
    border-right: 1px solid var(--border-color);
    vertical-align: middle;
    @include typography.font-style(16px, 500, 140%, -0.32px);
    &:last-child {
      border-right: none;
    }
  }
  th {
    text-align: center;
    color: var(--gray900);
  }
  td {
    padding-top: 8px;
    padding-bottom: 8px;
    color: var(--gray600);
    text-align: right;
    &:first-child {
      text-align: center;
    }
    &.no-row {
      padding-top: 17px;
      padding-bottom: 17px;
      color: var(--gray900);
    }
  }
}
.custom-radio {
  margin-left: 12px;
}
</style>
