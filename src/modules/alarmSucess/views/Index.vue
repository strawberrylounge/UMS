<template>
  <div class="address-receiver">
    <AddressTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>* 설정 기간[요일, 시간]에 메시지 발송 성공율이 떨어질 경우 설정된 수신자에게 알람을 보냅니다.</li>
        </ul>
      </div>

      <div class="card">
        <div class="form-row">
          <label>알람명 <span class="require">*</span></label>
          <b-input placeholder="입력"></b-input>
        </div>

        <div class="form-row">
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
              <vue-timepicker format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
              <span class="time-divider">-</span>
              <vue-timepicker format="hh" :hour-range="[0, 23]" class="book-time" placeholder="선택"></vue-timepicker>
              <span class="time-text f-body6 c-gray900">시</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <label>수집 최소 건수 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력"></b-input>
            <span class="pl-2 f-body6 c-gray900">건 이상</span>
          </div>
        </div>

        <div class="form-row">
          <label>발송 성공율 <span class="require">*</span></label>
          <div class="d-flex align-items-center">
            <b-input placeholder="입력"></b-input>
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
          <b-button variant="outline-primary" size="lg" class="mr-1">취소</b-button>
          <b-button variant="primary" size="lg" class="ml-3">저장</b-button>
        </div>
      </div>
    </div>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="confirmSubmit" />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import AddressTabs from '@/components/service/address/AddressTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import IconDownload from '@/components/service/icons/IconDownload.vue'
import IconOn from '@/components/service/icons/IconOn.vue'
import IconOff from '@/components/service/icons/IconOff.vue'
import AddCategoryModal from '@/modules/addressManage/components/modal/AddCategoryModal.vue'
import UpdateCategoryModal from '@/modules/addressManage/components/modal/UpdateCategoryModal.vue'
import AddAddressModal from '@/modules/addressManage/components/modal/AddAddressModal.vue'
import UpdateAddressModal from '@/modules/addressManage/components/modal/UpdateAddressModal.vue'
import AddReceiverModal from '@/modules/addressReceiver/components/modal/AddReceiverModal.vue'
import AddReceiverAllModal from '@/modules/addressReceiver/components/modal/AddReceiverAllModal.vue'
import Pagination from '@/components/service/Pagination.vue';
import ApiTable from '@/modules/alarm/components/sucessAlarm/ApiTable.vue'
import AlarmTable from '@/modules/alarm/components/sucessAlarm/AlarmTable.vue'

export default {
  components: { AlarmTable, ApiTable, AddReceiverAllModal, AddReceiverModal, IconArrowDown, SearchInput, AddressTabs,  AlertModal, ConfirmModal, IconPlus, IconArrowRight, IconDownload, Pagination },
  name: "AddressReceiver",
  data() {
    return {
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
      selectAll: false,
      days: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
      selectedDays: [false, false, false, false, false, false, false]
    }
  },
  methods: {
    toggleSelectAll() {
      // '전체' 체크박스를 클릭하면 월~일 체크박스 상태를 전체와 동일하게 설정
      this.selectedDays = this.selectedDays.map(() => this.selectAll);
    },
    updateSelectAll() {
      // 월~일 체크박스의 상태를 감지하여 '전체' 체크박스 상태 업데이트
      this.selectAll = this.selectedDays.every(isSelected => isSelected);
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/alarm.scss';

.card:not(.info) {
  padding: 28px;
}
.book-time.time-picker {
  width: 132px;
}
.time-text {
  padding-left: 6px;
}
.time-divider {
  padding: 0 16px;
}
.day-container {
  & + .day-container {
    margin-top: 20px;
  }
}
</style>
