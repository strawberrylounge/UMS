<template>
  <div class="template-card">
    <div class="template-card-img">
      <!-- NOTE: 템플릿 이미지 추가 -->
      <!-- <img src="" alt=""> -->
    </div>
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
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>