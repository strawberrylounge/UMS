<template>
  <div class="preview-mockup">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PreviewDefault'
}
</script>

<style lang="scss" scoped>
.preview-mockup {
  width: 320px;
  min-height: 643px;
  background: url("~@/assets/images/service/preview-mockup.png") no-repeat;
  background-size: 100% 100%;
  padding: 55px 35px 35px;
}
</style>