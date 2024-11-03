<template lang="">
  <span class="label-notice" :class="type">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "LabelNotice",
  props: {
    type: {
      type: String,
      default: "event", // '이벤트, 점검, 장애, 안내'
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

.label-notice {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;
  line-height: 24px;
  @include v.tablet {
    width: 80px;
    height: 34px;
    border-radius: 10px;
    font-size: 1rem;
    line-height: 34px;
  }
  // 이벤트
  &.event {
    border: 1px solid v.color(primary200);
    background: rgba(233, 233, 254, 0.5);
    color: v.color(primary300);
    &::after {
      content: "이벤트";
    }
  }
  // 점검
  &.check {
    border: 1px solid #ff9e9e;
    background: rgba(255, 89, 79, 0.1);
    color: #ff594f;
    &::after {
      content: "점검";
    }
  }
  // 장애
  &.failure {
    border: 1px solid v.color(gray400);
    background: v.color(gray200);
    color: v.color(gray600);
    &::after {
      content: "장애";
    }
  }
  // 안내
  &.guide {
    border: 1px solid v.color(gray300);
    background: #fff;
    color: v.color(gray600);
    &::after {
      content: "안내";
    }
  }
}
</style>
