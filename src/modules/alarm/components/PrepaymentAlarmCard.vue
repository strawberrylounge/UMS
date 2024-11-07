<template>
  <div class="card">
    <div class="card-header">
      <p class="m-0 f-title1 c-gray700">선불 금액 알람</p>
      <b-button variant="dark" class="btn-svg btn-svg-right">
        <span>등록</span>
        <IconPlus />
      </b-button>
    </div>
    <p class="m-0 desc">충전된 사용가능 금액이 설정한 금액 이하로 내려갈 때 알람을 보냅니다.</p>
    <hr class="hr">
    <div class="card-alarm card-alarm-empty">
      <p class="m-0 f-body2 c-gray400">알람설정을 하지 않았습니다. 먼저 등록해 주십시오.</p>
    </div>
  </div>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue'

export default {
  components: {  IconPlus, },
  name: "PrepaymentAlarmCard",
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
