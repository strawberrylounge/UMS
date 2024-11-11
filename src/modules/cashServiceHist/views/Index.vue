<template>
  <div class="cash-service-hist list-view">
    <CashTabs />

    <div class="tab-contents">
      <div class="card">
        <!-- NOTE: 고객사별로 선불, 후불 가격 노출 -->
        <div class="d-flex mb-1 pb-2">
          <button type="button" class="btn btn-tab">선불 요금제</button>
          <button type="button" class="btn btn-tab">후불 요금제</button>
        </div>
        <SmsTable/>
        <RcsTable/>
        <TalkTable/>
      </div>
    </div>
  </div>
</template>

<script>
import CashTabs from '@/components/service/cash/CashTabs.vue'
import SmsTable from '@/modules/cashServiceHist/components/SmsTable.vue'
import RcsTable from '@/modules/cashServiceHist/components/RcsTable.vue'
import TalkTable from '@/modules/cashServiceHist/components/TalkTable.vue'

export default {
  components: { CashTabs, SmsTable, RcsTable, TalkTable, },
  name: "CashServiceHist",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.btn-tab {
  width: 160px;
  padding: 11px 23px;
  background-color: var(--gray500);
  border: 1px solid var(--gray200);
  border-radius: 0;
  @include typography.font-style(14px, 700, 140%, -0.28px);
  color: var(--white);
}
.card:not(.info) {
  padding: 28px;
  box-shadow: none;
}
</style>
