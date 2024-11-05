<template>
  <div class="carousel-container">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :loop="false"
      :autoplay="true"
      :autoplay-timeout="10000"
      :speed="800"
      :navigation-enabled="true"
      :navigation-click-target-size="20"
      :pagination-size="originalSlides.length"
      :pagination-enabled="true"
      :pagination-padding="8"
      @pageChange="handlePageChange"
      class="main-carousel"
      ref="carousel"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-contents">
          <div class="text-area">
            <h3 class="slide-title">{{ slide.title }}</h3>
            <p>
              <b>{{ slide.boldText }}</b>
              {{ slide.description }}
            </p>
          </div>
          <div class="img-area">
            <picture v-if="slide.image">
              <source
                media="(min-width:1920px)"
                :srcset="slide.image.desktop"
              />
              <source media="(min-width:1024px)" :srcset="slide.image.tablet" />
              <img
                :src="slide.image.mobile"
                :alt="slide.imageAlt"
                class="banner-image"
              />
            </picture>
          </div>
        </div>
      </slide>
    </carousel>

    <!-- Custom Navigation Buttons -->
    <div class="navigation">
      <button type="button" class="nav-button prev" @click="prevSlide"></button>
      <button type="button" class="nav-button next" @click="nextSlide"></button>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

import { PATHS } from "../constants/paths";

