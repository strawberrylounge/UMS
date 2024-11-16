<template>  
  <b-modal id="select-talk-template-modal" title="템플릿 선택" hide-header-close size="xl" centered content-class="service-modal select-template-modal" no-fade>
    <div class="d-flex">
      <div class="section">
        <p class="m-0 mb-1 pb-3 f-body1 c-gray700"><span class="require">*</span>카카오 채널</p>

        <div class="d-flex align-items-center dropdown-container">
          <label class="f-body5 c-gray500 form-label">채널선택</label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="brand-dropdown">
            <template #button-content>
              <span>{{ channel === '' ? '옵션' : channel }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setChannel('채널_A')">채널_A</b-dropdown-item-button>
            <b-dropdown-item-button @click="setChannel('채널_B')">채널_B</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <hr class="hr">

        <label for="template" class="m-0 f-body5 c-gray500">템플릿 유형</label>
        <b-form-group class="radio-group">
          <b-form-radio-group inline v-model="type">
            <b-form-radio name="type" value="all">전체</b-form-radio>
            <b-form-radio name="type" value="basic">기본형</b-form-radio>
            <b-form-radio name="type" value="point">강조표기형</b-form-radio>
            <b-form-radio name="type" value="img">이미지형</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <label for="template" class="m-0 f-body5 c-gray500">템플릿 검색</label>
        <b-input-group class="w-100">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="dark">조회</b-button>
          </b-input-group-append>
        </b-input-group>

        <div class="d-flex justify-content-between">
          <label class="mb-1 pb-2 f-body5 c-gray500">템플릿 이름 (템플릿 ID)</label>
          <span class="f-body5 c-gray500">총 <span class="text-primary">2건</span></span>
        </div>
        <div class="dropdown b-dropdown template-list">
          <ul class="dropdown-menu show">
            <li>0904_SMS_정보성</li>
            <li>0904_SMS_정보성</li>
            <li>0904_SMS_정보성</li>
          </ul>
        </div>
      </div>
      <div class="section">
        <p class="m-0 mb-1 pb-3 f-body1 c-gray700">템플릿 내용</p>
        <dl class="template-content">
          <dt>발송유형</dt>
          <dd>SMS</dd>
        </dl>
        <dl class="template-content">
          <dt>메시지 구분</dt>
          <dd>내용 노출</dd>
        </dl>
        <dl class="template-content">
          <dt>템플릿 명</dt>
          <dd>0904_SMS_정보성</dd>
        </dl>
        <dl class="template-content">
          <dt>내용</dt>
          <dd>0904_SMS_정보성</dd>
        </dl>
      </div>
      <div class="section">
        <PreviewTalk>
          <!-- NOTE: 템플릿 내용 들어가는 부분 -->
          <div class="w-100">
            <p class="f-body6">웹템플릿 등록 테스트 입니다.</p>
            <b-button variant="secondary" class="w-100">배송조회</b-button>
          </div>
        </PreviewTalk>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary">템플릿 선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
import PreviewTalk from '@/components/service/preview/PreviewTalk.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'

export default {
  components: { PreviewTalk,IconArrowDown, },
  name: "selectTalkTemplateModal",
  data() {
    return {
      channel: '',
      type: 'all'
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('select-talk-template-modal');
    },
    setChannel(value) {
      this.channel = value;
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
.custom-control + .custom-control {
  margin-left: 20px;
}
.radio-group {
  margin-top: 12px;
  margin-bottom: 20px;
}
</style>
