<template>  
  <b-modal scrollable id="block-number-modal" title="수신거부번호 관리" hide-header-close centered size="lg">
    <div class="block-list">
      <div class="input-group">
        <b-input value="무료수신거부"></b-input>
        <b-input placeholder="060-000-0000"></b-input>
        <b-button variant="dark">등록</b-button>
      </div>
      <ul>
        <li>
          <span class="f-body5 c-gray900 text-truncate">무료수신거부 060-0000-0000</span>
          <b-button variant="outline-primary" size="sm" @click="closeModal">선택</b-button>
          <button type="button" class="btn btn-icon p-0" v-b-modal.confirm-modal>
            <IconClose />
          </button>
        </li>
        <li>
          <span class="f-body5 c-gray900 text-truncate">무료수신거부 060-0000-0000</span>
          <b-button variant="outline-primary" size="sm" @click="closeModal">선택</b-button>
          <button type="button" class="btn btn-icon p-0" v-b-modal.confirm-modal>
            <IconClose />
          </button>
        </li>
      </ul>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>

    <ConfirmModal title="수신거부번호 관리" desc="삭제하시겠습니까?" />
  </b-modal>
</template>

<script>
import IconClose from '@/components/service/icons/IconClose.vue';
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'

export default {
  components: { IconClose, ConfirmModal, },
  name: "BlockNumberModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('block-number-modal');
    },
  }
};
</script>

<style scoped lang="scss">
.block-list {
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .form-control {
      margin-left: 6.5px;
      &:first-child {
        margin-left: 0;
      }
    }
    .btn {
      margin-left: 6.5px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--gray500);
    border-bottom: 1px solid var(--gray500);
    li {
      display: flex;
      align-items: center;
      padding: 12px 0;
      & + li {
        border-top: 1px solid var(--border-color);
      }
    }
    .btn-outline-primary {
      min-width: 73px;
      margin-left: auto;
    }
    .btn-icon {
      margin-left: 20px;
    }
  }
}

</style>
