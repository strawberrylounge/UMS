<template>
  <b-modal id="client-info-modal" title="고객사 정보" hide-header-close size="md" centered content-class="service-modal">
    <p class="mt-0 mb-1 pb-3 f-body1 c-gray900">사업자 정보</p>

    <div class="form-row">
      <label>사업자번호</label>
      <div>
        <b-input class="w-100" value='12345678' disabled></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>사업자명</label>
      <div>
        <b-input class="w-100" value='abc' disabled></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>대표자명</label>
      <div>
        <b-input class="w-100" value='abc' disabled></b-input>
      </div>
    </div>

    <div class="form-row align-items-start">
      <label class="mt-1 pt-2">사업장주소</label>
      <div>
        <div class="d-flex flex-row-input">
          <b-input value='12' disabled></b-input>
          <b-input value='123123' disabled></b-input>
        </div>
        <b-input class="w-100" value='12' disabled></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>사업자등록증</label>
      <div class="d-flex">
        <b-input class="flex-fill mr-1" value='abc.jpg' disabled></b-input>
        <b-button variant="dark" class="ml-2">다운로드</b-button>
      </div>
    </div>

    <div class="form-row">
      <label>대리인 재직증명서</label>
      <div class="d-flex">
        <b-input class="flex-fill mr-1" value='abc.jpg' disabled></b-input>
        <b-button variant="dark" class="ml-2">다운로드</b-button>
      </div>
    </div>

    <div class="form-row">
      <label>영업사원</label>
      <div>
        <b-dropdown variant="secondary" class="w-100" disabled>
          <template #button-content>
            <span>김지혜</span>
            <IconArrowDown />
          </template>
        </b-dropdown>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'

export default {
components: { IconArrowDown, },
name: 'ClientInfoModal',
  props: {
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('client-info-modal');
    },
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
</style>