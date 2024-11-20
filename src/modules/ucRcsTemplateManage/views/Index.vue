<template>
  <div class="uc-rcs-template-manage">
    <TemplateTabs />
    
    <div class="d-flex flex-wrap tab-contents">
      <div class="info card">
        <ul>
          <li>아래 탭에서 RCS 유형을 먼저 선택해 주십시오.</li>
          <li>템플릿형은 광고성 메시지를 보내실 수 없습니다.</li>
          <li>동영상 스트리밍 삼성 S시리즈, R시리즈 중 안드로이드 OS 10.0을 탑재한 단말기만 지원합니다.</li>
          <li>승인 상태의 템플릿만 등록제 요금이 적용됩니다. (등록완료 상태의 템플릿은 등록제 요금이 적용되지 않습니다.</li>
          <li>템플릿 승인은 요청일로 부터 1~2영업일이 소요됩니다</li>
        </ul>
      </div>
      
      <!-- 미리보기 목업 Start -->
      <div class="preview card p-sticky">
        <p class="preview-title">미리보기</p>
        <div class="preview-slide">
          <input type="radio" name="slide" id="slide01" checked>
          <input type="radio" name="slide" id="slide02">
          <input type="radio" name="slide" id="slide03">
          <input type="radio" name="slide" id="slide04">
          <input type="radio" name="slide" id="slide05">
          <input type="radio" name="slide" id="slide06">

          <div class="slidewrap lg">
            <ul class="slidelist">
              <li>
                <a>
                  <RCSPreview :type="type" :displayContents="displayContents" :displayRcsTemplateTitle="displayRcsTemplateTitle" :dispalyRcsTemplateDesc="dispalyRcsTemplateDesc" :buttons="buttons" :displayNumber="displayNumber" />
                </a>
              </li>
              <li>
                <a>
                  <RCSPreview :type="type" :displayContents="displayContents" :displayRcsTemplateTitle="displayRcsTemplateTitle" :dispalyRcsTemplateDesc="dispalyRcsTemplateDesc" :buttons="buttons" :displayNumber="displayNumber" />
                </a>
              </li>
              <li>
                <a>
                  <RCSPreview :type="type" :displayContents="displayContents" :displayRcsTemplateTitle="displayRcsTemplateTitle" :dispalyRcsTemplateDesc="dispalyRcsTemplateDesc" :buttons="buttons" :displayNumber="displayNumber" />
                </a>
              </li>
              <li>
                <a>
                  <RCSPreview :type="type" :displayContents="displayContents" :displayRcsTemplateTitle="displayRcsTemplateTitle" :dispalyRcsTemplateDesc="dispalyRcsTemplateDesc" :buttons="buttons" :displayNumber="displayNumber" />
                </a>
              </li>
              <li>
                <a>
                  <RCSPreview :type="type" :displayContents="displayContents" :displayRcsTemplateTitle="displayRcsTemplateTitle" :dispalyRcsTemplateDesc="dispalyRcsTemplateDesc" :buttons="buttons" :displayNumber="displayNumber" />
                </a>
              </li>
              <li>
                <a>
                  <RCSPreview :type="type" :displayContents="displayContents" :displayRcsTemplateTitle="displayRcsTemplateTitle" :dispalyRcsTemplateDesc="dispalyRcsTemplateDesc" :buttons="buttons" :displayNumber="displayNumber" />
                </a>
              </li>
              <div class="slide-control">
                <div class="control01">
                  <label for="slide06" class="left"></label>
                  <label for="slide02" class="right"></label>
                </div>
                <div class="control02">
                  <label for="slide01" class="left"></label>
                  <label for="slide03" class="right"></label>
                </div>
                <div class="control03">
                  <label for="slide02" class="left"></label>
                  <label for="slide04" class="right"></label>
                </div>
                <div class="control04">
                  <label for="slide03" class="left"></label>
                  <label for="slide05" class="right"></label>
                </div>
                <div class="control05">
                  <label for="slide04" class="left"></label>
                  <label for="slide06" class="right"></label>
                </div>
                <div class="control06">
                  <label for="slide05" class="left"></label>
                  <label for="slide01" class="right"></label>
                </div>
              </div>
            </ul>
            <ul class="slide-pagelist">
              <li>
                <label for="slide01"></label>
              </li>
              <li>
                <label for="slide02"></label>
              </li>
              <li>
                <label for="slide03"></label>
              </li>
              <li>
                <label for="slide04"></label>
              </li>
              <li>
                <label for="slide05"></label>
              </li>
              <li>
                <label for="slide06"></label>
              </li>
		        </ul>
          </div>
        </div>
      </div>
      <!-- 미리보기 목업 End -->

      <div class="section card flex-fill">
        <p class="mb-2 f-title1 c-gray900">템플릿 등록</p>

        <!-- 승인/비승인 선택 Start -->
        <div class="d-flex align-items-center mt-1 pt-3">
          <label class="form-label">RCS 승인 여부 <span class="require">*</span></label>
          <b-form-group class="m-0">
            <b-form-radio-group inline v-model="subTab">
              <b-form-radio name="some-radios" value="allow">승인형</b-form-radio>
              <b-form-radio name="some-radios" value="notallow">비승인형</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>
        <!-- 승인/비승인 선택 End -->

        <!-- 승인 템플릿 탭 Start -->
        <div v-if="subTab === 'allow'" class="template-tabs-wrap m-0">
          <div class="service-template-tabs">
            <div class="tab" :class="{active: templateTab === 'template'}">
              <button class="btn" @click="changeTemplateTab('template')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'style'}">
              <button class="btn" @click="changeTemplateTab('style')">스타일 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'thumb'}">
              <button class="btn" @click="changeTemplateTab('thumb')">썸네일 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'sns'}">
              <button class="btn" @click="changeTemplateTab('sns')">SNS 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
          </div>
        </div>
        <!-- 승인 템플릿 탭 End -->

        <!-- 비승인 템플릿 탭 Start -->
        <div v-if="subTab === 'notallow'" class="template-tabs-wrap m-0">
          <div class="service-template-tabs">
            <div class="tab" :class="{active: templateTab === 'template'}">
              <button class="btn" @click="changeTemplateTab('template')">템플릿 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'style'}">
              <button class="btn" @click="changeTemplateTab('style')">스타일 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'thumb'}">
              <button class="btn" @click="changeTemplateTab('thumb')">썸네일 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
            <div class="tab" :class="{active: templateTab === 'sns'}">
              <button class="btn" @click="changeTemplateTab('sns')">SNS 형
                <b-button v-b-tooltip.hover.html="tooltipContent" variant="light" class="btn-icon p-0 btn-tooltip">
                  <IconQuestionLine />
                </b-button>
              </button>
            </div>
          </div>
        </div>
        <!-- 비승인 템플릿 탭 End -->

        <div class="service-template-content">
          <div v-if="templateTab === 'thumb'">
            <div class="template-select">
              <TemplateCard :setCard="setCard" value="A">
                <b-form-radio v-model="card" name="type" value="A" class="custom-radio-vertical">내용A</b-form-radio>
              </TemplateCard>
              <TemplateCard :setCard="setCard" value="B">
                <b-form-radio v-model="card" name="type" value="B" class="custom-radio-vertical">내용B</b-form-radio>
              </TemplateCard>
            </div>
          </div>
          <div v-else></div>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">브랜드 명</label>
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
          <label class="form-label">카드 개수</label>
          <b-dropdown id="brand-dropdown" variant="secondary" class="send-number-dropdown">
            <template #button-content>
              <span>{{ rcsnumber === '' ? '선택' : rcsnumber }}</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button @click="setnumder('1')">1</b-dropdown-item-button>
            <b-dropdown-item-button @click="setnumder('2')">2</b-dropdown-item-button>
            <b-dropdown-item-button @click="setnumder('3')">3</b-dropdown-item-button>
            <b-dropdown-item-button @click="setnumder('4')">4</b-dropdown-item-button>
            <b-dropdown-item-button @click="setnumder('5')">5</b-dropdown-item-button>
            <b-dropdown-item-button @click="setnumder('6')">6</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 명</label>
          <b-input placeholder="(필수) 최대 30자의 한글, 영무, 숫자만 입력이 가능합니다." class="template-input"></b-input>
          <span class="pl-2 f-body6 c-gray500">0/30자</span>

          <i class="vertical-divider"></i>

          <label class="form-label">템플릿 ID</label>
          <b-input value="dlsognaoaxicxp" disabled class="template-input"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">제목</label>
          <b-input placeholder="입력" class="template-input"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">유형<span class="require">*</span></label>
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

        <div class="d-flex align-items-center section-col">
          <label class="form-label">내용<span class="require">*</span></label>
          <div>
            <p class="m-0 mb-1 pb-2 f-body5 c-gray400">변수로 설정하고자 하는 내용을 #{ } 표시로 작성해 주십시오.<br />
              예) 이름과 출금일을 변수 설정<br />
              예) #{name}님 #{yyymmdd} 출금 예정입니다.
            </p>
            <p class="m-0 mb-1 pb-2 f-body5 c-gray400">가변부 포함 90자 이내로 작성해 주세요.</p>
            <div v-for="(item, index) in displayContents" :key="'two-' + index" class="d-flex align-items-center" :class="index > 0 ? 'mt-1 pt-2' : ''">
              <div class="col-type" :class="item.type === 'two' ? 'col-empty' : ''" @click="updateColType(index, 'one')">
                <img v-if="item.type === 'one'" src="@/assets/images/service/rcs/col-group-1.svg" alt="">
              </div>
              <div class="col-type" :class="item.type === 'one' ? 'col-empty' : ''" @click="updateColType(index, 'two')">
                <img v-if="item.type === 'two'" src="@/assets/images/service/rcs/col-group-2.svg" alt="">
              </div>
              <b-input
                v-if="item.type === 'one'"
                placeholder="입력"
                class="col-content"
                v-model="contents[index].text[0]"
                @blur="syncDisplayContents"
              ></b-input>
              <b-input
                v-if="item.type === 'two'"
                placeholder="입력"
                class="col2-content"
                v-model="contents[index].text[0]"
                @blur="syncDisplayContents"
              ></b-input>
              <b-input
                v-if="item.type === 'two'"
                placeholder="입력"
                class="col2-content ml-2"
                v-model="contents[index].text[1]"
                @blur="syncDisplayContents"
              ></b-input>
              <p class="m-0 ml-2 mr-1 pr-2 f-body5 c-gray600">({{ totalTextLength }}/90)</p>
              <b-form-checkbox v-model="contents[index].hasLine" @change="updateLineStatus()">
                라인
              </b-form-checkbox>
            </div>
            <div class="mt-1 pt-2">
              <b-button variant="secondary" class="btn-svg btn-svg-right mr-2" @click="addCell">
                <span>Cell 추가</span><IconPlus />
              </b-button>
              <b-button variant="outline-primary" @click="removeCell">Cell 삭제</b-button>
            </div>
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
                      <b-dropdown-item-button @click="setButtonType('복사하기')">복사하기</b-dropdown-item-button>
                      <b-dropdown-item-button @click="setButtonType('전화걸기')">전화걸기</b-dropdown-item-button>
                      <b-dropdown-item-button @click="setButtonType('일정추가')">일정추가</b-dropdown-item-button>
                      <b-dropdown-item-button @click="setButtonType('지도맵')">지도맵</b-dropdown-item-button>
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
                  <td colspan="4" class="pt-0 border-0">
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

        <div class="d-flex section-col">
          <label class="form-label">이미지<span class="require">*</span></label>
          <div class="section-col-img">
            <div class="d-flex align-items-center">
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

        <div class="d-flex align-items-center section-col">
          <label class="form-label">이미지 URL</label>
          <b-input placeholder="입력" class="template-input"></b-input>
        </div>

        <div class="d-flex section-col">
          <label class="form-label">썸네일 이미지<span class="require">*</span></label>
          <div class="d-flex">
            <b-button variant="outline-primary" size="sm" class="image-select-btn">이미지 선택</b-button>
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
        </div>

        <div class="d-flex section-col">
          <label class="form-label">썸네일 URL</label>
          <div>
            <b-input placeholder="입력" class="template-input"></b-input>
            <b-input placeholder="입력" class="template-input mt-2"></b-input>
            <b-input placeholder="입력" class="template-input mt-2"></b-input>
          </div>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">무료수신거부</label>
          <b-input placeholder="입력" class="template-input" v-model="number" @blur="updateNumber"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">타이틀</label>
          <b-input placeholder="입력" class="template-input" v-model="rcsTemplateTitle" @blur="updateRcsTemplatetitle"></b-input>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">타이틀 내용</label>
          <b-input placeholder="입력" class="template-input" v-model="rcsTemplateDesc" @blur="updateRcsTemplateDesc"></b-input>
        </div>

        <div class="section-col">
          <b-form-checkbox value="talk" >정보성 메시지만 보낼 수 있으며, 광고 등 정책에 위배되는 메시지 발송 시  템플릿 사용이 중지될 수 있음을 동의합니다.</b-form-checkbox>
        </div>

        <div class="submit-wrap">
          <b-button variant="outline-primary" size="lg" @click="navigateToList">목록</b-button>
          <b-button variant="primary" size="lg">승인요청</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconQuestionLine from '@/components/service/icons/IconQuestionLine.vue'
