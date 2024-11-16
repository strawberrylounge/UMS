<template>
  <div class="template-card" @click="selectCard">
    <div class="template-card-img">
      <!-- NOTE: 템플릿 이미지 추가 -->
      <!-- <img src="" alt=""> -->
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    setCard: {
      type: Function
    },
    value: {
      type: String
    }
  },
  name: 'templateCard',
  methods: {
    selectCard() {
      if (this.setCard && this.value) {
        this.setCard(this.value)
      }
    }
  }
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