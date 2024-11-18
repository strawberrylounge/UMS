<template>
  <b-modal id="user-info-modal" title="회원 정보" hide-header-close size="md" centered content-class="service-modal">

    <div class="form-row">
      <label>사용자ID</label>
      <p class="m-0 f-body6 c-gray900">Testadmin</p>
    </div>

    <div class="form-row">
      <label>이름</label>
      <div>
        <b-input class="w-100" value='Testadmin' disabled></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>비밀번호</label>
      <div class="d-flex align-items-center">
        <p class="flex-fill m-0 mr-1 f-body6 c-gray900">최종변경일 <span class="pl-2 f-body4 c-gray900">2024.08.28</span></p>
        <b-button variant="dark" class="ml-2">비밀번호 변경</b-button>
      </div>
    </div>

    <div class="form-row">
      <label>비밀번호 변경</label>
      <div class="d-flex">
        <b-input class="flex-fill w-auto mr-1" placeholder="대/소문자,숫자,특수문자 조합 (길이8~16자리)"></b-input>
        <b-button variant="outline-secondary" class="ml-2">비밀번호 확인</b-button>
      </div>
    </div>

    <div class="form-row">
      <label>휴대폰 번호</label>
      <div class="d-flex">
        <b-input class="flex-fill mr-1" value="010-1234-5678" disabled></b-input>
        <b-button variant="dark" class="ml-2">번호 변경</b-button>
      </div>
    </div>

    <div class="form-row">
      <label>휴대폰 번호 변경</label>
      <div class="d-flex">
        <b-input class="flex-fill mr-1" placeholder="-없이 입력"></b-input>
        <b-button variant="dark" class="ml-2">인증 요청</b-button>
      </div>
    </div>

    <div class="form-row">
      <label>인증번호</label>
      <div>
        <b-input class="w-100" placeholder="인증번호 입력"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>테마 선택</label>
      <div class="color">
        <button type="button" class="color-pick color-pick-blue" :class="{active: color === 'color1'}" @click="setColor('color1')">
          <IconColorCheck v-if="color === 'color1'" color="#414296" />
        </button>
        <button type="button" class="color-pick color-pick-red" :class="{active: color === 'color2'}" @click="setColor('color2')">
          <IconColorCheck v-if="color === 'color2'" color="#8C3428" />
        </button>
        <button type="button" class="color-pick color-pick-purple" :class="{active: color === 'color3'}" @click="setColor('color3')">
          <IconColorCheck v-if="color === 'color3'" color="#2B0D3B" />
        </button>
        <button type="button" class="color-pick color-pick-darkblue" :class="{active: color === 'color4'}" @click="setColor('color4')">
          <IconColorCheck v-if="color === 'color4'" color="#193A50" />
        </button>
        <button type="button" class="color-pick color-pick-dark" :class="{active: color === 'color5'}" @click="setColor('color5')">
          <IconColorCheck v-if="color === 'color5'" color="#4C5464" />
        </button>
      </div>
    </div>

    <p class="mt-5">모달 예시입니다.</p>
    <b-button variant="outline-secondary" v-b-modal.password-modal>비밀번호 입력 모달</b-button>
    <b-button variant="outline-secondary" v-b-modal.alert-modal>비밀번호 확인 모달</b-button>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
      <b-button variant="primary">저장</b-button>
    </template>

    <AlertModal title="비밀번호 확인" desc="비밀번호가 일치하지 않습니다." />
    <PasswordModal />
  </b-modal>
</template>

<script>
import IconColorCheck from '@/components/service/icons/IconColorCheck.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue';
import PasswordModal from '@/components/service/user/PasswordModal.vue';

export default {
components: { IconColorCheck, AlertModal, PasswordModal, },
name: 'UserInfoModal',
  props: {
  },
  data() {
    return {
      color: 'color1'
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('user-info-modal');
    },
    setColor(value) {
      this.color = value
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
label {
  margin-bottom: 0;
}
.form-row {
  margin: 0;
}
.flex-row-input {
  margin-bottom: 12px;
  input {
    width: calc(50% - 6px);
    & + input {
      margin-left: 12px;
    }
  }
}
.form-row input + .btn,
.form-row p + .btn {
  min-width: 107px;
}
.color {
  display: flex;
  .color-pick {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 5 - 48px);
    min-width: 80px;
    height: 44px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    & + .color-pick {
      margin-left: 12px;
    }
    &-blue {
      background-color: #6D6EFA;
      &.active {
        border: 2px solid #414296;
      }
    }
    &-red {
      background-color: #EA5743;
      &.active {
        border: 2px solid #8C3428;
      }
    }
    &-purple {
      background-color: #471662;
      &.active {
        border: 2px solid #2B0D3B;
      }
    }
    &-darkblue {
      background-color: #2A6186;
      &.active {
        border: 2px solid #193A50;
      }
    }
    &-dark {
      background-color: #1C2435;
      &.active {
        border: 2px solid #4C5464;
      }
    }
    svg {
      width: 14px;
      height: 14px;
    }
  }
}
</style>