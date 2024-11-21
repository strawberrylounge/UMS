<template>
  <b-modal scrollable id="rcs-update-number-modal" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">발신번호 상세</h5>
      <p class="title-desc">* 수신거부 목록에 추가된 번호는 광고성 문자 발송시 자동으로 수신 대상에서 제외됩니다.<br/>일괄 등록 기능으로 대량의 번호를 추가할 수 있습니다.</p>
    </template>

    <div class="form-row">
      <label>발신번호 <span class="require">*</span></label>
      <div class="d-flex align-items-center">
        <b-input class="flex-fill mr-1" value="010-1234-1234"></b-input>
        <span class="ml-2 f-body5 c-gray600">휴대폰번호 등록 불가</span>
      </div>
    </div>

    <div class="form-row">
      <label>발신번호명 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" value="테스트-0231240"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>발신번호명 <span class="require">*</span></label>
      <div class="file-upload flex-fill">
        <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
        <input
          id="upload"
          type="file"
          @change="handleFileUpload"
          class="d-none"
        />
        <span v-if="selectedFileName" class="f-body6 c-gray900">{{ selectedFileName }}</span>
        <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="saveData">수정요청</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  components: { },
  name: 'RcsUpdateNumberModal',
  props: {
    updateNumber: {
      type: Function
    }
  },
  data() {
    return {
      selectedFileName: '',
    }
  },
  methods: { 
    closeModal() {
      this.$bvModal.hide('rcs-update-number-modal');
    },
    saveData() {
      this.closeModal()
      this.updateNumber()
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
.form-row input {
  width: auto;
}
.file-upload {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  background-color: var(--white);
  border: 1px solid var(--gray300);
  border-radius: 8px;
  .btn {
    min-width: 84px;
    margin-right: 20px;
  }
}
</style>