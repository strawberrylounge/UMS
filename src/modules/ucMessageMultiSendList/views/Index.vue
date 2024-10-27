<template>
  <div class="uc-message-send-list">
    <!-- 탭 Start -->
    <div class="tabs-wrap">
      <div class="service-tabs">
        <div class="tab active">
          <a href="#">원스텝메시지</a>
        </div>
        <div class="tab">
          <a href="/uc/message/sendSms">문자</a>
        </div>
        <div class="tab">
          <a href="/uc/rcsTemplateSend">RCS</a>
        </div>
        <div class="tab">
          <a href="/uc/message/sendAlimTalk">카카오톡</a>
        </div>
      </div>
      <p class="breadcrumb">발송 > 원스텝메시지</p>
    </div>
    <!-- 탭 End -->

    <div class="tab-contents">
      <!-- 검색영역 Start -->
      <div class="search-area card border-0">
        <div class="search-area-forms">
          <div class="d-flex align-items-center flex-wrap mb-4">
            <label>검색조건</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span>템플릿명</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button>템플릿명</b-dropdown-item-button>
            </b-dropdown>
            <div class="search-group">
              <SearchInput />
            </div>
            <div class="d-flex datepicker-group">
              <CustomDatepicker />
              <span>~</span>
              <CustomDatepicker />
            </div>
            <button type="button" class="btn btn-filter active">오늘</button>
            <button type="button" class="btn btn-filter">일주일</button>
            <button type="button" class="btn btn-filter">1개월</button>
            <button type="button" class="btn btn-filter">1년</button>
          </div>
          
          <!-- Hideable section -->
          <transition name="slide-fade">
            <div v-show="!hideMenu" class="align-items-center mb-4 checkbox-menu">
              <label>메세지 구분</label>
              <b-form-group>
                <b-form-checkbox-group
                  id="service-checkbox-group-message"
                  v-model="messageSelected"
                  :options="messageOptions"
                  name="message-1"
                ></b-form-checkbox-group>
              </b-form-group>
              <i class="vertical-divider"></i>
              <label>템플릿채널</label>
              <b-form-group>
                <b-form-checkbox-group
                  id="service-checkbox-group-template"
                  v-model="templateSelected"
                  :options="templateOptions"
                  name="template-1"
                ></b-form-checkbox-group>
              </b-form-group>
              <i class="vertical-divider"></i>
              <label>템플릿 상태</label>
              <b-form-group>
                <b-form-checkbox-group
                  id="service-checkbox-group-template"
                  v-model="templateSelected"
                  :options="templateOptions"
                  name="template-1"
                ></b-form-checkbox-group>
              </b-form-group>
            </div>
          </transition>
          
          <button type="button" class="btn btn-search-condition" @click="toggleMenu">
            <span>{{ hideMenu ? '검색 조건 펼치기' : '검색 조건 접기' }}</span>
            <IconArrowDown :class="{ rotated: hideMenu }" />
          </button>
        </div>
        <b-button variant="dark" class="btn-submit">검색</b-button>
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
          <b-button variant="secondary" class="btn-svg btn-svg-right mr-2">
            <span>통합발송 템플릿 관리</span>
            <IconArrowRight />
          </b-button>
          <b-button variant="primary">통합 메시지 발송</b-button>
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
                <th scope="col">
                  <div class="d-flex align-items-center">
                    NO.
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    템플릿 ID
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    템플릿명
                    <IconSort class="down" /> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    템플릿 채널
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    메시지 구분
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    메시지 타입
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    등록자
                    <IconSort />
                  </div>
                </th>
                <th scope="col">
                  <div class="d-flex align-items-center">
                    등록일자
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index" @click="navigateToSmartSendMain">
                <td class="text-center">
                  <b-form-checkbox
                    :id=index
                    :name=index
                    :value=index
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td>1</td>
                <td>
                  <span class="text-underline">TPLdwiCS</span>
                </td>
                <td>통합발송 테스트</td>
                <td>카카오톡, 문자</td>
                <td>정보성</td>
                <td>기본</td>
                <td>testadmin</td>
                <td>2024.02.06 12:15:11</td>
              </tr>
            </tbody>
          </table>

          <!-- 페이지네이션 -->
          <nav class="pagination">
            <ul class="pagination-list">
              <li class="pagination-item">
                <b-button class="btn btn-arrow arrow-left arrow-left-double" disabled>
                  <IconArrowDoubleRight />
                </b-button>
              </li>
              <li class="pagination-item">
                <b-button class="btn btn-arrow arrow-left">
                  <IconArrowRight />
                </b-button>
              </li>
              <li class="pagination-item"><a class="pagination-link active" href="#">1</a></li>
              <li class="pagination-item"><a class="pagination-link" href="#">2</a></li>
              <li class="pagination-item"><a class="pagination-link last-link" href="#">3</a></li>
              <li class="pagination-item">
                <b-button class="btn btn-arrow arrow-right">
                  <IconArrowRight />
                </b-button>
              </li>
              <li class="pagination-item">
                <b-button class="btn btn-arrow arrow-right arrow-right-double">
                  <IconArrowDoubleRight />
                </b-button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconArrowDoubleRight from '@/components/service/icons/IconArrowDoubleRight.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import CustomDatepicker from '@/components/service/form/CustomDatepicker.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import IconSort from '@/components/service/icons/IconSort.vue';

