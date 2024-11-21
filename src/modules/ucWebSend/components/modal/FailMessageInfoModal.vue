<template>  
  <b-modal scrollable id="fail-message-info-modal" title="발송실패 정보" hide-header-close centered size="lg">

    <div class="d-flex align-items-center">
      <label class="f-body5 c-gray500">총 발송건수</label>
      <span class="ml-1 pl-2 f-body5 c-gray900">1</span>
    </div>

    <div class="d-flex align-items-center">
      <label class="f-body5 c-gray500">발송타입</label>
      <span class="ml-1 pl-2 f-body5 c-gray900">개별발송</span>
    </div>
    
    <hr class="divider" />

    <div class="d-flex align-items-center mb-1 pb-3">
      <p class="m-0 f-body4 f-bold c-gray500">발송실패 건수<span class="c-failure">1건</span>
      </p>
      <b-button variant="outline-primary" class="ml-auto btn-svg btn-svg-right mr-1" v-b-modal.upload-image-modal>
        <span>엑셀 다운로드</span>
        <IconDownload />
      </b-button>
    </div>

    <div class="table-responsive sticky-header">
      <table class="table table-middle">
        <thead>
          <tr>
            <th>No.</th>
            <th>휴대폰</th>
            <th>아이디</th>
            <th>실패 코드</th>
            <th>실패 사유</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in ['0','1','2','3','4']" :key="index">
            <td>{{ index + 1 }}</td>
            <td>010-1234-1234</td>
            <td>testadmin</td>
            <td>1234ji213</td>
            <td>사유내용노출</td>
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
import IconDownload from '@/components/service/icons/IconDownload.vue'

export default {
  components: { IconDownload, },
  name: "FailMessageInfoModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('fail-message-info-modal');
    },
  }
};
</script>

<style scoped lang="scss">
label {
  width: 120px;
}
hr.divider {
  margin: 20px 0;
}
.c-failure {
  padding-left: 6px;
}
.sticky-header {
  max-height: 350px;
  overflow-y: auto;
}
</style>