import TemplateCard from '@/components/service/TemplateCard.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconClose from '@/components/service/icons/IconClose.vue';
import IconPlus from '@/components/service/icons/IconPlus.vue';
import TemplateTabs from '@/components/service/template/TemplateTabs.vue'
import RCSPreview from '@/modules/ucRcsTemplateManageEdit/components/RCSPreview.vue'

export default {
  components: {
    IconQuestionLine, TemplateCard, IconArrowDown, TemplateTabs, RCSPreview, IconClose,
    IconPlus,
  },
  name: "ucRcsTemplateManage",
  data() {
    return {
      subTab: 'allow',
      templateTab: 'thumb',
      barnd: '',
      templateCard: 'A',
      rcsnumber: '1',
      type: '출고',
      buttonType: 'URL 링크',
      contents: [
        { type: 'one', text: [], hasLine: false },
        { type: 'two', text: ['', ''], hasLine: false },
      ],
      displayContents: [
        { type: 'one', text: [], hasLine: false },
        { type: 'two', text: ['', ''], hasLine: false },
      ],
      buttons: [
        { label: '버튼영역' },
      ],
      rcsTemplateTitle: '',
      displayRcsTemplateTitle: '',
      rcsTemplateDesc: '',
      dispalyRcsTemplateDesc: '',
      number: '',
      displayNumber: '',
      card: '',
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
      return '문자메시지처럼 문장 형태의 텍스트를 입력할 수 있습니다. 에뮬레이터에 노출되는 이미지는 변경이 되지 않습니다. 최대 90자까지(공백포함) 입력이 가능합니다.'
    },
    setBrand(value) {
      this.barnd = value;
    },
    setnumder(value) {
      this.rcsnumber = value;
    },
    setType(value) {
      this.type = value;
    },
    setButtonType(value) {
      this.buttonType = value;
    },
    showConfirmModal() {
      this.$bvModal.show('confirm-modal');
    },
    navigateToList() {
      this.$router.push(`/uc/template/rcsTemplateList`);
    },
    updateContents() {
      this.contents = this.displayContents
    },
    updateColType(index, type) {
      this.contents[index].type = type;
      this.resetContentsText(index);
      this.syncDisplayContents();
    },
    updateContentText(index, type, event, textIndex = 0) {
      const textValue = event.target.value;
      if (type === 'one') {
        this.contents[index].text[0] = textValue;
      } else if (type === 'two') {
        this.contents[index].text[textIndex] = textValue;
      }
    },
    syncDisplayContents() {
      this.displayContents = JSON.parse(JSON.stringify(this.contents));
    },
    addCell() {
      this.contents.push({ type: 'one', text: [], hasLine: false });
      this.syncDisplayContents();
    },
    removeCell() {
      this.contents.pop();
      this.syncDisplayContents();
    },
    setColType(type) {
      this.colType = type;
      this.resetContentsAll();
    },
    resetContentsAll() {
      this.contents.forEach(item => {
        item.text = item.type === 'two' ? ['', ''] : [''];
      });
    },
    resetContentsText(index) {
      if (this.contents[index].type === 'two') {
        this.contents[index].text = ['', ''];
      } else {
        this.contents[index].text = [''];
      }
    },
    addButton() {
      this.buttons.push({ label: '' });
    },
    removeButton(index) {
      this.buttons.splice(index, 1);
    },
    updateLineStatus() {
      this.syncDisplayContents();
    },
    updateRcsTemplatetitle() {
      this.displayRcsTemplateTitle = this.rcsTemplateTitle
    },
    updateRcsTemplateDesc() {
      this.dispalyRcsTemplateDesc = this.rcsTemplateDesc
    },
    updateNumber() {
      this.displayNumber = this.number
    },
    setCard(value) {
      this.card = value;
    }
  },
  computed: {
    typeOneContents() {
      return this.displayContents.filter(item => item.type === 'one');
    },
    typeTwoContents() {
      return this.displayContents.filter(item => item.type === 'two');
    },
    totalTextLength() {
      return this.contents.reduce((total, item) => {
        return total + item.text.join('').length;
      }, 0);
    }
  },
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.section {
  width: calc(100% - 430px - 20px);
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
