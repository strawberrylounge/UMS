<template>
  <div class="template-card">
    <div class="template-card-img"></div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'templateCard'
}
</script>

<style scoped lang="scss">
.template-card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  &-img {
    width: 80px;
    height: 126px;
    margin-bottom: 11px;
    background-color: var(--gray200);
    border-radius: 4px;
  }
}
</style>