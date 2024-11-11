<template>
  <div class="cash-main list-view">
    <CashTabs />

    <div class="tab-contents">
      <div class="card">
        <div class="d-flex align-items-center mb-1 pb-3">
          <label class="mb-0 f-body5 c-gray500">월별 이용금액</label>
          <b-dropdown id="month-dropdown" variant="secondary" class="month-dropdown">
              <template #button-content>
                <span v-if="!date" class="c-gray400">선택</span>
                <span v-else>{{ date }}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button :class="{active: date === '2024-08'}" @click="setDate('2024-08')">2024-08</b-dropdown-item-button>
            </b-dropdown>
            <b-button variant="dark">검색</b-button>
        </div>

        <div class="d-flex">
          <div class="vat-info">
            <p class="mt-0 mb-1 pb-2 f-title3 c-gray500"><span class="c-states-red">0</span>원 (부가세 포함)</p>
            <p class="m-0 f-body5 c-states-red">(청구서 발행 시 10원 미만은 절삭됩니다.)</p>
          </div>
          <PayTable />
        </div>
      </div>

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-auto">
          <span>엑셀 다운로드</span>
          <IconArrowLineDown />
        </b-button>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>이용채널</th>
                <th>이용 월</th>
                <th>건수</th>
                <th>이용요금</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1]" :key="index">
                <td>SMS</td>
                <td>2024-08</td>
                <td>20</td>
                <td>180</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">합계</td>
                <td>0</td>
                <td>0원</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconArrowLineDown from '@/components/service/icons/IconArrowLineDown.vue'
import CashTabs from '@/components/service/cash/CashTabs.vue'
import PayTable from '@/modules/cashHistory/components/PayTable.vue'

export default {
  components: { PayTable, CashTabs, IconArrowDown, IconArrowLineDown, },
  name: "CashHistory",
  data() {
    return {
      date: '2024-08',
    }
  },
  methods: {
    setDate(value) {
      this.number = value;
    },
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

label {
  margin-right: 12px;
}
.month-dropdown {
  width: 132px;
  margin-right: 12px;
}
.btn {
  min-width: 120px;
}
.card:not(.info) {
  padding: 28px;
  box-shadow: none;
}
.vat-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  padding: 24px;
  background-color: var(--gray50);
}
.table tfoot td {
  background-color: var(--gray100);
  border-bottom: none;
  @include typography.font-style(16px, 700, 140%, -0.32px);
  color: var(--gray900);
}
</style>
