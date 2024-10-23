<template>
  <nav id="sidebar" class="text-white" :class="{'hide': !isSidebarOpen}">
    <div class="sidebar-header d-flex align-items-center justify-content-between">
      <a href="/home" class="logo">
        <img src="@/assets/images/service/logo.svg" alt="EC-톡톡" />
      </a>
      <button type="button" class="btn btn-icon border-0" @click="toggleSidebar">
        <img src="@/assets/images/service/icon/icon-list.svg" alt="메뉴 여닫기" />
      </button>
    </div>

    <!-- 사용자 정보 -->
    <div class="sidebar-info">
      <p class="f-title3 text-truncate">엠스톤그루브</p>
      <b-dropdown id="dropdown-dropright" dropright text="Drop-Right" variant="primary" class="w-100 user-dropdown">
        <template #button-content>
          <span class="d-flex align-items-center">
            <icon-user-rounded />
            <span class="name">신유진 님</span>
          </span>
          <icon-arrow-right />
        </template>
        <b-dropdown-item href="#">고객사 정보</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">회원정보</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">나의 문의내역</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#">로그아웃</b-dropdown-item>
      </b-dropdown>
    </div>
    
    <!-- 관리자일 경우 메뉴 -->
    <ul v-if="isAdmin" class="list-unstyled sidebar-menu">
      <li>
        <b-button v-b-toggle.collapse-admin-service class="d-flex align-items-center justify-content-between menu-title">
          <span >서비스</span>
          <icon-arrow-down />
        </b-button>
        <b-collapse id="collapse-admin-service" class="menu-list">
          <a href="/uc/message/multiSendList" class="d-flex align-items-center menu-item" :class="{ active: $route.path === '/uc/message/multiSendList' }">
            <icon-send />
            <span >발송</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-menu-search />
            <span >조회</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-template />
            <span >템플릿</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-stats />
            <span >통계</span>
          </a>
        </b-collapse>
      </li>
      <li class="menu-divider"><hr /></li>
      <li>
        <b-button v-b-toggle.collapse-admin-manage class="d-flex align-items-center justify-content-between menu-title">
          <span >관리</span>
          <icon-arrow-down />
        </b-button>
        <b-collapse id="collapse-admin-manage" class="menu-list">
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-channel />
            <span >채널관리</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-API-key />
            <span >API KEY</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-user />
            <span >사용자</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-send-info />
            <span >발신정보</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-pay />
            <span >정산</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-address />
            <span >주소록</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-call />
            <span >발신제한</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-alarm />
            <span >알람</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-graph />
            <span >이용현황</span>
          </a>
        </b-collapse>
      </li>
    </ul>

    <!-- 사용자일 경우 메뉴 -->
    <ul v-else class="list-unstyled sidebar-menu">
      <li>
        <b-button v-b-toggle.collapse-user disabled class="menu-title">서비스</b-button>
        <b-collapse visible id="collapse-user" class="menu-list">
          <a href="/uc/message/multiSendList" class="d-flex align-items-center menu-item" :class="{ active: $route.path === '/uc/message/multiSendList' }">
            <icon-send />
            <span >발송</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-menu-search />
            <span >조회</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-template />
            <span >템플릿</span>
          </a>
          <a href="#" class="d-flex align-items-center menu-item">
            <icon-stats />
            <span >통계</span>
          </a>
        </b-collapse>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconUserRounded from '@/components/service/icons/IconUserRounded.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import IconSend from '@/components/service/icons/IconSend.vue'
import IconMenuSearch from '@/components/service/icons/IconMenuSearch.vue'
import IconTemplate from '@/components/service/icons/IconTemplate.vue'
import IconStats from '@/components/service/icons/IconStats.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import IconChannel from '@/components/service/icons/IconChannel.vue'
import IconAPIKey from '@/components/service/icons/IconAPIKey.vue'
import IconUser from '@/components/service/icons/IconUser.vue'
import IconSendInfo from '@/components/service/icons/IconSendInfo.vue'
import IconPay from '@/components/service/icons/IconPay.vue'
import IconAddress from '@/components/service/icons/IconAddress.vue'
import IconCall from '@/components/service/icons/IconCall.vue'
import IconAlarm from '@/components/service/icons/IconAlarm.vue'
import IconGraph from '@/components/service/icons/IconGraph.vue'

export default {
  name: 'SideNavBar',
  props: {
    isAdmin: {
      type: Boolean,
      required: true
    },
    isSidebarOpen: {
      type: Boolean,
      required: true
    },
    toggleSidebar: {
      type: Function,
      required: true
    }
  },
  components: {
    IconUserRounded,
    IconArrowRight,
    IconSend,
    IconMenuSearch,
    IconTemplate,
    IconStats,
    IconArrowDown,
    IconChannel,
    IconAPIKey,
    IconUser,
    IconSendInfo,
    IconPay,
    IconAddress,
    IconCall,
    IconAlarm,
    IconGraph,
  }
};
</script>

<style scoped lang="scss">
#sidebar {
  flex: 0 0 260px ;
  width: 260px;
  min-height: 100vh;
  transition: all 0.3s;
  background: var(--primary);
}

.sidebar-header {
  padding: 30px 24px;

  .logo {
    padding-left: 12px;
  }
  .btn {
    margin: 0;
    padding: 4px;

    img {
      width: 24px;
      height: 24px;
    }
  }
}

.sidebar-info {
  margin-bottom: 32px;
  padding: 16px 24px;
  color: var(--white);
  
  p {
    margin: 0;
    padding: 0 12px 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
    letter-spacing: -0.36px;
  }
}

.sidebar-menu {
  margin: 0;

  .menu-title {
    width: 100%;
    padding: 12px 36px;
    background-color: transparent;
    border: none;
    color: #ECEFF2;
    font-size: 14px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.28px;
    text-align: left;

    &:disabled {
      opacity: 1;
    }

    /* 관리자 메뉴 열었을때 화살표 스타일 */
    &.not-collapsed svg {
      transform: rotate(180deg);
    }
  }

  .menu-divider {
    padding: 0 36px;

    hr {
      margin: 12px 0;
      border-color: rgba(255, 255, 255, 0.2);
    }
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    margin: 6px 0;
    padding: 0 24px;

    & > a {
      margin: 2px 0;
    }
  }

  .menu-item {
    padding: 12px 36px;
    color: #fff;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.28px;
      color: #fff;
    }

    // 현재 메뉴일 경우
    &.active {
      background-color: #fff;
      border-radius: 8px;
      color: #6D6EFA;

      span {
        color: #111827;
      }
    }
  }
}

/* 메뉴 닫혔을 때 */
.hide {
  .sidebar-header .logo,
  .menu-list,
  .sidebar-info,
  .sidebar-menu {
    display: none;
  }
}
</style>
