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
  width: 100%;
  height: auto;
  padding: 11px 43px 11px 15px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--white);
  box-shadow: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-900);
  &::placeholder {
    color: var(--gray-400);
  }
  &:hover {
    border-color: var(--gray-500);
  }
  &.is-invalid {
    border-color: var(--red-600);
    & + .search-icon svg path {
      fill: var(--red-600);
    }
  }
  &:disabled {
    background-color: var(--gray-50);
    & + .search-icon svg path {
      fill: var(--gray-400);
    }
  }
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
      fill: var(--gray-700);
    }
  }
}
</style>
