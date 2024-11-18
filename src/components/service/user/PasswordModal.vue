<template>
  <b-modal id="password-modal" title="고객사 정보" hide-header-close size="md" centered>
    <template #modal-title>
      <h5 class="modal-title">비밀번호 확인</h5>
      <p class="title-desc">* 안전을 위하여 비밀번호를 한 번 더 입력해 주시기 바랍니다.</p>
    </template>

    <div class="form-row">
      <label class="mb-0">비밀번호</label>
      <div>
        <PasswordInput />
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
      <b-button variant="primary">확인</b-button>
    </template>
  </b-modal>
</template>

<script>
import PasswordInput from '@/components/service/form/PasswordInput.vue'

export default {
components: { PasswordInput, },
name: 'PasswordModal',
  props: {
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('password-modal');
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
</style>