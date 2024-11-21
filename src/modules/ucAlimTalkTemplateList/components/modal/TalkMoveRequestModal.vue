<template>  
  <b-modal scrollable id="talk-move-request-modal" title="운영 이관 요청" hide-header-close centered content-class="confirm-modal">

    <b-form-group class="radio-group m-0">
      <b-form-radio-group inline v-model="type">
        <b-form-radio name="type" value="now">즉시이관</b-form-radio>
        <b-form-radio name="type" value="reservation">예약이관</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <p v-if="type === 'now'" class="mt-1 pt-3 mb-0 f-body2 c-failure">
      즉시이관 요청을 하시면 최대 5분 이내 운영이관이 완료됩니다. 이관 요청을 하시겠습니까?
    </p>

    <div v-else>
      <div class="d-flex align-items-center mt-1 pt-3">
        <label class="form-label">예약시간 <span class="require">*</span></label>
        <CustomDatepicker />
        <vue-timepicker v-model="startTime" format="hh" :hour-range="[0, 23]" class="book-time"></vue-timepicker>
        <span class="time-divider">:</span>
        <vue-timepicker v-model="endTime" format="hh" :hour-range="[0, 23]" class="book-time"></vue-timepicker>
      </div>
      <p class="mt-1 pt-3 mb-0 f-body2 c-failure">설정하신 시간으로 운영 이관을 하시겠습니까?</p>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="closeModal">확인</b-button>
      <b-button variant="outline-secondary" @click="closeModal">취소</b-button>
    </template>  
  </b-modal>
</template>

<script>
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'

export default {
  components: { CustomDatepicker, },
  name: "TalkMoveRequestModal",
  props: {
  },
  data() {
    return {
      type: 'now',
      startTime: null,
      endTime: null,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('talk-move-request-modal');
    },
  }
};
</script>

<style scoped lang="scss">
.custom-radio{
  & + .custom-radio {
    margin-left: 20px;
  }
}
.form-label {
  width: 120px;
  margin-right: 12px;
}
.datepicker-container {
  width: 180px;
  margin-right: 12px;
}
.time-divider {
  margin: 0 12px;
}
.time-picker.book-time {
  height: 44px;
}
.modal-body {
  overflow: visible;
}
</style>
