<template>
  <div>
    <div class="d-flex align-items-center section-col">
      <label class="form-label">구분</label>
      <b-form-group class="radio-group m-0">
        <b-form-radio-group inline v-model="type">
          <b-form-radio name="message" value="승인형" v-if="message !== 'ads'">승인형</b-form-radio>
          <b-form-radio name="message" value="비승인형">비승인형</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    </div>
    <!-- 템플릿형 Tab Start -->
    <div class="service-template-tabs">
      <div class="tab" :class="{active: templateTab === 'template'}">
        <button class="btn" @click="changeTemplateTab('template')">템플릿 형
          <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
            <IconQuestionLine />
          </b-button>
        </button>
      </div>
      <div class="tab" :class="{active: templateTab === 'aaa'}">
        <button class="btn" @click="changeTemplateTab('aaa')">aaa 형
          <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
            <IconQuestionLine />
          </b-button>
        </button>
      </div>
    </div>
    <!-- 템플릿형 Tab End -->

    <!-- 템플릿형 카드 Start -->
    <div class="service-template-content">
      <div class="template-select">
        <TemplateCard :setCard="setCard" value="A">
          <b-form-radio v-model="card" name="type" value="A" class="custom-radio-vertical">내용A</b-form-radio>
        </TemplateCard>
        <TemplateCard :setCard="setCard" value="B">
          <b-form-radio v-model="card" name="type" value="B" class="custom-radio-vertical">내용B</b-form-radio>
        </TemplateCard>
      </div>
    </div>
    <!-- 템플릿형 카드 End -->

    <div class="select-tempalte-section" v-if="!isSelectTemplate">
      <p>템플릿 승인형 RCS상품은 기 등록 된, 템플릿 정보를 선택하여서 사용 할 수 있습니다.</p>
      <b-button variant="dark" v-b-modal.select-rcs-template-modal>RCS 템플릿 선택</b-button>
    </div>

    <div v-else>
      <div class="d-flex align-items-center section-col">
        <label class="form-label">브랜드 명</label>
        <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown" disabled>
          <template #button-content>
            <span>옵션 2</span>
            <IconArrowDown />
          </template>
        </b-dropdown>
      </div>

      <div class="d-flex align-items-center section-col">
        <label class="form-label">유형</label>
        <b-dropdown id="type-dropdown" variant="secondary" class="send-number-dropdown" disabled>
          <template #button-content>
            <span>출고</span>
            <IconArrowDown />
          </template>
        </b-dropdown>
      </div>

      <div class="d-flex align-items-center section-col">
        <label class="form-label">내용 <span class="require">*</span></label>
        <div class="section-col-img">
          <b-form-textarea
            id="content"
            rows="6"
            max-rows="6"
            value="웹템플릿 등록 테스트 입니다."
            disabled
          ></b-form-textarea>
          <p class="textarea-count mt-2 mb-0">변수부 제외 길이 (00 / 90)</p>
        </div>
      </div>

      <div class="d-flex section-col">
        <label class="form-label">버튼</label>
        <div class="table-btn">
          <table class="table">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="50%" />
            </colgroup>
            <thead>
              <tr>
                <th>타입
                  <b-button v-b-tooltip.hover.html="tooltipMessage" variant="light" class="btn-icon p-0 btn-tooltip">
                    <IconInfo />
                  </b-button>
                </th>
                <th>버튼 이름</th>
                <th>버튼 링크</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown" disabled>
                    <template #button-content>
                      <span>배송 조회</span>
                      <IconArrowDown />
                    </template>
                  </b-dropdown>
                </td>
                <td>
                  <b-input  
                    placeholder="17자 이내" 
                    maxlength="17"
                    value="버튼 이름"
                    disabled
                  ></b-input>
                </td>
                <td>
                  <p class="m-0 f-body5 c-gray400">카카오 메세지에 택배사 명과 송장번호를 기재한 후, 
                    배송 조회 버튼을 추가하시면 메세지에서 택배사 명과 송장번호를 추출하여 배송 조회 카카오 검색페이지 링크가 자동으로 생성됩니다. 
                    카카오에서 지원하는 택배사명과 운송장번호가 알림톡 메시지 내에 포함된 경우에만 배송조회 버튼이 표시됩니다. 
                    배송 조회가 가능한 택배사는 <span class="c-failure">카카오와 해당 택배사와의 계약 관계에 의해 변동될 수 있음을 유의해주시기 바랍니다.</span></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="d-flex align-items-center section-col">
        <label class="form-label">발신번호 <span class="require">*</span></label>
        <b-dropdown id="number-dropdown" variant="secondary" class="send-number-dropdown" disabled>
          <template #button-content>
            <span>010-0000-0000</span>
            <IconArrowDown />
          </template>
        </b-dropdown>
      </div>
    </div>

    <b-button variant="outline-primary" class="mt-5" @click="testView">
      <span v-if="isSelectTemplate">템플릿 선택 안되었을때 화면 보기 (퍼블 작업용)</span>
      <span v-else>템플릿 선택되었을때 화면 보기 (퍼블 작업용)</span>
    </b-button>

    <SelectRcsTemplateModal />
  </div>
</template>

<script>
import TemplateCard from '@/components/service/TemplateCard.vue'
import IconQuestionLine from '@/components/service/icons/IconQuestionLine.vue'
import SelectRcsTemplateModal from '@/modules/ucRcsTemplateSend/components/modal/SelectRcsTemplateModal.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconInfo from '@/components/service/icons/IconInfo.vue';
import IconPlus from '@/components/service/icons/IconPlus.vue';

export default {
  components: { TemplateCard, IconQuestionLine, SelectRcsTemplateModal, IconArrowDown, IconInfo, },
  name: "rcsContents",
  props: {
    message: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      type: '승인형',
      templateTab: 'template',
      card: '',
      isSelectTemplate: true,
    }
  },
  methods: {
    changeTemplateTab(value) {
      this.templateTab = value;
    },
    tooltipContent() {
      return '문자메시지처럼 문장 형태의 텍스트를 입력할 수 있습니다. 에뮬레이터에 노출되는 이미지는 변경이 되지 않습니다. 최대 90자까지(공백포함) 입력이 가능합니다.'
    },
    tooltipMessage() {
      return "<span>‘배송조회' 버튼은 메시지 내용에 ‘택배사' 명과 ‘송장번호 패턴'을 인식하여 자동으로 각 택배사의 배송조회 페이지로 이동하게끔 되어 있습니다. 택배사 명과 송장번호 패턴 인식 불가능 시 패송조회 버튼은 비활성화 됩니다.</span>"
    },
    testView() {
      this.isSelectTemplate = !this.isSelectTemplate;
    },
    setCard(value) {
      this.card = value;
    },
  },
  watch: {
    message(newSelected) {
      if (newSelected === 'ads') {
        this.type = '비승인형'
      }
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

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
.table-btn {
  width: calc(100% - 120px - 12px);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  .b-dropdown {
    width: 100%;
  }
  tr:hover td {
    background-color: var(--white);
  }
  th {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    img {
      margin-top: -3px;
      margin-left: 4px;
    }
  }
  td {
    input {
      width: 100%;
    }
    &:nth-child(3) {
      label {
        width: 120px;
        padding-right: 12px;
      }
      input {
        width: calc(100% - 120px - 12px);
      }
    }
  }
}
</style>
