<template>
  <div class="uc-message-status list-view">
    <MessageStatusTabs />

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label>발송일자</label>
            <div class="d-flex ml-3 datepicker-group">
              <CustomDatepicker />
              <span>~</span>
              <CustomDatepicker />
            </div>
            <button type="button" class="btn btn-filter active">일주일</button>
            <button type="button" class="btn btn-filter">15일</button>
            <button type="button" class="btn btn-filter">1개월</button>

            <i class="vertical-divider"></i>

            <label class="mr-3">수신자 정보</label>
            <b-input placeholder="입력"></b-input>

            <i class="vertical-divider"></i>

            <label>결과</label>
              <b-form-group>
                <b-form-checkbox-group
                  id="service-checkbox-group-message"
                  v-model="statusSelected"
                  :options="statusOptions"
                  name="message-1"
                ></b-form-checkbox-group>
              </b-form-group>
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
          
          <ul class="d-flex align-items-center status-list">
            <li>
              <span class="f-body4 c-gray500">총건수</span>
              <span class="f-body4 c-gray900">1건</span>
            </li>
            <li class="divider"></li>
            <li>
              <span class="f-body4 c-gray500">성공건수</span>
              <span class="pl-2 f-body4 text-primary">1건</span>
            </li>
            <li class="divider"></li>
            <li>
              <span class="f-body4 c-gray500">실패건수</span>
              <span class="pl-2 f-body4 c-failure">1건</span>
            </li>
          </ul>

          <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-auto">
            <span>엑셀 다운로드</span>
            <IconArrowLineDown />
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    수신자 정보
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    식별값 (클라이언트 키)
                    <IconSort class="down" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    발송일시
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    발송구분
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    요청채널
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    발송채널
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    결과
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>010-1234-1234</td>
                <td>SMSnZMR9In_1</td>
                <td>2024.02.06 12:15</td>
                <td>웹</td>
                <td>SMS</td>
                <td>SMS</td>
                <td  v-if="index%2 === 0">
                  <span class="text-primary">성공</span>
                </td>
                <td  v-else>
                  <span class="text-underline c-failure">실패</span>
                </td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import MessageStatusTabs from '@/components/service/message/MessageStatusTabs.vue'
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import IconSort from '@/components/service/icons/IconSort.vue';
import IconArrowLineDown from '@/components/service/icons/IconArrowLineDown.vue';
import Pagination from '@/components/service/Pagination.vue';

export default {
  components: { IconArrowDown, CustomDatepicker, Pagination, IconSort, MessageStatusTabs, IconArrowLineDown },
  name: "ucMessageStatus",
  data() {
    return {
      statusSelected: [],
      statusOptions: [
        { text: '성공', value: 'success' },
        { text: '실패', value: 'fail' },
      ],
      pageCount: 10,
    }
  },
  methods: {
    toggleMenu() {
      this.hideMenu = !this.hideMenu;
    },
    navigateToSmartSendMain() {
      this.$router.push(`/uc/message/smartSendMain`);
    },
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@import '@/assets/scss/service/message.scss';

.search-section {
  .form-control {
    max-width: 355px;
  }
}
.form-group {
  margin-left: 24px;
  margin-bottom: 0;
}
.status-list {
  margin: 0;
  padding: 0;
  list-style: none;
  span + span {
    padding-left: 6px;
  }
  .divider {
    width: 1px;
    height: 16px;
    margin: 0 12px;
    background: var(--border-color);
  }
}
</style>
