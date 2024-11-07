<template>
  <b-modal id="add-reciever-modal" title="수신자 등록" hide-header-close size="md" centered content-class="service-modal">
    <div class="form-row">
      <label>수신자 명 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="입력" v-model="title"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>휴대폰 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="입력" v-model="phone"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>알람그룹 <span class="require">*</span>
      </label>
      <b-dropdown variant="secondary">
        <template #button-content>
          <span v-if ="group">{{ group }}</span>
          <span v-else class="c-gray400">선택</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button @click="setCategory1('건강')" :class="{active: category1 === '건강'}">건강</b-dropdown-item-button>
      </b-dropdown>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="submit">저장</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
components: { IconArrowDown, AlertModal, },
name: 'AddReceiverModal',
  props: {
    save: {
      type: Function
    }
  },
  data() {
    return {
      title: '',
      phone: '',
      alertTitle: '',
      alertDesc: '',
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-reciever-modal');
    },
    submit() {
      if (!this.title) {
        this.alertTitle = '수신자명 입력'
        this.alertDesc = '수신자명은 필수사항입니다.'
        this.$bvModal.show('alert-modal')
        return
      }
      if (!this.phone) {
        this.alertTitle = '휴대폰 입력'
        this.alertDesc = '휴대폰은 필수사항입니다.'
        this.$bvModal.show('alert-modal')
        return
      }

      this.save()
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/alarm.scss';
</style>