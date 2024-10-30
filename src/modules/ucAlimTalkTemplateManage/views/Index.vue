<template>
  <div class="uc-alimtalk-template-manage">
    <TemplateTabs />
    
    <div class="d-flex flex-wrap tab-contents">
      <div class="info card">
        <ul>
          <li>템플릿내용은 한/영 구분없이 1,000자까지 입력 가능합니다. 변수에 들어갈 내용의 최대 길이를 감안하여 작성해 주세요.</li>
          <li>버튼 등록 시 버튼명은 변수 입력이 불가하며, 버튼 url에는 변수 입력이 가능합니다. (예. http://lguplus.com/#{변수})</li>
          <li>버튼 url 등록 시 url_mobile, url_pc 링크에는 'http://', 'https://'가 포함 되어야 합니다.</li>
          <li>버튼명은 최대 14자리까지 입력이 가능합니다.</li>
          <li>알림톡 템플릿은 등록완료 -> 검수중 -> 승인의 단계를 가집니다. 우측 알림톡 템플릿 검수 가이드를 참고 하십시오.</li>
        </ul>
      </div>
      
      <!-- 미리보기 목업 Start -->
      <div class="preview card">
        <p class="preview-title">미리보기</p>
        <PreviewTalk>
          <div class="preview-section talk">
            <p class="m-0 f-body7 c-black">강조부제목 영역입니다.</p>
            <p class="m-0 mb-1 f-title2 c-black">강조제목 영역입니다.</p>
            <div class="preview-img">
              <div class="empty-img">
                <img src="@/assets/images/service/preview/preview-img.svg" alt="" class="img-icon">
                <p class="m-0 mt-1 c-caption2 c-gray500">작성페이지에서 이미지를<br/>
                  삽입할 수 있습니다.</p>
              </div>
              <!-- <img src="" alt=""> -->
            </div>
            <p class="mt-2 mb-0 f-body7 c-black">이미지 내용입니다. 이미지 내용입니다.이미지 내용입니다.이미지 내용입니다.이미지 내용입니다.</p>
            <p class="my-4 f-caption2 c-gray400">카카오톡 채널을 추가하면 광고와 마케팅 메시지를 카카오톡으로 받아볼 수 있습니다.</p>
            <div class="talk-button">
              <b-button variant="secondary" v-for="(item, index) in buttons" :key="'btn-display-' + index" >{{ item.label }}</b-button>
            </div>
          </div>
        </PreviewTalk>
      </div>
      <!-- 미리보기 목업 End -->

      <div class="section card">
        <p class="mb-2 f-title1 c-gray900">템플릿 등록</p>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">카카오 채널 <span class="require">*</span></label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown" disabled>
            <template #button-content>
              <span>{{ barnd === '' ? '선택' : barnd }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setBrand('BRAND_A')">BRAND_A</b-dropdown-item-button>
            <b-dropdown-item-button @click="setBrand('BRAND_B')">BRAND_B</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 명 <span class="require">*</span></label>
          <b-input placeholder="20자 이내 이력" class="template-input"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 유형 <span class="require">*</span></label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline>
              <b-form-radio name="type" value="basic">기본형</b-form-radio>
              <b-form-radio name="type" value="channel">채널 추가형</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 강조 유형 <span class="require">*</span> </label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline>
              <b-form-radio name="type" value="basic">기본형</b-form-radio>
              <b-form-radio name="type" value="point">강조표기형</b-form-radio>
              <b-form-radio name="type" value="img">이미지형</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <p class="d-flex align-items-center m-0 ml-auto"><IconInfoRed /><span class="pl-2 f-body5 c-failure">카카오톡 8.7.5 버전(안드로이드, iOS 공통) 이상에서만 노출됩니다.</span></p>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 강조 제목 <span class="require">*</span></label>
          <b-input placeholder="20자 이내 입력" class="template-input"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 강조 부제목 <span class="require">*</span></label>
          <b-input placeholder="20자 이내 입력" class="template-input"></b-input>
        </div>

        <div class="d-flex section-col">
          <label class="form-label">이미지 <span class="require">*</span></label>
          <div>
            <div class="d-flex">
              <b-button variant="outline-primary" size="sm" class="mr-1">이미지 선택</b-button>
              <b-button variant="secondary" size="sm" class="ml-2">이미지형 제작 가이드</b-button>
            </div>
            <div class="img-info">
              <ul>
                <li>이미지 제작시 왼쪽의 ‘이미지 제작 가이드'를 참고해 주세요.</li>
                <li>이미지는 JPG, PNG 형식만 지원합니다.</li>
                <li>이미지 용량은 500KB 이하여야 합니다.</li>
                <li>이미지 권장 사이즈는 가로 800 X 400px 입니다.</li>
                <li>가로:세로 비율이 2:1이 아닐 경우, 가로 500px, 세로 250px 이하일 경우, 업로드가 불가능 합니다.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="d-flex section-col">
          <label class="form-label">내용 <span class="require">*</span></label>
          <div class="section-col-img">
            <b-form-textarea
              id="content"
              rows="6"
              max-rows="6"
            ></b-form-textarea>
            <p class="textarea-count mt-2 mb-0">0 / 1000자</p>
            <p class="mt-1 mb-0 pt-2 f-body5 c-gray500">변수로 설정하고자 하는 내용을 #{ } 표시로 작성해 주십시오.<br/>
              예) 이름과 출금일을 변수 설정<br/>
              예) #{name}님 #{yyymmdd} 출금 예정입니다.</p>
          </div>
        </div> 

        <div class="d-flex section-col">
          <label class="form-label">채널추가 안내 메시지</label>
          <b-input value="카카오톡 채널을 추가하면 광고와 마케팅 메시지를 카카오톡으로 받아볼 수 있습니다." class="info-message-input" disabled></b-input>
        </div>

        <div class="d-flex section-col">
          <label class="form-label">카테고리 <span class="require">*</span></label>
          <div class="d-flex section-col-category">
            <b-dropdown id="category1-dropdown" variant="secondary">
              <template #button-content>
                <span>{{ category1 === '' ? '대분류' : category1 }}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button @click="setCategory1('BRAND_A')">BRAND_A</b-dropdown-item-button>
              <b-dropdown-item-button @click="setCategory1('BRAND_B')">BRAND_B</b-dropdown-item-button>
            </b-dropdown>
            <b-dropdown id="category2-dropdown" variant="secondary" >
              <template #button-content>
                <span>{{ category2 === '' ? '중분류' : category2 }}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button @click="setCategory2('BRAND_A')">BRAND_A</b-dropdown-item-button>
              <b-dropdown-item-button @click="setCategory2('BRAND_B')">BRAND_B</b-dropdown-item-button>
            </b-dropdown>
          </div>
        </div>

        <div class="d-flex section-col">
          <label class="form-label">버튼</label>
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
                    <p class="m-0 f-body5 c-gray400">카카오 메세지에 택배사 명과 송장번호를 기재한 후, 
                      배송 조회 버튼을 추가하시면 메세지에서 택배사 명과 송장번호를 추출하여 배송 조회 카카오 검색페이지 링크가 자동으로 생성됩니다. 
                      카카오에서 지원하는 택배사명과 운송장번호가 알림톡 메시지 내에 포함된 경우에만 배송조회 버튼이 표시됩니다. 
                      배송 조회가 가능한 택배사는 <span class="c-failure">카카오와 해당 택배사와의 계약 관계에 의해 변동될 수 있음을 유의해주시기 바랍니다.</span></p>
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

        <div class="submit-wrap">
          <b-button variant="outline-primary" size="lg" @click="navigateToList">목록</b-button>
          <b-button variant="primary" size="lg">저장</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import IconPlus from '@/components/service/icons/IconPlus.vue';
