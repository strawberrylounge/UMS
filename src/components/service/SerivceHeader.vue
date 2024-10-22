<template>
  <header class="d-flex align-items-end justify-content-between header">
    <h2 class="m-0 heading1">{{ headerTitle }}</h2>
    <div class="d-flex">
      <b-button variant="outline-primary" size="lg">이용 가이드</b-button>
      <b-button variant="primary" size="lg" class="btn-svg btn-svg-left ml-3">
        <IconCoin />
        <span>캐시현황</span>
      </b-button>
    </div>
  </header>
</template>

<script>
import IconCoin from '@/components/service/icons/IconCoin.vue'

export default {
  name: 'SerivceHeader',
  components: { IconCoin },
  computed: {
    headerTitle() {
      if (this.$route.path === '/ac/home') {
        return '현황판';
      } else if (this.$route.path === '/messageStatus') {
        return '조회';
      }
      return '';
    }
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 20px 40px 19px 20px;
  border-bottom: 1px solid var(--gray-300);
  h2 {
    color: var(--gray-700);
  }
}
</style>
