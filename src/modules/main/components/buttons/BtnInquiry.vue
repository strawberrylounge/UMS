<template lang="">
  <a href="#" class="btn-inquiry" :class="{ 'near-footer': nearFooter }"></a>
</template>
<script>
export default {
  name: "BtnInquiry",
  props: {
    isLanding: {
      type: Boolean,
      default: false,
    },
    currentSection: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      nearFooter: false,
    };
  },
  mounted() {
    if (!this.isLanding) {
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    }
  },
  beforeDestroy() {
    if (!this.isLanding) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  watch: {
    currentSection: {
      immediate: true,
      handler(newValue) {
        if (this.isLanding) {
          this.nearFooter = newValue >= 5; // section06에서 변경
        }
      },
    },
  },
  methods: {
    handleScroll() {
      if (!this.isLanding) {
        const footer = document.querySelector("footer");
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          this.nearFooter = footerRect.top <= windowHeight;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../../../assets/scss/landing/abstracts/variables" as v;

.btn-inquiry {
  z-index: 99;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: v.color(white);
  box-shadow: 2px 6px 12px 0px rgba(98, 104, 138, 0.24);
  transition: bottom 0.3s ease;
  @include v.tablet {
    width: 64px;
    height: 64px;
    &::after {
      content: "1 :1 문의";
      position: absolute;
      left: 50%;
      bottom: 10px;
      font-weight: 700;
      font-size: 0.75rem;
      color: v.color(primary400);
      text-align: center;
      transform: translateX(-50%);
      white-space: nowrap;
    }
  }
  @include v.desktop {
    bottom: 40px;
    right: 40px;
    width: 100px;
    height: 100px;
    &::after {
      bottom: 15px;
      font-size: 0.875rem;
    }
  }
  &.near-footer {
    bottom: 226px;
    @include v.tablet {
      bottom: 411px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 18px;
    background: url(v.$common + "chat.png");
    background-size: 100%;
    transform: translate(-50%, -50%);
    @include v.tablet {
      top: 20px;
      width: 40px;
      height: 25px;
    }
    @include v.desktop {
      top: 35px;
      width: 75px;
      height: 45px;
    }
  }
}
</style>
