<template>
  <div class="wrapper">
    <Header />
    <main id="landingMain" class="landing-main">
      <section class="section01">
        <img :src="require(`${PATHS.MAIN}banner01.png`)" alt="" />
        <div class="btn-area">
          <button type="button" class="btn-detail">자세히 알아보기</button>
          <a href="#" class="btn-inquiry"></a>
        </div>
      </section>
      <section class="section02">section</section>
      <section class="section03">section</section>
      <section class="section04">section</section>
      <section class="section05">section</section>
      <section class="section06">section</section>
    </main>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { PATHS } from "../constants/\bpaths";

export default {
  name: "Home",
  components: { Header, Footer },
  data() {
    return {
      PATHS,
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

#landingMain {
  height: 100%;
  section {
    &.section01 {
      .btn-area {
        width: 260px;
        height: 78px;
        border-radius: 12px;
        background: v.color(gray700);
        font-weight: 700;
        font-size: 1.5rem;
        color: v.color(white);
      }
    }
  }
}
</style>
