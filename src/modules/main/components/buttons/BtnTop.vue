<template>
  <button type="button" class="btn-top" @click="scrollToTop"></button>
</template>

<script>
export default {
  name: "BtnTop",
  methods: {
    scrollToTop() {
      const container = document.querySelector(".landing-main");
      if (container) {
        container.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../../../assets/scss/landing/abstracts/variables" as v;

.btn-top {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px 0px 0px 0px;
  background: v.color(gray600);
  box-shadow: 2px 6px 12px 0px rgba(98, 104, 138, 0.24);
  line-height: 60px;
  @include v.tablet {
    width: 60px;
    height: 60px;
  }
  &::before {
    @include v.tablet {
      content: "TOP";
      position: absolute;
      left: 50%;
      bottom: -9px;
      font-weight: 500;
      font-size: 0.875rem;
      color: v.color(white);
      text-align: center;
      transform: translateX(-50%);
    }
    @include v.desktop {
      bottom: -8.5px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: url(v.$icon + "ico-top.png");
    background-size: 100%;
    transform: translate(-50%, -50%);
    @include v.tablet {
      top: 18px;
      transform: (0, -50%);
    }
  }
}
</style>
