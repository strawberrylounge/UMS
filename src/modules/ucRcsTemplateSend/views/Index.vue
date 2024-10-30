<template>
  <div class="uc-message-send-sms">
    <MessageTabs />

    <div class="d-flex tab-contents">
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <PreviewDefault>
        </PreviewDefault>
      </div>
      <div class="section card scroll-area">
        <div class="d-flex align-items-end">
          <p class="m-0 mr-1 pr-2 f-title1 c-gray900">RCS 상품</p>
          <p class="m-0 ml-3 f-body4 f-bold c-gray500">* RCS 유형을 먼저 선택해 주십시오. 템플릿형은 광고성 메세지를 보내실 수 없습니다.</p>
        </div>

        <!-- 승인/비승인 탭 Start -->
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
        <!-- 승인/비승인 탭 End -->

        <!-- 승인 템플릿 탭 Start -->
        <div v-if="subTab === 'allow'" class="template-tabs-wrap">
          <div class="service-template-tabs">
            <div class="tab" :class="{active: templateTab === 'template'}">
              <button class="btn" @click="changeTemplateTab('template')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'aaa'}">
              <button class="btn" @click="changeTemplateTab('aaa')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestionLine />
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
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'aaa'}">
              <button class="btn" @click="changeTemplateTab('aaa')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0">
                  <IconQuestionLine />
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
                <b-form-radio name="type" value="A" class="custom-radio-vertical" @change="showConfirmModal">내용A</b-form-radio>
              </TemplateCard>
              <TemplateCard>
                <b-form-radio name="type" value="B" class="custom-radio-vertical" @change="showConfirmModal">내용B</b-form-radio>
              </TemplateCard>
            </div>
          </div>
          <div v-else-if="templateTab === 'aaa'"></div>
        </div>
        <!-- 승인 템플릿 내용 End -->
 
        <hr class="hr">

        <p class="section-title f-body1 c-gray700">01.브랜드 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">브랜드</label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown">
            <template #button-content>
              <span>{{ barnd === '' ? '선택' : barnd }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setBrand('BRAND_A')">BRAND_A</b-dropdown-item-button>
            <b-dropdown-item-button @click="setBrand('BRAND_B')">BRAND_B</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <hr class="hr">

        <p class="section-title f-body1 c-gray700">02.수신자 선택</p>
        <div class="d-flex align-items-center">
          <label class="form-label">템플릿</label>
          <div class="receive-btn-wrap">
            <b-button variant="outline-primary" size="sm" v-b-modal.select-rcs-template-modal>RCS 템플릿 선택</b-button>
          </div>
        </div>
        <div class="d-flex align-items-center my-1 py-3">
          <label class="form-label">발신번호</label>
          <b-form-group class="m-0">
            <b-form-radio-group inline>
              <b-form-radio name="some-radios" value="A">불가능</b-form-radio>
              <b-form-radio name="some-radios" value="B">가능</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <span class="radio-info">※ 단말 내 메시지에 대한 복사가능여부 설정입니다.</span>
        </div>
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
            <b-button variant="outline-primary" size="sm" class="btn-svg btn-svg-right"  @click="triggerFileInput">
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
          <p class="m-0 mr-1 pr-3 f-body4 c-gray600">수신자: <span class="text-primary">0명</span></p>
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
    <SelectRcsTemplateModal />
    <ConfirmModal title="RCS 발송" desc="템플릿을 변경하면 입력된 데이터가 모두 초기화됩니다. 변경하시겠습니까?" />
  </div>
</template>

<script>
import IconQuestionLine from '@/components/service/icons/IconQuestionLine.vue'
import TemplateCard from '@/components/service/TemplateCard.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconDownload from '@/components/service/icons/IconDownload.vue';
import SearchAddressModal from '@/components/service/modal/SearchAddressModal.vue';
import EnterReceiverModal from '@/modules/ucMessageSendSms/components/modal/EnterReceiverModal.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import MessageTabs from '@/components/service/message/MessageTabs.vue'
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue'
import SelectRcsTemplateModal from '@/modules/ucRcsTemplateSend/components/modal/SelectRcsTemplateModal.vue';

export default {
  components: { IconQuestionLine, TemplateCard, IconArrowDown, IconArrowRight, IconDownload, IconClose, SearchAddressModal, EnterReceiverModal, CustomDatepicker, ConfirmModal, SelectRcsTemplateModal, MessageTabs, PreviewDefault, },
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
@use "~@/assets/scss/service/base/typography" as typography;
@import '@/assets/scss/service/message.scss';

.service-sub-tabs {
  display: flex;
  margin-top: 28px;
  border-bottom: 1px solid var(--border-color);
  .tab {
    .btn {
      margin: 0;
      padding: 0 0 12px 0;
      border: none;
      @include typography.font-style(16px, 700, 140%, -0.32px);
      color: var(--gray500)
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
        padding: 12px 24px;
        background-color: #F7F8FB;
        border: 1px solid var(--border-color);
        border-radius: 0;
        text-align: center;
        @include typography.font-style(14px, 500, 140%, -0.28px);
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
    background-color: var(--gray50);
    border: 1px solid var(--border-color);
  }
}
.template-select {
  & > div + div {
    margin-left: 12px;
  }
}

.radio-info {
  margin-left: 8px;
  @include typography.font-style(14px, 500, 140%, -0.28px);
  color: var(--gray600)
}
.custom-radio:not(.custom-radio-vertical) {
  margin-right: 20px;
}
.receive-btn-wrap {
  button + button {
    margin-left: 12px;
  }
}
.scroll-area {
  height: calc(100vh - 254px);
  overflow-y: auto;
}
</style>
