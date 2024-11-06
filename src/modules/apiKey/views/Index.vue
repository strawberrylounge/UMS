<template>
  <div class="channel-rcs list-view">
  
    <div class="tab-contents">
      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <b-button variant="primary" class="btn-svg btn-svg-right mr-2 ml-auto" v-b-modal.add-apikey-modal>
            <span>KEY 생성</span>
            <IconArrowRight />
          </b-button>
        </div>

        <div class="table-responsive">
          <table class="table">
            <colgroup>
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="15%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    API KEY
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    브랜드 ID
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    TPS
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    라인타입
                    <IconSort class="down" />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    상태
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    생성일
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>
                  <button class="btn btn-table-link" v-b-modal.apikey-detail-modal>GW_TEST_1</button>
                </td>
                <td>1</td>
                <td>1,000</td>
                <td>일반</td>
                <td>사용</td>
                <td>2024.02.06 12:15:11</td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AlertModal title="API KEY 삭제 완료" desc="API KEY 삭제가 완료되었습니다." />
    <ConfirmModal title="API KEY 삭제" desc="삭제처리된 API KEY는 복구할 수 없습니다. 선택하신 API KEY를 삭제하시겠습니까?" :onSubmit="deleteApiKey" />
    <ApiKeyDetailModal :confirmDeleteModal="confirmDeleteModal" />
    <AddApiKeyModal />
  </div>
</template>

<script>
import IconSort from '@/components/service/icons/IconSort.vue';
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import Pagination from '@/components/service/Pagination.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import ApiKeyDetailModal from '@/modules/apiKey/components/modal/ApiKeyDetailModal.vue'
import AddApiKeyModal from '@/modules/apiKey/components/modal/AddApiKeyModal.vue'


export default {
  components: { IconArrowRight, Pagination, IconSort, AlertModal, ConfirmModal, ApiKeyDetailModal, AddApiKeyModal, },
  name: "apiKey",
  data() {
    return {
    }
  },
  methods: {
    confirmDeleteModal() {
      this.$bvModal.show('confirm-modal');
    },
    deleteApiKey() {
      this.$bvModal.show('alert-modal');
      this.$bvModal.hide('confirm-modal');
      this.$bvModal.hide('apikey-detail-modal');
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

</style>
