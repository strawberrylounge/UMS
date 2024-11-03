<template lang="">
  <!-- selecbox open 시 디자인 없음 -->
  <select name="" id="landingSelect" class="base-select">
    <option value="">전체</option>
    <option value="">말머리</option>
    <option value="">말머리</option>
  </select>
</template>
<script>
export default {
  name: "SelectBox",
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

#landingSelect {
  position: relative;
  width: 70px;
  height: 35px;
  //padding: 8px 12px;
  padding-left: 12px;
  border-radius: 8px;
  border: 1px solid v.color(gray300);
  background: url(v.$icon + "ico-select.png") no-repeat center;
  background-position-x: calc(100% - 12px);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  color: v.color(gray900);
  -webkit-appearance: none;
  @include v.tablet {
    width: 160px;
    height: 44px;
    //padding: 14px 16px;
    padding-left: 16px;
    background-position-x: calc(100% - 16px);
    font-size: 0.875rem;
  }
  option {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
