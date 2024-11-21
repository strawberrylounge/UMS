<template>
  <b-modal scrollable id="apikey-detail-modal" hide-header-close size="lg" centered content-class="service-modal">
    <template #modal-title>
      <h5 class="modal-title">API KEY 상세</h5>
      <p v-if="!isEdit" class="mt-1 pt-3 mb-0 f-body4 c-failure">* 자동으로 생성된 '웹 APIKEY 기본'은 수정이 불가능합니다.</p>
    </template>

    <ApiKeyDetailUpdate v-if="isEdit" />
    <ApiKeyDetailView v-else />

    <template v-if="isEdit" #modal-footer>
      <b-button variant="primary" @click="updateApiKey">저장</b-button>
      <b-button variant="outline-primary" @click="setIsEdit(false)">취소</b-button>
    </template>
    <template v-else #modal-footer>
      <b-button variant="primary" @click="confirmDeleteModal">삭제</b-button>
      <b-button variant="secondary"  @click="setIsEdit(true)">수정</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>

    <AlertModal title="API KEY 수정 완료" desc="API KEY 수정이 완료되었습니다." />
  </b-modal>
</template>

<script>
import ApiKeyDetailView from '@/modules/apiKey/components/modal/ApiKeyDetailView.vue'
import ApiKeyDetailUpdate from '@/modules/apiKey/components/modal/ApiKeyDetailUpdate.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
  components: { ApiKeyDetailView, ApiKeyDetailUpdate, AlertModal },
  name: 'ApiKeyDetailModal',
  props: {
    confirmDeleteModal: {
      type: Function
    }
  },
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('apikey-detail-modal');
    },
    setIsEdit(value) {
      this.isEdit = value
    },
    updateApiKey() {
      this.isEdit = false;
      this.$bvModal.show('alert-modal');
    },
  }
}
</script>

<style scoped lang="scss">
</style>