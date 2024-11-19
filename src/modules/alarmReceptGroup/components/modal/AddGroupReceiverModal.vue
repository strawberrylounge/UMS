<template>  
  <b-modal id="add-group-receiver-modal" title="그룹 수신자 추가" hide-header-close centered size="md" content-class="service-modal">

    <div class="d-flex align-items-center search">
      <label class="f-body5 c-gray500">수신자명 <span class="require">*</span></label>
      <b-input placeholder="입력" class="flex-fill"></b-input>
      <b-button variant="dark">검색</b-button>
    </div>

    <div class="table-responsive">
      <table class="table">
        <colgroup>
          <col width="10%">
        </colgroup>
        <thead>
          <tr>
            <th class="text-center">
              <b-form-checkbox
                id="addselectAll"
                name="selectAll"
                value="selectAll"
                size="lg"
              ></b-form-checkbox>
            </th>
            <th>수신자명</th>
            <th>휴대폰 번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <b-form-checkbox
                id="add1"
                name="check"
                value="1"
                size="lg"
              ></b-form-checkbox>
            </td>
            <td>테스터 1</td>
            <td>010-1234-5678</td>
          </tr>
        </tbody>
      </table>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="save">선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template> 
  </b-modal>
</template>

<script>
export default {
  components: { },
  name: "AddGroupReceiverModal",
  props: {
    save: {
      type: Function
    }
  },
  data() {
    return {
      key: 'API Key'
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('add-group-receiver-modal');
    },
    setKey(value) {
      this.key = value
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  label {
    width: 120px;
    margin-right: 12px;
  }
  input {
    width: auto;
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