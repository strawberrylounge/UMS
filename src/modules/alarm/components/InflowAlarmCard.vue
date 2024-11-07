<template>
  <div class="card">
    <div class="card-header">
      <p class="m-0 f-title1 c-gray700">유입 알람</p>
      <b-button variant="dark" class="btn-svg btn-svg-right">
        <span>등록</span>
        <IconPlus />
      </b-button>
    </div>
    <p class="m-0 desc">메시지 발송 시 API 키 목록에서 인입 건수가 없거나 N건 이하이면 설정된 수신자에게 알람을 보냅니다. 최근 10분-60분 사이에 유입건수가 N건 이하이면 알람을 발송합니다. * 위 기준시간인 10분, 60분은 기준정보에 설정되어있습니다.</p>
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
  name: "InflowAlarmCard",
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
