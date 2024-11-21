<template>  
  <b-modal scrollable id="select-template-modal" title="템플릿 선택" hide-header-close size="xl" centered content-class="select-template-modal">
    <div class="d-flex">
      <div class="section">
        <label for="template" class="f-body5 c-gray500">템플릿 검색</label>
        <b-input-group class="w-100">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="dark">조회</b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="d-flex justify-content-between">
          <label class="f-body5 c-gray500">템플릿 이름 (템플릿 ID)</label>
          <span class="f-body4 f-bold c-gray500">총 <span class="text-primary">2건</span></span>
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
        <PreviewDefault>
          <!-- NOTE: 템플릿 내용 들어가는 부분 -->
          <div class="preview-section-title">웹 템플릿 등록 테스트입니다.</div>
        </PreviewDefault>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary">템플릿 선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';

export default {
  components: {PreviewDefault, },
  name: "selectTemplateModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('select-template-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
</style>
