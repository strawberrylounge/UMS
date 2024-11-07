<template>
  <div class="alarm-limits">
    <AlarmTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>* 일/월 설정한 한도 금액이 설정 구간 초과 시 알람을 보냅니다.</li>
        </ul>
      </div>

      <div class="card">
        <div class="form-row">
          <label>알람명 <span class="require">*</span></label>
          <b-input placeholder="입력" v-model="title"></b-input>
        </div>

        <div class="form-row">
          <label>일 한도 금액 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력" v-model="day"></b-input>
            <span class="pl-2 f-body6 c-gray900">원 이하</span>
            <div class="checkbox-container">
              <span class="brackets">(</span>
              <b-form-checkbox value="70">70%</b-form-checkbox>
              <b-form-checkbox value="80">80%</b-form-checkbox>
              <b-form-checkbox value="90">90%</b-form-checkbox>
              <b-form-checkbox value="100">100%</b-form-checkbox>
              <span>초과 시</span>
              <span class="brackets">)</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <label>월 한도 금액 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력" v-model="month"></b-input>
            <span class="pl-2 f-body6 c-gray900">원 이하</span>
            <div class="checkbox-container">
              <span class="brackets">(</span>
              <b-form-checkbox value="70">70%</b-form-checkbox>
              <b-form-checkbox value="80">80%</b-form-checkbox>
              <b-form-checkbox value="90">90%</b-form-checkbox>
              <b-form-checkbox value="100">100%</b-form-checkbox>
              <span>초과 시</span>
              <span class="brackets">)</span>
            </div>
          </div>
        </div>

        <hr class="hr" />

        <div class="d-flex">
          <ApiTable />
          <div class="table-section-divider"></div>
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
import ApiTable from '@/modules/alarmLimits/components/ApiTable.vue'
import AlarmTable from '@/modules/alarmLimits/components/AlarmTable.vue'

export default {
  components: { AlarmTable, ApiTable, AlarmTabs,  AlertModal, ConfirmModal, },
  name: "AlarmInflow",
  data() {
    return {
      title: '',
      day: '',
      month: '',
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
      selectAll: false,
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

      if (!this.day) {
        this.alertTitle = '일 한도 금액 입력'
        this.alertDesc = '일 한도 금액은 필수사항입니다.'
        this.$bvModal.show('alert-modal');
        return
      }

      if (!this.month) {
        this.alertTitle = '월 한도 금액 입력'
        this.alertDesc = '월 한도 금액은 필수사항입니다.'
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
