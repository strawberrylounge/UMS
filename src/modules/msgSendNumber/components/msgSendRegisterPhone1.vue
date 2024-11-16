<template>
  <div class="d-flex">
    <div class="text-section">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">휴대폰 번호 등록</p>
      <ul>
        <li>PASS 앱을 통해 휴대폰 번호를 발신번호로 등록합니다.</li>
        <li>기존에 등록된 발신번호는 중복 등록이 불가능합니다.</li>
        <li>KISA 관계법령에 의거 휴대폰 번호 등록 시에도 통신서비스 가입증명원 서류가 추가되어야 합니다.(서류 번호가 상이할 경우 등록에 제한이 됩니다)</li>
        <li>휴대폰 인증 후 아래의 서류를 첨부하시면, 고객센터에서 서류 심사 후 발신번호가 등록됩니다. (1~3일 소요)</li>
      </ul>
    </div>

    <i class="vertical-divider"></i>

    <div class="flex-fill">
      <div class="form-row">
        <label>본인인증</label>
        <div>
          <b-button variant="primary">휴대폰 인증</b-button>
        </div>
      </div>
      <div class="form-row">
        <label>발신번호</label>
        <b-input value="(필수) 등록할 휴대폰 인증을 해주세요." disabled></b-input>
      </div>
      <div class="form-row">
        <label>발신번호</label>
        <b-input disabled></b-input>
      </div>
      <div class="form-row">
        <label>
          통신서비스<br/>
          가입증명원
        </label>
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
          <p class="m-0 ml-2 f-body5 c-states-red">등록할 발신번호에 해당하는 통신서비스 이용 증명원을 첨부하시길 바랍니다.</p>
        </div>
      </div>
      <div class="form-row">
        <b-form-checkbox value="a" v-model="check">계정 담당자가 사업자 등록증의 대표자 본인입니다. (증빙서류 제외 대상)</b-form-checkbox>
      </div>
      <div v-if="check != 'a'" class="form-row">
        <label>재직증명서</label>
        <div class="d-flex align-items-center">
          <div class="file-upload flex-fill mr-1">
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
          <p class="m-0 ml-2 f-body5 c-states-red">휴대폰 소유자 재직증명서를 첨부하시기 바랍니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgSendRegisterPhone1',
  data() {
    return {
      selectedFileName: '',
      selectedFileName2: '',
      check: '',
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    },
    handleFile2Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/msgSend.scss';
</style>