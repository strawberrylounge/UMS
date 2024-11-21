<template>
  <div class="uc-message-send-sms">
    <MessageTabs />

    <div class="d-flex tab-contents">
      <div class="preview card p-sticky">
        <p class="preview-title">미리보기</p>
        <PreviewTalk size="lg">
          <div></div>
        </PreviewTalk>
      </div>
      <div class="section card flex-fill">
        <p class="section-title f-body1 c-gray700">01.발송정보</p>
        <div class="d-flex align-items-center">
          <label class="form-label">템플릿</label>
          <b-button variant="outline-primary" size="sm" v-b-modal.select-talk-template-modal>템플릿 선택</b-button>
        </div>

        <hr class="hr">

        <p class="section-title f-body1 c-gray700">02.메시지 내용</p>
        <div class="d-flex align-items-center">
          <label class="form-label">내용</label>
          <b-button variant="outline-primary" size="sm" v-b-modal.view-content-modal>내용보기</b-button>
        </div>
        <div class="d-flex button-list">
          <label class="form-label">버튼</label>
          <div class="table-responsive">
            <table class="table">
              <colgroup>
                <col width="25%">
                <col width="25%">
                <col width="40%">
                <col width="10%">
              </colgroup>
              <thead>
                <tr>
                  <th>
                    타입
                    <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip">
                      <IconInfo />
                    </b-button>
                  </th>
                  <th>버튼 이름</th>
                  <th>버튼 링크</th>
                  <th class="text-center">삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b-input disabled value="웹"></b-input>
                  </td>
                  <td>
                    <b-input disabled value="이름"></b-input>
                  </td>
                  <td>
                    <span class="f-body5 c-gray400">버튼 링크 내용 노출</span>
                  </td>
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

        <p class="section-title f-body1 c-gray700">03.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">수신자<span class="require">*</span></label>
          <div class="receive-btn-wrap">
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

        <p class="section-title f-body1 c-gray700">04.발송옵션 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">발송시간<span class="require">*</span></label>
          <b-form-group class="m-0">
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

        <div class="submit-wrap">
          <b-button variant="secondary" size="lg" v-b-modal.send-test-modal>테스트 발송</b-button>
          <b-button variant="primary" size="lg">발송</b-button>
        </div>
      </div>
    </div>

    <SearchAddressModal />
    <EnterReceiverModal />
    <SelectTalkTemplateModal />
    <ViewContentModal />
    <SendTestModal />
  </div>
</template>

<script>
import IconInfo from '@/components/service/icons/IconInfo.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import SearchAddressModal from '@/components/service/modal/SearchAddressModal.vue';
import EnterReceiverModal from '@/modules/ucMessageSendSms/components/modal/EnterReceiverModal.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import SelectTalkTemplateModal from '@/modules/ucMessageSendAlimTalk/components/modal/SelectTalkTemplateModal.vue';
import ViewContentModal from '@/modules/ucMessageSendAlimTalk/components/modal/ViewContentModal.vue';
import PreviewTalk from '@/components/service/preview/PreviewTalk.vue';
import MessageTabs from '@/components/service/message/MessageTabs.vue'
import SendTestModal from '@/modules/ucMessageSendSms/components/modal/SendTestModal.vue';

export default {
  components: { SendTestModal, IconInfo, IconArrowRight, IconDownload, IconClose, SearchAddressModal, EnterReceiverModal, CustomDatepicker, SelectTalkTemplateModal, PreviewTalk, MessageTabs, ViewContentModal, },
  name: "ucRcsTemplateSend",
  data() {
    return {
      subTab: 'allow',
      templateTab: 'template',
      barnd: '',
      phoneNumber: '',
      time: 'now',
      templateCard: 'A',
      startTime: null,
      endTime: null,
    }
  },
  methods: {
    changeSubTab(value) {
      this.subTab = value;
    },
    changeTemplateTab(value) {
      this.templateTab = value;
    },
    tooltipContent() {
      return '<ul><li>정보성 메시지를 사전에 등록 및 승일을 받아 메시지를 발송할 수 있습니다.</li><li>스타일/서술 템플릿 형식은 승인완료된 양식만 발송 할 수 있습니다.</li><li>템플릿형은 광고성 메시지를 발송할 수 없습니다.</li></ul>'
    },
    setBrand(value) {
      this.barnd = value;
    },
    setPhoneNumber(value) {
      this.phoneNumber = value;
    },
    showConfirmModal() {
      this.$bvModal.show('confirm-modal');
    },
    triggerFileInput() {
      // 파일 입력 요소 클릭
      this.$refs.fileInput.$el.click();
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';

.basic-input {
  max-width: 348px;
}
.custom-radio {
  margin-right: 20px;
}
.receive-btn-wrap {
  button + button {
    margin-left: 12px;
  }
}
.button-list {
  margin-top: 20px;
  .table-responsive {
    width: calc(100% - 132px);
  }
}
.table td {
  vertical-align: middle;
}
</style>
