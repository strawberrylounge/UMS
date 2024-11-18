<template>
  <div class="state list-view">
    <StateTabs :activeTab="activeTab" :setTab="setTab" />

    <StateDetail v-if="activeTab == '이용상세'" />
    <StateCurrent v-if="activeTab == '이용현황'" />
    <StateFail v-if="activeTab == '실패현황'" />
  </div>
</template>

<script>
import StateTabs from '@/components/service/State/StateTabs.vue'
import StateDetail from '@/modules/State/components/StateDetail.vue'
import StateCurrent from '@/modules/State/components/StateCurrent.vue'
import StateFail from '@/modules/State/components/StateFail.vue'

export default {
  components: { StateTabs, StateDetail, StateCurrent, StateFail },
  name: "State",
  data() {
    return {
      activeTab: '이용상세'
    }
  },
  methods: {
    setTab(value) {
      this.activeTab = value;
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';

</style>
