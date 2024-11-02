<template lang="">
  <header id="landingHeader" class="landing-header">
    <div class="header-container">
      <h1 class="logo">
        <router-link to="/">EC-톡톡</router-link>
      </h1>

      <!-- PC & TABLET 메뉴 -->
      <nav class="menu-wrap">
        <ul class="menu">
          <li>
            <router-link to="/public" exact-active-class="on"
              >서비스 소개</router-link
            >
          </li>
          <li>
            <router-link to="/" exact-active-class="on">채널 소개</router-link>
          </li>
          <li>
            <router-link to="public/pricing" exact-active-class="on"
              >요금제 안내</router-link
            >
          </li>
          <li>
            <router-link to="/" exact-active-class="on">고객 안내</router-link>
          </li>
          <li>
            <a href="">회사 소개<i class="icon-link"></i></a>
          </li>
        </ul>
      </nav>

      <div class="user-area">
        <ul class="user-menu">
          <li><router-link to="/">로그인&nbsp;|</router-link></li>
          <li><router-link to="/">&nbsp;회원가입</router-link></li>
        </ul>

        <button
          type="button"
          class="btn-menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="sr-only">메뉴</span>
        </button>
      </div>

      <!-- MOBILE 메뉴 -->
      <div :class="{ active: isMobileMenuOpen }" class="mobile-menu">
        <ul class="menu">
          <li><router-link to="/public">서비스 소개</router-link></li>
          <li><router-link to="/">채널 소개</router-link></li>
          <li><router-link to="public/pricing">요금제 안내</router-link></li>
          <li><router-link to="/">고객 안내</router-link></li>
          <li>
            <a href="">회사 소개<i class="icon-link"></i></a>
          </li>
          <li class="user-menu">
            <div>
              <router-link to="/">로그인&nbsp;|</router-link>
              <router-link to="/">&nbsp;회원가입</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  watch: {
    $route() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = "";
    },
  },
  methods: {
    handleClickOutside(event) {
      const mobileMenu = document.querySelector(".mobile-menu");
      const btnMenu = document.querySelector(".btn-menu");

      if (
        this.isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        !btnMenu.contains(event.target)
      ) {
        this.isMobileMenuOpen = false;
        document.body.style.overflow = "";
      }
    },
    handleResize() {
      if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        document.body.style.overflow = "";
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

/* 헤더 공통 */
i.icon-link {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  background: url(v.$icon + "ico-link.png") no-repeat;

  a:has(&) {
    display: inline-flex;
    align-items: center;
  }
}

#landingHeader {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 36px;
  background: v.color(white);
  @include v.tablet {
    height: 68px;
  }
  @include v.desktop {
  }

  .header-container {
    position: relative;
    @include v.flex-between;
    max-width: 1920px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    @include v.tablet {
      padding: 0 60px;
    }
    @include v.desktop {
      padding: 0 120px;
    }

    // 로고
    .logo {
      flex: 0 0 auto;
      cursor: pointer;
      @include v.tablet {
        font-size: 1.25rem;
      }
    }
    // 메뉴
    // pc
    .menu-wrap {
      display: none;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      @include v.tablet {
        display: block;
      }

      .menu {
        @include v.flex(row, null, center);
        height: 100%;
        li {
          height: 100%;
          line-height: 68px;
          a {
            height: 100%;
            font-size: clamp(0.75rem, 1.5vw, 0.875rem);
            white-space: nowrap;
            @include v.desktop {
              font-size: 1.25rem;
            }
            &:hover,
            &.on {
              border-bottom: 2px solid #5859ff;
              font-weight: 700;
              color: #5859ff;
            }
          }
          &:not(:last-child) {
            margin-right: clamp(20px, 3vw, 40px);
            @include v.desktop {
              margin-right: clamp(40px, 2.604vw, 60px);
            }
          }
        }
      }
    }

    // 로그인 & 회원가입
    .user-area {
      @include v.flex(row, null, center);
      flex: 0 0 auto;
      .user-menu {
        display: none;
        @include v.tablet {
          @include v.flex(row, null, center);
          margin-left: 40px;
        }
        li {
          a {
            font-weight: 700;
            font-size: 0.875rem;
            color: v.color(gray500);
            @include v.desktop {
              font-size: 1rem;
            }
          }
        }
      }

      .btn-menu {
        display: block;
        width: 20px;
        height: 20px;
        background: url(v.$icon + "ico-hamburger.png") no-repeat;
        background-size: 100%;
        @include v.tablet {
          display: none;
        }
      }
    }
  }

  // mobile
  .mobile-menu {
    display: none;
    position: absolute;
    top: 50px;
    right: 20px;
    width: 212px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid v.color(gray300);
    background: v.color(white);
    box-shadow: 2px 6px 12px 0px rgba(98, 104, 138, 0.24);

    &.active {
      display: block;
    }
    .menu li {
      &:not(:last-child) {
        padding-bottom: 16px;
        border-bottom: 1px solid v.color(gray200);
      }
      &:not(:first-child) {
        padding-top: 16px;
      }
      a {
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 140%;
        color: v.color(gray600);
      }
    }
  }
}
</style>
