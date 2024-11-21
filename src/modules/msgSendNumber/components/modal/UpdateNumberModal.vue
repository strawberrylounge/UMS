<template>
  <b-modal scrollable id="update-number-modal" title="발신번호 수정" hide-header-close size="md" centered>
    <div class="form-row">
      <label>주소록 설명</label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="saveData">수정</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
components: { },
name: 'UpdateNumberModal',
  props: {
    updateNumber: {
      type: Function
    }
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('update-number-modal');
    },
    saveData() {
      this.closeModal()
      this.updateNumber()
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
</style>