<template>  
  <b-modal scrollable id="select-rcs-template-modal" title="템플릿 선택" hide-header-close size="xl" centered content-class="service-modal select-template-modal">
    <div class="d-flex">
      <div class="section">
        <p class="m-0 mb-1 pb-3 f-body1 c-gray700">브랜드 선택</p>
        <div class="d-flex align-items-center dropdown-container">
          <label class="form-label">브랜드</label>
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

        <label for="template" class="f-body5 c-gray500">템플릿 검색</label>
        <b-input-group class="w-100">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="dark">조회</b-button>
          </b-input-group-append>
        </b-input-group>

        <div class="d-flex justify-content-between">
          <label class="f-body5 c-gray500">템플릿 이름 (템플릿 ID)</label>
          <span class="f-body4 f-bold c-gray500">총 <span class="text-primary">2건</span></span>
        </div>
        <div class="dropdown b-dropdown template-list">
          <ul class="dropdown-menu show">
            <li>0904_SMS_정보성</li>
            <li>0904_SMS_정보성</li>
            <li>0904_SMS_정보성</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <p class="m-0 mb-1 pb-3 f-body1 c-gray700">템플릿 내용</p>
        <dl class="template-content">
          <dt>발송유형</dt>
          <dd>SMS</dd>
        </dl>
        <dl>
          <dt>메시지 구분</dt>
          <dd>내용 노출</dd>
        </dl>
        <dl>
          <dt>템플릿 명</dt>
          <dd>0904_SMS_정보성</dd>
        </dl>
        <dl>
          <dt>내용</dt>
          <dd>0904_SMS_정보성</dd>
        </dl>
      </div>
      
      <div class="section">
        <PreviewDefault>
          <!-- NOTE: 템플릿 내용 들어가는 부분 -->
          <div class="rcs-preview-content">
            <div class="d-flex align-items-center">
              <div class="rcs-preview-content-icon rounded-circle">
                <IconShoppingCart />
              </div>
              <span class="pl-1 f-caption1 c-gary900">출고</span>
            </div>
            <p class="my-3 f-caption2 c-gray900">웹템플릿 등록 테스트 입니다.</p>
            <b-button variant="secondary" class="w-100">배송조회</b-button>
          </div>
        </PreviewDefault>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary">템플릿 선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconShoppingCart from '@/components/service/icons/IconShoppingCart.vue'

export default {
  components: {PreviewDefault, IconArrowDown, IconShoppingCart, },
  name: "SelectRcsTemplateModal",
  data() {
    return {
      barnd: '',
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('select-rcs-template-modal');
    },
    setBrand(value) {
      this.barnd = value;
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';

.rcs-preview-content {
  padding: 13px;
  background-color: var(--white);
  border-radius: 11px;
  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: var(--gray100);
    text-align: center;
    svg {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
