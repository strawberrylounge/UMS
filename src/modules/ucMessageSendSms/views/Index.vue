<template>
  <div class="uc-message-send-sms">
    <MessageTabs />

    <div class="tab-contents">
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <div class="preview-image">
          <div v-if="showPreviewTitle" class="preview-section-title">0904_SMS_광고성  #{내용}입니다.</div>
        </div>
      </div>
      <div class="section card">
        <p class="section-title">01.메세지 내용</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">발송유형</label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline v-model="type">
              <b-form-radio name="type" value="SMS">SMS</b-form-radio>
              <b-form-radio name="type" value="LMS">LMS</b-form-radio>
              <b-form-radio name="type" value="MMS">MMS</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>
        <div class="d-flex align-items-center sms-select">
          <label class="form-labal">메시지 구분<span class="require">*</span></label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline>
              <b-form-radio name="some-radios" value="A">광고성</b-form-radio>
              <b-form-radio name="some-radios" value="B">정보성</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>
        <div class="btn-wrap">
          <b-button variant="outline-primary" size="sm" v-b-modal.select-template-modal>템플릿 불러오기</b-button>
          <b-button v-if="type === 'MMS'" variant="outline-primary" size="sm" v-b-modal.add-mms-content-modal>내용입력</b-button>
          <b-button v-else variant="outline-primary" size="sm" v-b-modal.add-content-modal>내용입력</b-button>
        </div>

        <div v-if="type === 'MMS'" class="d-flex align-items-start image-select">
          <label class="form-labal">이미지</label>
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

        <p class="section-title">02.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">수신자<span class="require">*</span></label>
          <div class="receive-btn-wrap">
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right" v-b-modal.enter-receiver-modal>
              <span>수신자 직접입력</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right" v-b-modal.search-address-modal>
              <span>주소록 검색</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right">
              <span>엑셀 업로드</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="light" class="btn btn-sm btn-svg btn-svg-right btn-download">
              <span>샘플 다운로드</span>
              <IconDownload />
            </b-button>
          </div>
        </div>
        <div class="d-flex align-items-center receive-count">
          <p>수신자: <span class="text-primary">0명</span></p>
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

        <p class="section-title">03.발송옵션 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">발송시간<span class="require">*</span></label>
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

        <p class="section-title">04.발신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">발신번호<span class="require">*</span></label>
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
import '@/assets/scss/service/message.scss';
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

export default {
  components: { IconArrowRight, IconArrowDown, IconDownload, SelectTemplateModal, AddContentModal, IconClose, AddMMSContentModal, SelectImageModal, SendTestModal, SearchAddressModal, EnterReceiverModal, CustomDatepicker, MessageTabs, },
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
    }
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
.tabs-wrap {
  display: flex;
  align-items: center;
  padding: 28px 40px 0;
  border-bottom: 1px solid var(--border-color);
}
.breadcrumb {
  margin: 0 0 0 auto;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray700);
  white-space: nowrap;
}
.tab-contents {
  display: flex;
  padding: 20px 40px 64px;
}
.preview {
  padding: 28px;
  &-title {
    margin: 0 0 28px 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
    color: var(--gray700);
  }
}
.radio-group {
  margin: 0;
}
.custom-radio {
  margin-right: 20px;
}
.sms-select {
  margin: 20px 0;
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
      font-size: 16px;
      font-weight: 500;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.32px;
      color: var(--gray900);
    }
    .btn {
      margin-left: 12px;
    }
  }
}
.btn-wrap {
  padding-left: 132px;
  button + button {
    margin-left: 12px;
  }
}
.hr {
  margin: 24px 0;
}
.btn-download {
  padding: 0;
  background-color: var(--white);
  border: none;
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray700);
    text-decoration-line: underline;
  }
  svg {
    margin-left: 4px;
  }
  &:not(:disabled):active:focus {
    background-color: var(--white);
    border: none;
    box-shadow: none;
  }
}
.receive-btn-wrap {
  button + button {
    margin-left: 12px;
  }
}
.receive-count{
  margin-top: 20px;
  padding-left: 132px;
  p {
    margin: 0 20px 0 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray600);
  }
}
</style>
