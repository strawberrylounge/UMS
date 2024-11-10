<template>
  <div class="paytype-card">
    <div class="d-flex align-items-center flex-column py-4 bg-gray50">
      <component :is="icon" />
      <span class="f-body3 c-gray500">{{ text }}</span>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  name: 'PayTypeRadio'
}
</script>

<style scoped lang="scss">
.paytype-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .bg-gray50 {
    width: 100%;
    border-radius: 12px;
  }
  svg {
    width: 44px;
    height: 44px;
  }
  span {
    padding-top: 12px;
  }
}
</style>