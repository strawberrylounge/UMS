<template>
  <div>
    <div class="select-tempalte-section" v-if="!isSelectTemplate">
      <p>템플릿 승인형 RCS상품은 기 등록 된, 템플릿 정보를 선택하여서 사용 할 수 있습니다.</p>
      <b-button variant="dark" v-b-modal.select-talk-template-modal>RCS 템플릿 선택</b-button>
    </div>

    <div v-else>
      <div class="d-flex align-items-center section-col">
        <label class="form-label">발송유형 <span class="require">*</span></label>
        <b-form-group class="radio-group">
          <b-form-radio-group inline v-model="type" @change="updateType">
            <b-form-radio name="type" value="sms">SMS</b-form-radio>
            <b-form-radio name="type" value="mms">MMS</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>

      <div v-if="type === 'mms'" class="d-flex align-items-center section-col">
        <label class="form-label">발신번호<span class="require">*</span></label>
          <b-dropdown id="number-dropdown" variant="secondary" class="send-number-dropdown">
            <template #button-content>
              <span>{{ phoneNumber === '' ? '선택' : phoneNumber }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setPhoneNumber('010-1234-5678')">010-1234-5678</b-dropdown-item-button>
            <b-dropdown-item-button @click="setPhoneNumber('010-5678-1234')">010-5678-1234</b-dropdown-item-button>
          </b-dropdown>
      </div>

      <div v-if="type === 'mms'"  class="d-flex align-items-center section-col">
        <label class="form-label">제목 <span class="require">*</span></label>
        <div class="d-flex align-items-center section-col-img">
          <b-input placeholder="20자 이내 이력" class="template-input" value="(광고성)"></b-input>
          <span class="ml-1 pl-2 f-body6 c-gary600">(6/40)</span>
        </div>
      </div>

      <div class="d-flex align-items-center section-col">
        <label class="form-label">광고성메시지 <span class="require">*</span>
          <br/>수신거부번호</label>
        <b-input-group>
          <b-input-group-append>
            <b-button variant="dark" v-b-modal.block-number-modal>선택</b-button>
          </b-input-group-append>
          <b-form-input placeholder="ex) 수신거부번호: 123-1234-1234"></b-form-input>
        </b-input-group>
      </div>

      <div class="d-flex section-col">
        <label class="form-label">내용 <span class="require">*</span>
          <b-button v-b-tooltip.hover.html="tooltipMessage" variant="light" class="btn-icon p-0">
            <IconInfo />
          </b-button>
        </label>
        <div class="section-col-img">
          <b-form-textarea
            id="content"
            rows="6"
            max-rows="6"
            :placeholder="placeholder"></b-form-textarea>
          <p class="textarea-count mt-2 mb-0">변수부 제외 길이 (00 / 90)</p>
        </div>
      </div> 

      <div v-if="type === 'mms'" class="d-flex align-items-center section-col">
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

    <b-button variant="outline-primary" class="mt-5" @click="testView">
      <span v-if="isSelectTemplate">템플릿 선택 안되었을때 화면 보기 (퍼블 작업용)</span>
      <span v-else>템플릿 선택되었을때 화면 보기 (퍼블 작업용)</span>
    </b-button>

    <BlockNumberModal />
    <SelectImageModal />
  </div>
</template>

<script>
import BlockNumberModal from '@/modules/ucSmsTemplateManage/components/modal/BlockNumberModal.vue';
import IconInfo from '@/components/service/icons/IconInfo.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import SelectImageModal from '@/modules/ucMessageSendSms/components/modal/SelectImageModal.vue';

export default {
  components: { BlockNumberModal, IconInfo, IconArrowDown, IconClose, SelectImageModal },
  name: "SmsContents",
  props: {
  },
  data() {
    return {
      isSelectTemplate: true,
      type: 'sms',
      placeholder: '변수로 설정하고자 하는 내용을 #{ } 표시로 작성해 주십시오.\n예) 이름과 출금일을 변수 설정\n예) #{name}님 #{yyymmdd} 출금 예정입니다.',
      phoneNumber: ''

    }
  },
  methods: {
    testView() {
      this.isSelectTemplate = !this.isSelectTemplate;
    },
    tooltipMessage() {
      return "<span>광고성 메시지 수신거부번호는 내용 하단에 포함됩니다.<br />또한 광고 표기는 제목 또는 내용에 포함되어 있어야 합니다.</span>"
    },
    setPhoneNumber(value) {
      this.phoneNumber = value;
    },
    updateType() {
      this.$emit('update-type', this.type); 
    }
  },
  watch: {
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@import '@/assets/scss/service/message.scss';
@import '@/assets/scss/service/template.scss';

.select-tempalte-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 631px;
  margin-top: 20px;
  border-radius: 12px;
  background-color: var(--gray50);
  p {
    margin: 0 0 28px 0;
    @include typography.font-style(16px, 400, 140%, -0.32px);
    color: var(--gray500);
  }
}
.input-group {
  width: calc(100% - 120px - 12px);
  .btn-dark {
    width: 100px;
    margin-right: 20px;
  }
  input {
    flex: 0 0 340px;
    width: 340px;
  }
}
.btn-light {
  margin-left: 2px;
  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active:focus,
  &:hover {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
}
.b-dropdown,
.template-input {
  width: 355px;
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
