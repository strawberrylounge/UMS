<template>
  <div class="uc-web-send list-view">
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
            <button type="button" class="btn btn-filter active">오늘</button>

            <i class="vertical-divider"></i>

            <label class="mr-3">발송자 명</label>
            <b-input placeholder="입력"></b-input>
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
              <span class="f-body5 f-bold c-gray500">총건수</span>
              <span class="f-body5 f-bold c-gray900">1건</span>
            </li>
            <li class="divider"></li>
            <li>
              <span class="f-body5 f-bold c-gray500">성공건수</span>
              <span class="pl-2 f-body5 f-bold text-primary">1건</span>
            </li>
            <li class="divider"></li>
            <li>
              <span class="f-body5 f-bold c-gray500">실패건구</span>
              <span class="pl-2 f-body5 f-bold c-failure">1건</span>
            </li>
          </ul>

          <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-auto">
            <span>엑셀 다운로드</span>
            <IconCoin />
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  NO. <IconSort />
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    발송자명
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    전체발송수
                    <IconSort class="down" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    발송타입
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    문자
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    RCS
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    알림톡
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    발송실패
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    발송일자 <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td>{{ item + 1 }}</td>
                <td>testadmin</td>
                <td>1</td>
                <td>개별발송</td>
                <td>O</td>
                <td>X</td>
                <td>X</td>
                <td>
                  <b-button variant="outline-secondary" size="sm">발송실패확인</b-button>
                </td>
                <td>2024.02.06 12:15:11</td>
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
import IconCoin from '@/components/service/icons/IconCoin.vue';
import Pagination from '@/components/service/Pagination.vue';

import '@/assets/scss/service/message.scss';

export default {
  components: { IconArrowDown, CustomDatepicker, Pagination, IconSort, MessageStatusTabs, IconCoin },
  name: "ucWebSend",
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
.search-section {
  .form-control {
    max-width: 355px;
  }
}
.table-section {
  td {
    padding: 17px 16px 11px;
    vertical-align: middle;
  }
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
