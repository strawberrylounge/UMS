<template>  
  <b-modal id="send-test-modal" content-class="service-modal" hide-header-close centered size="xs">
    <template #modal-title>
      <h5 class="modal-title">테스트 발송</h5>
      <p class="mt-1 pt-3 mb-0 f-body3 f-bold c-gray500">* 테스트 발송 시 대체 발송은 하지 않습니다.</p>
    </template>

    <label class="mb-1 pb-2 f-body4 c-gray500">휴대폰 번호 <span class="require">*</span></label>
    <b-input placeholder="010-1234-5678"></b-input>
    <b-input placeholder="010-1234-5678"></b-input>
    <b-input placeholder="010-1234-5678"></b-input>

    <template #modal-footer>
      <b-button variant="primary" disabled>발송</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>

export default {
  components: {  },
  name: "SendTestModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('send-test-modal');
    },
  }
};
</script>

<style scoped lang="scss">
.form-control + .form-control {
  margin-top: 20px;;
}
</style>
