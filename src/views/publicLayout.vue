<template>
  <div id="publicLayout">
    <!-- pop창에서는 헤더,탑버튼,푸터 연결을 제외함 -->
    <!-- <PublicHeader
      v-if="$route.fullPath.indexOf('/public/popup') < 0"
    ></PublicHeader>
    <GoTopButton
      v-if="$route.fullPath.indexOf('/public/popup') < 0"
    ></GoTopButton>
    <router-view :key="$route.fullPath"></router-view>
    <PublicFooter
      v-if="$route.fullPath.indexOf('/public/popup') < 0"
    ></PublicFooter>
    <confirm></confirm> -->
    <PublicHeader />
    <PublicFooter />
  </div>
</template>

<script>
import PublicHeader from "../components/PublicHeader";
import PublicFooter from "../components/PublicFooter";

export default {
  name: "publicLayout",
  components: {
    PublicHeader,
    PublicFooter,
  },
  created() {},
  mounted() {},
};
</script>
