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
        <div class="tab active">
          <a href="#">RCS</a>
        </div>
        <div class="tab">
          <a href="#">카카오톡</a>
        </div>
      </div>
      <p class="breadcrumb">발송 > RCS</p>
    </div>
    <!-- 탭 End -->

    <div class="tab-contents">
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <div class="preview-image">
        </div>
      </div>
      <div class="sms-area card">
        <div class="card-title">
          <p>RCS 상품</p>
          <p>* RCS 유형을 먼저 선택해 주십시오. 템플릿형은 광고성 메세지를 보내실 수 없습니다.</p>
        </div>

        <!-- 템플릿 탭 Start -->
        <div class="sub-tabs-wrap">
          <div class="service-sub-tabs">
            <div class="tab" :class="{active: subTab === 'allow'}">
              <button class="btn" @click="changeSubTab('allow')">승인</button>
            </div>
            <div class="tab" :class="{active: subTab === 'notallow'}">
              <button class="btn" @click="changeSubTab('notallow')">비승인</button>
            </div>
          </div>
        </div>
        <!-- 템플릿 탭 End -->

        <!-- 승인 템플릿 탭 Start -->
        <div v-if="subTab === 'allow'" class="template-tabs-wrap">
          <div class="service-template-tabs">
            <div class="tab" :class="{active: templateTab === 'template'}">
              <button class="btn" @click="changeTemplateTab('template')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestion />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'aaa'}">
              <button class="btn" @click="changeTemplateTab('aaa')">000형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestion />
                </b-button>
              </button>
            </div>
          </div>
        </div>
        <!-- 승인 템플릿 탭 End -->

        <!-- 비승인 템플릿 탭 Start -->
        <div v-if="subTab === 'notallow'" class="template-tabs-wrap">
          <div class="service-template-tabs">
            <div class="tab" :class="{active: templateTab === 'template'}">
              <button class="btn" @click="changeTemplateTab('template')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestion />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'aaa'}">
              <button class="btn" @click="changeTemplateTab('aaa')">000형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestion />
                </b-button>
              </button>
            </div>
          </div>
        </div>
        <!-- 비승인 템플릿 탭 End -->

        <!-- 승인 템플릿 내용 Start -->
        <div class="service-template-content">
          <div v-if="templateTab === 'template'">
            <div class="template-select">
              <TemplateCard>
                <b-form-radio name="type" value="A" class="custom-radio-vertical">내용A</b-form-radio>
              </TemplateCard>
              <TemplateCard>
                <b-form-radio name="type" value="B" class="custom-radio-vertical">내용B</b-form-radio>
              </TemplateCard>
            </div>
          </div>
          <div v-else-if="templateTab === 'aaa'"></div>
        </div>
        <!-- 승인 템플릿 내용 End -->
 
        <hr class="hr">

        <p class="sms-title">01.브랜드 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">브랜드</label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="brand-dropdown">
            <template #button-content>
              <span>{{ barnd === '' ? '선택' : barnd }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setBrand('BRAND_A')">BRAND_A</b-dropdown-item-button>
            <b-dropdown-item-button @click="setBrand('BRAND_B')">BRAND_B</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <hr class="hr">

        <p class="sms-title">02.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">템플릿</label>
          <div class="receive-btn-wrap">
            <b-button variant="outline-primary" size="sm" v-b-modal.select-template-modal>RCS 템플릿 선택</b-button>
          </div>
        </div>
        <div class="d-flex align-items-center sms-select">
          <label class="form-labal">발신번호</label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline>
              <b-form-radio name="some-radios" value="A">불가능</b-form-radio>
              <b-form-radio name="some-radios" value="B">가능</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <span class="radio-info">※ 단말 내 메시지에 대한 복사가능여부 설정입니다.</span>
        </div>
        <div class="d-flex align-items-center">
          <label class="form-labal">발신번호<span class="require">*</span></label>
          <b-dropdown id="number-dropdown" variant="secondary" class="number-dropdown">
            <template #button-content>
              <span>{{ phoneNumber === '' ? '선택' : phoneNumber }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setPhoneNumber('010-1234-5678')">010-1234-5678</b-dropdown-item-button>
            <b-dropdown-item-button @click="setPhoneNumber('010-5678-1234')">010-5678-1234</b-dropdown-item-button>
          </b-dropdown>
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
          <b-button variant="outline-secondary" size="sm" :disabled="type === 'SMS'">수신자 모두삭제</b-button>
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
          <b-button variant="secondary" size="lg" v-b-modal.send-test-modal>테스트 발송</b-button>
          <b-button variant="primary" size="lg">발송</b-button>
        </div>
      </div>
    </div>

    <SearchAddressModal />
    <EnterReceiverModal />
  </div>
</template>

<script>
import '@/assets/scss/service/message.scss';
import IconQuestion from '@/components/service/icons/IconQuestion.vue'
import TemplateCard from '@/components/service/TemplateCard.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import SearchAddressModal from '@/components/service/modal/SearchAddressModal.vue';
import EnterReceiverModal from '@/modules/ucMessageSendSms/components/modal/EnterReceiverModal.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'

export default {
  components: { IconQuestion, TemplateCard, IconArrowDown, IconArrowRight, IconDownload, IconClose, SearchAddressModal, EnterReceiverModal, CustomDatepicker, },
  name: "ucRcsTemplateSend",
  data() {
    return {
      subTab: 'allow',
      templateTab: 'template',
      barnd: '',
      phoneNumber: '',
      type: 'SMS',
      time: 'now',
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
.card-title {
  display: flex;
  align-items: end;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
    color: var(--gray-900);
    & + p {
      margin-left: 28px;
      font-size: 14px;
      font-weight: 700;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.28px;
      color: var(--gray-500);
    }
  }
}
.service-sub-tabs {
  display: flex;
  margin-top: 28px;
  border-bottom: 1px solid var(--border-color);
  .tab {
    .btn {
      margin: 0;
      padding: 0 0 12px 0;
      border: none;
      font-size: 16px;
      font-weight: 700;
      line-height: 140%; /* 22.4px */
      letter-spacing: -0.32px;
      color: var(--gray-500)
    }
    & + .tab {
      margin-left: 28px;
    }
    &.active {
      .btn {
        position: relative;
        border-radius: 0;
        color: var(--primary);
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary);
        }
      }
    }
  }
}
.service-template {
  &-tabs {
    display: flex;
    margin-top: 28px;
    .tab {
      .btn:not(.btn-icon) {
        background-color: #F7F8FB;
        border: 1px solid var(--border-color);
        border-radius: 0;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
        color: #6E6F73;
      }
      & + .tab {
        .btn {
          border-left: none;
        }
      }
      &.active {
        .btn {
          background-color: #6E6F73;
          color: var(--white);
        }
      }
    }
  }
  &-content {
    min-height: 224px;
    margin-top: 12px;
    padding: 20px;
    background-color: var(--gray-50);
    border: 1px solid var(--border-color);
  }
}
.template-select {
  & > div + div {
    margin-left: 12px;
  }
}
.hr {
  margin: 24px 0;
}
.radio-info {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-600)
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
.custom-radio:not(.custom-radio-vertical) {
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
.brand-dropdown,
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
  .table {
    tbody tr:last-child td {
      border-bottom: none;
    }
    th, td {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
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
</style>
