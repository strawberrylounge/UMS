<template>
  <b-modal id="add-spam-modal" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">스팸 등록</h5>
      <p class="title-desc">* 메시지 발송 시 스팸 문구가 포함된 메시지는 스팸으로 분류되어 발송되지 않습니다.</p>
    </template>

    <div class="form-row">
      <label>추가할 문구</label>
      <div>
        <b-input class="w-100" placeholder="문구를 입력해 주세요"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>메모</label>
      <div class="d-flex align-items-center">
        <b-input class="flex-fill mr-1" placeholder="메모를 입력해 주세요"></b-input>
        <span class="ml-2 f-body5 c-gray600">100자 이내</span>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="saveData">등록</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>

  </b-modal>
</template>

<script>
export default {
components: { },
name: 'AddSpamModal',
  props: {
    addSpam: {
      type: Function
    }
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-spam-modal');
    },
    saveData() {
      this.closeModal()
      this.addSpam()
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
</style>