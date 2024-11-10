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
@use "~@/assets/scss/service/base/typography" as typography;

.cash-table {
  width: 724px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  &-row {
    display: flex;
    align-items: center;
    padding: 16px;
    & + .cash-table-row {
      border-top: 1px solid var(--border-color);
    }
    p {
      flex: 0 0 calc(50% - 21px);
      @include typography.font-style(16px, 500, 140%, -0.32px);
      color: var(--gray900);
    }
  }
}
.vertical-divider {
    width: 1px;
    height: 16px;
    margin: 0 20px;
    background: var(--border-color);
  }
</style>