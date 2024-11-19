<template>
  <div class="uc-message-smart-send-main">
    <!-- 탭 Start -->
    <div class="message-tabs-wrap ">
      <div class="message-tabs">
        <div class="tab" :class="{active: previewType === 'rcs'}">
          <button class="btn" @click="changeTab('rcs')">RCS</button>
        </div>
        <div class="tab" :class="{active: previewType === 'talk'}">
          <button class="btn" @click="changeTab('talk')">알림톡</button>
        </div>
        <div class="tab" :class="{active: previewType === 'mms'}">
          <button class="btn" @click="changeTab('mms')">LMS/MMS</button>
        </div>
      </div>
      <p class="breadcrumb f-body5 c-gray700">발송 > 원스텝메시지 > 통합발송</p>
    </div>
    <!-- 탭 End -->

    <div class="tab-contents d-flex">
      <!-- 미리보기 Start -->
      <div class="preview card p-sticky">
        <p class="preview-title">미리보기</p>
        <PreviewTalk v-if="previewType === 'talk'">
          <div></div>
        </PreviewTalk>

        <PreviewDefault v-else>
          <div v-if="previewType === 'mms'" class="preview-section-title">더미텍스트 메시지 내용입니다.</div>
          <div v-if="previewType === 'mms'" class="preview-section-title mt-2">더미텍스트 메시지 내용입니다.</div>
        </PreviewDefault>
      </div>
      <!-- 미리보기 End -->

      <div class="section card">
        <p class="section-title f-body1 f-bold c-gray700">01.템플릿</p>
        <div class="d-flex align-items-center">
          <label class="form-label">기본, 정보성</label>
          <b-input value="문자 테스트" class="basic-input"></b-input>
        </div>

        <hr class="hr">

        <p class="section-title f-body1 f-bold c-gray700">02.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">수신자<span class="require">*</span></label>
          <div class="messag-btn-group">
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
          <b-button variant="outline-secondary" size="sm">수신자 모두삭제</b-button>
        </div>
        <div class="receive-table">
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

        <p class="section-title f-body1 f-bold c-gray700">03.발송옵션 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">발송시간<span class="require">*</span></label>
          <b-form-group class="radio-group m-0">
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

        <p class="section-title f-body1 f-bold c-gray700">04.발신자 선택</p>
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
          <b-button variant="outline-primary" size="lg" @click="goBack">목록</b-button>
          <b-button variant="secondary" size="lg" v-b-modal.smart-send-test-modal>테스트 발송</b-button>
          <b-button variant="primary" size="lg">발송</b-button>
        </div>
      </div>
    </div>
    <SelectTemplateModal />
    <AddContentModal />
    <AddMMSContentModal />
    <SelectImageModal />
    <SmartSendTestModal />
    <SearchAddressModal />
    <EnterReceiverModal />
  </div>
</template>

<script>
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import PreviewTalk from '@/components/service/preview/PreviewTalk.vue';
import SearchAddressModal from '@/components/service/modal/SearchAddressModal.vue';
import SelectTemplateModal from '@/modules/ucMessageSendSms/components/modal/SelectTemplateModal.vue';
import AddContentModal from '@/modules/ucMessageSendSms/components/modal/AddContentModal.vue';
import AddMMSContentModal from '@/modules/ucMessageSendSms/components/modal/AddMMSContentModal.vue';
import SelectImageModal from '@/modules/ucMessageSendSms/components/modal/SelectImageModal.vue';
import SmartSendTestModal from '@/modules/ucMessageSmartSendMain/components/modal/SmartSendTestModal.vue';
import EnterReceiverModal from '@/modules/ucMessageSendSms/components/modal/EnterReceiverModal.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'

export default {
  components: { IconArrowRight, IconArrowDown, IconDownload, SelectTemplateModal, AddContentModal, IconClose, AddMMSContentModal, SelectImageModal, SearchAddressModal, EnterReceiverModal, CustomDatepicker, SmartSendTestModal, PreviewTalk, PreviewDefault, },
  name: "ucMessageSmartSendMain",
  data() {
    return {
      previewType: 'rcs',
      phoneNumber: '',
      time: 'now',
      startTime: null,
      endTime: null,
    }
  },
  methods: {
    setPhoneNumber(value) {
      this.phoneNumber = value;
    },
    goBack() {
      this.$router.back();
    },
    changeTab(value) {
      this.previewType = value;
    },
    triggerFileInput() {
      // 파일 입력 요소 클릭
      this.$refs.fileInput.$el.click();
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/messageTabs.scss';

.basic-input {
  max-width: 348px;
}
.custom-radio {
  margin-right: 20px;
}
</style>
