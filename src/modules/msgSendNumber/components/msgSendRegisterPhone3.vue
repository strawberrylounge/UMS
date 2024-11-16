<template>
  <div class="d-flex">
    <div class="text-section">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">타인 / 타사 번호 등록</p>
      <ul>
        <li>통신서비스 이용증명원을 발급받은 유선 번호만 등록이 가능합니다.</li>
        <li>기존에 등록된 발신번호는 중복 등록이 불가능합니다.</li>
        <li>일괄 등록은 최대 1,000건까지 가능합니다.</li>
        <li>타인/타사 번호 등록시 아래의 서류를 첨부하시면, 서류 심사 후 발신번호가 등록됩니다. (1-3일 소요</li>
      </ul>
    </div>

    <i class="vertical-divider"></i>

    <div class="flex-fill">
      <div class="form-row">
        <b-form-checkbox value="a" v-model="check">번호를 일괄 등록합니다. (일괄 등록 . 시기존에 등록된 발신번호가 있다면 해당 번호는 다름 단계에 표시되지 않습니다.</b-form-checkbox>
      </div>
      <div v-if="check != 'a'" class="form-row">
        <label>타인 / 타사 번호</label>
        <b-input placeholder="(필수) 등록할 휴대폰 인증을 해주세요."></b-input>
      </div>
      <div v-if="check != 'a'" class="form-row">
        <label>발신번호명</label>
        <b-input></b-input>
      </div>
      <div v-if="check == 'a'" class="form-row">
        <label>일괄등록</label>
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
          <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-sample-download ml-2">
            <span>업로드 샘플 다운로드</span>
            <IconDownload />
          </b-button>
        </div>
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
        <label>위임업체 대리인<br/>
          신분증 사본</label>
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
        <label>위임업체<br />
          인감증명서</label>
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
        <label>수임업체<br />
          인감증명서</label>
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
      <div class="form-row">
        <label>인감이 날인된 위임장</label>
        <div class="d-flex align-items-center">
          <div class="file-upload flex-fill mr-1">
            <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
            <input
              id="upload"
              type="file"
              @change="handleFile6Upload"
              class="d-none"
            />
            <span v-if="selectedFileName6" class="f-body6 c-gray900">{{ selectedFileName6 }}</span>
            <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
          </div>
          <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-sample-download ml-2 mr-1">
            <span>양식 다운로드</span>
            <IconDownload />
          </b-button>
          <p class="m-0 ml-2 f-body5 c-states-red">업로드 샘플 다운로드의 양식에 맞게 번호를 기재해 주시기 바랍니다.<br />
            첨부 파일 확장자는 xls,xlsx 만 허용됩니다. (5M 이하 파일 가능)</p>
        </div>
      </div>
      <div class="form-row">
        <label>인감이 날인된 위임장</label>
        <div class="d-flex align-items-center">
          <div class="file-upload flex-fill mr-1">
            <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
            <input
              id="upload"
              type="file"
              @change="handleFile7Upload"
              class="d-none"
            />
            <span v-if="selectedFileName7" class="f-body6 c-gray900">{{ selectedFileName7 }}</span>
            <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
          </div>
          <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-sample-download ml-2">
            <span>양식 다운로드</span>
            <IconDownload />
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconDownload from '@/components/service/icons/IconDownload.vue'

export default {
  components: { IconDownload, },
  name: 'msgSendRegisterPhone3',
  data() {
    return {
      selectedFileName: '',
      selectedFileName2: '',
      selectedFileName3: '',
      selectedFileName4: '',
      selectedFileName5: '',
      selectedFileName6: '',
      selectedFileName7: '',
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
    handleFile6Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName6 = file.name;
      }
    },
    handleFile7Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName7 = file.name;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/msgSend.scss';
</style>