<template>
  <div class="page-header" :style="isReady ? headerStyle : {}">
    <div class="inner">
      <span class="page-header-subtitle" v-if="subtitle">{{ subtitle }}</span>
      <h3 class="page-header-title">
        {{ title }}
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
    imageName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isReady: false,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${require("@/assets/images/landing/" +
          this.imageName +
          ".png")})`,
        backgroundImageTablet: `url(${require("@/assets/images/landing/" +
          this.imageName +
          "-1024.png")})`,
        backgroundImageMobile: `url(${require("@/assets/images/landing/" +
          this.imageName +
          "-375.png")})`,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.isReady = true;
    });
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

.page-header {
  @include v.flex(column, center, null);
  width: 100%;
  height: 160px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--background-mobile);
  @include v.tablet {
    @include v.flex-center;
    height: 240px;
    background-image: var(--background-tablet);
    background-size: cover;
  }
  @include v.desktop {
    height: 455px;
    background-image: var(--background-desktop);
  }
  .inner {
    padding: 0 20px;
    @include v.tablet {
      max-width: none;
      padding: 0 40px;
    }
    @include v.desktop {
      padding-left: 60px;
    }
    .page-header-subtitle {
      display: block;
      padding-bottom: 8px;
      font-weight: 400;
      font-size: 0.75rem;
      color: v.color(white);
      text-shadow: 0px 4px 16px rgba(109, 110, 250, 0.6);
      line-height: 160%;
      @include v.tablet {
        font-weight: 500;
        font-size: 1rem;
        line-height: 140%;
      }
      @include v.desktop {
        font-weight: 400;
        font-size: 1.5rem;
      }
    }
    .page-header-title {
      font-weight: 700;
      font-size: 1.75rem;
      color: v.color(white);
      text-shadow: 0px 4px 16px rgba(109, 110, 250, 0.6);
      line-height: 140%;
      @include v.tablet {
        font-size: 2.5rem;
      }
      @include v.desktop {
        font-weight: 800;
        font-size: 5rem;
      }
    }
  }
}
</style>
