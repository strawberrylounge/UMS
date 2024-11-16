<template>
  <b-modal id="request-modal" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">대리인 등록 요청</h5>
      <p class="title-desc">* 담당자가 등록한 서류 심사 후 영업일 기준 1~2일 내 승인이 완료됩니다. (반려 후 재 신청 가능)<br />
        첨부 파일 확장자는 <span class="f-bold">png, jpg, pdf, zip, tif, tiff</span> 만 허용됩니다. (5M 이하 파일 가능)</p>
    </template>

    <div class="form-row">
      <label>발신번호 변작방지 <span class="require">&nbsp;&nbsp;*</span><br />
        및 사전등록 동의서</label>
      <div class="d-flex align-items-center">
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
    </div>

    <div class="form-row">
      <label>대리인 등록 신청서 <span class="require">*</span></label>
      <div class="d-flex align-items-center">
        <div class="file-upload flex-fill">
          <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
          <input
            id="upload"
            type="file"
            @change="handleFile2Upload"
            class="d-none"
          />
          <span v-if="selectedFileName2" class="f-body6 c-gray900">{{ selectedFileName2 }}</span>
          <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
        </div>
      </div>
    </div>

    <div class="form-row">
      <label>인감증명서 <span class="require">*</span></label>
      <div class="d-flex align-items-center">
        <div class="file-upload flex-fill">
          <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
          <input
            id="upload"
            type="file"
            @change="handleFile3Upload"
            class="d-none"
          />
          <span v-if="selectedFileName3" class="f-body6 c-gray900">{{ selectedFileName3 }}</span>
          <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
        </div>
      </div>
    </div>

    <div class="form-row">
      <label>인감이 날인된 <span class="require">&nbsp;&nbsp;*</span><br />
        위임장</label>
      <div class="d-flex align-items-center">
        <div class="file-upload flex-fill">
          <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
          <input
            id="upload"
            type="file"
            @change="handleFile4Upload"
            class="d-none"
          />
          <span v-if="selectedFileName4" class="f-body6 c-gray900">{{ selectedFileName4 }}</span>
          <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
        </div>
      </div>
    </div>

    <div class="form-row">
      <label>재직증명서 <span class="require">*</span></label>
      <div class="d-flex align-items-center">
        <div class="file-upload flex-fill">
          <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
          <input
            id="upload"
            type="file"
            @change="handleFile5Upload"
            class="d-none"
          />
          <span v-if="selectedFileName5" class="f-body6 c-gray900">{{ selectedFileName5 }}</span>
          <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
        </div>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="modalSubmit">승인요청</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    modalSubmit: {
      type: Function
    }
  },
  components: {},
  name: 'RequestModal',
  data() {
    return {
      selectedFileName: '',
      selectedFileName2: '',
      selectedFileName3: '',
      selectedFileName4: '',
      selectedFileName5: '',
    }
  },
  methods: { 
    closeModal() {
      this.$bvModal.hide('request-modal');
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    },
    handleFile2Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName2 = file.name;
      }
    },
    handleFile3Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName3 = file.name;
      }
    },
    handleFile4Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName4 = file.name;
      }
    },
    handleFile5Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName5 = file.name;
      }
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/message.scss';
label {
  margin-bottom: 0;
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
#request-modal .title-desc span {
  color: var(--gray900);
}
</style>