<template>
  <b-modal id="edit-user-modal" title="사용자정보 수정" hide-header-close centered size="md" content-class="service-modal">

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">사용자 ID<span class="require">*</span></label>
      <div>
        <b-input class="w-100" value="test@test@.com" disabled></b-input>
      </div>
    </div>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">사용자 명<span class="require">*</span></label>
      <div>
        <b-input class="w-100" value="박과장"></b-input>
      </div>
    </div>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">휴대폰 번호<span class="require">*</span></label>
      <div>
        <b-input class="w-100" value="010-1234-1234"></b-input>
      </div>
    </div>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">이용권한<span class="require">*</span></label>
      <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
        <template #button-content>
          <span>{{ permission }}</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button :class="{active: permission === '사용자'}" @click="setPermission('사용자')">사용자</b-dropdown-item-button>
        <b-dropdown-item-button :class="{active: permission === '관리자'}" @click="setPermission('관리자')">관리자</b-dropdown-item-button>
        <b-dropdown-item-button :class="{active: permission === 'UC_읽기전용'}" @click="setPermission('UC_읽기전용')">UC_읽기전용</b-dropdown-item-button>
      </b-dropdown>
    </div>

    <div class="d-flex form-row">
      <p class="m-0 f-body5 c-gray400">로그인 시 SMS 인증을 하기 위해서는 휴대폰 번호를 반드시 등록하셔야 합니다.</p>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="submit">수정</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'

export default {
  props: {
    saveUser: {
      type: Function
    }
  },
  components: { IconArrowDown },
  name: 'EditUser',
  data() {
    return {
      permission: '사용자'
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('edit-user-modal');
    },
    setPermission(value) {
      this.permission = value;
    },
    submit() {
      this.closeModal()
      this.saveUser()
    },
  }
}
</script>

<style scoped lang="scss">
  @use '@/assets/scss/service/template.scss';
</style>