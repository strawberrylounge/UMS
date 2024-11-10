<template>
  <div class="send-limit-spam list-view">
    <LimitSpamTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>스팸문구는 잦은 스팸문구 수신으로 인해 고객 이탈 또는 광고 수신거부 발생을 미리 막는 기능입니다.</li>
          <li>스팸 문구를 등록하면 메시지 발송 시 스팸으로 분류되어 메시지 발송을 제한합니다.</li>
        </ul>

        <div class="d-flex align-items-center mt-4">
          <label class="f-body5 c-gray700">스팸문구</label>
          <SearchInput />
          <b-button variant="dark" class="ml-auto">검색</b-button>
        </div>
      </div>

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <p class="list-count">전체 <span class="text-primary">10건</span></p>
          <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
            <template #button-content>
              <span>{{ pageCount }}개씩 보기</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button :class="pageCount == 10 ? 'active' : ''" @click="setPageCount(10)">10개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 20 ? 'active' : ''" @click="setPageCount(20)">20개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 30 ? 'active' : ''" @click="setPageCount(30)">30개씩 보기</b-dropdown-item-button>
          </b-dropdown>
          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" v-b-modal.add-spam-modal>
            <span>등록</span>
            <IconArrowRight />
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    NO.
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    스팸문구
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    메모
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    등록일자
                    <IconSort />
                  </div>
                </th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>{{ index }}</td>
                <td>TPLdwiCS</td>
                <td>테스트</td>
                <td>2024.02.06 12:15:11</td>
                <td>
                  <b-button variant="danger" size="sm" v-b-modal.confirm-modal>삭제</b-button>
                </td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AddSpamModal :addSpam="addSpam" />
    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal title="스팸 문구 삭제" desc="스팸 문구를 삭제 하시겠습니까?" :onSubmit="deleteSpam" />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import LimitSpamTabs from '@/components/service/limitSpam/LimitSpamTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconSort from '@/components/service/icons/IconSort.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import Pagination from '@/components/service/Pagination.vue';
import AddSpamModal from '@/modules/sendLimitSpam/components/modal/AddSpam.vue';

export default {
  components: { AddSpamModal, IconArrowDown, SearchInput, LimitSpamTabs,  AlertModal, ConfirmModal, IconSort, IconArrowRight, Pagination, },
  name: "AddressManage",
  data() {
    return {
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
    }
  },
  methods: {
    setPageCount(value) {
      this.pageCount = value
    },
    addSpam() {
      this.alertTitle = '스팸 문구 등록 완료'
      this.alertDesc = '스팸 문구 등록이 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    deleteSpam() {
      this.alertTitle = '스팸 문구 삭제 완료'
      this.alertDesc = '스팸 문구 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.info {
  label {
    margin: 0 16px 0 0;
  }
  .search-container {
    width: 355px;
  }
  .btn {
    min-width: 120px;
  }
}
.table th,
.table td {
  vertical-align: middle;
}
</style>