import '@/assets/scss/service/message.scss';

export default {
  components: { IconArrowDown, SearchInput, CustomDatepicker, IconArrowRight, IconArrowDoubleRight, IconSort },
  name: "ucMessageMultiSendList",
  data() {
    return {
      hideMenu: false, // 메뉴 숨김 상태
      messageSelected: [],
      messageOptions: [
        { text: '전체', value: 'message-all' },
        { text: '정보성', value: 'message-info' },
        { text: '광고성', value: 'message-ad' },
      ],
      templateSelected: [],
      templateOptions: [
        { text: '전체', value: 'template-all' },
        { text: '문자', value: 'template-message' },
        { text: 'RCS', value: 'template-rcs' },
        { text: '카카오톡', value: 'template-kakao' },
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
.tabs-wrap {
  display: flex;
  align-items: center;
  padding: 28px 40px 0;
  border-bottom: 1px solid var(--border-color);
}
.breadcrumb {
  margin: 0 0 0 auto;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-700);
  white-space: nowrap;
}
.tab-contents {
  padding: 20px 40px 64px;
}
.search-area {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 28px;
  box-shadow: none;
  &-forms {
    width: calc(100% - 120px - 24px);
  }
  label {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray-700);
  }
}
.template-dropdown {
  min-width: 160px;
  margin: 0 16px;
}
.search-group {
  width: 355px;
  margin-right: 20px;
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
    font-size: 16px;
    font-weight: 700;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
    color: var(--gray-500);
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
.btn-search-condition {
  padding: 0;
  span {
    padding-right: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    text-decoration-line: underline;
    color: var(--gray-700);
  }
  svg {
    width: 16px;
    height: 16px;
    &.rotated {
      transform: rotate(180deg); /* 아이콘 회전 */
    }
  }
}
.btn-submit {
  width: 120px;
  margin-left: 24px;
}
.checkbox-menu {
  display: flex;
}
/* 애니메이션 추가 */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.table-area {
  margin-top: 20px;
  padding: 28px;
}
.list-count {
  margin: 0 12px 0 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-500);

  span {
    padding-left: 6px;
  }
}
.pageCount-dropdown {
  width: 132px;
  margin-right: auto;
}
.table-responsive {
  margin-top: 40px;
  tr {
    cursor: pointer;
  }
}
.pagination {
  width: 100%;
  margin: 20px 0;
  ul {
    margin: 0 auto;
  }
}
</style>
