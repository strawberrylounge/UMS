<template>
  <div class="alarm list-view">
    <AlarmTabs />
  
    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card">
        <div class="d-flex align-items-center flex-wrap">
          <label class="mr-1 pr-2">알람그룹 명</label>
          <b-input placeholder="입력" class="template-input"></b-input>

          <label class="mr-1 pr-2">수신자 명</label>
          <b-input placeholder="입력" class="template-input"></b-input>

          <label class="mr-1 pr-2">휴대폰</label>
          <b-input placeholder="입력" class="template-input"></b-input>
        </div>

        <b-button variant="dark" class="btn-submit ml-auto">검색</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card w-100">
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

          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto mr-2" v-b-modal.add-reciever-modal>
            <span>수신자 추가</span>
            <IconPlus />
          </b-button>
          <b-button variant="outline-primary" @click="confirmDeleteReceiver">수신자 삭제</b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>
                  <div class="d-flex align-items-center">
                    수신자명
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    알람그룹 명
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    휴대폰
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
                <td>테스터</td>
                <td>테스트그룹</td>
                <td>010-1234-5678</td>
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
    <AddReceiverModal :save="addReceiver" />
  </div>
</template>

<script>
import AlarmTabs from '@/components/service/alarm/AlarmTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconSort from '@/components/service/icons/IconSort.vue'
import Pagination from '@/components/service/Pagination.vue';
import AddReceiverModal from '@/modules/alarmRecipient/components/modal/AddReceiverModal.vue';

export default {
  components: { IconSort, IconPlus, IconArrowDown, AlarmTabs,  AlertModal, ConfirmModal, Pagination, AddReceiverModal, },
  name: "Alarm",
  data() {
    return {
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
      pageCount: 10,
    }
  },
  methods: {
    setPageCount(value) {
      this.pageCount = value
    },
    addReceiver() {
      this.$bvModal.hide('add-reciever-modal');
      this.alertTitle = '수신자 추가 완료'
      this.alertDesc = '수신자 추가가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    deleteReceiver() {
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '수신자 삭제 완료'
      this.alertDesc = '수신자 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    confirmDeleteReceiver() {
      this.confirmTitle = '수신자 삭제'
      this.confirmDesc = '수신자를 삭제 하시겠습니까?'
      this.confirmSubmit = this.deleteReceiver
      this.$bvModal.show('confirm-modal')
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/alarm.scss';

.template-input {
  width: 335px;
  margin-right: 20px;
}
.table-responsive {
  margin-top: 20px;
}
</style>
