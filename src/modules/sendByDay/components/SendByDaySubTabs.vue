<template>
  <div class="statistics-tabs d-flex">
    <div :class="['tab', isActive('총계')]" @click="setTab('총계')">총계</div>
    <div :class="['tab', isActive('SMS')]" @click="setTab('SMS')">SMS 전체</div>
    <div :class="['tab', isActive('LMS')]" @click="setTab('LMS')">LMS 전체</div>
    <div :class="['tab', isActive('MMS')]" @click="setTab('MMS')">MMS 전체</div>
    <div :class="['tab', isActive('RCS')]" @click="setTab('RCS')">RCS  전체</div>
    <div :class="['tab', isActive('알림톡')]" @click="setTab('알림톡')">알림톡 전체</div>
  </div>
</template>

<script>
export default {
  name: "StatisticsSubTabs",
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

.statistics-tabs {
  border-bottom: 1px solid var(--border-color);
  .tab {
    padding-bottom: 12px;
    @include typography.font-style(16px, 700, 140%, -0.32px);
    color: var(--gray500);
    cursor: pointer;
    &.active {
      padding-bottom: 10px;
      border-bottom: 2px solid var(--primary);
      color: var(--primary);
    }
    & + .tab {
      margin-left: 28px;
    }
  }
}
</style>