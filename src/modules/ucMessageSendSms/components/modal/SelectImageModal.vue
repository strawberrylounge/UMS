<template>  
  <b-modal id="select-image-modal" hide-header-close centered size="lg">
    <template #modal-title>
      <h5 class="modal-title">통합 이미지 관리</h5>
      <p class="title-desc">* 광고성메시지 수신거부번호는 내용 하단에 포함됩니다. 또한 광고 표기는 제목 또는 내용에 포함되어 있어야 합니다.
        <br/>
        <span>* 이미지는 최대 3개까지 추가 가능합니다.</span>
      </p>
    </template>

    <div class="table-title">
      <label>업로드한 이미지</label>
      <b-button variant="outline-primary" class="btn-svg btn-svg-right" v-b-modal.upload-image-modal>
        <span>이미지 추가</span>
        <IconPlus />
      </b-button>
      <b-button variant="outline-secondary" v-b-modal.confirm-modal>삭제</b-button>
    </div>

    <div class="table-responsive sticky-header">
      <table class="table table-middle">
        <colgroup>
          <col width="5%">
          <col width="15%">
          <col width="15%">
          <col width="15%">
          <col width="20%">
          <col width="15%">
          <col width="15%">
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <b-form-checkbox
                id="selectAll"
                name="selectAll"
                value="selectAll"
                size="lg"
              ></b-form-checkbox>
            </th>
            <th scope="col">File ID</th>
            <th scope="col">파일명</th>
            <th scope="col">사용 채널</th>
            <th scope="col">업로드 일시</th>
            <th scope="col" class="text-center">미리보기</th>
            <th scope="col" class="text-center">이미지 선택</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in ['0','1','2','3','4']" :key="index">
            <td class="text-center">
              <b-form-checkbox
                :id=item
                :name=item
                :value=item
                size="lg"
              ></b-form-checkbox>
            </td>
            <td>FLE58dho8L</td>
            <td>다운로드.jpg</td>
            <td>MMS</td>
            <td>2024-05-21 01:16</td>
            <td class="text-center">
              <button type="button" class="btn btn-icon p-0">
                <IconSearch />
              </button>
            </td>
            <td class="text-center">
              <b-button variant="outline-secondary" size="sm">선택</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ul class="info">
      <li>• 이미지는 .jpg, .jpeg, .png(MMS 제외) 형식만 지원합니다</li>
      <li>• 이미지 크기는 PUSH(1MB), RCS(1MB), 친구톡(Normal-500KB, Wide-2MB), MMS(300KB) 이하여야합니다.</li>
      <li>• 이미지는 가로 길이는 최소 500px, 세로 길이는 최소 250px 이상이어야합니다.</li>
      <li>• 이미지의 가로:세로 비율은 2:1 이상, 3:4 이하여야 합니다.</li>
    </ul>

    <template #modal-footer>
      <b-button variant="primary">선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>  
    
    <UploadImageModal />
    <ConfirmModal title="SMS 발송 내용" desc="광고성 메시지 수신거부번호를 입력해주세요." :onSubmit="closeDeleteModal" />
  </b-modal>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconSearch from '@/components/service/icons/IconSearch.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import UploadImageModal from '@/modules/ucMessageSendSms/components/modal/UploadImageModal.vue'

export default {
  components: { IconPlus, IconSearch, UploadImageModal, ConfirmModal, },
  name: "SelectImageModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('select-image-modal');
    },
    closeDeleteModal() {
      this.$bvModal.hide('confirm-modal');
    }
  }
};
</script>

<style scoped lang="scss">
.title-desc {
  margin: 20px 0 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-500);
  span {
    color: var(--status-failure);
  }
}
.sticky-header {
  max-height: 350px;
  overflow-y: auto;
}
.table-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  label {
    margin-right: auto;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    color: var(--gray-900);
  }
  .btn-outline-secondary {
    margin-left: 12px;
  }
}
.btn-icon path {
  stroke: var(--primary);
}
.info {
  margin: 20px 0 0;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #DDE1E7;
  background: var(--gray-50);
  list-style: none;
  li {
    font-size: 14px;
    font-weight: 400;
    line-height: 180%; /* 25.2px */
    letter-spacing: -0.28px;
    color: var(--gray-700);
  }
}
</style>
