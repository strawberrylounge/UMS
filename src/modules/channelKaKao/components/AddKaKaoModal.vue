<template>  
  <b-modal scrollable id="add-kakao-modal" hide-header-close size="lg" centered content-class="service-modal">
    <template #modal-title>
      <h5 class="modal-title">카카오 채널 추가</h5>
      <ul>
        <li>카카오 채널은 등록 후 사용할 수 있습니다.</li>
        <li>채널 등록을 위해 OTP(인증번호)를 1회 이상 입력할 수 있습니다.</li>
      </ul>
    </template>

    <div class="form-row">
      <label>채널 검색용 아이디 <span class="require">*</span></label>
      <div class="d-flex align-items-center">
        <span class="mr-1 pr-2 f-body6 c-gray900">@</span>
        <b-input placeholder="카카오에 등록된 검색용 아이디를 넣어주세요 (@을 제외하고 입력해 주세요)" class="flex-fill"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>관리자 연락처 <span class="require">*</span>
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
          <IconQuestion />
        </b-button>
      </label>
      <div>
        <b-input placeholder="카카오 채널에 등록된 관리자 연락처" class="w-100"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>사업자 카테고리 <span class="require">*</span>
      </label>
      <div class="d-flex align-items-center">
        <b-dropdown variant="secondary" class="mr-1">
          <template #button-content>
            <span>{{ category1 ? category1 : '선택' }}</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button @click="setCategory1('건강')" :class="{active: category1 === '건강'}">건강</b-dropdown-item-button>
        </b-dropdown>
        <b-dropdown variant="secondary" class="ml-2 mr-1">
          <template #button-content>
            <span>{{ category2 ? category2 : '선택' }}</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button @click="setCategory2('병원')" :class="{active: category2 === '병원'}">병원</b-dropdown-item-button>
        </b-dropdown>
        <b-dropdown variant="secondary" class="ml-2">
          <template #button-content>
            <span>{{ category3 ? category3 : '선택' }}</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button @click="setCategory3('종합병원')" :class="{active: category3 === '종합병원'}">종합병원</b-dropdown-item-button>
        </b-dropdown>
      </div>
    </div>

    <div class="form-row">
      <label>인증번호 <span class="require">*</span>
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
          <IconQuestion />
        </b-button>
      </label>
      <div class="d-flex align-items-center">
        <b-input placeholder="카카오 채널에 등록된 관리자 연락처" class="flex-fill"></b-input>
        <b-button variant="primary" class="ml-1">인증번호 받기</b-button>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
      <b-button variant="primary">추가</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconQuestion from '@/components/service/icons/IconQuestion.vue'

export default {
  components: { IconQuestion, IconArrowDown },
  name: "AddKaKaoModal",
  data() {
    return {
      pageCount: 10,
      category1: '',
      category2: '',
      category3: '',
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('add-kakao-modal');
    },
    msgTooltip() {
      return ''
    },
    setCategory1(value) {
      this.category1 = value;
    },
    setCategory2(value) {
      this.category2 = value;
    },
    setCategory3(value) {
      this.category3 = value;
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use "~@/assets/scss/service/base/typography" as typography;

label {
  margin-bottom: 0;
}
.modal-header ul {
  margin: 20px 0 0;
  padding: 0 0 0 20px;
  li {
    @include typography.font-style(14px, 700, 140%, -0.28px);
    color: var(--gray500);
  }
}
.btn-tooltip {
  margin-left: 2px;
}
.b-dropdown {
  width: calc(100% / 3 - 8px);
}
</style>
