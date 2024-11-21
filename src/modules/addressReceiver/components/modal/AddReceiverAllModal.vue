<template>
  <b-modal scrollable id="add-receiver-all-modal" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">수신자 일괄 등록</h5>
      <ul class="modal-info">
        <li>대량의 수신자를 한꺼번에 등록하기 위한 기능입니다.</li>
        <li>반드시 샘플의 양식으로 입력하시고 등록 하십시오.</li>
        <li>수신자명과 휴대폰번호는 필수 입력 사항 입니다.</li>
      </ul>
    </template>

    <div class="d-flex align-items-center">
      <div class="file-upload flex-fill mr-1">
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
      <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-sample-download ml-3">
        <span>업로드 샘플</span>
        <IconDownload />
      </b-button>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
      <b-button variant="primary" @click="addAll">일괄등록</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconDownload from '@/components/service/icons/IconDownload.vue'

export default {
components: { IconDownload, },
name: 'AddReceiverAllModal',
  props: {
    addAll: {
      type: Function
    }
  },
  data() {
    return {
      use: '사용',
      selectedFileName: ''
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-receiver-all-modal');
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
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/message.scss';

.modal-info {
  margin: 20px 0 0;
  padding-left: 24px;
  @include typography.font-style(14px, 700, 140%, -0.28px);
  color: var(--gray500)
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