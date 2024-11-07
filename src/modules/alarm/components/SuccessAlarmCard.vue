<template>
  <div class="card">
    <div class="card-header">
      <p class="m-0 f-title1 c-gray700">메시지 발송 성공율 알람</p>
      <b-button variant="dark" class="btn-svg btn-svg-right">
        <span>등록</span>
        <IconPlus />
      </b-button>
    </div>
    <p class="m-0 desc">설정 기간[요일,시간]에 메시지 발송 성공율이 떨어질 경우 설정된 수신자에게 알람을 보냅니다.</p>
    <hr class="hr">
    <div class="d-flex align-items-center">
      <div class="card-alarm flex-fill mr-1">
        <p class="m-0 f-body2 c-gray600">테스트 알람</p>
      </div>
      <b-button variant="outline-primary" class="ml-3">삭제</b-button>
    </div>
  </div>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue'

export default {
  components: {  IconPlus, },
  name: "SuccessAlarmCard",
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
