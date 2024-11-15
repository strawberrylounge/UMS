<template>
  <div class="send-limit-spam list-view">
    <MessageSendTabs />

    <div class="tab-contents">
      <div class="info card">
        <p class="mt-0 mb-1 pb-2 f-body1 c-gray700">문자 발신번호 조회</p>
        <ul>
          <li>등록방법이 RCS 인 발신번호는 RCS 발신번호 메뉴에서 삭제가 가능합니다.</li>
          <li>발신번호명 또는 발신번호명 등록 클릭 시 입력 및 수정이 가능합니다.</li>
          <li>처리상태가 요청 및 접수일 경우 수정 및 삭제가 되지 않습니다.</li>
        </ul>

        <div class="mt-1 pt-2">
          <b-button variant="secondary" class="btn-svg btn-svg-right" v-b-modal.info-modal>
            <span>문자 발신번호 사전등록 안내</span>
            <IconArrowRight />
          </b-button>
        </div>
      </div>

      <!-- 검색 영역 Start -->
      <div class="card flex-wrap search-section">
        <label class="mb-0 mr-3">발신번호</label>
        <b-input placeholder="숫자만 입력"></b-input>

        <i class="vertical-divider"></i>

        <label class="mb-0 mr-3">발신번호명</label>
        <b-input placeholder="입력"></b-input>

        <label class="mb-0 mr-3 ml-1 pl-3">처리상태</label>
        <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
          <template #button-content>
            <span>{{ number }}</span>
            <IconArrowDown />
          </template>
          <b-dropdown-item-button :class="{active: number === '전체'}" @click="setNumber('전체')">전체</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '요청'}" @click="setNumber('요청')">요청</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '접수'}" @click="setNumber('접수')">접수</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '승인'}" @click="setNumber('승인')">승인</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '반려'}" @click="setNumber('반려')">반려</b-dropdown-item-button>
          <b-dropdown-item-button :class="{active: number === '차단'}" @click="setNumber('차단')">차단</b-dropdown-item-button>
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

          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" v-b-modal.add-spam-modal>
            <span>문자 발신번호 등록</span>
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
                    발신번호
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    발신번호명
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
                    등록방법
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
                <td>
                  <button class="btn btn-table-link">유선번호 1</button>
                </td>
                <td>요청</td>
                <td>서류 심사</td>
                <td>2024.10.10</td>
                <td>2024.10.11</td>
                <td>
                  <b-button variant="outline-secondary" size="sm">삭제</b-button>
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
    <ConfirmModal title="스팸 문구 삭제" desc="스팸 문구를 삭제 하시겠습니까?" :onSubmit="deleteSpam" />
    <InfoModal />
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
import InfoModal from '@/modules/msgSendNumber/components/modal/InfoModal.vue';

export default {
  components: { InfoModal, IconDownload, IconArrowDown, MessageSendTabs,  AlertModal, ConfirmModal, IconSort, IconArrowRight, Pagination, },
  name: "AddressManage",
  data() {
    return {
      number: '전체',
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
    }
  },
  methods: {
    setPageCount(value) {
      this.pageCount = value
    },
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
