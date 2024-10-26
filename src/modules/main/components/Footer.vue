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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 330px;
  padding: {
    top: 60px;
    left: 360px;
    bottom: 60px;
  }
  background: #313a47;
  color: color.adjust(#fff, $alpha: -0.6);
  // 서비스 이용 약관 & 개인정보처리방침
  ul.policy-list {
    display: flex;
    align-items: center;
    li {
      a {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  }
  // 주소
  .address {
    font-size: 1rem;
    line-height: 160%;
  }
  // copyright
  small.copyright {
    font-size: 0.875rem;
  }
}
</style>
