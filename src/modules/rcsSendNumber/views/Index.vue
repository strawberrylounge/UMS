<template>
  <div class="send-limit-spam list-view">
    <MessageSendTabs :subTitle="viewType == 'manage' ? '> RCS 발신정보 등록' : ''" />

    <RcsSendRegister v-if="viewType == 'manage'" :setListView="setListView" :registerSubmit="registerSubmit" />

    <div v-else class="tab-contents">
      <div class="info card">
        <p class="mt-0 mb-1 pb-2 f-body1 c-gray700">RCS 발신번호 조회</p>
        <ul>
          <li>RCS 발신번호명은 RCS Biz Center 에서 수정이 가능합니다.</li>
        </ul>

        <div class="mt-1 pt-2">
          <b-button variant="secondary" class="btn-svg btn-svg-right" v-b-modal.rcs-info-modal>
            <span>RCS 발신번호 사전등록 안내</span>
            <IconArrowRight />
          </b-button>
        </div>
      </div>

      <!-- 검색 영역 Start -->
      <div class="card flex-wrap search-section">
        <label class="mb-0 mr-3">RCS 발신번호</label>
        <b-input placeholder="숫자만 입력"></b-input>

        <i class="vertical-divider"></i>

        <label class="mb-0 mr-3">RCS 발신번호명</label>
        <b-input placeholder="입력"></b-input>

        <label class="mb-0 mr-3 ml-1 pl-3">RCS 상태</label>
        <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
          <template #button-content>
            <span>{{ number }}</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button :class="{active: number === '전체'}" @click="setNumber('전체')">전체</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '승인대기'}" @click="setNumber('승인대기')">승인대기</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '검수시작'}" @click="setNumber('검수시작')">검수시작</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '검수완료'}" @click="setNumber('검수완료')">검수완료</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '승인'}" @click="setNumber('승인')">승인</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '반려'}" @click="setNumber('반려')">반려</b-dropdown-item-button>
        </b-dropdown>

        <b-button variant="dark" class="ml-auto">검색</b-button>
      </div>
      <!-- 검색 영역 End -->

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

          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" @click="setManageView">
            <span>RCS 발신번호 등록</span>
            <IconArrowRight />
          </b-button>
          <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-2">
            <span>엑셀 다운로드</span>
            <IconDownload />
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    RCS 발신번호
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    RCS 발신번호명
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    처리상태
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    브랜드
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    요청일자
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    승인일자
                    <IconSort />
                  </div>
                </th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>010-1234-1234</td>
                <td>테스트-0231240</td>
                <td v-if="index % 2 == 0"><button class="btn btn-table-link c-states-red" @click="returnModal">반려</button></td>
                <td v-else>승인</td>
                <td>서류 심사</td>
                <td>2024.10.10</td>
                <td>2024.10.11</td>
                <td>
                  <b-button v-if="index % 2 == 0" variant="outline-secondary" size="sm" v-b-modal.rcs-update-number-modal>수정</b-button>
                  <b-button v-else variant="outline-secondary" size="sm" @click="confirmDeleteNumber">삭제</b-button>
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
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="deleteNumber" />
    <RcsInfoModal />
    <RcsUpdateNumberModal :updateNumber="updateNumber" />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import MessageSendTabs from '@/components/service/messageSend/MessageSendTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import IconSort from '@/components/service/icons/IconSort.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import IconDownload from '@/components/service/icons/IconDownload.vue'
import Pagination from '@/components/service/Pagination.vue';
import RcsInfoModal from '@/modules/rcsSendNumber/components/modal/RcsInfoModal.vue';
import RcsUpdateNumberModal from '@/modules/rcsSendNumber/components/modal/RcsUpdateNumberModal.vue';
import RcsSendRegister from '@/modules/rcsSendNumber/components/rcsSendRegister.vue';

export default {
  components: { RcsSendRegister, RcsUpdateNumberModal, RcsInfoModal, IconDownload, IconArrowDown, MessageSendTabs,  AlertModal, ConfirmModal, IconSort, IconArrowRight, Pagination, },
  name: "AddressManage",
  data() {
    return {
      number: '전체',
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      viewType: 'list'
    }
  },
  methods: {
    setManageView() {
      this.viewType = 'manage'
    },
    setListView() {
      this.viewType = 'list'
    },
    setPageCount(value) {
      this.pageCount = value
    },
    updateNumber() {
      this.alertTitle = '발신번호 수정 완료'
      this.alertDesc = '수정이 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    confirmDeleteNumber() {
      this.confirmTitle = '발신번호 삭제'
      this.confirmDesc = '삭제처리된 발신번호는 복구할 수 없습니다. 계속 진행하시겠습니까?'
      this.$bvModal.show('confirm-modal')
    },
    deleteNumber() {
      this.alertTitle = '발신번호 삭제 완료'
      this.alertDesc = '발신번호 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    registerSubmit() {
      this.alertTitle = 'RCS 발신번호 요청 완료'
      this.alertDesc = 'RCS 발신번호 요청이 완료되었습니다.'
      this.$bvModal.show('alert-modal')
      this.setListView()
    },
    returnModal() {
      this.alertTitle = '반려'
      this.alertDesc = '반려 내용이 노출되는 곳 입니다.'
      this.$bvModal.show('alert-modal')
    }
  }
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.form-control,
.b-dropdown {
  width: 355px;
}
.search-section .btn {
  min-width: 120px;
}
.table th,
.table td {
  vertical-align: middle;
}
</style>
