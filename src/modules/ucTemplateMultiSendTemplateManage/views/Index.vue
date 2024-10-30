<template>
  <div class="uc-template-multi-send-manage">
    <TemplateTabs />

    <div class="tab-contents">
      <div class="section card" :class="channelSelected.length === 0 ? 'no-preview' : ''">
        <p class="title f-title1 c-gray900">템플릿 등록</p>

        <p class="m-0 f-body1 c-gray700">01. 발송정보</p>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">메시지 구분 <span class="require">*</span></label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline v-model="message">
              <b-form-radio name="message" value="info">정보성</b-form-radio>
              <b-form-radio name="message" value="ads">광고용</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">메시지 타입 <span class="require">*</span></label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline v-model="type">
              <b-form-radio name="type" value="info">텍스트</b-form-radio>
              <b-form-radio name="type" value="ads">이미지</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 명</label>
          <b-input placeholder="입력" class="template-input" v-model="title"></b-input>
        </div>

        <hr class="hr" />

        <p class="m-0 f-body1 c-gray700">02. 채널 선택</p>

        <div class="d-flex section-col">
          <label class="form-label">채널</label>
            <b-form-group id="channel-checkbox">
            <b-form-checkbox-group
              id="service-checkbox-group-template"
              v-model="channelSelected"
              :options="channelOptions"
              name="channel"
            ></b-form-checkbox-group>
            </b-form-group>

            <i class="vertical-divider"></i>
            <label class="form-label">발송순서</label>
        </div>

        <hr class="hr" />
        
        <div class="section-col">
          <p class="m-0 f-body1 c-gray700">03. 채널 설정</p>
        </div>

        <div class="section-col">
          <div class="empty-channel">
            <p class="m-0 f-body3 c-gray500">채널을 선택해주세요.</p>
          </div>
        </div>

        <div class="submit-wrap">
          <b-button variant="outline-secondary" size="lg">취소</b-button>
          <b-button variant="secondary" size="lg">임시저장</b-button>
          <b-button variant="primary" size="lg" v-b-modal.alert-modal>등록</b-button>
        </div>
      </div>
    </div>

    <AlertModal title="통합 템플릿 관리" desc="RCS 승인 서술형 템플릿 브랜드명을 선택해주세요." />
  </div>
</template>

<script>
import TemplateTabs from '@/components/service/template/TemplateTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
  components: {  TemplateTabs,  AlertModal, },
  name: "ucMultiSendTemplateList",
  data() {
    return {
      message: 'info',
      type: 'text',
      title: '',
      channelSelected: [],
      channelOptions: [
        { text: 'RCS', value: 'rcs' },
        { text: '카카오톡', value: 'kakao' },
        { text: '문자', value: 'sms' },
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.hideMenu = !this.hideMenu;
    },
    navigateToSmartSendMain() {
      this.$router.push(`/uc/message/smartSendMain`);
    },
    openDeleteAlertModal() {
      this.$bvModal.show('alert-modal');
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@import '@/assets/scss/service/message.scss';
@import '@/assets/scss/service/template.scss';

.section.no-preview {
  width: 100%;
  margin: 0;
}
.template-input,
.b-dropdown {
  width: 335px;
}
.vertical-divider {
  width: 1px;
  height: 164px;
  margin: 0 20px;
  background: var(--border-color);
}
.empty-channel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 39px;
  background-color: var(--gray50);
  border-radius: 12px;
}

</style>
