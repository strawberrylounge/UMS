<template>
  <div class="uc-message-send-sms">
    <!-- 탭 Start -->
    <div class="tabs-wrap">
      <div class="service-tabs">
        <div class="tab">
          <a href="/uc/message/multiSendList">원스텝메시지</a>
        </div>
        <div class="tab">
          <a href="/uc/message/sendSms">문자</a>
        </div>
        <div class="tab">
          <a href="/uc/rcsTemplateSend">RCS</a>
        </div>
        <div class="tab active">
          <a href="#">카카오톡</a>
        </div>
      </div>
      <p class="breadcrumb">발송 > 알림톡</p>
    </div>
    <!-- 탭 End -->

    <div class="tab-contents">
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <PreviewTalk>
          <div></div>
        </PreviewTalk>
      </div>
      <div class="sms-area card">
        <p class="sms-title">01.발송정보</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">템플릿</label>
          <b-button variant="outline-primary" size="sm" v-b-modal.select-talk-template-modal>템플릿 선택</b-button>
        </div>

        <hr class="hr">

        <p class="sms-title">02.메시지 내용</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">내용</label>
          <b-button variant="outline-primary" size="sm" v-b-modal.select-talk-template-modal>내용보기</b-button>
        </div>
        <div class="d-flex button-list">
          <label class="form-labal">버튼</label>
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
                    <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0">
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
                    <span class="btn-link-info">버튼 링크 내용 노출</span>
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

        <p class="sms-title">03.수신자 선택</p>
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
          <b-button variant="outline-secondary" size="sm">수신자 모두삭제</b-button>
        </div>
        <div class="receive-list">
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

        <p class="sms-title">04.발송옵션 선택</p>
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

        <div class="submit-wrap">
          <b-button variant="secondary" size="lg">테스트 발송</b-button>
          <b-button variant="primary" size="lg">발송</b-button>
        </div>
      </div>
    </div>

    <SearchAddressModal />
    <EnterReceiverModal />
    <SelectTalkTemplateModal />
    <ConfirmModal title="RCS 발송" desc="템플릿을 변경하면 입력된 데이터가 모두 초기화됩니다. 변경하시겠습니까?" />
  </div>
</template>

<script>
import '@/assets/scss/service/message.scss';
import IconInfo from '@/components/service/icons/IconInfo.vue'
import TemplateCard from '@/components/service/TemplateCard.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import SearchAddressModal from '@/components/service/modal/SearchAddressModal.vue';
import EnterReceiverModal from '@/modules/ucMessageSendSms/components/modal/EnterReceiverModal.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import SelectTalkTemplateModal from '@/modules/ucMessageSendAlimTalk/components/modal/SelectTalkTemplateModal.vue';
import PreviewTalk from '@/components/service/preview/PreviewTalk.vue';

export default {
  components: { IconInfo, TemplateCard, IconArrowDown, IconArrowRight, IconDownload, IconClose, SearchAddressModal, EnterReceiverModal, CustomDatepicker, ConfirmModal, SelectTalkTemplateModal, PreviewTalk, },
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
    }
  },
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
  color: var(--gray-700);
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
    color: var(--gray-700);
  }
}
.sms-area {
  width: calc(100% - 400px);
  margin-left: 20px;
  padding: 28px;
  .form-labal {
    width: 120px;
    margin: 0 12px 0 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray-500);
  }
}
.basic-input {
  max-width: 348px;
}
.sms-title {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
  color: var(--gray-700);
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
      color: var(--gray-900);
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
    color: var(--gray-700);
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
    color: var(--gray-600);
  }
}
.number-dropdown {
  width: 348px;
}
.submit-wrap {
  text-align: center;
  button {
    min-width: 200px;
    & + button {
      margin-left: 20px;
    }
  }
}
.receive-list {
  max-width: 602px;
  margin-top: 20px;
  padding-left: 132px;
}
.book-form {
  display: flex;
  align-items: center;
  .datepicker-container {
    width: 180px;
    margin-right: 12px;
  }
  .time-divider {
    padding: 0 12px;
    font-size: 14px;
  }
}
.button-list {
  margin-top: 20px;
  .table-responsive {
    width: calc(100% - 132px);
  }
}
.btn-link-info {
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-400)
}
</style>
