<template>
  <button
    type="button"
    class="btn-top"
    :class="{ visible: showButton, 'landing-type': isLanding }"
    @click="scrollToTop"
  ></button>
</template>

<script>
export default {
  name: "BtnTop",
  props: {
    // landing 페이지 여부
    isLanding: {
      type: Boolean,
      default: false,
    },
    // landing 페이지 일 때 현재 섹션
    currentSection: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      showButton: false,
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
          this.showButton = newValue >= 5;
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

          this.showButton =
            scrollPosition > 200 || footerRect.top <= windowHeight;
        } else {
          this.showButton = scrollPosition > 200;
        }
      }
    },
    scrollToTop() {
      if (this.isLanding) {
        const container = document.querySelector(".landing-main");
        if (container) {
          container.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
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
  position: absolute;
  right: 0;
  bottom: 140px; // -15px?
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px 0px 0px 0px;
  background: v.color(gray600) !important;
  box-shadow: 2px 6px 12px 0px rgba(98, 104, 138, 0.24);
  line-height: 60px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  @include v.tablet {
    //bottom: 330px;
    bottom: 208px;
    width: 60px;
    height: 60px;
  }
  &.landing-type {
    bottom: 155px;
    @include v.tablet {
      bottom: 330px;
    }
  }
  &.visible {
    opacity: 1;
    visibility: visible;
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
      transform: translateX(-50%);
    }
  }
}
</style>
