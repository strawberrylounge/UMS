<template>
  <div class="cash-table">
    <div class="cash-table-row">
      <p class="m-0">이용금액</p>
      <i class="vertical-divider"></i>
      <p class="m-0">0원</p>
    </div>
    <div class="cash-table-row">
      <p class="m-0">부가세</p>
      <i class="vertical-divider"></i>
      <p class="m-0">0원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayTable'
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/cash.scss';
</style>