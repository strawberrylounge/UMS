<template>
  <div class="cash-table">
    <div class="cash-table-row">
      <p class="m-0">남은 충전캐시</p>
      <i class="vertical-divider"></i>
      <p class="m-0">2,188,581.86</p>
    </div>
    <div class="cash-table-row">
      <p class="m-0">남은 충전캐시</p>
      <i class="vertical-divider"></i>
      <p class="m-0">2,188,581.86</p>
    </div>
    <div class="cash-table-row bg-gray50">
      <p class="m-0">남은 이벤트 캐시</p>
      <i class="vertical-divider"></i>
      <p class="m-0">2,188,581.86</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CashTable'
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/cash.scss';
</style>