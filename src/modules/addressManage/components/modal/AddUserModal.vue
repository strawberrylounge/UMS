<template>  
  <b-modal scrollable id="add-user-modal" title="구성원 추가" hide-header-close size="lg" centered content-class="service-modal">

    <div class="d-flex align-items-center search">
      <div class="flex-fill">
        <SearchInput />
      </div>
      <b-button variant="dark" class="ml-3">검색</b-button>
    </div>

    <hr class="hr" />

    <div class="d-flex align-items-center">
      <b-form-checkbox value="all">그룹과 연결되지 않는 사용자 조회</b-form-checkbox>

      <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown ml-auto">
        <template #button-content>
          <span>{{ pageCount }}개씩 보기</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button @click="setPageCount(10)" :class="pageCount == 10 ? 'active' : ''">10개씩 보기</b-dropdown-item-button>
        <b-dropdown-item-button @click="setPageCount(20)" :class="pageCount == 20 ? 'active' : ''">20개씩 보기</b-dropdown-item-button>
        <b-dropdown-item-button @click="setPageCount(30)" :class="pageCount == 30 ? 'active' : ''">30개씩 보기</b-dropdown-item-button>
      </b-dropdown>
    </div>

    <div class="table-responsive sticky-header">
      <table class="table">
        <colgroup>
          <col width="10%">
          <col width="20%">
          <col width="20%">
          <col width="25%">
          <col width="25%">
        </colgroup>
        <thead>
          <tr>
            <th class="text-center">
                <b-form-checkbox
                  id="selectAll"
                  name="selectAll"
                  value="selectAll"
                  size="lg"
                ></b-form-checkbox>
              </th>
            <th>수신자명</th>
            <th>아이디</th>
            <th>휴대폰 번호</th>
            <th>그룹</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="index">
            <td class="text-center">
              <b-form-checkbox
                :id=index
                :name=index
                :value=index
                size="lg"
              ></b-form-checkbox>
            </td>
            <td>test</td>
            <td>dkdlel12</td>
            <td>010-1234-1234</td>
            <td>테스트</td>
          </tr>
        </tbody>
      </table>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="addUser">추가</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'

export default {
  components: { IconArrowDown, SearchInput, },
  name: "AddUserModal",
  props: {
    addUser: {
      type: Function
    }
  },
  data() {
    return {
      pageCount: 10,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('add-user-modal');
    },
    setPageCount(value) {
      this.pageCount = value
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use "~@/assets/scss/service/base/typography" as typography;

.search .btn {
  min-width: 120px;
}
.pageCount-dropdown {
  width: 132px;
}
.sticky-header {
  margin-top: 20px;
  max-height: 350px;
  overflow-y: auto;
}
</style>
