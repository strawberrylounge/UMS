<template>
  <footer id="landingFooter" class="landing-footer">
    <ul class="policy-list">
      <li><a href="#">서비스 이용 약관&nbsp;</a></li>
      <li><a href="#">|&nbsp;개인정보처리방침</a></li>
    </ul>
    <address class="address">
      (주) 이커머스테크<br />
      서울시 마포구 성암로 330 첨단산업센터 519호<br />
      대표이사 최정희 | 전화 02-6949-6227 | FAX 02-6949-6229 |
      recruit@ectech.co.kr
    </address>
    <small class="copyright"
      >Copyright É 2024 by E-COMMERCETECH.All Rights Reserved</small
    >
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@use "sass:color";
@use ".././../../assets/scss/landing/abstracts/variables" as v;

#landingFooter {
  @include v.flex(column, space-between);
  flex-shrink: 0;
  width: 100%;
  height: 155px;
  padding: 20px;
  background: #313a47;
  color: color.adjust(#fff, $alpha: -0.6);
  box-sizing: border-box;
  //line-height: 160%;
  @include v.tablet {
    height: 330px;
    padding: 60px 75px;
    //line-height: 140%;
  }
  @include v.desktop {
    padding: {
      top: 60px;
      left: 360px;
      bottom: 60px;
    }
    //line-height: 160%;
  }
  // 서비스 이용 약관 & 개인정보처리방침
  ul.policy-list {
    @include v.flex(row, null, center);
    li {
      a {
        font-weight: 700;
        font-size: 0.75rem;
        @include v.tablet {
          font-size: 1.125rem;
        }
        @include v.desktop {
          font-size: 1.5rem;
        }
      }
    }
  }
  // 주소
  .address {
    font-size: 0.625rem;
    @include v.tablet {
      font-size: 0.875rem;
    }
    @include v.desktop {
      font-size: 1rem;
    }
  }
  // copyright
  small.copyright {
    font-size: 0.625rem;
    @include v.tablet {
      font-size: 0.875rem;
    }
    @include v.desktop {
      font-size: 0.875rem;
    }
  }
}
</style>
