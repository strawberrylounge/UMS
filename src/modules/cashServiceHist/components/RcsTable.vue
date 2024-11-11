<template>
  <div class="cash-table-wrap">
    <p class="mt-0 mb-1 pb-3 f-title1 c-gray700">RCS</p>
    <div class="cash-table w-100">
      <div class="cash-table-header">
        <div class="cash-table-row">
          <p class="m-0">상품명</p>
          <i class="vertical-divider"></i>
          <p class="m-0">간편요금(VAT 별도)</p>
        </div>
      </div>
      <div class="cash-table-row">
        <p class="m-0">RCS 템플릿</p>
        <i class="vertical-divider"></i>
        <p class="m-0">7.5원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">RCS LMS</p>
        <i class="vertical-divider"></i>
        <p class="m-0">26.3원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">RCS MMS</p>
        <i class="vertical-divider"></i>
        <p class="m-0">70원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">RCS 이미지 템플릿</p>
        <i class="vertical-divider"></i>
        <p class="m-0">45원</p>
      </div>
      <div class="cash-table-row">
        <p class="m-0">RCS 양방향</p>
        <i class="vertical-divider"></i>
        <p class="m-0">8원</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  name: "RcsTable",
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
