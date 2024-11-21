<template>
  <b-modal scrollable id="register-user-modal" title="사용자 등록" hide-header-close centered size="md" content-class="service-modal">

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">사용자 ID<span class="require">*</span></label>
      <div class="d-flex align-items-center user-id-row">
        <b-input placeholder="이메일 정보를 입력해 주세요" class="w-100"></b-input>
        <b-button variant="dark" class="ml-1">중복체크</b-button>
      </div>
    </div>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">사용자 명<span class="require">*</span></label>
      <div>
        <b-input placeholder="사용자명을 입력해 주세요" class="w-100"></b-input>
      </div>
    </div>

    <div class="d-flex form-row">
      <label class="mb-1 pb-2 f-body5 c-gray500">휴대폰 번호<span class="require">*</span></label>
      <div>
        <b-input placeholder="-없이 입력해 주세요" class="w-100"></b-input>
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
      <span class="icon-wrap">
        <IconInfoLine />
      </span>
      <p class="m-0 ml-1 f-body5 c-gray400">이메일 인증을 통해 등록이 완료됩니다.</p>
    </div>

    <template #modal-footer>
      <b-button variant="primary" disabled>등록</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconInfoLine from '@/components/service/icons/IconInfoLine.vue'

export default {
  components: { IconArrowDown, IconInfoLine },
  name: 'RegisterUser',
  data() {
    return {
      permission: '사용자'
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('register-user-modal');
    },
    setPermission(value) {
      this.permission = value;
    }
  }
}
</script>

<style scoped lang="scss">
  @use '@/assets/scss/service/template.scss';

  .user-id-row button {
    min-width: 80px;
  }
  .icon-wrap {
    padding: 2px;
    font-size: 0;
    line-height: 1;
    svg {
      width: 16px;
      height: 16px;
    }
  }
</style>