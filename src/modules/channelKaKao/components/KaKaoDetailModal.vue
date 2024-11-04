<template>  
  <b-modal id="kakao-detail-modal" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">카카오 채널 상세</h5>
      <ul>
        <li>카카오 채널은 등록 후 사용할 수 있습니다.</li>
        <li>채널 등록을 위해 OTP(인증번호)를 1회 이상 입력할 수 있습니다.</li>
      </ul>
    </template>

    <div class="d-flex align-items-center mb-1">
      <label class="form-label mb-0 f-body5 c-gray500">채널 검색용 아이디 <span class="require">*</span></label>
      <p class="m-0 f-body6 c-gray900">@ndi37j20mtu3ooy</p>
    </div>

    <div class="d-flex align-items-center pt-2 mb-1">
      <label class="form-label mb-0 f-body5 c-gray500">발신키</label>
      <p class="m-0 f-body6 c-gray900">@ndi37j20mtu3ooy</p>
    </div>

    <div class="d-flex align-items-center pt-2">
      <label class="form-label mb-0 f-body5 c-gray500">사업자 카테고리 <span class="require">*</span></label>
      <p class="m-0 f-body6 c-gray900">인터넷/통신,포털서비스,포털서비스</p>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import Pagination from '@/components/service/Pagination.vue';
import IconSort from '@/components/service/icons/IconSort.vue';

export default {
  components: {  },
  name: "KaKaoDetailModal",
  data() {
    return {
      pageCount: 10,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('kakao-detail-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use "~@/assets/scss/service/base/typography" as typography;

.form-label {
  width: 120px;
  margin-right: 12px;
}
.modal-header ul {
  margin: 20px 0 0;
  padding: 0 0 0 20px;
  li {
    @include typography.font-style(14px, 700, 140%, -0.28px);
    color: var(--gray500);
  }
}
</style>
