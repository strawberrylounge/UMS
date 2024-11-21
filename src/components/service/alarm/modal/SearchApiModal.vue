<template>  
  <b-modal scrollable id="search-api-modal" title="API 검색" hide-header-close centered size="lg" content-class="service-modal">

    <div class="d-flex align-items-center search">
      <b-dropdown id="apikey-dropdown" variant="secondary" class="apikey-dropdown">
        <template #button-content>
          <span>{{ key }}</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button :class="{active: key === 'API Key'}" @click="setKey('API Key')">API Key</b-dropdown-item-button>
      </b-dropdown>
      <b-input placeholder="입력"></b-input>
      <b-button variant="dark">검색</b-button>
    </div>

    <div class="table-responsive">
      <table class="table">
        <colgroup>
          <col width="5%">
          <col width="20%">
          <col width="20%">
          <col width="55%">
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
            <th>선/후불</th>
            <th>API 명</th>
            <th>API Key</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <b-form-checkbox
                id="1"
                name="check"
                value="1"
                size="lg"
              ></b-form-checkbox>
            </td>
            <td>선불</td>
            <td>1</td>
            <td>GW_TEST_1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <template #modal-footer>
      <b-button variant="primary" v-b-modal.alert-modal>선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template> 

    <AlertModal title="API 검색" desc="추가하실 API를 선택해주세요." />
  </b-modal>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
  components: { IconArrowDown, AlertModal },
  name: "SearchApiModal",
  props: {
  },
  data() {
    return {
      key: 'API Key'
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('search-api-modal');
    },
    setKey(value) {
      this.key = value
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  .b-dropdown {
    width: calc(50% - (120px / 2) - 16px);
    margin-right: 16px;
  }
  input {
    width: calc(50% - (120px / 2) - 16px);
    margin-right: 16px;
  }
  .btn {
    min-width: 120px;
  }
}
.table-responsive {
  margin-top: 20px;
}
</style>