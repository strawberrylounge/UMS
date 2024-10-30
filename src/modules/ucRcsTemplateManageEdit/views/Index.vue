<template>
  <div class="uc-rcs-template-manage">
    <TemplateTabs />
    
    <div class="d-flex flex-wrap tab-contents">
      <div class="info card">
        <ul>
          <li>템플릿형 상품은 내용 등록 또는 수정시 RCS Biz Center 에 승인을 받아야 합니다.<br/>
          &nbsp;- 승인요청시 RCS Biz Center 에 승인을 받아야 사용이 가능합니다. 검수기간동안 해당 템플릿은 사용할 수 없습니다.</li>
          <li>RCS 템플릿 아래의 상태에 따라 발송, 수정, 삭제가 제한됩니다.<br/>
            &nbsp;- 승인 (발송 / 수정 / 삭제 가능)<br/>
            &nbsp;- 승인대기, 검수시작 (발송 / 수정 / 삭제 불가능)<br/>
            &nbsp;- 저장, 반려 (발송 / 수정 불가능, 삭제 가능)</li>
        </ul>
      </div>
      
      <!-- 미리보기 목업 Start -->
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <PreviewDefault>
          <div class="preview-section rcs">
            <div class="rcs-content rcs-type">
              <div class="icon">
                <IconShoppingCart v-if="type === '출고'" />
                <IconPaper v-if="type === '주문'" />
                <IconTruck v-if="type === '배송'" />
                <IconCalendar v-if="type === '예약'" />
                <IconCheck v-if="type === '승인'" />
                <IconPiggyBank v-if="type === '입금'" />
                <IconWallet v-if="type === '출금'" />
                <IconCheckCancel v-if="type === '취소'" />
                <IconDocs v-if="type === '명세서'" />
                <IconSignUp v-if="type === '회원가입'" />
                <IconExpand v-if="type === '인증'" />
              </div>
              <span>{{ type }}</span>
            </div>

            <div class="rcs-content rcs-template-content">
              <p class="rcs-template-content-title">{{ rcsTemplateTitle}}</p>
              <p class="rcs-template-content-desc"> {{ dispalyRcsTemplateDesc }} </p>
            </div>

            <div class="rcs-content rcs-button">
              <b-button variant="secondary" v-for="(item, index) in buttons" :key="'btn-display-' + index" >{{ item.label }}</b-button>
            </div>
          </div>
        </PreviewDefault>
      </div>
      <!-- 미리보기 목업 End -->

      <div class="section card">
        <p class="mb-2 f-title1 c-gray900">템플릿 수정</p>

        <div class="d-flex align-items-center section-col">
          <label class="form-labal">브랜드 명</label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown">
            <template #button-content>
              <span>{{ barnd === '' ? '선택' : barnd }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setBrand('BRAND_A')">BRAND_A</b-dropdown-item-button>
            <b-dropdown-item-button @click="setBrand('BRAND_B')">BRAND_B</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-labal">템플릿 명</label>
          <b-input placeholder="(필수) 최대 30자의 한글, 영무, 숫자만 입력이 가능합니다." class="template-input"></b-input>
          <span class="pl-2 f-body6 c-gray500">0/30자</span>

          <i class="vertical-divider"></i>

          <label class="form-labal">템플릿 ID</label>
          <b-input value="dlsognaoaxicxp" disabled class="template-input"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-labal">유형<span class="require">*</span></label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown">
            <template #button-content>
              <span>{{ type === '' ? '선택' : type }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setType('출고')">출고</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('주문')">주문</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('배송')">배송</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('예약')">예약</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('승인')">승인</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('입금')">입금</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('출금')">출금</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('취소')">취소</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('명세서')">명세서</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('회원가입')">회원가입</b-dropdown-item-button>
            <b-dropdown-item-button @click="setType('인증')">인증</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <div class="d-flex align-items-start section-col form-row mr-0 ml-0">
          <label class="form-labal">내용<span class="require">*</span></label>
          <div>
            <b-form-textarea
              id="content"
              rows="6"
              max-rows="6"
              v-model="rcsTemplateDesc"
              @blur="updateRcsTemplateDesc"
            ></b-form-textarea>
            <p class="textarea-count mt-2 mb-0">({{rcsTemplateDesc.length}} / 2000)</p>
          </div>
        </div>

        <div class="d-flex section-col">
          <label class="form-labal">버튼</label>
          <div class="table-btn">
            <table class="table">
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="50%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th>타입
                    <span><img src="@/assets/images/service/icon/icon-info.svg" alt=""></span>
                  </th>
                  <th>버튼 이름</th>
                  <th>버튼 링크</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(button, index) in buttons" :key="'btn-input-' + index">
                  <td>
                    <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown">
                      <template #button-content>
                        <span>{{ buttonType }}</span>
                        <IconArrowDown />
                      </template>
                      <b-dropdown-item-button @click="setButtonType('URL 링크')">URL 링크</b-dropdown-item-button>
                    </b-dropdown>
                  </td>
                  <td>
                    <b-input 
                      v-model="button.label" 
                      placeholder="17자 이내" 
                      maxlength="17"
                    ></b-input>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <label>URL <span class="require">*</span></label>
                      <b-input placeholder="http:// 또는 https:// 필수입력"></b-input>
                    </div>
                  </td>
                  <td>
                    <button class="btn btn-icon" @click="removeButton(index)">
                      <IconClose />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="4" class="border-0">
                    <button type="button" class="btn btn-add" @click="addButton">
                      <IconPlus />
                      <span class="pl-2 f-body2 c-gray600">추가</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="section-col">
          <b-form-checkbox value="talk" >정보성 메시지만 보낼 수 있으며, 광고 등 정책에 위배되는 메시지 발송 시  템플릿 사용이 중지될 수 있음을 동의합니다.</b-form-checkbox>
        </div>

        <div class="submit-wrap">
          <b-button variant="outline-primary" size="lg" @click="navigateToList">목록</b-button>
          <b-button variant="primary" size="lg">취소 요청</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconShoppingCart from '@/components/service/icons/IconShoppingCart.vue';
import IconPaper from '@/components/service/icons/IconPaper.vue';
import IconTruck from '@/components/service/icons/IconTruck.vue';
import IconCalendar from '@/components/service/icons/IconCalendar.vue';
import IconCheck from '@/components/service/icons/IconCheck.vue';
import IconPiggyBank from '@/components/service/icons/IconPiggyBank.vue';
import IconWallet from '@/components/service/icons/IconWallet.vue';
import IconCheckCancel from '@/components/service/icons/IconCheckCancel.vue';
import IconDocs from '@/components/service/icons/IconDocs.vue';
import IconSignUp from '@/components/service/icons/IconSignUp.vue';
import IconExpand from '@/components/service/icons/IconExpand.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import IconPlus from '@/components/service/icons/IconPlus.vue';
import TemplateTabs from '@/components/service/template/TemplateTabs.vue'
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue'

export default {
  components: { IconArrowDown, TemplateTabs, PreviewDefault, IconShoppingCart, 
    IconPaper, IconTruck, IconCheck, IconPiggyBank, IconWallet, IconCheckCancel, IconDocs, IconSignUp, IconExpand, IconClose,
    IconPlus,
  },
  name: "ucRcsTemplateManage",
  data() {
    return {
      barnd: '',
      type: '출고',
      buttonType: 'URL 링크',
      buttons: [
        { label: '버튼영역' },
      ],
      rcsTemplateTitle: 'RCS 템플릿 제목',
      rcsTemplateDesc: 'RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 ',
      dispalyRcsTemplateDesc: 'RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 내용 영역입니다. RCS 템플릿 ',
    }
  },
  methods: {
    setBrand(value) {
      this.barnd = value;
    },
    setType(value) {
      this.type = value;
    },
    setButtonType(value) {
      this.buttonType = value;
    },
    navigateToList() {
      this.$router.push(`/uc/template/rcsTemplateList`);
    },
    addButton() {
      this.buttons.push({ label: '' });
    },
    removeButton(index) {
      this.buttons.splice(index, 1);
    },
    updateRcsTemplateDesc() {
      this.dispalyRcsTemplateDesc = this.rcsTemplateDesc
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@import '@/assets/scss/service/message.scss';
@import '@/assets/scss/service/template.scss';

.section {
  width: calc(100% - 420px - 28px);
}
.template-tabs-wrap {
  margin: 8px 0;
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
.section-col {
  margin-top: 20px;
  &-img {
    width: calc(100% - 120px - 12px);
  }
}
.template-input {
  width: 338px;
}
.template-id-input {
  width: 387px;;
}
.img-info {
  margin-top: 12px;
  padding: 16px;
  background-color: var(--gray50);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  ul {
    margin: 0;
    padding-left: 24px;
  }
  li {
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray700);
  }
}
.image-select-btn {
  height: fit-content;
}
.image-select-list {
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
.submit-wrap {
  margin-top: 56px;
}
.col-type {
  width: 44px;
  height: 44px;
  &:nth-child(2) {
    margin: 0 12px;
  } 
}
.col-empty {
  width: 44px;
  height: 44px;
  border: 1px solid var(--gray500);
  border-radius: 8px;
}
.col-content {
  width: 477px;
}
.col2-content {
  width: 235px;
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
