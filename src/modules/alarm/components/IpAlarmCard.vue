<template>
  <div class="card">
    <div class="card-header">
      <p class="m-0 f-title1 c-gray700">IP 체크 알람</p>
      <b-button variant="dark" class="btn-svg btn-svg-right">
        <span>등록</span>
        <IconPlus />
      </b-button>
    </div>
    <p class="m-0 desc">메시지 발송 요청 시 API 키 IP 정보와 맞지 않아 오류가 발생 했을 때 알람을 보냅니다.</p>
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
  name: "IpAlarmCard",
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
