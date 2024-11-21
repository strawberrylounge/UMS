<template>
  <b-modal scrollable id="add-receiver-modal" title="수신자 등록" hide-header-close size="md" centered>
    <div class="form-row">
      <label>수신자명 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="수신자명을 입력해 주세요"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>수신자 아이디</label>
      <div>
        <b-input class="w-100" placeholder="수신자 아이디를 입력해 주세요"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>휴대폰 번호 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="- 없이 입력해 주세요. (국제 번호일 경우 0빼고 입력)"></b-input>
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
      <b-button variant="primary" @click="addReceiver">등록</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
components: { },
name: 'AddReceiverModal',
  props: {
    addReceiver: {
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
      this.$bvModal.hide('add-receiver-modal');
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
</style>