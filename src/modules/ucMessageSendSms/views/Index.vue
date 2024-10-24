<template>
  <div class="uc-message-send-sms">
    <!-- 탭 Start -->
    <div class="tabs-wrap">
      <div class="service-tabs">
        <div class="tab">
          <a href="/uc/message/multiSendList">원스텝메시지</a>
        </div>
        <div class="tab active">
          <a href="#">문자</a>
        </div>
        <div class="tab">
          <a href="#">RCS</a>
        </div>
        <div class="tab">
          <a href="#">카카오톡</a>
        </div>
      </div>
      <p class="breadcrumb">발송 > 문자</p>
    </div>
    <!-- 탭 End -->
    <div class="tab-contents">
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <div class="preview-image">
        </div>
      </div>
      <div class="sms-area card">
        <p class="sms-title">01.메세지 내용</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">발송유형</label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline>
              <b-form-radio name="some-radios" value="A">SMS</b-form-radio>
              <b-form-radio name="some-radios" value="B">LMS</b-form-radio>
              <b-form-radio name="some-radios" value="C">MMS</b-form-radio>
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
          <b-button variant="outline-primary" size="sm">내용입력</b-button>
        </div>

        <hr class="hr">

        <p class="sms-title">02.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">수신자<span class="require">*</span></label>
          <div class="receive-btn-wrap">
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right">
              <span>수신자 직업입력</span>
              <IconArrowRight />
            </b-button>
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right">
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
          <b-button variant="outline-secondary" size="sm" disabled>수신자 모두삭제</b-button>
        </div>

        <hr class="hr">

        <p class="sms-title">03.발송옵션 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-labal">발송시간<span class="require">*</span></label>
          <b-form-group class="radio-group">
            <b-form-radio-group inline>
              <b-form-radio name="time" value="A">즉시</b-form-radio>
              <b-form-radio name="time" value="B">예약</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <hr class="hr">

        <p class="sms-title">04.발신자 선택</p>
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

        <div class="submit-wrap">
          <b-button variant="secondary" size="lg">테스트 발송</b-button>
          <b-button variant="primary" size="lg">발송</b-button>
        </div>
      </div>
    </div>
    <SelectTemplate />
  </div>
</template>

<script>
import '@/assets/scss/service/message.scss';
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import SelectTemplate from '@/modules/ucMessageSendSms/components/modal/SelectTemplate.vue';

export default {
  components: { IconArrowRight, IconArrowDown, IconDownload, SelectTemplate, },
  name: "ucMessageSendSms",
  data() {
    return {
      phoneNumber: '',
    }
  },
  methods: {
    setPhoneNumber(value) {
      this.phoneNumber = value;
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
</style>
