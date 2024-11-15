<template>
  <b-modal id="info-modal" hide-header-close size="lg" centered title="문자 발신번호 사전등록 안내">

    <div class="card">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">문자 발신번호 사전등록 안내</p>
      <ul>
        <li>전기통신사업법 제84조에 따라 2015년 10월 16일부로 '발신번호 사전등록제'가 시행되었습니다.</li>
        <li>'발신번호 사전 등록제'란, 거짓으로 표시된 전화번호로 인한 이용자 피해 예방을 위한 것으로, 문자 메시지 발송 시 사전 인증된 발신 번호로만 사용할 수 있도록 등록하는 제도 입니다.</li>
        <li>이에 따라, 전기통신사업법 제 84조 2항(전화번호의 거짓 표시 금지 및 이용자 보호)에 위반되지 않도록 자신의 발신번호를 사전에 등록하고, 등록된 번호로만 문자 메시지를 발송해야 합니다.</li>
        <li>또한, 발신 번호는 기업, 기관 혹은 본인이 소유한 번호 여야 하며, 등록된 발신 번호로 전송한 메시지가 발신 번호 변조로 의심되어 KISA(한국인터넷진흥원)로부터 소명 요청을 받을 경우, 해당 고객의 발신 번호 소유를 증명할 수 있어야 합니다.</li>
      </ul>
    </div>


    <div class="card">
      <div class="d-flex align-items-center justify-content-between mb-1 pb-3">
        <p class="m-0 f-body1 c-gray700">문자 발신번호 등록 안내</p>
        <p class="m-0 d-flex align-items-center">
          <span class="f-body5 c-gray500">* 통신서비스 이용증명원</span>
          <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
            <IconQuestion />
          </b-button>
        </p>
      </div>

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

    <div class="mt-4">
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
import IconQuestion from '@/components/service/icons/IconQuestion.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
components: { IconArrowDown, IconDownload, AlertModal, IconQuestion, },
name: 'InfoModal',
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
      this.$bvModal.hide('info-modal');
    },
    msgTooltip() {
      return '문자 메시지처럼 문자 형식의 텍스트를 입력할 수 있습니다.<br/>에뮬레이터에 노출되는 이미지는 변경되지 않습니다.\n최대 90자까지(공백포함) 입력이 가능합니다.'
    }
  }
}
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

.card {
  padding: 28px;
  & + .card {
    margin-top: 20px;
  }
}
ul {
  margin: 0;
  padding-left: 24px;
  li {
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray500);
  }
}
</style>