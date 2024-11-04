<template>  
  <b-modal id="number-detail-modal" title="등록 발신번호 상세" hide-header-close size="xl" centered content-class="service-modal">

    <div class="d-flex align-items-center mb-1">
      <label class="form-label m-0 f-body5 c-gray500">브랜드 명</label>
      <p class="m-0 f-body6 c-gray900">더미브랜드 이름</p>
    </div>

    <div class="d-flex align-items-center pt-2">
      <label class="form-label m-0 f-body5 c-gray500">브랜드 ID</label>
      <p class="m-0 f-body6 c-gray900">BR.I62629h5u8</p>
    </div>

    <hr class="hr" />

    <div class="d-flex align-items-center">
      <p class="list-count">전체 <span class="text-primary">10건</span></p>
      <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
        <template #button-content>
          <span>{{ pageCount }}개씩 보기</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button @click="setPageCount(10)" :class="pageCount == 10 ? 'active' : ''">10개씩 보기</b-dropdown-item-button>
        <b-dropdown-item-button @click="setPageCount(20)" :class="pageCount == 20 ? 'active' : ''">20개씩 보기</b-dropdown-item-button>
        <b-dropdown-item-button @click="setPageCount(30)" :class="pageCount == 30 ? 'active' : ''">30개씩 보기</b-dropdown-item-button>
      </b-dropdown>
    </div>

    <div class="table-wrap">
      <div class="table-responsive sticky-header">
        <table class="table">
          <colgroup>
            <col width="8%">
            <col width="20%">
            <col width="20%">
            <col width="12%">
            <col width="15%">
            <col width="10%">
            <col width="10%">
          </colgroup>
          <thead>
            <tr>
              <th>
                <div class="d-flex align-items-center">
                  No.
                  <IconSort />
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  발신번호명
                  <IconSort />
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center">
                  발신번호
                  <IconSort />
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center">
                  <span class="f-body5">SMSMO<br />사용여부</span>
                  <IconSort class="down" />
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center">
                  등록일
                  <IconSort />
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center">
                  승인상태
                  <IconSort />
                </div>
              </th>
              <th>
                <div class="d-flex align-items-center">
                  승인일
                  <IconSort />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="index">
              <td>{{index + 1}}</td>
              <td>TPLdwiCS</td>
              <td>02-000-0006</td>
              <td>아니오</td>
              <td>2024.07.25</td>
              <td>승인대기</td>
              <td>내용</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import Pagination from '@/components/service/Pagination.vue';
import IconSort from '@/components/service/icons/IconSort.vue';

export default {
  components: { IconArrowDown, Pagination, IconSort, },
  name: "NumberDetailModal",
  data() {
    return {
      pageCount: 10,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('number-detail-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use "~@/assets/scss/service/base/typography" as typography;

.form-label {
  width: 120px;
  margin-right: 12px;
}
.sticky-header {
  max-height: 420px;
  overflow-y: auto;
}
.table-wrap {
  margin-top: 40px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  .table-responsive {
    border-top: none;
    border-right: none;
    border-left: none;
  }
}
.table th {
  padding-top: 4px;
  padding-bottom: 4px;
  vertical-align: middle;
}
.table th,
.table td {
  padding-right: 10px;
  padding-left: 10px;
  &:first-child {
    padding-left: 16px;
  }
  &:last-child {
    padding-right: 16px;
  }
}
.list-count {
  margin: 0 12px 0 0;
  @include typography.font-style(14px, 700, 140%, -0.28px);
  color: var(--gray500);
}
.b-dropdown {
  width: 132px;
}
</style>
