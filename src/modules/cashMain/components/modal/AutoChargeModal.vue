<template>
  <b-modal scrollable id="auto-charge-modal" hide-header-close size="md" centered content-class="service-modal">
    <template #modal-title>
      <h5 class="modal-title">자동 충전</h5>
      <p class="title-desc">* 1일 1회 08:00 고객사 잔액을 확인하여 하한금액 이하로 잔액이 남았을 경우 자동충전이 되며, 등록하신 결제방식으로 즉시 결제됩니다.</p>
    </template>

    <div class="form-row charge-row">
      <label>잔여금액</label>
      <div>
        <b-input value="1,120,000" disabled class="w-100"></b-input>
      </div>
    </div>

    <div class="form-row charge-row">
      <label>기준하한금액</label>
      <div class="d-flex align-items-center">
        <b-input placeholder="0" class="flex-fill mr-1"></b-input>
        <span class="ml-2 f-body5 c-gray600">* 충전금액은 1,000원 단위로 가능합니다.</span>
      </div>
    </div>

    <div class="form-row charge-row">
      <label>자동충전금액</label>
      <div class="d-flex align-items-center">
        <b-input placeholder="0" class="flex-fill mr-1"></b-input>
        <span class="ml-2 f-body5 c-gray600">* 충전금액은 1,000원 단위로 가능합니다.</span>
      </div>
    </div>

    <div class="form-row charge-row">
      <label>자동충전기간</label>
      <div class="d-flex align-items-center datepicker-group">
        <CustomDatepicker ref="startDatePicker" />
        <span class="mx-1 px-2">~</span>
        <CustomDatepicker ref="endDatePicker" />
        <span class="ml-2 f-body5 c-gray600">* 최대기간 설정은 3년입니다.</span>
      </div>
    </div>

    <div class="form-row align-items-start">
      <label>결제수단 선택</label>
      <div class="d-flex align-items-center">
        <div class="paytype">
          <PayTypeRadio
            :icon="iconCard"
            text="신용카드"
          >
            <b-form-radio name="type" value="A" v-model="card" class="custom-radio-vertical"></b-form-radio>
          </PayTypeRadio>
        </div>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary">결제</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconCard from '@/components/service/icons/IconCard.vue'
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import PayTypeRadio from '@/modules/cashMain/components/PayTypeRadio.vue'

export default {
components: { CustomDatepicker, PayTypeRadio, },
name: 'AutoChargeModal',
  props: {
  },
  data() {
    return {
      card: 'A',
      iconCard: IconCard,
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('auto-charge-modal');
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/message.scss';
.paytype {
  width: calc((100% / 3) - (40px / 3));
}
.datepicker-container {
  width: 180px;
}
</style>