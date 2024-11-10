<template>
  <div class="cash-main list-view">
    <CashTabs />

    <div class="tab-contents">
      <div class="info card">
        <p class="f-body1 c-gray700 mt-0 mb-1 pb-2">선불 충전 관리</p>
        <ul>
          <li>일반충전은 필요한 캐시만큼 자유롭게 충전해서 사용가능 합니다. (최소결제금액 1,000원 이상)</li>
          <li>자동충전은 기준하한 금액에 도달 시 충전 금액이 자동으로 결제되어 사용할 수 있습니다.</li>
          <li>1일 1회 08:00 고객사 잔액을 확인하여 하한금액 이하로 잔액이 남았을 경우 자동 충전되며, 등록하신 결제방식으로 즉시 결제됩니다.</li>
        </ul>
      </div>

      <div class="card flex-row align-items-start">
        <CashTable />
        <b-button variant="primary" class="ml-auto mr-2 btn-svg btn-svg-right" v-b-modal.auto-charge-modal>
          <span>자동 충전</span>
          <IconArrowRight />
        </b-button>
        <b-button variant="primary" class="btn-svg btn-svg-right" v-b-modal.charge-modal>
          <span>일반 충전</span>
          <IconArrowRight />
        </b-button>
      </div>

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <p class="m-0 f-title1 c-gray700">충전 이력 조회</p>
        <hr class="hr"/>
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
        </div>
        <div class="table-responsive sticky-header">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    No.
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    충전캐시
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    충전유형
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    결제유형
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    결제상태
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    발생일자
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    유효기간
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>{{ index + 1 }}</td>
                <td>2,000</td>
                <td>결제캐시</td>
                <td v-if="index === 1"><button class="btn btn-table-link" v-b-modal.account-info-modal>가상계좌</button></td>
                <td v-else>카드</td>
                <td>승인</td>
                <td>2024-07-31 11:03:02</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ChargeModal :chargeSubmit="chargeSubmit" :updateCharge="updateCharge" />
    <AutoChargeModal />
    <AccountInfoModal />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import CashTabs from '@/components/service/cash/CashTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import ChargeModal from '@/modules/cashMain/components/modal/ChargeModal.vue'
import AutoChargeModal from '@/modules/cashMain/components/modal/AutoChargeModal.vue'
import AccountInfoModal from '@/modules/cashMain/components/modal/AccountInfoModal.vue'
import Pagination from '@/components/service/Pagination.vue';
import IconSort from '@/components/service/icons/IconSort.vue'
import CashTable from '@/modules/cashMain/components/CashTable.vue'

export default {
  components: { AutoChargeModal, CashTable, IconSort, ChargeModal, IconArrowRight, Pagination, CashTabs, IconArrowDown,  AlertModal, AccountInfoModal, },
  name: "AddressManage",
  data() {
    return {
      number: '전체',
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
    }
  },
  methods: {
    setNumber(value) {
      this.number = value;
    },
    setPageCount(value) {
      this.pageCount = value;
    },
    chargeSubmit() {
      this.alertTitle = '카드 결제'
      this.alertDesc = '카드 결제가 완료되었습니다.'
      this.$bvModal.show('alert-modal');
    },
    updateCharge() {
      this.alertTitle = '충전 금액 정정'
      this.alertDesc = '충전 금액은 1,000 단위로 입력해주시길 바랍니다.'
      this.$bvModal.show('alert-modal');
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.card:not(.info) {
  padding: 28px;
  box-shadow: none;
}
.hr {
  margin: 20px 0;
}
.sticky-header {
  max-height: 508px;
  overflow-y: auto;
}
.table td {
  vertical-align: middle;
}
</style>
