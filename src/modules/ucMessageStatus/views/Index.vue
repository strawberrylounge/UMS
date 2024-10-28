<template>
  <div class="uc-message-status">
    <MessageStatusTabs />

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-area card border-0">
        <div class="search-area-forms">
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
      <div class="table-area card">
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
import IconCoin from '@/components/service/icons/IconCoin.vue';
import Pagination from '@/components/service/Pagination.vue';

import '@/assets/scss/service/message.scss';

export default {
  components: { IconArrowDown, CustomDatepicker, Pagination, IconSort, MessageStatusTabs, IconCoin },
  name: "ucMessageMultiSendList",
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

.search-area {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 28px;
  box-shadow: none;
  &-forms {
    width: 100%;
    max-width: calc(100% - 120px - 24px);
  }
  label {
    margin: 0;
    @include typography.font-style(14px, 500, 140%, -0.28px);
    color: var(--gray700);
  }
  .form-control {
    max-width: 355px;
  }
}
.datepicker-group {
  display: inline-flex;
  align-items: center;
  margin-right: 4px;
  & > div {
    width: 180px;
  }
  & > span {
    padding: 0 12px;
    @include typography.font-style(16px, 700, 140%, -0.32px);
    color: var(--gray500);
  }
}
.btn-filter {
  margin-left: 8px;
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
.btn-submit {
  width: 120px;
  margin-left: 24px;
}
.table-area {
  margin-top: 20px;
  padding: 28px;
  .table-responsive {
    margin-top: 40px;
  }
  tbody tr:last-child td {
    border-bottom: 1px solid var(--border-color);
  }
}
.list-count {
  margin: 0 12px 0 0;
  @include typography.font-style(14px, 700, 140%, -0.28px);
  color: var(--gray500);
  span {
    padding-left: 6px;
  }
}
.pageCount-dropdown {
  width: 132px;
  margin-right: 20px;
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
