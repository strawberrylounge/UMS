<template>
  <div class="address-receiver list-view">
    <AddressTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>수신자는 메시지 발송 시 자주 발송하는 수신자를 관리합니다. (메시지 발송 시 수신자를 편하게 찾아 추가하실 수 있습니다.)</li>
          <li>엑셀 업로드 기능을 사용하여 대량의 수신자 업로드가 가능합니다.</li>
          <li>수신자를 묶는 주소록 그룹은 [주소록 > 주소록] 메뉴에서 가능합니다.</li>
        </ul>
      </div>

      <!-- 검색 Start -->
      <div class="card search-section mb-1">
        <div class="search">
          <SearchInput placeholder="구성원 명, 휴대폰 번호 또는 앱 로그인 ID로 검색이 가능합니다." />
        </div>
        <i class="vertical-divider"></i>
        <label class="mr-4">사용여부</label>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="use">
            <b-form-radio name="type" value="전체">전체</b-form-radio>
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-button variant="dark" class="btn-submit ml-auto">검색</b-button>
      </div>
      <!-- 검색 End -->

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

          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" v-b-modal.add-receiver-modal>
            <span>수신자 추가</span>
            <IconPlus />
          </b-button>
          <b-button variant="secondary" class="btn-svg btn-svg-right ml-2" v-b-modal.add-receiver-all-modal>
            <span>수신자 일괄등록</span>
            <IconArrowRight />
          </b-button>
          <i class="vertical-divider"></i>
          <b-button variant="outline-primary" class="mr-2" @click="openDeleteReceiverModal">수신자 삭제</b-button>
          <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-2">
            <span>엑셀 다운로드</span>
            <IconDownload />
          </b-button>
        </div>

        <div class="table-responsive">
          <table class="table">
            <colgroup>
              <col width="5%">
              <col width="20%">
              <col width="20%">
              <col width="20%">
              <col width="20%">
              <col width="15%">
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
                <th>
                  <div class="d-flex align-items-center">
                    수신자명
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center"> 
                    앱로그인 ID
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    주소록 그룹
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    휴대폰 번호
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    사용여부
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td class="text-center">
                  <b-form-checkbox
                    :id=index
                    :name=index
                    :value=index
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td><button class="btn btn-table-link">test01</button></td>
                <td>ID 내용노출</td>
                <td>testphone</td>
                <td>010-1234-1234</td>
                <td>사용</td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="confirmSubmit" />
    <AddReceiverModal :addReceiver="addReceiver" />
    <AddReceiverAllModal :addAll="addAll" />

    <p>모달 예시입니다.<br/>모달이 오픈되는 조건이 달라서 예시로 버튼 넣었습니다.</p>
    <div class="d-flex align-items-center">
      <b-button variant="outline-primary" class="mr-2" @click="deleteReceiverValidation">삭제할 수신자 선택 안함</b-button>
      <b-button variant="outline-primary" class="mr-2" @click="deleteReceiverGroupValidation">주소록 그룹이 있는 수신자일 경우, 삭제 버튼을 누르면</b-button>
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import AddressTabs from '@/components/service/address/AddressTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import IconDownload from '@/components/service/icons/IconDownload.vue'
import IconOn from '@/components/service/icons/IconOn.vue'
import IconOff from '@/components/service/icons/IconOff.vue'
import AddCategoryModal from '@/modules/addressManage/components/modal/AddCategoryModal.vue'
import UpdateCategoryModal from '@/modules/addressManage/components/modal/UpdateCategoryModal.vue'
import AddAddressModal from '@/modules/addressManage/components/modal/AddAddressModal.vue'
import UpdateAddressModal from '@/modules/addressManage/components/modal/UpdateAddressModal.vue'
import AddReceiverModal from '@/modules/addressReceiver/components/modal/AddReceiverModal.vue'
import AddReceiverAllModal from '@/modules/addressReceiver/components/modal/AddReceiverAllModal.vue'
import Pagination from '@/components/service/Pagination.vue';

export default {
  components: { AddReceiverAllModal, AddReceiverModal, IconArrowDown, SearchInput, AddressTabs,  AlertModal, ConfirmModal, IconPlus, IconArrowRight, IconDownload, Pagination },
  name: "AddressReceiver",
  data() {
    return {
      use: '전체',
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
    }
  },
  methods: {
    setPageCount(value) {
      this.pageCount = value
    },
    addReceiver() {
      this.$bvModal.hide('add-receiver-modal');
      this.alertTitle = '수신자 등록'
      this.alertDesc = '저장되었습니다.'
      this.$bvModal.show('alert-modal');
    },
    addAll() {
      this.$bvModal.hide('add-receiver-all-modal');
      this.alertTitle = '수신자 일괄 등록'
      this.alertDesc = '완료하였습니다.'
      this.$bvModal.show('alert-modal');
    },
    deleteReceiver() {
      this.$bvModal.hide('confirm-modal');
      this.alertTitle = '수신자 삭제'
      this.alertDesc = '삭제되었습니다.'
      this.$bvModal.show('alert-modal');
    },
    openDeleteReceiverModal() {
      this.confirmTitle = '수신자 삭제'
      this.confirmDesc = '선택하신 수신자가 삭제됩니다. 삭제하시겠습니까?'
      this.confirmSubmit = this.deleteReceiver;
      this.$bvModal.show('confirm-modal');
    },
    deleteReceiverValidation() {
      this.alertTitle = '수신자 삭제'
      this.alertDesc = '삭제할 항목을 선택해주세요.'
      this.$bvModal.show('alert-modal');
    },
    deleteReceiverGroupValidation() {
      this.alertTitle = '수신자 삭제'
      this.alertDesc = '구성원에서 먼저 삭제해 주세요.'
      this.$bvModal.show('alert-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.card:not(.info) {
  padding: 28px;
  .search {
    width: 540px;
  }
}
</style>
