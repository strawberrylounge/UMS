<template>  
  <b-modal id="view-content-modal" title="내용보기" hide-header-close centered>

    <label for="content" class="f-body5 c-gray500 mb-1 pb-2">내용</label>
    <b-form-textarea
      id="content"
      rows="6"
      max-rows="6"
      value="LMS 내용 노출"
    ></b-form-textarea>
    <p class="textarea-count mt-2 mb-0">(63 / 90)</p>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "ViewContentModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('view-content-modal');
    },
  }
};
</script>

<style scoped lang="scss">
</style>
