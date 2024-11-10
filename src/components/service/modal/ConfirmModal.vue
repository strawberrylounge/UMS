<template>  
  <b-modal id="confirm-modal" :title="title" hide-header-close centered content-class="confirm-modal">

    <p class="desc" v-html="nl2br(desc)"></p>

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
      }
      this.closeModal()
    },
    nl2br(str) {
      if (typeof str === 'string') {
        return str.replace(/\n/g, '<br>');
      }
      return str;
    },
  }
};
</script>

<style scoped lang="scss">
</style>
