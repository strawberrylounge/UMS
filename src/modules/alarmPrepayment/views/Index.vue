<template>
  <div class="alarm-prepayment">
    <AlarmTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>* 충전된 사용가능 금액이 설정한 금액 이하로 내려갈 때 알람을 보냅니다.</li>
        </ul>
      </div>

      <div class="card">
        <div class="form-row">
          <label>알람명 <span class="require">*</span></label>
          <b-input placeholder="입력" v-model="title"></b-input>
        </div>

        <div class="form-row">
          <label>알람 금액 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력" v-model="count"></b-input>
            <span class="pl-2 f-body6 c-gray900">원 이하</span>
          </div>
        </div>

        <hr class="hr" />

        <div class="d-flex">
          <AlarmTable />
        </div>

        <div class="submit-wrap mt-5">
          <b-button variant="outline-primary" size="lg">취소</b-button>
          <b-button variant="primary" size="lg" class="ml-3" @click="save">저장</b-button>
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
import AlarmTable from '@/modules/alarmPrepayment/components/AlarmTable.vue'

export default {
  components: { AlarmTable, AlarmTabs,  AlertModal, ConfirmModal, },
  name: "AlarmIp",
  data() {
    return {
      title: '',
      count: '',
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
    }
  },
  methods: {
    save() {
      if (!this.title) {
        this.alertTitle = '알람명 입력'
        this.alertDesc = '알림명은 필수사항입니다.'
        this.$bvModal.show('alert-modal');
        return
      }
      if (!this.count) {
        this.alertTitle = '알람 금액 입력'
        this.alertDesc = '알람 금액은 필수사항입니다.'
        this.$bvModal.show('alert-modal');
        return
      }

      this.alertTitle = '알람 저장'
      this.alertDesc = '저장되었습니다.'
      this.$bvModal.show('alert-modal')
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/alarm.scss';
</style>
