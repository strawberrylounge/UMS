<template>
  <div class="cash-table-wrap">
    <p class="mt-0 mb-1 pb-3 f-title1 c-gray700">SMS / LMS / MMS</p>
    <div class="cash-table w-100">
      <div class="cash-table-header">
        <div class="cash-table-row">
          <p class="m-0">상품명</p>
          <i class="vertical-divider"></i>
          <p class="m-0">간편요금(VAT 별도)</p>
        </div>
      </div>
      <div class="cash-table-row">
        <p class="m-0">SMS</p>
        <i class="vertical-divider"></i>
        <p class="m-0">9원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">SMSMO</p>
        <i class="vertical-divider"></i>
        <p class="m-0">10원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">LMS</p>
        <i class="vertical-divider"></i>
        <p class="m-0">26.35원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">LMSMO</p>
        <i class="vertical-divider"></i>
        <p class="m-0">15원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">MMS</p>
        <i class="vertical-divider"></i>
        <p class="m-0">70원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">MMSMO</p>
        <i class="vertical-divider"></i>
        <p class="m-0">20원</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  name: "SmsTable",
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
