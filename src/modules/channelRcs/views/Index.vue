<template>
  <div class="channel-rcs list-view">
    <ChannelTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>RBC(https://www.rcsbizcenter.com)에 무료 가입 및 브랜드 생성 후 "내정보 관리 > 내 계정 정보 > API Key"를 확인하세요. (브랜드 등록 및 수정에 필요합니다.)</li>
          <li>프로젝트에 브랜드 연결 시 발신번호도 함께 사용 가능합니다. (RBC에서 등록한 브랜드는 사업자등록번호로 자동 동기화되어 아래 목록에 보여집니다.)</li>
          <li>타사 브랜드 사용 신청은 증빙서류가 필요하며, 고객센터 검토(1-2 영업일 소요) 후 사용 가능합니다.</li>
          <li>타사 브랜드 연결은 메시지허브에 등록된 타사의 브랜드와 발신번호를 공유하는 기능입니다.(신규 생성된 타사 브랜드는 타사 브랜드 연결시 별도 승인없이 상세보기 팝업에서 추가로 연결 가능합니다.)</li>
          <li>RBC에서 대행사를 유플러스로 지정해 주세요. (RBC 로그인 > "기업 대시보드" > 브랜드 선택 > 내 브랜드 관리 > 브랜드 운영 관리 > "대행사 운영권한 부여" 에서 lguplus 선택)</li>
        </ul>
      </div>

      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span>{{ searchType }}</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button :class="{active: searchType === '브랜드 아이디'}" @click="setSearchType('브랜드 아이디')">브랜드 아이디</b-dropdown-item-button>
              <b-dropdown-item-button :class="{active: searchType === '브랜드 명'}" @click="setSearchType('브랜드 명')">브랜드 명</b-dropdown-item-button>
            </b-dropdown>
            <div class="search-group">
              <SearchInput />
            </div>
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
            <b-dropdown-item-button :class="pageCount == 10 ? 'active' : ''">10개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 20 ? 'active' : ''">20개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 30 ? 'active' : ''">30개씩 보기</b-dropdown-item-button>
          </b-dropdown>
        </div>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    브랜드 명
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    브랜드 ID
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    등록 템플릿 개수
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    등록 발신번호 개수
                    <IconSort class="down" />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    브랜드 승인상태
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    승인 요청일
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    승인 완료일
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>
                  <button class="btn btn-table-link" v-b-modal.preview-modal>TPLdwiCS</button>
                </td>
                <td>통합발송 테스트</td>
                <td>
                  <button class="btn btn-table-link" v-b-modal.template-detail-modal>3</button>
                </td>
                <td>
                  <button class="btn btn-table-link" v-b-modal.number-detail-modal>10</button>
                </td>
                <td>승인</td>
                <td>2024.02.06 12:15:11</td>
                <td>2024.02.06 12:15:11</td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AlertModal title="템플릿 삭제" desc="삭제할 항목을 선택해주세요." />
    <PreviewModal />
    <TemplateDetailModal />
    <NumberDetailModal />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import ChannelTabs from '@/components/service/channel/ChannelTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import IconSort from '@/components/service/icons/IconSort.vue';
import Pagination from '@/components/service/Pagination.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue'
import PreviewModal from '@/modules/channelRcs/components/PreviewModal.vue'
import TemplateDetailModal from '@/modules/channelRcs/components/TemplateDetailModal.vue'
import NumberDetailModal from '@/modules/channelRcs/components/NumberDetailModal.vue'

export default {
  components: { IconArrowDown, SearchInput, Pagination, IconSort, ChannelTabs,  AlertModal, PreviewModal, TemplateDetailModal, NumberDetailModal, },
  name: "channelRcs",
  data() {
    return {
      searchType: '브랜드 아이디',
      pageCount: 10,
    }
  },
  methods: {
    setSearchType(value) {
      this.searchType = value;
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.table td {
  vertical-align: middle;
}
.template-dropdown {
  min-width: 160px;
  margin: 0 16px;
}
.search-group {
  width: 355px;
  margin-right: 20px;
}
.form-group {
  margin-left: 24px;
  margin-bottom: 0;
}
.vertical-divider {
  width: 1px;
  height: 16px;
  margin: 0 20px;
  background: var(--border-color);
}
.list-view .pageCount-dropdown {
  margin-right: auto;
}
</style>
