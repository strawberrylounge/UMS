<template>
  <div class="preview-mockup" :class="size">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PreviewDefault',
  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-mockup {
  background: url("~@/assets/images/service/preview-mockup.png") no-repeat;
  background-size: 100% 100%;
  padding: 55px 35px 35px;
  &.md {
    width: 320px;
    min-height: 643px;
  }
  &.lg {
    width: 371px;
    min-height: 745px;
  }
}
</style>