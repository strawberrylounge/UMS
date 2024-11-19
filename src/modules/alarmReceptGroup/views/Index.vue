<template>
  <div class="alarm list-view">
    <AlarmTabs />
  
    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label class="mr-1 pr-2">수신그룹명</label>
            <b-input placeholder="입력" class="template-input"></b-input>
            
            <label class="mr-3 c-gray700">검색조건</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span v-if="use == null" class="c-gray400">선택</span>
                <span v-else>{{ use ? 'Y' : 'N' }}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button :class="{active: use === true}" @click="setUse(true)">Y</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: use === false}" @click="setUse(false)">N</b-dropdown-item-button>
            </b-dropdown>
          </div>
        </div>
        <b-button variant="dark" class="btn-submit">검색</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 테이블 리스트 영역 Start -->
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="d-flex justify-content-end button-container">
              <b-button variant="secondary" class="btn-svg btn-svg-right mr-2" v-b-modal.add-reciever-group-modal>
                <span>수신그룹 등록</span>
                <IconPlus />
              </b-button>
              <b-button variant="outline-primary" @click="confirmDeleteReceiverGroup">수신그룹 삭제</b-button>
            </div>
            <div class="table-responsive">
              <table class="table">
                <colgroup>
                  <col width="10%">
                  <col width="60%">
                  <col width="15%">
                  <col width="15%">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <div class="d-flex align-items-center">
                        NO.
                        <IconSort />
                      </div>
                    </th>
                    <th scope="col">
                      <div class="d-flex align-items-center">
                        수신그룹명
                        <IconSort />
                      </div>
                    </th>
                    <th scope="col">
                      <div class="d-flex align-items-center">
                        사용여부
                        <IconSort />
                      </div>
                    </th>
                    <th scope="col">
                      <div class="d-flex align-items-center">
                        수신자 수
                        <IconSort />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in [0,1,2,3]" :key="index">
                    <td>{{index + 1}}</td>
                    <td>테스트그룹 1</td>
                    <td>Y</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="d-flex justify-content-end button-container">
              <b-button variant="secondary" class="btn-svg btn-svg-right group-btn mr-2" v-b-modal.add-group-receiver-modal>
                <span>그룹 수신자 추가</span>
                <IconPlus />
              </b-button>
              <b-button variant="outline-primary" class="group-btn" @click="confirmDeleteGroupReceiver">그룹 수신자 삭제</b-button>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="text-center">
                      <b-form-checkbox
                        id="selectAll"
                        name="selectAll"
                        value="selectAll"
                        size="lg"
                      ></b-form-checkbox>
                    </th>
                    <th scope="col">수신자 명</th>
                    <th scope="col">수신그룹명</th>
                    <th scope="col">휴대폰 번호</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in [0,1,2,3]" :key="index">
                    <td class="text-center">
                      <b-form-checkbox
                        :id=index
                        :name=index
                        :value=index
                        size="lg"
                      ></b-form-checkbox>
                    </td>
                    <td>test01</td>
                    <td>테스트그룹1, 테스트그룹 3</td>
                    <td>010-1234-1234</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- 테이블 리스트 영역 End -->

    </div>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="confirmSubmit" />
    <AddReceiverGroupModal :save="saveReceiverGroup" />
    <AddGroupReceiverModal :save="saveGroupReceiver" />

    <p>상황별 모달</p>
    <b-button variant="secondary" @click="alertDeleteReceiverModal">그룹 수신자 삭제</b-button>
    <b-button variant="secondary" @click="alertSelectReceiverModal">그룹 수신자 선택 팝업창</b-button>
  </div>
</template>

<script>
import AlarmTabs from '@/components/service/alarm/AlarmTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconSort from '@/components/service/icons/IconSort.vue'
import AddReceiverGroupModal from '@/modules/alarmReceptGroup/components/modal/AddReceiverGroupModal.vue'
import AddGroupReceiverModal from '@/modules/alarmReceptGroup/components/modal/AddGroupReceiverModal.vue'

export default {
  components: { IconSort, IconPlus, IconArrowDown, AlarmTabs,  AlertModal, ConfirmModal, AddReceiverGroupModal, AddGroupReceiverModal, },
  name: "Alarm",
  data() {
    return {
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
      use: null,
    }
  },
  methods: {
    setUse(value) {
      this.use = value
    },
    saveReceiverGroup() {
      this.$bvModal.hide('add-reciever-group-modal');
      this.alertTitle = '수신 그룹 저장 완료'
      this.alertDesc = '수신 그룹 저장이 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    saveGroupReceiver() {
      this.$bvModal.hide('add-group-receiver-modal');
      this.alertTitle = '그룹 수신자 추가 완료'
      this.alertDesc = '그룹 수신자 추가가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    deleteReceiverGroup() {
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '수신 그룹 삭제 완료'
      this.alertDesc = '수신 그룹 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    confirmDeleteReceiverGroup() {
      this.confirmTitle = '수신 그룹 삭제'
      this.confirmDesc = '수신 그룹을 삭제 하시겠습니까?'
      this.confirmSubmit = this.deleteReceiverGroup
      this.$bvModal.show('confirm-modal')
    },
    deleteGroupReceiver() {
      this.$bvModal.hide('confirm-modal')
      this.alertTitle = '그룹 수신자 삭제 완료'
      this.alertDesc = '그룹 수신자 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    confirmDeleteGroupReceiver() {
      this.confirmTitle = '그룹 수신자 삭제'
      this.confirmDesc = '그룹 수신자를 삭제 하시겠습니까?'
      this.confirmSubmit = this.deleteGroupReceiver
      this.$bvModal.show('confirm-modal')
    },
    alertDeleteReceiverModal() {
      this.alertTitle = '수신 그룹 선택'
      this.alertDesc = '삭제하실 수신 그룹을 선택해주세요.'
      this.$bvModal.show('alert-modal')
    },
    alertSelectReceiverModal() {
      this.alertTitle = '그룹 수신자 선택'
      this.alertDesc = '삭제하실 수신자를 선택해주세요.'
      this.$bvModal.show('alert-modal')
    },
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
.b-dropdown  {
  width: 132px;
}
.button-container {
  .btn {
    min-width: 130px;
  }
  .group-btn {
    min-width: 143px;
  }
}
.row {
  margin-top: 20px;
}
.table-responsive {
  margin-top: 20px;
}
</style>
