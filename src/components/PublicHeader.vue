<template>
  <nav class="publicNav">
    <div class="publicHeadMenu">
      <router-link :to="'/'">
        <div class="navMainli" id="navHeadLogo">EC-톡톡</div>
      </router-link>
      <ul class="navMain" role="menu" ref="navMain">
        <router-link :to="'/'">
          <li class="navMainli" id="navHeadMenu">서비스 소개</li>
        </router-link>
        <router-link :to="'/public/channel'">
          <li class="navMainli" id="navHeadMenu">채널 소개</li>
        </router-link>
        <router-link :to="'/public/fare'">
          <li class="navMainli" id="navHeadMenu">요금제 안내</li>
        </router-link>
        <router-link :to="'/public/customer'">
          <li class="navMainli" id="navHeadMenu">고객 안내</li>
        </router-link>
        <a href="https://www.ectech.co.kr/" target="blank">
          <li class="navMainli" id="navHeadMenu">회사 소개</li>
        </a>
        <router-link :to="'/login'">
          <li class="navMainli" id="navLoginMenu">로그인/회원가입</li>
        </router-link>
      </ul>

      <!-- Toggle button -->
      <!-- <button class="navbar__toggle-btn" @click="toggleNav">
        <img src="../../src/assets/images/image/hamburger.png" />
      </button> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "PublicHeader",
};
</script>
