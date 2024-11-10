<template>
  <b-modal id="account-info-modal" hide-header-close size="md" centered content-class="service-modal">
    <template #modal-title>
      <h5 class="modal-title">가상계좌 정보</h5>
      <p class="title-desc">* 유효기간 내 가상 계좌에 입금이 안되면 신청 정보는 자동으로 삭제됩니다.</p>
    </template>

    <dl>
      <dt>가상 계좌 번호</dt>
      <dd>NH농협은행 X9018612261912</dd>
    </dl>
    
    <dl>
      <dt>가상 계좌 유효일자</dt>
      <dd>2024-08-06 09:34:43</dd>
    </dl>

    <dl>
      <dt>가상 계좌 예금주 명</dt>
      <dd>abc</dd>
    </dl>

    <dl>
      <dt>가상 계좌 입금액</dt>
      <dd>3,000원</dd>
    </dl>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
components: {  },
name: 'AccountInfoModal',
  props: {
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('account-info-modal');
    },
  }
}
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

dl {
  display: flex;
  margin-bottom: 0;
  @include typography.font-style(14px, 500, 140%, -0.28px);
  & + dl {
    margin-top: 12px;
  }
  dt {
    width: 120px;
    margin-right: 12px;
    color: var(--gray500);
  }
  dd {
    margin: 0;
    color: var(--gray900);
  }
}
</style>