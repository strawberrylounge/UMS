<template>
  <div class="status-card" :class="item.type">
    <div class="status-card-body">
      <p class="m-0 f-title3 c-gray400">{{ item.title }}</p>
      <p class="status-card-text"><span>{{ item.value }}</span>건</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusCard',
  props: {
    item: {
      type: Object,
      required: true
    },
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

.status-card {
  width: 20%;
  padding: 0 12.5px;
  &-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 23px;
    background: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 12px;
  }
  &-text {
    margin: 0;
    @include typography.font-style(20px, 700, 140%, -0.4px);
    color: var(--gray700);
    span {
      padding-right: 4px;
    }
  }
  &.request .status-card-text span {
    color: var(--status-request)
  }
  &.waiting .status-card-text span {
    color: var(--status-waiting)
  }
  &.success .status-card-text span {
    color: var(--status-success)
  }
  &.failure .status-card-text span {
    color: var(--status-failure)
  }
}

</style>
