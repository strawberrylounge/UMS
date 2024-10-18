<template>
  <div class="wrapper">
    <Header />
    <main>main</main>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: { Header, Footer },
};
</script>
<style lang=""></style>