export default {
  name: "MainCarousel",
  components: { Carousel, Slide },
  data() {
    return {
      PATHS,
      originalSlides: [
        {
          title: "원스텝 발송, 대체발송!",
          boldText: "한번에, 빠르게, 편리하게.",
          description: "EC-톡톡은 손쉽게 다양한 메시지를 발송할 수 있습니다.",
          image: {
            desktop: require(`@/${PATHS.BANNER}banner01-1920.png`),
            tablet: require(`@/${PATHS.BANNER}banner01-1024.png`),
            mobile: require(`@/${PATHS.BANNER}banner01-375.png`),
          },
          imageAlt:
            "원스텝 발송, 대체발송! 한번에, 빠르게, 편리하게. EC-톡톡은 손쉽게 다양한 메시지를 발송할 수 있습니다.",
        },
        {
          title: "고객 만족을 최우선으로!",
          boldText: "수많은 기업이 선택하는 EC톡톡, 이제 당신 차례",
          description: "고객이 믿고 찾는 EC톡톡, 변함없는 품질을 약속드립니다.",
          image: {
            desktop: require(`@/${PATHS.BANNER}banner02-1920.png`),
            tablet: require(`@/${PATHS.BANNER}banner02-1024.png`),
            mobile: require(`@/${PATHS.BANNER}banner02-375.png`),
          },
          imageAlt:
            "고객 만족을 최우선으로! 수많은 기업이 선택하는 EC톡톡, 이제 당신 차례. 고객이 믿고 찾는 EC톡톡, 변함없는 품질을 약속드립니다.",
        },
        {
          title: "최대한의 전송성공 처리!",
          boldText: "높은 데이터 전송성공률",
          description:
            "EC톡톡은 원스텝 발송을 통한 최대의 전송성공 처리가 가능합니다.",
          image: {
            desktop: require(`@/${PATHS.BANNER}banner03-1920.png`),
            tablet: require(`@/${PATHS.BANNER}banner03-1024.png`),
            mobile: require(`@/${PATHS.BANNER}banner03-375.png`),
          },
          imageAlt:
            "최대한의 전송성공 처리! 높은 데이터 전송성공률. EC톡톡은 원스텝 발송을 통한 최대의 전송성공 처리가 가능합니다.",
        },
      ],
      currentDirection: "forward",
      isTransitioning: false,
    };
  },
  computed: {
    slides() {
      return [
        ...this.originalSlides,
        ...this.originalSlides,
        ...this.originalSlides,
      ];
    },
  },
  methods: {
    handlePageChange(currentPage) {
      const totalSldies = this.originalSlides.length;

      if (currentPage === totalSldies - 1) {
        setTimeout(() => {
          this.$refs.carousel.goToPage(0);
        }, this.$refs.carousel.spped);
      }
    },
    prevSlide() {
      if (this.$refs.carousel) {
        const currentPage = this.$refs.carousel.currentPage;
        if (currentPage === 0) {
          this.$refs.carousel.goToPage(this.originalSlides.length - 1);
        } else {
          this.$refs.carousel.goToPage(currentPage - 1);
        }
      }
    },
    nextSlide() {
      if (this.$refs.carousel) {
        const currentPage = this.$refs.carousel.currentPage;
        if (currentPage === this.originalSlides.length - 1) {
          this.$refs.carousel.goToPage(0);
        } else {
          this.$refs.carousel.goToPage(currentPage + 1);
        }
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.carousel.goToPage(this.originalSlides.length);
    });
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

.VueCarousel {
  height: 100vh;
  overflow-x: hidden;
  :deep(.VueCarousel-wrapper) {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  :deep(.VueCarousel-inner) {
    display: flex;
    flex-direction: row;
    height: 100% !important;
    backface-visibility: hidden;
  }
  :deep(.VueCarousel-slide) {
    position: relative;
    height: 100%;
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    outline: none;
    opacity: 0;
    transition: opacity 0.8s ease;

    &.VueCarousel-slide-active {
      opacity: 1;
    }
  }
}
.main-carousel {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.slide-contents {
  position: relative;
  @include v.flex(column, null, center);
  width: 100%;
  height: 100%;
  text-align: center;
  @include v.tablet {
    display: block;
    text-align: left;
  }
  .text-area {
    padding-top: 80px;
    @include v.tablet {
      padding-top: 60px;
      padding-left: 60px;
    }
    @include v.desktop {
      padding-top: 100px;
      padding-left: 160px;
    }
    .slide-title {
      display: block;
      height: fit-content;
      padding-bottom: 20px;
      font-weight: 700;
      font-size: 1.75rem;
      color: v.color(gray900);
      line-height: 140%;
      @include v.tablet {
        font-size: 2.5rem;
      }
      @include v.desktop {
        min-height: 1.2em;
        font-weight: 800;
        font-size: 4rem;
        line-height: 1.2;
      }
    }
    p {
      font-weight: 400;
      font-size: 0.75rem;
      color: v.color(gray900);
      line-height: 160%;
      @include v.tablet {
        font-weight: 500;
        font-size: 1.125rem;
      }
      @include v.desktop {
        font-size: 1.5rem;
      }
      b {
        display: block;
        font-weight: 700;
        font-size: 1rem;
        line-height: 140%;
        @include v.tablet {
          font-size: 1.25rem;
        }
        @include v.desktop {
          font-size: 1.75rem;
        }
      }
    }
  }
  .img-area {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    picture {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transition: opacity 0.5s ease;
        @include v.tablet {
          object-position: center top;
        }
        @include v.desktop {
          object-position: center;
        }
      }
    }
  }
}
.carousel-container {
  position: relative;
  height: 100%;
  /* custom navigation */
  .navigation {
    display: none;
    @include v.desktop {
      display: block;
    }
    .nav-button {
      z-index: 2;
      position: absolute;
      top: 50%;
      width: 96px;
      height: 96px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: rgba($color: #000, $alpha: 0.2);
      fill: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
      transform: translateY(-50%);
      outline: none;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 48px;
        height: 48px;
        transform: translate(-50%, -50%);
      }
      &.prev {
        left: 60px;
        &::after {
          background: url(v.$icon + "ico-slide-prev.png") no-repeat;
          background-size: 100%;
        }
      }
      &.next {
        right: 60px;
        &::after {
          background: url(v.$icon + "ico-slide-next.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }
}

// Pagination 스타일 커스터마이징
:deep(.VueCarousel-pagination) {
  position: absolute;
  bottom: 40px;
  display: block;
  @include v.desktop {
    display: none;
  }
  .VueCarousel-dot:nth-child(n + 4) {
    display: none;
  }
  .VueCarousel-dot {
    &:not(:last-child) {
      margin-right: 8px;
    }
    width: 6px !important;
    height: 6px !important;
    padding: 0 !important;
    border-radius: 50%;
    background: v.color(white) !important;
    transition: width ease;
    &.VueCarousel-dot--active,
    &:nth-child(n + 4).VueCarousel-dot--active
      ~ .VueCarousel-dot:nth-child(-n + 3) {
      width: 60px !important;
      height: 5px !important;
      border-radius: 3px !important;
    }
  }
}
</style>
