<template lang="">
  <div class="search-box">
    <input
      type="search"
      placeholder="검색어를 입력해주세요"
      class="search-input base-input"
    />
    <button type="button" class="btn-search">검색</button>
  </div>
</template>
<script>
export default {
  name: "SearchBox",
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

.search-box {
  @include v.flex(row, null, center);
  .search-input {
    position: relative;
    width: 190px;
    margin-right: 8px;
    background: url(v.$icon + "ico-search.png") no-repeat center;
    background-position-x: calc(100% - 12px);
    @include v.tablet {
      width: 335px;
      margin-right: 12px;
      background-position-x: calc(100% - 16px);
    }
  }
  .btn-search {
    width: 56px;
    height: 35px;
    border-radius: 6px;
    background: v.color(gray600);
    font-weight: 400;
    font-size: 0.875rem;
    color: #fff;
    line-height: 35px;
    @include v.tablet {
      width: 120px;
      height: 44px;
    }
  }
}
</style>
