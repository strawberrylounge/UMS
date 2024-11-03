<template>
  <div class="uc-message-status list-view">
    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label class="mr-3">사용자명</label>
            <b-input placeholder="입력" class="mr-2"></b-input>

            <label class="ml-1 pl-2 mr-3">아이디</label>
            <b-input placeholder="입력" class="mr-2"></b-input>

            <label class="ml-1 pl-2 mr-3">상태</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown mr-2">
              <template #button-content>
                <span>{{status ? status : '선택'}}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button @click="setStatus('초대중')">초대중</b-dropdown-item-button>
              <b-dropdown-item-button @click="setStatus('정상')">정상</b-dropdown-item-button>
              <b-dropdown-item-button @click="setStatus('이용중지')">이용중지</b-dropdown-item-button>
            </b-dropdown>

            <label class="ml-1 pl-2 mr-3">이용권한</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span>{{permission ? permission : '선택'}}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button @click="setPermission('초대중')">관리자</b-dropdown-item-button>
              <b-dropdown-item-button @click="setPermission('정상')">오너</b-dropdown-item-button>
              <b-dropdown-item-button @click="setPermission('UC_읽기전용')">UC_읽기전용</b-dropdown-item-button>
              <b-dropdown-item-button @click="setPermission('사용자')">사용자</b-dropdown-item-button>
            </b-dropdown>
          </div>
        </div>
        <b-button variant="dark" class="btn-submit ml-auto">검색</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <p class="list-count">전체 <span class="text-primary">10건</span></p>
          <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
            <template #button-content>
              <span>{{ pageCount }}개씩 보기</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button :class="pageCount == 10 ? 'active' : ''">10개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 20 ? 'active' : ''">20개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 30 ? 'active' : ''">30개씩 보기</b-dropdown-item-button>
          </b-dropdown>

          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" v-b-modal.register-user-modal>
            <span>사용자 등록</span>
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
                    사용자명
                    <IconSort class="down" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    아이디
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    이용권한
                    <IconSort class="up" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    상태
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    관리
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>박과장</td>
                <td>
                  <span class="text-underline">test@test.com</span>
                </td>
                <td>사용자</td>
                <td>이용정지</td>
                <td>
                  <div class="d-flex-align-items-center">
                    <b-button variant="outline-primary" size="sm" class="mr-2" @click="openMailAlertModal">비밀번호 설정 메일 보내기</b-button>
                    <b-button variant="outline-danger" size="sm" class="mr-2" @click="confirmSuspended">이용정지</b-button>
                    <b-button variant="outline-secondary" size="sm" class="mr-2" v-b-modal.edit-user-modal>수정</b-button>
                    <b-button variant="outline-secondary" size="sm" @click="confirmDelete">삭제</b-button>
                  </div>
                </td>
              </tr>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>{{ index + 2 }}</td>
                <td>박과장</td>
                <td>
                  <span class="text-underline">test@test.com</span>
                </td>
                <td>사용자</td>
                <td>이용정지</td>
                <td>
                  <div class="d-flex-align-items-center">
                    <b-button variant="outline-primary" size="sm" class="mr-2" @click="openMailAlertModal">비밀번호 설정 메일 보내기</b-button>
                    <b-button variant="outline-primary" size="sm" class="mr-2" @click="confirmSuspendedClear">이용정지 해제</b-button>
                    <b-button variant="outline-secondary" size="sm" class="mr-2" v-b-modal.edit-user-modal>수정</b-button>
                    <b-button variant="outline-secondary" size="sm" @click="confirmDelete">삭제</b-button>
                  </div>
                </td>
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
    <RegisterUser />
    <EditUser :saveUser="saveUser" />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import MessageStatusTabs from '@/components/service/message/MessageStatusTabs.vue'
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import IconSort from '@/components/service/icons/IconSort.vue';
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import Pagination from '@/components/service/Pagination.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue';
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue';
import RegisterUser from '@/modules/userManage/components/RegisterUser';
import EditUser from '@/modules/userManage/components/EditUser';

export default {
  components: { IconArrowDown, Pagination, IconSort, IconArrowRight, AlertModal, ConfirmModal, RegisterUser, EditUser },
  name: "ucMessageStatus",
  data() {
    return {
      status: '',
      permission: '',
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
    }
  },
  methods: {
    setStatus(value) {
      this.status = value;
    },
    setPermission(value) {
      this.permission = value;
    },
    openMailAlertModal() {
      this.alertTitle = '인증메일을 전송하였습니다. 메일함을 확인해주세요.'
      this.alertDesc = 'Google메일을 이용할 시 이메일 인증에는 문제가 없으나, 구글의 보안프록시 서버를 사용하여 이미지를 제공하기 때문에 본문 상 이미지가 보이지 않을 수 있습니다.',
      this.$bvModal.show('alert-modal');
    },
    suspended() {
      this.$bvModal.hide('confirm-modal');
      this.alertTitle = '이용 정지 완료'
      this.alertDesc = '사용자 이용 정지가 완료되었습니다.'
      this.$bvModal.show('alert-modal');
    },
    confirmSuspended() {
      this.confirmTitle = '정말 이용을 정지시키겠습니까?'
      this.confirmDesc = '사용자의 이용을 정지하면 Console에 더 이상 접근할 수 없습니다.'
      this.confirmSubmit = this.suspended;
      this.$bvModal.show('confirm-modal');
    },
    suspendedClear() {
      this.$bvModal.hide('confirm-modal');
      this.alertTitle = '이용 정지 해제 완료'
      this.alertDesc = '사용자 이용 정지 해제가 완료되었습니다.'
      this.$bvModal.show('alert-modal');
    },
    confirmSuspendedClear() {
      this.confirmTitle = '정말 이용을 정지를 해제시키겠습니까?'
      this.confirmDesc = '사용자의 이용정지 해제 처리 시 정상적으로 Console에 접근할 수 있습니다.'
      this.confirmSubmit = this.suspendedClear;
      this.$bvModal.show('confirm-modal');
    },
    delete() {
      this.$bvModal.hide('confirm-modal');
      this.alertTitle = '사용자 삭제 완료'
      this.alertDesc = '사용자 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal');
    },  
    confirmDelete() {
      this.confirmTitle = '삭제'
      this.confirmDesc = '삭제처리된 사용자는 복구할 수 없습니다.\n서비스 이용을 위해서는 사용자 등록을 다시 진행하셔야 합니다.'
      this.confirmSubmit = this.delete;
      this.$bvModal.show('confirm-modal');
    },
    saveUser() {
      this.alertTitle = '사용자 수정 완료'
      this.alertDesc = '사용자 수정이 완료되었습니다.',
      this.$bvModal.show('alert-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';

.search-section {
  .form-control {
    max-width: 355px;
  }
}
.b-dropdown {
  width: 180px;
}
</style>
