<template>
  <div class="channel-rcs list-view">
    <ChannelTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>카카오톡 비즈메시지를 발송하려면 카카오톡 채널을 먼저 등록해야 합니다.</li>
          <li>카카오톡 채널은 카카오톡 비즈니스 ID로, 카카오톡 홈페이지(https://center-pf.kakao.com)에서 무료로 만들 수 있습니다.</li>
          <li>담당자는 등록한 카카오톡 채널과 서류를 확인하고 본인 여부 등의 심사를 진행합니다.</li>
          <li>카카오 비즈니스센터(https://business.kakao.com)에서 해당 채널의 채널 관리 화면에 접속하면 휴면 상태가 해제됩니다.</li>
        </ul>
      </div>

      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label class="mr-3">채널 검색용 아이디</label>
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

          <b-button variant="secondary" class="btn-svg btn-svg-right mr-2 ml-auto" v-b-modal.add-kakao-modal>
            <span>카카오 채널 추가</span>
            <IconPlus />
          </b-button>
          <b-button variant="primary" class="btn-svg btn-svg-right">
            <span>카카오 채널 생성</span>
            <IconArrowRight />
          </b-button>
        </div>

        <div class="table-responsive">
          <table class="table">
            <colgroup>
              <col width="60%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div class="d-flex align-items-center">
                    채널 검색용 아이디
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    OTP 인증
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    휴면 여부
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    등록일시
                    <IconSort class="down" />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    비고
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>
                  <button class="btn btn-table-link" v-b-modal.kakao-detail-modal>@ndi37j20mtu3ooy</button>
                </td>
                <td>내용</td>
                <td>정상</td>
                <td>2024.02.06</td>
                <td><b-button variant="outline-secondary" size="sm" v-b-modal.confirm-modal>채널 삭제</b-button></td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AlertModal title="카카오 채널 삭제 완료" desc="카카오 채널 삭제가 완료되었습니다." />
    <ConfirmModal title="카카오 채널 삭제" desc="삭제하시겠습니까?" :onSubmit="deleteChannel" />
    <KaKaoDetailModal />
    <AddKaKaoModal />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import ChannelTabs from '@/components/service/channel/ChannelTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import IconSort from '@/components/service/icons/IconSort.vue';
import Pagination from '@/components/service/Pagination.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import KaKaoDetailModal from '@/modules/channelKaKao/components/KaKaoDetailModal.vue'
import AddKaKaoModal from '@/modules/channelKaKao/components/AddKaKaoModal.vue'

export default {
  components: { IconArrowDown, IconPlus, IconArrowRight, SearchInput, Pagination, IconSort, ChannelTabs,  AlertModal, ConfirmModal, KaKaoDetailModal, AddKaKaoModal, },
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
    },
    deleteChannel() {
      this.$bvModal.hide('confirm-modal')
      this.$bvModal.show('alert-modal')
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
