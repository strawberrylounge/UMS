<template>  
  <b-modal id="alert-modal" :title="title" hide-header-close centered content-class="alert-modal">

    <p class="desc" v-html="desc"></p>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>  
  </b-modal>
</template>

<script>
export default {
  name: "AlerModal",
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    callbackFunc: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('alert-modal');
      if (this.callbackFunc) {
        this.callbackFunc();
      }
    },
  }
};
</script>