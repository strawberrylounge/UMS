<template>
  <div class="address-manage list-view">
    <LimitSpamTabs />

    <div class="tab-contents">
      <div class="info card">
        <p class="f-body1 c-gray700 mt-0 mb-1 pb-2">수신거부목록 조회</p>
        <ul>
          <li>수신거부 번호 리스트 조회가 가능하며, 수신자별 추가 및 해제를 설정할 수 있습니다.</li>
          <li>080 서비스 구분이 유플러스와 메시지허브일 경우만 수신거부번호를 관리할 수 있습니다.</li>
        </ul>
      </div>

      <!-- 주소록 선택 Start -->
      <div class="card flex-wrap search-section">
        <label class="mb-0 mr-3">080 수신거부번호</label>
        <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
          <template #button-content>
            <span>{{ number }}</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button :class="{active: number === '전체'}" @click="setNumber('전체')">전체</b-dropdown-item-button>
        </b-dropdown>

        <b-button variant="dark" class="ml-auto">검색</b-button>
      </div>
      <!-- 주소록 선택 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <p class="list-count">전체 <span class="text-primary">20건</span></p>
          <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
            <template #button-content>
              <span>{{ pageCount }}개씩 보기</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button :class="pageCount == 10 ? 'active' : ''" @click="setPageCount(10)">10개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 20 ? 'active' : ''" @click="setPageCount(20)">20개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 30 ? 'active' : ''" @click="setPageCount(30)">30개씩 보기</b-dropdown-item-button>
          </b-dropdown>
          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto mr-2" v-b-modal.rejct-num-modal>
            <span>수신거부등록</span>
            <IconArrowRight />
          </b-button>
          <b-button variant="outline-primary" class="btn-svg btn-svg-right">
            <span>엑셀 다운로드</span>
            <IconArrowLineDown />
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <colgroup>
              <col width="22%">
              <col width="10%">
              <col width="30%">
              <col width="30%">
              <col width="8%">
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    수신거부 번호
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    삭제 여부
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    등록일자
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    삭제일자
                    <IconSort />
                  </div>
                </th>
                <th>수신거부 해제</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>01011112222</td>
                <td>삭제됨</td>
                <td>2024.02.06T 12:15:11</td>
                <td>2024.02.06T 12:15:11</td>
                <td>
                  <b-button variant="outline-secondary" size="sm" v-b-modal.alert-modal>해제</b-button>
                </td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AlertModal title="수신 거부 해제 완료" desc="수신 거부 해제가 완료되었습니다." />
    <RejctNumModal />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import LimitSpamTabs from '@/components/service/limitSpam/LimitSpamTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import IconArrowLineDown from '@/components/service/icons/IconArrowLineDown.vue'
import RejctNumModal from '@/modules/rejctNum/components/modal/RejctNumModal.vue'
import Pagination from '@/components/service/Pagination.vue';
import IconSort from '@/components/service/icons/IconSort.vue'

export default {
  components: { IconSort, RejctNumModal, IconArrowRight, Pagination, IconArrowLineDown, LimitSpamTabs, IconArrowDown,  AlertModal, },
  name: "AddressManage",
  data() {
    return {
      number: '전체',
      pageCount: 10,
    }
  },
  methods: {
    setNumber(value) {
      this.number = value;
    },
    setPageCount(value) {
      this.pageCount = value;
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.card:not(.info) {
  padding: 28px;
  box-shadow: none;
}
.template-dropdown {
  min-width: 335px;
}
.search-section {
  .btn {
    min-width: 120px;
  }
}
.table td {
  vertical-align: middle;
}
</style>
