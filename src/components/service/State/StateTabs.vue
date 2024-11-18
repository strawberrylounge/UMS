<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('이용상세')]">
        <button type="button" @click="setTab('이용상세')">이용상세</button>
      </div>
      <div :class="['tab', isActive('이용현황')]">
        <button type="button" @click="setTab('이용현황')">이용현황</button>
      </div>
      <div :class="['tab', isActive('실패현황')]">
        <button type="button" @click="setTab('실패현황')">실패현황</button>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">이용현황 > {{activeTab}}</p>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String
    },
    setTab: {
      type: Function
    }
  },
  name: "StateTabs",
  computed: {
  },
  methods: {
    isActive(link) {
      return this.activeTab === link ? 'active' : '';
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/messageTabs.scss';

.message-tabs-wrap .message-tabs {
  padding-bottom: 0;
}
</style>