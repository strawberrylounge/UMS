<template lang="">
  <header id="landingHeader" class="landing-header">
    <h1 class="logo">EC-톡톡</h1>
    <nav class="menu-wrap">
      <ul class="menu">
        <li><a href="">서비스 소개</a></li>
        <li><a href="">채널 소개</a></li>
        <li><a href="">요금제 안내</a></li>
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
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

#landingHeader {
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  background: v.color(white);
  white-space: nowrap;
  // 로고
  .logo {
    font-size: 1.25rem;
  }
  // 메뉴
  nav.menu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .menu {
      display: flex;
      align-items: center;
      height: 100%;
      li {
        height: 100%;
        line-height: 68px;
        a {
          font-size: 1.25rem;
          &:last-child {
            i.icon-link {
              display: inline-block;
              width: 16px;
              height: 16px;
              margin-left: 4px;
              background: url(v.$icon + "ico-link.png") no-repeat;
            }
          }
        }
        &:not(:last-child) {
          margin-right: 60px;
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
      display: flex;
      align-items: center;
      padding-left: 360px;
      li {
        a {
          font-weight: 700;
          color: v.color(gray500);
        }
      }
    }
  }
}
</style>
