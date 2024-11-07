<template>
  <div class="alarm-inflow">
    <AlarmTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>* 메시지 발송 시 API 키 목록에서 인입 건수가 없거나 N건 이하이면 설정된 수신자에게 알람을 보냅니다. 최근 10분~60분 사이에 유입건수가 N건 이하이면 알림을 발송합니다. 위 기준시간인 10분, 60분은 기준정보에 설정되어있습니다.</li>
        </ul>
      </div>

      <div class="card">
        <div class="form-row">
          <label>알람명 <span class="require">*</span></label>
          <b-input placeholder="입력" v-model="title"></b-input>
        </div>

        <div class="form-row align-items-start">
          <label>수집 요일/시간 <span class="require">*</span></label>
          <div class="date">
            <div class="d-flex align-items-center">
              <b-form-checkbox v-model="selectAll" class="mr-4">전체</b-form-checkbox>
              <vue-timepicker format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
              <span class="time-divider f-body6 c-gray900">-</span>
              <vue-timepicker format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <label>인입 건수 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력" v-model="count"></b-input>
            <span class="pl-2 f-body6 c-gray900">건 이상</span>
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
import ApiTable from '@/modules/alarmInflow/components/ApiTable.vue'
import AlarmTable from '@/modules/alarmInflow/components/AlarmTable.vue'

export default {
  components: { AlarmTable, ApiTable, AlarmTabs,  AlertModal, ConfirmModal, },
  name: "AlarmInflow",
  data() {
    return {
      title: '',
      count: '',
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

      if (!this.count) {
        this.alertTitle = '인입 건수'
        this.alertDesc = '인입 건수는 필수사항입니다.'
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
