<template>
  <div class="uc-message-send-sms">
    <MessageTabs />

    <div class="d-flex tab-contents">
      <div class="preview card p-sticky">
        <p class="preview-title">미리보기</p>
        <PreviewDefault size="lg">
          <div v-if="showPreviewTitle" class="preview-section-title">0904_SMS_광고성  #{내용}입니다.</div>
        </PreviewDefault>
      </div>

      <div class="section card flex-fill">
        <p class="section-title f-body1 c-gray700">01.메세지 내용</p>
        <div class="d-flex align-items-center">
          <label class="form-label">발송유형</label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline v-model="type">
              <b-form-radio name="type" value="SMS">SMS</b-form-radio>
              <b-form-radio name="type" value="LMS">LMS</b-form-radio>
              <b-form-radio name="type" value="MMS">MMS</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>
        <div class="d-flex align-items-center my-1 py-3">
          <label class="form-label">메시지 구분<span class="require">*</span></label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline>
              <b-form-radio name="some-radios" value="A">광고성</b-form-radio>
              <b-form-radio name="some-radios" value="B">정보성</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>
        <div class="btn-wrap">
          <b-button variant="outline-primary" size="sm" v-b-modal.select-template-modal>템플릿 불러오기</b-button>
          <b-button v-show="type === 'MMS' || type === 'LMS'" variant="outline-primary" size="sm" v-b-modal.add-mms-content-modal>내용입력</b-button>
          <b-button v-show="type === 'SMS'" variant="outline-primary" size="sm" v-b-modal.add-content-modal>내용입력</b-button>
        </div>

        <div v-if="type === 'MMS'" class="d-flex align-items-start image-select">
          <label class="form-label">이미지</label>
          <b-button variant="outline-primary" size="sm" v-b-modal.select-image-modal>이미지 선택</b-button>
          <ul class="image-select-list">
            <li>
              <span class="text-truncate">jpghttps://api.msghub-dev.uplus.co.kr/jpghttps://api.msghub-dev.uplus.co.kr/ </span>
              <button type="button" class="btn btn-icon p-0">
                <IconClose />
              </button>
            </li>
            <li>
              <span class="text-truncate">jpghttps://api.msghub-dev.uplus.co.kr/... </span>
              <button type="button" class="btn btn-icon p-0">
                <IconClose />
              </button>
            </li>
            <li>
              <span class="text-truncate">jpghttps://api.msghub-dev.uplus.co.kr/... </span>
              <button type="button" class="btn btn-icon p-0">
                <IconClose />
              </button>
            </li>
          </ul>
        </div>

        <hr class="hr">

        <p class="section-title f-body1 c-gray700">02.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">수신자<span class="require">*</span></label>
          <div class="p-0 btn-wrap">
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right" v-b-modal.enter-receiver-modal>
              <span>수신자 직접입력</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right" v-b-modal.search-address-modal>
              <span>주소록 검색</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right" @click="triggerFileInput">
              <span>엑셀 업로드</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-sample-download">
              <span>샘플 다운로드</span>
              <IconDownload />
            </b-button>
            <b-form-file v-model="file" class="d-none" plain ref="fileInput"></b-form-file>
          </div>
        </div>
        <div class="d-flex align-items-center receive-count">
          <p class="m-0 mr-1 pr-3 f-body5 c-gray600">수신자: <span class="text-primary">0명</span></p>
          <b-button variant="outline-secondary" size="sm" :disabled="type === 'SMS'">수신자 모두삭제</b-button>
        </div>
        <div v-if="type !== 'SMS'" class="receive-table">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>매체</th>
                  <th>번호</th>
                  <th>기타</th>
                  <th class="text-center">삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phone</td>
                  <td>010-0000-0000</td>
                  <td>mergeData</td>
                  <td class="text-center">
                    <button class="btn btn-icon p-0">
                      <IconClose />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr class="hr">

        <p class="section-title f-body1 c-gray700">03.발송옵션 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">발송시간<span class="require">*</span></label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline v-model="time">
              <b-form-radio name="time" value="now" >즉시</b-form-radio>
              <b-form-radio name="time" value="book">예약</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <div v-if="time === 'book'" class="book-form">
            <CustomDatepicker />
            <vue-timepicker v-model="startTime" format="hh" :hour-range="[0, 23]" class="book-time"></vue-timepicker>
            <span class="time-divider">:</span>
            <vue-timepicker v-model="endTime" format="hh" :hour-range="[0, 23]" class="book-time"></vue-timepicker>
          </div>
        </div>

        <hr class="hr">

        <p class="section-title f-body1 c-gray700">04.발신자 선택</p>
        <div class="d-flex align-items-center">
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

        <hr class="hr">

        <div class="submit-wrap">
          <b-button variant="secondary" size="lg" v-b-modal.send-test-modal>테스트 발송</b-button>
          <b-button variant="primary" size="lg">발송</b-button>
        </div>
      </div>
    </div>
    <SelectTemplateModal />
    <AddContentModal />
    <AddMMSContentModal />
    <SelectImageModal />
    <SendTestModal />
    <SearchAddressModal />
    <EnterReceiverModal />
  </div>
</template>

<script>
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import MessageTabs from '@/components/service/message/MessageTabs.vue';
import SearchAddressModal from '@/components/service/modal/SearchAddressModal.vue';
import SelectTemplateModal from '@/modules/ucMessageSendSms/components/modal/SelectTemplateModal.vue';
import AddContentModal from '@/modules/ucMessageSendSms/components/modal/AddContentModal.vue';
import AddMMSContentModal from '@/modules/ucMessageSendSms/components/modal/AddMMSContentModal.vue';
import SelectImageModal from '@/modules/ucMessageSendSms/components/modal/SelectImageModal.vue';
import SendTestModal from '@/modules/ucMessageSendSms/components/modal/SendTestModal.vue';
import EnterReceiverModal from '@/modules/ucMessageSendSms/components/modal/EnterReceiverModal.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';

export default {
  components: { IconArrowRight, IconArrowDown, IconDownload, SelectTemplateModal, AddContentModal, IconClose, AddMMSContentModal, SelectImageModal, SendTestModal, SearchAddressModal, EnterReceiverModal, CustomDatepicker, MessageTabs, PreviewDefault, },
  name: "ucMessageSendSms",
  data() {
    return {
      phoneNumber: '',
      type: 'SMS',
      showPreviewTitle: false,
      time: 'now',
      startTime: null,
      endTime: null,
    }
  },
  methods: {
    setPhoneNumber(value) {
      this.phoneNumber = value;
    },
    triggerFileInput() {
      // 파일 입력 요소 클릭
      this.$refs.fileInput.$el.click();
    },
  },
  watch: {
    type: function (val) {
      if (val === 'LMS') {
        this.showPreviewTitle = true
      }
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';

.radio-group {
  margin: 0;
}
.custom-radio {
  margin-right: 20px;
}
.btn-wrap {
  padding-left: 132px;
  button + button {
    margin-left: 12px;
  }
}
.image-select {
  margin-top: 20px;
  &-list {
    margin: 0 0 0 28px;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      & + li {
        margin-top: 16px;
      }
    }
    span {
      max-width: 240px;
      overflow: hidden;
      @include typography.font-style(16px, 500, 140%, -0.32px);
      color: var(--gray900);
    }
    .btn {
      margin-left: 12px;
    }
  }
}
</style>
