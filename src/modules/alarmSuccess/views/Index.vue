<template>
  <div class="alarm-success">
    <AlarmTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>* 설정 기간[요일, 시간]에 메시지 발송 성공율이 떨어질 경우 설정된 수신자에게 알람을 보냅니다.</li>
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
              <b-form-checkbox v-model="selectAll" @change="toggleSelectAll" class="mr-4">전체</b-form-checkbox>
              <vue-timepicker format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
              <span class="time-divider f-body6 c-gray900">-</span>
              <vue-timepicker format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
            </div>
            <hr  class="hr"/>
            <div class="d-flex align-items-center day-container" v-for="(day, index) in days" :key="index">
              <b-form-checkbox v-model="selectedDays[index]" @change="updateSelectAll" class="mr-4">{{ day }}</b-form-checkbox>
              <vue-timepicker v-model="dayTimes[day].start" format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
              <span class="time-divider">-</span>
              <vue-timepicker v-model="dayTimes[day].end" format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <label>수집 최소 건수 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력" v-model="count"></b-input>
            <span class="pl-2 f-body6 c-gray900">건 이상</span>
          </div>
        </div>

        <div class="form-row">
          <label>발송 성공율 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력" v-model="percent"></b-input>
            <span class="pl-2 f-body6 c-gray900">% 이하</span>
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
import ApiTable from '@/modules/alarmSuccess/components/ApiTable.vue'
import AlarmTable from '@/modules/alarmSuccess/components/AlarmTable.vue'

export default {
  components: { AlarmTable, ApiTable, AlarmTabs,  AlertModal, ConfirmModal, },
  name: "AlarmSuccess",
  data() {
    return {
      title: '',
      count: '',
      percent: '',
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
      selectAll: false,
      days: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
      selectedDays: [false, false, false, false, false, false, false],
      dayTimes: {
        "월요일": { start: null, end: null },
        "화요일": { start: null, end: null },
        "수요일": { start: null, end: null },
        "목요일": { start: null, end: null },
        "금요일": { start: null, end: null },
        "토요일": { start: null, end: null },
        "일요일": { start: null, end: null }
      }
    }
  },
  methods: {
    toggleSelectAll() {
      // '전체' 체크박스를 클릭하면 모든 요일 체크박스 상태와 시간을 전체와 동일하게 설정
      this.selectedDays = this.selectedDays.map(() => this.selectAll);
    },
    updateSelectAll() {
      // 요일 체크박스의 상태를 감지하여 '전체' 체크박스 상태 업데이트
      this.selectAll = this.selectedDays.every(isSelected => isSelected);
    },
    save() {
      if (!this.title) {
        this.alertTitle = '알람명 입력'
        this.alertDesc = '알림명은 필수사항입니다.'
        this.$bvModal.show('alert-modal');
        return
      }

      // 요일이 선택되었지만 시간이 설정되지 않은 경우 경고(alert) 표시
      for (let i = 0; i < this.days.length; i++) {
        if (this.selectedDays[i] && (!this.dayTimes[this.days[i]].start || !this.dayTimes[this.days[i]].end)) {
          this.alertTitle = `수집 ${this.days[i]} 입력`
          this.alertDesc = `수집 ${this.days[i]} 시간은 필수사항입니다.`
          this.$bvModal.show('alert-modal');
          return;
        }
      }

      if (!this.count) {
        this.alertTitle = '수집 취소 건수'
        this.alertDesc = '수집 취소 건수는 필수사항입니다.'
        this.$bvModal.show('alert-modal');
        return
      }
      if (!this.percent) {
        this.alertTitle = '발송 성공률 입력'
        this.alertDesc = '발송 성공율은 필수사항입니다.'
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
