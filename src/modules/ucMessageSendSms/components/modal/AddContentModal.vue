<template>  
  <b-modal id="add-content-modal" title="내용 입력" hide-header-close centered>
    <template #modal-title>
      <h5 class="modal-title">내용 입력</h5>
      <p class="title-desc">* 광고성메시지 수신거부번호는 내용 하단에 포함됩니다. 또한 광고 표기는 제목 또는 내용에 포함되어 있어야 합니다.</p>
    </template>

    <label for="content" class="textarea-label">내용</label>
    <b-form-textarea
      id="content"
      rows="6"
      max-rows="6"
    ></b-form-textarea>
    <p class="textarea-count mt-2 mb-0">(63 / 90)</p>

    <div class="block">
      <label>광고성메시지<br/>수신거부번호</label>
      <b-input-group class="w-100">
        <b-input-group-append>
          <b-button variant="dark">선택</b-button>
        </b-input-group-append>
        <b-form-input placeholder="ex) 수신거부번호: 123-1234-1234"></b-form-input>
      </b-input-group>
    </div>

    <template #modal-footer>
      <b-button variant="primary">입력</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddContentModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('add-content-modal');
    }
  }
};
</script>

<style scoped lang="scss">
.title-desc {
  margin: 20px 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-500);
}
label {
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-500);
  &.textarea-label {
    margin-bottom: 12px;
  }
}
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
</style>
