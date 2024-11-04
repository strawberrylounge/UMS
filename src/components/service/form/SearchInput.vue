<template>
  <div class="search-container">
    <input
      type="text"
      class="form-control"
      placeholder="검색어를 입력해주세요"
    />
    <span class="search-icon">
      <IconSearch />
    </span>
  </div>
</template>

<script>
import IconSearch from '@/components/service/icons/IconSearch.vue';

export default {
  components: { IconSearch, },
  name: 'SearchInput',
  props: {
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  width: 100%;
  position: relative;
}
.form-control {
  padding-right: 43px;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 2;
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: var(--gray700);
    }
  }
}
</style>
