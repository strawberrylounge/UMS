<template>  
  <b-modal scrollable id="add-content-modal" title="내용 입력" hide-header-close centered>
    <template #modal-title>
      <h5 class="modal-title">내용 입력</h5>
      <p class="title-desc">* 광고성메시지 수신거부번호는 내용 하단에 포함됩니다. 또한 광고 표기는 제목 또는 내용에 포함되어 있어야 합니다.</p>
    </template>

    <label for="content" class="f-body5 c-gray500 mb-1 pb-2">내용</label>
    <b-form-textarea
      id="content"
      rows="6"
      max-rows="6"
    ></b-form-textarea>
    <p class="textarea-count mt-2 mb-0">(63 / 90)</p>

    <div class="block">
      <label class="f-body5 c-gray500">광고성메시지<br/>수신거부번호</label>
      <b-input-group class="w-100">
        <b-input-group-append>
          <b-button variant="dark" @click="openBlockList">선택</b-button>
        </b-input-group-append>
        <b-form-input placeholder="ex) 수신거부번호: 123-1234-1234"></b-form-input>
      </b-input-group>
    </div>

    <div v-if="showBlockList" class="block-list">
      <p class="m-0 mb-1 pb-3 f-title3 c-gray900">수신거부번호 관리</p>
      <div class="input-group">
        <b-input value="무료수신거부"></b-input>
        <b-input placeholder="060-000-0000"></b-input>
        <b-button variant="dark">등록</b-button>
      </div>
      <ul>
        <li>
          <span class="f-body5 c-gray900 text-truncate">무료수신거부 060-0000-0000</span>
          <b-button variant="outline-primary" size="sm" @click="hideBlockList">선택</b-button>
          <button type="button" class="btn btn-icon p-0">
            <IconClose />
          </button>
        </li>
        <li>
          <span class="f-body5 c-gray900 text-truncate">무료수신거부 060-0000-0000</span>
          <b-button variant="outline-primary" size="sm" @click="hideBlockList">선택</b-button>
          <button type="button" class="btn btn-icon p-0">
            <IconClose />
          </button>
        </li>
      </ul>
    </div>

    <template #modal-footer>
      <b-button variant="primary">입력</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconClose from '@/components/service/icons/IconClose.vue';

export default {
  components: { IconClose, },
  name: "AddContentModal",
  data() {
    return {
      showBlockList: false,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('add-content-modal');
    },
    openBlockList() {
      this.showBlockList = true;
    },
    hideBlockList() {
      this.showBlockList = false;
    },
  }
};
</script>

<style scoped lang="scss">
.block {
  display: flex;
  margin-top: 20px;
  label {
    min-width: 75px;
    margin-right: 12px;
  }
}
.input-group {
  .btn {
    width: 100px;
    margin-right: 20px;
  }
}
.block-list {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .form-control {
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }
    .btn {
      margin-left: 20px;
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
