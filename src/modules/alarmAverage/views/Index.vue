<template>
  <div class="alarm-average">
    <AlarmTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>* 전달 일 평균 건수를 초과 했을 때 알람을 보냅니다.</li>
        </ul>
      </div>

      <div class="card">
        <div class="form-row">
          <label>알람명 <span class="require">*</span></label>
          <b-input placeholder="입력" v-model="title"></b-input>
        </div>

        <div class="form-row align-items-start">
          <label class="mt-1 pt-2">알람 최소 건수 <span class="require">*</span></label>
          <div>
            <div class="d-flex align-items-center">
              <b-input placeholder="입력" v-model="count"></b-input>
              <span class="pl-2 f-body6 c-gray900">건</span>
            </div>
            <p class="mt-1 pt-2 mb-0 f-body5 c-gray400">당일 메시지 발송 건수가 알람 최소 건수와 전달 일 평균 건수보다 클 경우 알람을 보냅니다.<br/>
              ex) 입력한 알람 최소 건수가 1,100 건이고 전달 일 평균 건수가 1,000 건 이라 했을 때 당일 메시지가 1,100건을 넘길 경우 알람 전송</p>
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
import ApiTable from '@/modules/alarmAverage/components/ApiTable.vue'
import AlarmTable from '@/modules/alarmAverage/components/AlarmTable.vue'

export default {
  components: { AlarmTable, ApiTable, AlarmTabs,  AlertModal, ConfirmModal, },
  name: "alarmAverage",
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
        this.alertTitle = '알람 최소 건수 입력'
        this.alertDesc = '알람 최소 건수는 필수사항입니다.'
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
