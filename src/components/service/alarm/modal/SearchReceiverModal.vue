<template>  
  <b-modal scrollable id="search-receiver-modal" title="API 검색" hide-header-close centered size="lg" content-class="service-modal">
    <template #modal-title>
      <h5 class="modal-title">수신자 검색</h5>
      <p class="modal-info">* 좌측에 그룹이 지정되면 우측 그룹에 속해 있는 수신자가 검색됩니다.</p>
    </template>

    <div class="row">
      <div class="col">
        <div class="form-row m-0">
          <label class="mb-0">템플릿 검색</label>
          <div>
            <b-input class="w-100" placeholder="입력"></b-input>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <colgroup>
              <col width="5%">
              <col width="50%">
              <col width="45%">
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
                <th>수신그룹</th>
                <th>수신자 수</th>
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
                <td>수신자 전체</td>
                <td>2</td>
              </tr>
              <tr>
                <td class="text-center">
                  <b-form-checkbox
                    id="2"
                    name="check"
                    value="1"
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td>수신자 전체</td>
                <td>2</td>
              </tr>
              <tr>
                <td class="text-center">
                  <b-form-checkbox
                    id="3"
                    name="check"
                    value="1"
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td>수신자 전체</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <div class="form-row m-0">
          <label class="mb-0">수신자 명</label>
          <div>
            <b-input class="w-100" placeholder="입력"></b-input>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <colgroup>
              <col width="5%">
              <col width="50%">
              <col width="45%">
            </colgroup>
            <thead>
              <tr>
                <th class="text-center">
                  <b-form-checkbox
                    id="selectAll2"
                    name="selectAll"
                    value="selectAll"
                    size="lg"
                  ></b-form-checkbox>
                </th>
                <th>수신자 명</th>
                <th>휴대폰 번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <b-form-checkbox
                    id="4"
                    name="check"
                    value="1"
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td>test01</td>
                <td>010-1234-1234</td>
              </tr>
              <tr>
                <td class="text-center">
                  <b-form-checkbox
                    id="5"
                    name="check"
                    value="1"
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td>test01</td>
                <td>010-1234-1234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <template #modal-footer>
      <b-button variant="primary" v-b-modal.alert-modal>선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template> 

    <AlertModal title="수신자 검색" desc="추가하실 수신 그룹 또는 수신자를 선택해 주세요." />
  </b-modal>
</template>

<script>
import AlertModal from '@/components/service/modal/AlertModal.vue'

export default {
  components: {  AlertModal },
  name: "SearchReceiverModal",
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('search-receiver-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/alarm.scss';
@use "~@/assets/scss/service/base/typography" as typography;

.modal-info {
  margin: 20px 0 0;
  padding: 0;
  @include typography.font-style(14px, 700, 140%, -0.28px);
  color: var(--gray500)
}
.table-responsive {
  margin-top: 20px;
}
</style>