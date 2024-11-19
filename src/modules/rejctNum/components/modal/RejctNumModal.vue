<template>
  <b-modal id="rejct-num-modal" hide-header-close size="md" centered content-class="service-modal">
    <template #modal-title>
      <h5 class="modal-title">수신거부번호 추가</h5>
      <p class="title-desc">* 수신거부 목록에 추가된 번호는 광고성 문자 발송시 자동으로 수신 대상에서 제외됩니다.<br />일괄 등록 기능으로 대량의 번호를 추가할 수 있습니다.</p>
    </template>

    <div class="card">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">개별 등록</p>
      <div class="form-row">
        <label class="mb-0">080번호</label>
        <b-dropdown variant="secondary">
          <template #button-content>
            <span v-if ="number">{{ number }}</span>
            <span v-else class="c-gray400">선택</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button @click="setNumber('11')" :class="{active: number === '11'}">11</b-dropdown-item-button>
        </b-dropdown>
      </div>

      <div class="form-row">
        <label class="mb-0">수신거부번호 (휴대폰)</label>
        <div class="d-flex align-items-center">
          <b-input placeholder="-없이 숫자만 입력해 주세요" class="flex-fill"></b-input>
          <b-button variant="dark" class="ml-1">중복 확인</b-button>
        </div>
      </div>
    </div>


    <div class="card">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">일괄 등록</p>
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
    </div>

    <div class="mt-4 pb-2">
      <p class="f-bold">중복 확인 버튼 클릭시 유효성 검사에 따라 나오는 모달 예시입니다.</p>
      <b-button variant="outline-dark" @click="validate(true)">사용 가능 번호일 경우</b-button>
      <b-button variant="outline-dark" @click="validate(false)">사용 불가능 번호일 경우</b-button>
      <b-button variant="outline-dark" @click="notAllow()">사용자 등록 허용되지 않는 확장자일 경우</b-button>
      <b-button variant="outline-dark" @click="excel()">사용자 등록 엑셀파일</b-button>
    </div>

    <template #modal-footer>
      <b-button variant="primary">추가</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
components: { IconArrowDown, IconDownload, AlertModal, },
name: 'RejctNumModal',
  props: {
  },
  data() {
    return {
      number: '',
      selectedFileName: '',
      alertTitle: '',
      alertDesc: '',
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('rejct-num-modal');
    },
    setNumber(value) {
      this.number = value;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    },
    validate(check) {
      if (check) {
        this.alertTitle = '사용 가능한 번호'
        this.alertDesc = '사용 가능한 번호입니다.'
      } else {
        this.alertTitle = '사용 불가능한 번호'
        this.alertDesc = '사용 불가능한 번호입니다.'
      }
      this.$bvModal.show('alert-modal')
    },
    notAllow() {
      this.alertTitle = '사용자 등록'
      this.alertDesc = '허용되지 않는 확장자입니다.'
      this.$bvModal.show('alert-modal')
    },
    excel() {
      this.alertTitle = '사용자 등록'
      this.alertDesc = '엑셀파일을 등록해주세요.'
      this.$bvModal.show('alert-modal')
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/message.scss';

.card {
  padding: 28px;
  & + .card {
    margin-top: 20px;
  }
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