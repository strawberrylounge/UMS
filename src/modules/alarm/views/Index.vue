<template>
  <div class="alarm">
    <AlarmTabs />

    <div class="tab-contents">
      <div class="row">
        <div class="col">
          <SuccessAlarmCard :deleteAlarm="confirmDeleteAlarm" />
        </div>
        <div class="col">
          <InflowAlarmCard />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <IpAlarmCard />
        </div>
        <div class="col">
          <PrepaymentAlarmCard />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <LimitsAlarmCard />
        </div>
        <div class="col">
          <AverageAlarmCard :deleteAlarm="confirmDeleteAlarm" />
        </div>
      </div>
    </div>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="confirmSubmit" />
  </div>
</template>

<script>
import AlarmTabs from '@/components/service/alarm/AlarmTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import SuccessAlarmCard from '@/modules/alarm/components/SuccessAlarmCard.vue'
import InflowAlarmCard from '@/modules/alarm/components/InflowAlarmCard.vue'
import IpAlarmCard from '@/modules/alarm/components/IpAlarmCard.vue'
import PrepaymentAlarmCard from '@/modules/alarm/components/PrepaymentAlarmCard.vue'
import LimitsAlarmCard from '@/modules/alarm/components/LimitsAlarmCard.vue'
import AverageAlarmCard from '@/modules/alarm/components/AverageAlarmCard.vue'

export default {
  components: {  AlarmTabs,  AlertModal, ConfirmModal, SuccessAlarmCard, InflowAlarmCard, IpAlarmCard, PrepaymentAlarmCard, LimitsAlarmCard, AverageAlarmCard, },
  name: "Alarm",
  data() {
    return {
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
    }
  },
  methods: {
    deleteAlarm() {
      this.$bvModal.hide('confirm-modal');
      this.alertTitle = '알람 삭제 완료'
      this.alertDesc = '알람 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal');
    },
    confirmDeleteAlarm() {
      this.confirmTitle = '알람 삭제'
      this.confirmDesc = '삭제하시겠습니까?'
      this.confirmSubmit = this.deleteAlarm
      this.$bvModal.show('confirm-modal');
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/alarm.scss';

</style>
