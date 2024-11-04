<template>
  <button class="btn btn-icon icon-sort">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none" class="ic-up">
      <path d="M5 0L0 5H10L5 0Z" fill="#D1D5DB"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none" class="ic-down">
      <path d="M5 5L0 0H10L5 5Z" fill="#D1D5DB"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: "IconSort",
}
</script>

<style scoped lang="scss">
.icon-sort {
  display: inline-flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: none;
  &.up {
    .ic-up path {
      fill: var(--gray900);
    }
    .ic-down {
      display: none;
    }
  }
  &.down {
    .ic-down path {
      fill: var(--gray900);
    }
    .ic-up {
      display: none;
    }
  }
}
.ic-down {
  margin-top: 4px;
}
</style>