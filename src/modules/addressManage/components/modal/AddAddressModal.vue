<template>
  <b-modal scrollable id="add-address-modal" title="주소록 등록" hide-header-close size="md" centered>
    <div class="form-row">
      <label>주소록명 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="입력" v-model="title"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>주소록 설명</label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>사용여부</label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="use">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="saveData">저장</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>

    <AlertModal title="주소록 등록" desc="주소록명을 입력하세요." />
  </b-modal>
</template>

<script>
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
components: { AlertModal, },
name: 'AddAddressModal',
  props: {
    addAddress: {
      type: Function
    }
  },
  data() {
    return {
      title: '',
      use: '사용',
      modalDesc: ''
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-address-modal');
    },
    saveData() {
      if (!this.title) {
        this.$bvModal.show('alert-modal');
      } else {
        this.closeModal()
        this.addAddress()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
</style>