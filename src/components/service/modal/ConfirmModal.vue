<template>  
  <b-modal id="confirm-modal" :title="title" hide-header-close centered content-class="confirm-modal">

    <p class="desc">{{ desc }}</p>

    <template #modal-footer>
      <b-button variant="danger" @click="handleSubmit">확인</b-button>
      <b-button variant="outline-secondary" @click="closeModal">닫기</b-button>
    </template>  
  </b-modal>
</template>

<script>
export default {
  components: { },
  name: "ConfirmModal",
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    onSubmit: {
      type: Function,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('confirm-modal');
    },
    handleSubmit() {
      if (this.onSubmit) {
        this.onSubmit()
        return;
      }
      this.$bvModal.hide('confirm-modal');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
