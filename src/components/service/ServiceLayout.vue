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
import 'vue2-timepicker/dist/VueTimepicker.css'; /* vue-timepicker 스타일 */
import 'bootstrap/dist/css/bootstrap.css'; /* bootstrap 기본 스타일 */
import 'bootstrap/dist/js/bootstrap.bundle';
import '@/assets/scss/service/button.scss'; /* 버튼(button) 스타일 */
import '@/assets/scss/service/form.scss'; /* form 스타일 */
import '@/assets/scss/service/table.scss'; /* 테이블(table) 스타일 */
import '@/assets/scss/service/modal.scss'; /* 모달,팝업(modal) 스타일 */
import '@/assets/scss/service/dropdown.scss'; /* 드랍다운(dropdown) 스타일 */
import '@/assets/scss/service/preview.scss'; /* 템플릿 미리보기 전역 스타일 */ /* TODO: 미리보기 컴포넌트화 */
import '@/assets/scss/service/tooltip.scss';
import '@/assets/scss/service/main.scss';

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
    min-width: calc(100% - 260px);
    transition: all 0.3s;
    background-color: #ECEFF2;
  }
  
  .hide #content {
    margin-left: 0;
  }
</style>
  