import IconInfoRed from '@/components/service/icons/IconInfoRed.vue';
import TemplateTabs from '@/components/service/template/TemplateTabs.vue'
import PreviewTalk from '@/components/service/preview/PreviewTalk.vue'

export default {
  components: { IconArrowDown, TemplateTabs, PreviewTalk, IconClose, IconPlus, IconInfoRed, },
  name: "ucRcsTemplateManage",
  data() {
    return {
      barnd: '',
      category1: '',
      category2: '',
      buttonType: 'URL 링크',
      buttons: [
        { label: '버튼영역' },
      ],
    }
  },
  methods: {
    setBrand(value) {
      this.barnd = value;
    },
    setCategory1(value) {
      this.category1 = value;
    },
    setCategory2(value) {
      this.category2 = value;
    },
    navigateToList() {
      this.$router.push(`/uc/template/alimTalkTemplateList`);
    },
  },
  computed: {
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
.template-input,
.b-dropdown {
  width: 335px;
}
.submit-wrap {
  margin-top: 56px;
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
.textarea-count {
  @include typography.font-style(16px, 400, 148%, -0.08px);
  color: var(--gray500);
}
.info-message-input {
  width: 668px;
}
.section-col-category {
  .b-dropdown {
    width: 328px;
    & + .b-dropdown {
      margin-left: 12px;
    }
  }
}
</style>
