<template>  
  <b-modal id="talk-status-modal" hide-header-close size="lg" centered>
    <template #modal-title>
      <h5 class="modal-title">승인상태 상세</h5>
      <p class="title-desc">* 사용자가 수정요청 한 템플릿이며, 기존 템플릿으로 발송은 가능합니다.</p>
    </template>

    <div class="d-flex align-items-center">
      <p class="m-0 mr-1 pr-2">템플릿 수정 상태</p>
      <b-button variant="outline-secondary">운영 이관 요청</b-button>
      <b-button variant="dark" class="ml-auto">수정 템플릿 보기</b-button>
    </div>

    <div class="table-responsive sticky-header">
      <table class="table table-middle">
        <thead>
          <tr>
            <th>템플릿명</th>
            <th>상태</th>
            <th>반려사유</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in [0,1,2,3,4,5,6,7,8,9]" :key="index">
            <td>FLE58dho8L</td>
            <td>운영이관요청대기</td>
            <td>반려사유입니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  components: { },
  name: "TalkStatusModal",
  data() {
    return {
      barnd: '',
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('talk-status-modal');
    }
  }
};
</script>

<style scoped lang="scss">
.sticky-header {
  max-height: 350px;
  margin-top: 20px;
  overflow-y: auto;
}
</style>
