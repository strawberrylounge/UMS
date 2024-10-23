<template>
  <div id="service" class="d-flex" :class="{ 'hide': !isSidebarOpen }">
    <!-- 왼쪽 사이드바 -->
    <SideNavBar
      :isAdmin="isAdmin" 
      :isSidebarOpen="isSidebarOpen" 
      :toggleSidebar="toggleSidebar"
    />

    <!-- 오른쪽 콘텐츠 영역 -->
    <div id="content" class="flex-fill">
      <SerivceHeader />
      <div class="container-fluid p-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/service/SideNavBar.vue';
import SerivceHeader from '@/components/service/SerivceHeader.vue';

// 스타일 import
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@/assets/scss/service/main.scss';
import '@/assets/scss/service/button.scss';
import '@/assets/scss/service/form.scss';
import '@/assets/scss/service/table.scss';

export default {
  components: { SideNavBar, SerivceHeader, },
  data() {
    return {
      isSidebarOpen: true, // 사이드바 메뉴 오픈 여부
      isAdmin: true // 관리자 여부
    };
  },

  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped lang="scss">
  #content {
    transition: all 0.3s;
    background-color: #ECEFF2;
  }
  
  .hide #content {
    margin-left: 0;
  }
</style>
  