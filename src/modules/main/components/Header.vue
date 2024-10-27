<template lang="">
  <header id="landingHeader" class="landing-header">
    <h1 class="logo">
      <router-link to="/">EC-톡톡</router-link>
    </h1>

    <!-- PC & TABLET 메뉴 -->
    <nav class="menu-wrap">
      <ul class="menu">
        <li><a href="">서비스 소개</a></li>
        <li><a href="">채널 소개</a></li>
        <li>
          <router-link to="public/pricing">요금제 안내</router-link>
        </li>
        <li><a href="">고객 안내</a></li>
        <li>
          <a href="">회사 소개<i class="icon-link"></i></a>
        </li>
      </ul>
      <ul class="user-menu">
        <li><a href="">로그인&nbsp;|</a></li>
        <li><a href="">&nbsp;회원가입</a></li>
      </ul>
    </nav>

    <!-- MOBILE 메뉴 -->
    <nav class="menu-wrap-m">
      <button type="button" class="btn-menu">
        <span class="sr-only">메뉴</span>
      </button>
      <ul class="menu">
        <li><a href="">서비스 소개</a></li>
        <li><a href="">채널 소개</a></li>
        <li><router-link to="public/pricing">요금제 안내</router-link></li>
        <li><a href="">고객 안내</a></li>
        <li>
          <a href="">회사 소개<i class="icon-link"></i></a>
        </li>
        <li class="user-menu">
          <div>
            <a href="">로그인&nbsp;|</a>
            <a href="">&nbsp;회원가입</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
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
  @include v.flex-between;
  padding: 0 20px;
  background: v.color(white);
  white-space: nowrap;
  @include v.tablet {
    height: 68px;
    padding: 0 60px;
  }
  @include v.desktop {
    padding: 0 120px;
  }
  // 로고
  .logo {
    cursor: pointer;
    @include v.tablet {
      font-size: 1.25rem;
    }
  }
  // 메뉴
  nav {
    // pc
    &.menu-wrap {
      display: none;
      height: 100%;
      @include v.tablet {
        @include v.flex-between;
        flex: 0.7;
        min-width: 0;
      }
      @include v.desktop {
        flex: 0.6;
      }
      @include v.full {
        flex: 0.5;
      }
      .menu {
        @include v.flex(row, null, center);
        height: 100%;
        li {
          height: 100%;
          line-height: 68px;
          a {
            font-size: clamp(0.75rem, 1.5vw, 0.875rem);
            white-space: nowrap;
            @include v.desktop {
              font-size: 1.25rem;
            }
          }
          &:not(:last-child) {
            margin-right: clamp(20px, 3vw, 40px);
            @include v.desktop {
              margin-right: clamp(40px, 2.604vw, 60px);
            }
          }
          &:last-child {
            a {
              display: inline-flex;
              align-items: center;
            }
          }
          &:hover {
            border-bottom: 2px solid #5859ff;
            a {
              font-weight: 700;
              color: #5859ff;
            }
          }
        }
      }
      // 로그인 & 회원가입
      .user-menu {
        @include v.flex(row, null, center);
        padding-left: clamp(20px, 5vw, 12.1%);
        @include v.desktop {
          padding-left: clamp(0px, 4.229vw, 18.75%);
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
    }
    // mobile
    &.menu-wrap-m {
      position: relative;
      @include v.flex-between;
      @include v.tablet {
        display: none;
      }
      .btn-menu {
        width: 20px;
        height: 20px;
        background: url(v.$icon + "ico-hamburger.png") no-repeat;
        background-size: 100%;
      }
      .menu {
        z-index: 2;
        position: absolute;
        top: 28px;
        right: 0;
        display: none;
        width: 212px;
        padding: 20px;
        border-radius: 12px;
        border: 1px solid v.color(gray300);
        background: v.color(white);
        box-shadow: 2px 6px 12px 0px rgba(98, 104, 138, 0.24);
        li {
          &:not(:last-child) {
            padding-bottom: 16px;
            border-bottom: 1px solid v.color(gray200);
            a {
              color: v.color(gray600);
            }
          }
          &:not(:first-child) {
            padding-top: 16px;
          }
          &:last-child {
            @include v.flex(row, null, center);
            a {
              color: v.color(gray500);
            }
          }
          a {
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 140%;
          }
        }
      }
    }
  }
}
</style>
