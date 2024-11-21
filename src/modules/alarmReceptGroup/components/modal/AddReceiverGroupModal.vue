<template>
  <b-modal scrollable id="add-reciever-group-modal" title="수신그룹 등록" hide-header-close size="md" centered content-class="service-modal">
    <div class="form-row">
      <label>수신그룹 명 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>사용여부</label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="use">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="save">저장</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
components: { },
name: 'AddReceiverGroupModal',
  props: {
    save: {
      type: Function
    }
  },
  data() {
    return {
      use: '사용',
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-reciever-group-modal');
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use "~@/assets/scss/service/base/typography" as typography;
</style>