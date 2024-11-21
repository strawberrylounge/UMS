<template>  
  <b-modal scrollable id="smart-send-test-modal" content-class="service-modal" hide-header-close centered size="md">
    <template #modal-title>
      <h5 class="modal-title">테스트 발송</h5>
      <p class="title-desc">* 테스트 발송 시 대체 발송은 하지 않습니다.</p>
    </template>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">휴대폰 번호<span class="require">*</span></label>
      <label class="mb-1 pb-2 f-body5 c-gray500">이름<span class="require">*</span></label>
    </div>

    <div class="d-flex form-row input-row">
      <b-input placeholder="010-1234-5678"></b-input>
      <b-input placeholder="이름 입력"></b-input>
    </div>
    <div class="d-flex form-row input-row">
      <b-input placeholder="010-1234-5678"></b-input>
      <b-input placeholder="이름 입력"></b-input>
    </div>
    <div class="d-flex form-row input-row">
      <b-input placeholder="010-1234-5678"></b-input>
      <b-input placeholder="이름 입력"></b-input>
    </div>

    <template #modal-footer>
      <b-button variant="primary" disabled>발송</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>

export default {
  components: {  },
  name: "SmartSendTestModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('smart-send-test-modal');
    },
  }
};
</script>

<style scoped lang="scss">
.form-row {
  display: flex;
  margin: 0;
  & > * {
    width: calc(50% - 10px);
    margin-right: 10px;
  }
  label + label {
    margin-left: 10px;
    margin-right: 0;
  }
  .form-control + .form-control {
    margin-left: 10px;
    margin-right: 0;
  }
  &.input-row + .input-row {
    margin-top: 10px;
    margin-right: 0;
  }
}
</style>
