<template>
  <div class="cash-table-wrap">
    <p class="mt-0 mb-1 pb-3 f-title1 c-gray700">KaKaoTalk Bizmessage</p>
    <div class="cash-table w-100">
      <div class="cash-table-header">
        <div class="cash-table-row">
          <p class="m-0">상품명</p>
          <i class="vertical-divider"></i>
          <p class="m-0">간편요금(VAT 별도)</p>
        </div>
      </div>
      <div class="cash-table-row">
        <p class="m-0">알림톡 TEXT</p>
        <i class="vertical-divider"></i>
        <p class="m-0">6.5원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">알림톡 이미지</p>
        <i class="vertical-divider"></i>
        <p class="m-0">8원</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  name: "TalkTable",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/cash.scss';
</style>
