<template>
  <div class="uc-sms-tempalte-manage">
    <TemplateTabs />

    <div class="d-flex tab-contents">
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <PreviewDefault>
          <div class="preview-section sms">
            <p class="m-0 f-body6 c-gray900">{{ displayTitle }}</p>
            <p class="m-0 mt-2 f-caption2 c-gray700" v-html="displayContent"></p>
          </div>
          <div class="preview-img">
            <div class="empty-img">
              <img src="@/assets/images/service/preview/preview-img.svg" alt="" class="img-icon">
              <p class="m-0 mt-1 c-caption2 c-gray500">작성페이지에서 이미지를<br/>
                삽입할 수 있습니다.</p>
            </div>
            <!-- <img src="" alt=""> -->
          </div>
        </PreviewDefault>
      </div>

      <div class="section card">
        <p class="title f-title1 c-gray900">템플릿 등록</p>
        <div class="form-wrap">
          <div class="form-row">
            <label for="name">템플릿 명 <span class="require">*</span></label>
            <b-input id="name" v-model="title" @blur="updateTitle"></b-input>
          </div>
          <div class="form-row">
            <label for="desc">템플릿 설명</label>
            <b-input id="desd"></b-input>
          </div>
          <div class="form-row">
            <label>발송유형 <span class="require">*</span></label>
            <b-form-group class="radio-group">
              <b-form-radio-group inline v-model="type">
                <b-form-radio name="type" value="sms">SMS</b-form-radio>
                <b-form-radio name="type" value="lms">LMS</b-form-radio>
                <b-form-radio name="type" value="mms">MMS</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </div>
          <div class="form-row">
            <label>메시지구분 <span class="require">*</span></label>
            <b-form-group class="radio-group">
              <b-form-radio-group inline>
                <b-form-radio name="type" value="a">광고성</b-form-radio>
                <b-form-radio name="type" value="b">정보성</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </div>
          <div class="form-row" v-if="type !== 'sms'">
            <label>제목 <span class="require">*</span></label>
            <b-input id="desd"></b-input>
          </div>
          <div class="form-row align-items-start">
            <label for="content">내용 <span class="require">*</span></label>
            <div>
              <b-form-textarea
                id="content"
                rows="6"
                max-rows="6"
                v-model="content"
                @blur="updateContent"
              ></b-form-textarea>
              <p class="m-0 mt-1 pt-2 f-body5 c-gary600">({{content.length}}/1,000)</p>
            </div>
          </div>
          <div class="form-row">
            <label class="f-body5 c-gray500">광고성메시지 <span class="require">*</span>
              <br/>수신거부번호</label>
            <b-input-group>
              <b-input-group-append>
                <b-button variant="dark" v-b-modal.block-number-modal>선택</b-button>
              </b-input-group-append>
              <b-form-input placeholder="ex) 수신거부번호: 123-1234-1234"></b-form-input>
            </b-input-group>
          </div>
          <div class="form-row" v-if="type !== 'lms'">
            <label class="form-label">이미지</label>
            <div class="content-image">
              <b-button variant="outline-primary" size="sm" v-b-modal.select-image-modal>이미지 선택</b-button>
              <ul class="image-select-list m-0 p-0">
                <li>
                  <span class="text-truncate">jpghttps://api.msghub-dev.uplus.co.kr/jpghttps://api.msghub-dev.uplus.co.kr/ </span>
                  <button type="button" class="btn btn-icon p-0">
                    <IconClose />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="hr" />
        <div class="submit-wrap">
          <b-button variant="secondary" size="lg">취소</b-button>
          <b-button variant="primary" size="lg">등록</b-button>
        </div>
      </div>
    </div>
    <SelectImageModal />
    <BlockNumberModal />
  </div>
</template>

<script>
import TemplateTabs from '@/components/service/template/TemplateTabs.vue';
import SelectImageModal from '@/modules/ucMessageSendSms/components/modal/SelectImageModal.vue';
import BlockNumberModal from '@/modules/ucSmsTemplateManage/components/modal/BlockNumberModal.vue';
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';
import IconClose from '@/components/service/icons/IconClose.vue';

export default {
  components: {  SelectImageModal, TemplateTabs, PreviewDefault, IconClose, BlockNumberModal, },
  name: "ucSmsTempalteManage",
  data() {
    return {
      type: 'sms',
      title: '',
      content: '',
      displayTitle: '',
      displayContent: ''
    }
  },
  methods: {
    updateTitle() {
      this.displayTitle = this.title;
    },
    updateContent() {
      this.displayContent = this.nl2br(this.content);
    },
    nl2br(str) {
    if (typeof str === 'string') {
      return str.replace(/\n/g, '<br>');
    }
    return str;
  }
  },
  watch: {
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/service/message.scss';
@import '@/assets/scss/service/template.scss';

.input-group-append {
  .btn {
    width: 120px;
    margin-right: 12px;
  }
  input {
    width: 340px;
  }
}
.content-image {
  display: flex;
  align-items: center;
  .btn {
    margin-right: 28px;
  }
  li {
    display: flex;
    align-items: center;
    span {
      max-width: 240px;
      margin-right: 12px;
    }
  }
}
</style>
