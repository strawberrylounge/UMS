<template>
  <nav id="sidebar" class="text-white" :class="{'hide': !isSidebarOpen}">
    <div class="sidebar-header d-flex align-items-center justify-content-between">
      <a href="/ac/home" class="logo">
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
        <b-dropdown-item-button v-b-modal.client-info-modal>고객사 정보</b-dropdown-item-button>
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
          <IconArrowDown />
        </b-button>
        <b-collapse id="collapse-admin-service" class="menu-list" visible>
          <a href="/uc/message/multiSendList" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/uc/message/') || $route.path.includes('/uc/rcsTemplateSend'))}">
            <icon-send />
            <span >발송</span>
          </a>
          <a href="/uc/messageStatus" class="d-flex align-items-center menu-item" :class="{ active: ($route.path === '/uc/messageStatus' || $route.path === '/uc/webSend')}">
            <icon-menu-search />
            <span >조회</span>
          </a>
          <a href="/uc/template/multiSendTemplateList" class="d-flex align-items-center menu-item" :class="{ active: $route.path.includes('/uc/template/')}">
            <icon-template />
            <span >템플릿</span>
          </a>
          <a href="/uc/statisticsUser/realTime" class="d-flex align-items-center menu-item" :class="{ active: $route.path.includes('/uc/statisticsUser/realTime')}">
            <icon-stats />
            <span >통계</span>
          </a>
        </b-collapse>
      </li>
      <li class="menu-divider"><hr /></li>
      <li>
        <b-button v-b-toggle.collapse-admin-manage class="d-flex align-items-center justify-content-between menu-title">
          <span >관리</span>
          <IconArrowDown />
        </b-button>
        <b-collapse id="collapse-admin-manage" class="menu-list" visible>
          <a href="/ac/channel/rcs" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/channel/rcs'))}">
            <icon-channel />
            <span>채널관리</span>
          </a>
          <a href="/ac/apikey" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/apikey'))}">
            <icon-API-key />
            <span >API KEY</span>
          </a>
          <a href="/ac/user/manage" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/user/manage'))}">
            <icon-user />
            <span >사용자</span>
          </a>
          <a href="/ac/sendInfo/msgSendNumber" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/sendInfo/msgSendNumber'))}">
            <icon-send-info />
            <span >발신정보</span>
          </a>
          <a href="/ac/cash/cashMain" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/cash/cashMain'))}">
            <icon-pay />
            <span >정산</span>
          </a>
          <a href="/ac/address/manage" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/address/manage'))}">
            <icon-address />
            <span >주소록</span>
          </a>
          <a href="/ac/sendLimit/spam" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/sendLimit/spam'))}">
            <icon-call />
            <span >발신제한</span>
          </a>
          <a href="/ac/alarm/alarm" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/alarm/alarm'))}">
            <icon-alarm />
            <span >알람</span>
          </a>
          <a href="/ac/use/state" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/ac/use/state'))}">
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
          <a href="/uc/message/multiSendList" class="d-flex align-items-center menu-item" :class="{ active: ($route.path.includes('/uc/message/') || $route.path.includes('/uc/rcsTemplateSend'))}">
            <icon-send />
            <span >발송</span>
          </a>
          <a href="/uc/messageStatus" class="d-flex align-items-center menu-item" :class="{ active: ($route.path === '/uc/messageStatus' || $route.path === '/uc/webSend')}">
            <icon-menu-search />
            <span >조회</span>
          </a>
          <a href="/uc/template/multiSendTemplateList" class="d-flex align-items-center menu-item" :class="{ active: $route.path.includes('/uc/template/')}">
            <icon-template />
            <span>템플릿</span>
          </a>
          <a href="/uc/statisticsUser/realTime" class="d-flex align-items-center menu-item" :class="{ active: $route.path.includes('/uc/statisticsUser/realTime')}">
            <icon-stats />
            <span >통계</span>
          </a>
        </b-collapse>
      </li>
    </ul>

    <ClientInfoModal />
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
import ClientInfoModal from '@/components/service/user/ClientInfoModal.vue'
import '@/assets/scss/service/sidebar.scss';

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
    ClientInfoModal,
  },
  computed: {
  }
};
</script>

<style scoped lang="scss">
</style>
