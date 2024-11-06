<template>
  <b-modal id="update-category-modal" title="카테고리 수정" hide-header-close size="md" centered>
    <div class="form-row">
      <label>상위 카테고리</label>
      <div>
        <b-input class="w-100" value="이커머스테크" disabled></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>카테고리명</label>
      <div>
        <b-input class="w-100" value="내용"></b-input>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="openSaveCategoryModal">저장</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>

export default {
components: { },
name: 'UpdateCategoryModal',
  props: {
    openSaveCategoryModal: {
      type: Function
    }
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('update-category-modal');
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
</style>