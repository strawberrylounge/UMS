<template>
  <b-modal id="charge-modal" title="일반 충전" hide-header-close centered content-class="service-modal">

    <div class="form-row">
      <label>충전금액</label>
      <div class="d-flex align-items-center">
        <b-input placeholder="0" class="flex-fill"></b-input>
        <span class="ml-1 pl-2 f-body5 c-gray600">* 충전금액은 1,000원 단위로 가능합니다.</span>
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
        <div class="paytype">
          <PayTypeRadio
            :icon="iconATm"
            text="계좌이체"
          >
            <b-form-radio name="type" value="B" class="custom-radio-vertical"></b-form-radio>
          </PayTypeRadio>
        </div>
        <div class="paytype">
          <PayTypeRadio
            :icon="iconComputer"
            text="가상계좌"
          >
            <b-form-radio name="type" value="C" class="custom-radio-vertical"></b-form-radio>
          </PayTypeRadio>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <p class="f-bold">모달 예시입니다.</p>
      <b-button variant="outline-dark" @click="updateCharge">충전 금액 정정 모달 예시</b-button>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="submit">결제</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconCard from '@/components/service/icons/IconCard.vue'
import IconAtm from '@/components/service/icons/IconAtm.vue'
import IconComputer from '@/components/service/icons/IconComputer.vue'
import PayTypeRadio from '@/modules/cashMain/components/PayTypeRadio.vue'

export default {
components: { PayTypeRadio, },
name: 'ChargeModal',
  props: {
    chargeSubmit: {
      type: Function
    },
    updateCharge: {
      type: Function
    },
  },
  data() {
    return {
      card: 'A',
      iconCard: IconCard,
      iconATm: IconAtm,
      iconComputer: IconComputer,
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('charge-modal');
    },
    submit() {
      this.closeModal()
      this.chargeSubmit()
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/message.scss';

.paytype {
  width: calc((100% / 3) - (40px / 3));
  & + .paytype {
    margin-left: 20px;
  }
}
</style>