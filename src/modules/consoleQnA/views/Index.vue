<template>
  <div class="console-qna list-view">

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label>문의유형</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span>{{type}}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button :class="{active: type === '전체'}" @click="setType('전체')">전체</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type === '회원'}" @click="setType('회원')">회원</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type === '결제'}" @click="setType('결제')">결제</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type === '서비스'}" @click="setType('서비스')">서비스</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type === '기타'}" @click="setType('기타')">기타</b-dropdown-item-button>
            </b-dropdown>

            <label>문의상태</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span>{{type2}}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button :class="{active: type2 === '전체'}" @click="setType2('전체')">전체</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type2 === '요청중'}" @click="setType2('요청중')">요청중</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type2 === '답변대기'}" @click="setType2('답변대기')">답변대기</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type2 === '답변완료'}" @click="setType2('답변완료')">답변완료</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: type2 === '검토중'}" @click="setType2('검토중')">검토중</b-dropdown-item-button>
            </b-dropdown>

            <label>문의상태</label>
            <b-input placeholder="입력" class="search-group"></b-input>
          </div>
        </div>
        <b-button variant="dark" class="btn-submit">검색</b-button>
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
            <b-dropdown-item-button :class="{active: pageCount == 10}" @click="setPageCount(10)">10개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="{active: pageCount == 20}" @click="setPageCount(20)">20개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="{active: pageCount == 30}" @click="setPageCount(30)">30개씩 보기</b-dropdown-item-button>
          </b-dropdown>

          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" v-b-modal.qna-modal>
            <span>1:1 문의하기</span>
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
                  <div class="d-flex align-items-center" > 
                    문의제목
                    <IconSort class="up" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    문의유형
                    <IconSort class="down" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    이메일
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    연락처
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    문의상태
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    답변자
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    답변일자
                    <IconSort />
                  </div>
                </th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>1</td>
                <td>
                  <button class="btn btn-table-link" v-b-modal.qna-detail-modal>결제방법 질문입니다.</button>
                </td>
                <td>회원</td>
                <td>test@gmail.com</td>
                <td>010-1234-5678</td>
                <td>답변완료</td>
                <td>testadmin1</td>
                <td>2024.02.06</td>
                <td>
                  <div class="d-flex">
                    <b-button variant="outline-secondary" size="sm" class="mr-1" @click="confirmUpdate">수정</b-button>
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

    <p>예시별 모달 추가</p>
    <b-button variant="outline-secondary" class="mr-1" @click="notUpdate">수정불가</b-button>
    <b-button variant="outline-secondary" @click="notDelete">삭제불가</b-button>
    <b-button variant="outline-secondary" @click="validateModal">문의유형 입력 요청</b-button>

    <AlertModal :title="alertTitle" :desc="alertDesc" />
    <ConfirmModal :title="confirmTitle" :desc="confirmDesc" :onSubmit="confirmSubmit" />
    <QnAModal :confirmSave="confirmSave" />
    <QnAModalDetail />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconSort from '@/components/service/icons/IconSort.vue';
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import Pagination from '@/components/service/Pagination.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import QnAModal from '@/components/service/user/QnAModal.vue';
import QnAModalDetail from '@/components/service/user/QnAModalDetail.vue';

export default {
  components: { QnAModalDetail, IconArrowDown, Pagination, IconSort, IconArrowRight, AlertModal, ConfirmModal, QnAModal, },
  name: "ucSmsTemplateList",
  data() {
    return {
      type: '전체',
      type2: '전체',
      pageCount: 10,
      alertTitle: '',
      alertDesc: '',
      confirmTitle: '',
      confirmDesc: '',
      confirmSubmit: null,
    }
  },
  methods: {
    setType(value) {
      this.type = value
    },
    setType2(value) {
      this.type2 = value
    },
    setPageCount(value) {
      this.pageCount = value
    },
    qnaSave() {
      this.alertTitle = '문의 저장 완료'
      this.alertDesc = '저장되었습니다. 답변은 메일로 받으실 수 있습니다.'
      this.$bvModal.show('alert-modal')
      this.$bvModal.hide('qna-modal');
    },
    confirmSave() {
      this.confirmTitle = '문의 저장'
      this.confirmDesc = '저장하시겠습니까?'
      this.confirmSubmit = this.qnaSave
      this.$bvModal.show('confirm-modal')
    },
    qnaUpdate() {
      this.alertTitle = '문의 수정 완료'
      this.alertDesc = '문의 수정이 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    confirmUpdate() {
      this.confirmTitle = '문의 수정'
      this.confirmDesc = '문의를 수정 하시겠습니까?'
      this.confirmSubmit = this.qnaUpdate
      this.$bvModal.show('confirm-modal')
    },
    qnaDelete() {
      this.alertTitle = '문의 삭제 완료'
      this.alertDesc = '문의 삭제가 완료되었습니다.'
      this.$bvModal.show('alert-modal')
    },
    confirmDelete() {
      this.confirmTitle = '문의 삭제'
      this.confirmDesc = '문의를 삭제 하시겠습니까?'
      this.confirmSubmit = this.qnaDelete
      this.$bvModal.show('confirm-modal')
    },
    notUpdate() {
      this.alertTitle = '수정 불가'
      this.alertDesc = '요청 중인 경우만 수정이 가능합니다.'
      this.$bvModal.show('alert-modal')
    },
    notDelete() {
      this.alertTitle = '삭제 불가'
      this.alertDesc = '요청 중인 경우만 삭제가 가능합니다.'
      this.$bvModal.show('alert-modal')
    },
    validateModal() {
      this.alertTitle = '문의유형 입력'
      this.alertDesc = '문의 유형은 필수사항입니다.'
      this.$bvModal.show('alert-modal')
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';

.list-view .search-section label {
  margin-right: 16px;
}
.template-dropdown {
  min-width: 180px;
  margin-right: 20px;
}
.search-group {
  width: 355px;
}
.list-view .pageCount-dropdown {
  margin-right: auto;
}
th, td {
  vertical-align: middle;
}
</style>
