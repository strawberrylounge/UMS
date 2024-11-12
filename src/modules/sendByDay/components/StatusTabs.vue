<template>
  <div class="status-tabs d-flex">
    <button type="button" :class="['btn btn-tab', isActive('all')]" @click="setTab('all')">성공/실패 현황</button>
    <button type="button" :class="['btn btn-tab', isActive('fail')]" @click="setTab('fail')">실패코드 현황</button>
  </div>
</template>

<script>
export default {
  name: "StatusTabs",
  props: {
    tab: {
      type: String
    },
    setTab: {
      type: Function
    }
  },
  computed: {
  },
  methods: {
    isActive(item) {
      return this.tab === item ? 'active' : '';
    }
  }
}
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

.status-tabs {
  margin: 28px 0;
}
.btn-tab {
  width: 160px;
  padding: 11px 23px;
  background-color: var(--gray50);
  border: 1px solid var(--gray200);
  border-radius: 0;
  @include typography.font-style(14px, 500, 140%, -0.28px);
  color: var(--gray500);
  &.active {
    background-color: var(--gray500);
    font-weight: 700;
    color: var(--white);
  }
}
</style>