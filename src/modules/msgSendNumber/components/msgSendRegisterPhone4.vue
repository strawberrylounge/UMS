<template>
  <div>
    <div class="d-flex">
      <div class="text-section">
        <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">발신번호 등록 (대리인)</p>
        <ul>
          <li>대리인은 기업 또는 기관으로부터 권한을 위임 받은 사람으로서 기업 또는 기관을 대신하여 발신번호를 등록, 수정, 삭제 할 수 있으며 이에 대한 권한과 책임을 갖습니다.</li>
          <li>일괄 등록은 최대 1,000건까지 가능합니다.</li>
          <li>일괄 등록 시 기존에 등록된 발신번호가 있다면 해당 발신번호는 다음 단계에 표시 되지 않습니다.</li>
          <li>전화번호 세칙을 준수한 번호만 등록이 가능합니다. 단, 060(금융권 번호) , KISA 번호도용차단 번호 리스트에 등록된 발신번호는 등록이 되지 않습니다</li>
        </ul>
      </div>

      <i class="vertical-divider"></i>

      <div class="flex-fill">
        <div class="form-row">
          <b-form-checkbox value="a" v-model="check">번호를 일괄 등록합니다. (일괄 등록 . 시기존에 등록된 발신번호가 있다면 해당 번호는 다름 단계에 표시되지 않습니다.</b-form-checkbox>
        </div>
        <div v-if="check != 'a'" class="form-row">
          <label>대리인 등록 번호</label>
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
                @change="handleFileUpload"
                class="d-none"
              />
              <span v-if="selectedFileName" class="f-body6 c-gray900">{{ selectedFileName }}</span>
              <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
            </div>
            <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-sample-download ml-2">
              <span>업로드 샘플 다운로드</span>
              <IconDownload />
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <hr class="hr">
    <p class="my-3 f-title2">아래는 상태에 따라 다르게 보여주는 화면 넣었습니다. (대리인 등록 요청중)</p>
    <hr class="hr">

    <div class="d-flex">
      <div class="text-section">
        <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">발신번호 등록 (대리인)</p>
        <ul>
          <li>대리인은 기업 또는 기관으로부터 권한을 위임 받은 사람으로서 기업 또는 기관을 대신하여 발신번호를 등록, 수정, 삭제 할 수 있으며 이에 대한 권한과 책임을 갖습니다.</li>
          <li>일괄 등록은 최대 1,000건까지 가능합니다.</li>
          <li>일괄 등록 시 기존에 등록된 발신번호가 있다면 해당 발신번호는 다음 단계에 표시 되지 않습니다.</li>
          <li>전화번호 세칙을 준수한 번호만 등록이 가능합니다. 단, 060(금융권 번호) , KISA 번호도용차단 번호 리스트에 등록된 발신번호는 등록이 되지 않습니다</li>
        </ul>
      </div>

      <i class="vertical-divider"></i>

      <div class="flex-fill d-flex flex-column align-items-center justify-content-center">
        <p class="mt-0 mb-4 pb-1 f-title3 c-gray500">요청 중...</p>
        <p class="m-0 f-body3 c-gray500 text-center">대리인은 기업 또는 기관으로부터 권한을 위임 받은 사람으로서 기업 또는 기관을 대신하여 발신번호를 등록, 수정, 삭제 할 수 있으며<br />
          이에 대한 권한과 책임을 갖습니다.</p>
      </div>
    </div>

    <hr class="hr">
    <p class="my-3 f-title2">아래는 상태에 따라 다르게 보여주는 화면 넣었습니다. (대리인 등록 요청)</p>
    <hr class="hr">

    <div class="d-flex">
      <div class="text-section">
        <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">발신번호 등록 (대리인)</p>
        <ul>
          <li>대리인은 기업 또는 기관으로부터 권한을 위임 받은 사람으로서 기업 또는 기관을 대신하여 발신번호를 등록, 수정, 삭제 할 수 있으며 이에 대한 권한과 책임을 갖습니다.</li>
          <li>일괄 등록은 최대 1,000건까지 가능합니다.</li>
          <li>일괄 등록 시 기존에 등록된 발신번호가 있다면 해당 발신번호는 다음 단계에 표시 되지 않습니다.</li>
          <li>전화번호 세칙을 준수한 번호만 등록이 가능합니다. 단, 060(금융권 번호) , KISA 번호도용차단 번호 리스트에 등록된 발신번호는 등록이 되지 않습니다</li>
        </ul>
      </div>

      <i class="vertical-divider"></i>

      <div class="flex-fill d-flex flex-column align-items-center justify-content-center bg-gray50">
        <b-button variant="dark" v-b-modal.request-modal>대리인 등록 요청</b-button>
        <p class="m-0 mt-1 pt-4 f-body3 c-gray500 text-center">대리인은 기업 또는 기관으로부터 권한을 위임 받은 사람으로서 기업 또는 기관을 대신하여 발신번호를<br/>
          등록, 수정, 삭제 할 수 있으며 이에 대한 권한과 책임을 갖습니다.</p>
      </div>
    </div>

    <AlertModal title="대리인 등록 요청 완료" desc="대리인 등록 요청이 완료되었습니다." />
    <RequestModal :modalSubmit="modalSubmit" />
  </div>
</template>

<script>
import IconDownload from '@/components/service/icons/IconDownload.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import RequestModal from '@/modules/msgSendNumber/components/modal/RequestModal.vue';

export default {
  components: { IconDownload, AlertModal, RequestModal, },
  name: 'msgSendRegisterPhone4',
  data() {
    return {
      selectedFileName: '',
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
    modalSubmit() {
      this.$bvModal.hide('request-modal')
      this.$bvModal.show('alert-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/msgSend.scss';
.flex-fill {
  border-radius: 12px;
}
.bg-gray50 {
  .btn {
    min-width: 200px;
  }
}
</style>