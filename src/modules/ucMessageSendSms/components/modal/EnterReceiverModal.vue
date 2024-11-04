<template>  
  <b-modal id="enter-receiver-modal" title="내용 입력" hide-header-close centered size="md">
    <template #modal-title>
      <h5 class="modal-title">수신자 직접입력</h5>
      <div class="d-flex align-items-end justify-content-between w-100">
        <p class="title-desc">* 입력 후 선택 버튼을 누르면 수신자에 추가됩니다.<br/>
          <span>* 최대 30개까지 추가 가능합니다.</span></p>
        <b-button variant="outline-primary" class="btn-svg btn-svg-right ms-auto" @click="addReceiver">
          <span>수신자 추가</span>
          <IconPlus />
        </b-button>
      </div>
    </template>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">휴대폰 번호<span class="require">*</span></label>
      <label class="mb-1 pb-2 f-body5 c-gray500">이름<span class="require">*</span></label>
    </div>

    <div v-for="(receiver, index) in receivers" :key="index">
      <div class="d-flex form-row input-row" :class="index > 0 ? 'mt-1 pt-3' : ''">
        <b-input v-model="receiver.phone" placeholder="010-1234-5678"></b-input>
        <b-input v-model="receiver.name" placeholder="이름 입력"></b-input>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" :disabled="receivers.length === 0" @click="onSubmit">선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
    <AlertModal title="주소록 검색" desc="수신자를 추가하였습니다." :callbackFunc="closeModal" />
  </b-modal>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
  components: { IconPlus, AlertModal },
  name: "EnterReceiverModal",
  data() {
    return {
      receivers: [
        { phone: '', name: '' },
      ],
    }
  },
  methods: {
    addReceiver() {
      if (this.receivers.length < 30) {  // 최대 30개 제한
        this.receivers.push({ phone: '', name: '' });
      }
    },
    closeModal() {
      this.$bvModal.hide('enter-receiver-modal');
    },
    onSubmit() {
      this.$bvModal.show('alert-modal');
    }
  }
};
</script>

<style scoped lang="scss">
.form-row {
  display: flex;
  & > * {
    width: calc(50% - 10px);
    margin-right: 10px;
  }
  label + label {
    margin-right: 0;
    margin-left: 10px;
  }
  .form-control + .form-control {
    margin-right: 0;
    margin-left: 10px;
  }
  &.input-row + .input-row {
    margin-right: 0;
    margin-left: 10px;
  }
}
</style>
