<template>
  <div class="status-card" :class="item.type">
    <div class="status-card-body">
      <p class="status-card-title">{{ item.title }}</p>
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
  &-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 140%; /* 25.2px */
    letter-spacing: -0.36px;
    color: var(--gray400);
  }
  &-text {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.4px;
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
