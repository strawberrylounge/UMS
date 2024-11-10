<template>
  <b-modal id="add-limit-modal" title="수신자 등록" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">수신자 등록</h5>
      <ul>
        <li>메시지 허브는 메시지 발송 오사용과 해킹 등으로 비용을 과도하게 사용되는 부분을 사전에 차단할 수 있도록 한도금액 설정을 하고 있습니다.</li>
        <li>회원사 단위로 월/일 한도 금액을 설정할 수 있습니다.</li>
        <li>한도금액을 설정하기 위해서는 고객 월/일 한도에 사용을 체크하시고 월/일 한도금액을 입력해 주십시오.</li>
      </ul>
    </template>

    <div class="form-row">
      <label>월 사용여부</label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="month">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="form-row">
      <label>월 한도금액</label>
      <div>
        <b-input class="w-100"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>일 사용여부</label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="day">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary">등록</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
components: { },
name: 'AddLimitModal',
  props: {
    addReceiver: {
      type: Function
    }
  },
  data() {
    return {
      month: '사용',
      day: '사용',
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-limit-modal');
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use "~@/assets/scss/service/base/typography" as typography;

.modal-header ul {
  margin: 20px 0 0;
  padding: 0 0 0 20px;
  li {
    @include typography.font-style(14px, 700, 140%, -0.28px);
    color: var(--gray500);
  }
}
</style>