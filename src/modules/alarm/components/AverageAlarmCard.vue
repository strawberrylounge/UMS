<template>
  <div class="card">
    <div class="card-header">
      <p class="m-0 f-title1 c-gray700">전달 일 평균 건수 초과 알람</p>
      <b-button variant="dark" class="btn-svg btn-svg-right">
        <span>등록</span>
        <IconPlus />
      </b-button>
    </div>
    <p class="m-0 desc">전달 일 평균 건수를 초과 했을 때 알람을 보냅니다.</p>
    <hr class="hr">
    <div class="d-flex align-items-center">
      <div class="card-alarm flex-fill mr-1">
        <p class="m-0 f-body2 c-gray600">Test2</p>
      </div>
      <b-button variant="outline-primary" class="ml-3">삭제</b-button>
    </div>
  </div>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue'

export default {
  components: {  IconPlus, },
  name: "AverageAlarmCard",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/alarm.scss';
</style>
