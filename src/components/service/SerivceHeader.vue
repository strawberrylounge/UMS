<template>
  <header id="header" class="d-flex align-items-end justify-content-between header">
    <h2 class="m-0 heading1">{{ headerTitle }}</h2>
    <div class="d-flex">
      <b-button variant="outline-primary" size="lg">이용 가이드</b-button>
      <b-dropdown id="dropdown-dropright" right text="Drop-Right" variant="primary" class="cash-dropdown" toggle-class="btn btn-svg btn-svg-left ml-3 btn-primary btn-lg">
        <template #button-content>
          <IconCoin />
          <span>캐시현황</span>
        </template>
        <b-dropdown-text>
          <span>남은 충전캐시</span>
          <span>30,000P</span>
        </b-dropdown-text>
        <b-dropdown-text>
          <span>남은 이벤트 캐시</span>
          <span>100P</span>
        </b-dropdown-text>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-text>
          <span>남은 캐시</span>
          <span class="text-primary">100P</span>
        </b-dropdown-text>
      </b-dropdown>
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
  padding: 20px 40px 19px 40px;
  border-bottom: 1px solid var(--gray-300);
  h2 {
    color: var(--gray-700);
  }
}
</style>
