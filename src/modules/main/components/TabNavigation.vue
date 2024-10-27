<template>
  <div class="tab-navigation">
    <ul class="tab-navigation-list">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-navigation-item"
        @click="handleTabClick(tab)"
      >
        <span class="item-name">
          {{ tab.label }}
        </span>
        <i class="icon-down mb"></i>
        <p class="item-desc pc">{{ tab.desc }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TabNavigation",
  props: {
    tabs: {
      type: Array,
      required: true,
      // [{ id: 'sms', label: '1. 문자', desc: 'SMS / LMS / MMS 템플릿과 이미지까지', target: 'section-sms' }]
    },
    mode: {
      type: String,
      default: "scroll", // 'scroll' or 'switch'
      validator: (value) => ["scroll", "switch"].includes(value),
    },
    modelValue: {
      // v-model을 위한 prop
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      headerHeight: window.innerHeight >= 768 ? 68 : 36,
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateHeaderHeight);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateHeaderHeight);
  },
  computed: {
    activeTab: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    updateHeaderHeight() {
      this.headerHeight = window.innerHeight >= 768 ? 68 : 36;
    },
    handleTabClick(tab) {
      if (this.mode === "scroll") {
        const element = document.querySelector(`.${tab.target}`);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - this.headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        this.activeTab = tab.id;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;
.tab-navigation {
  width: 335px;
  height: 40px;
  padding: 0 22px;
  border-radius: 24px;
  background: v.color(white);
  box-shadow: 0px 4px 12px 0px rgba(109, 110, 250, 0.24);
  @include v.tablet {
    width: clamp(604px, 88.281vw, 904px);
    height: 103px;
    padding: 0 48px;
    box-shadow: 0px 4px 32px 0px rgba(109, 110, 250, 0.24);
  }
  @include v.desktop {
    width: 1320px;
    height: 184px;
    padding: 0 60px;
    border-radius: 32px;
  }
  .tab-navigation-list {
    @include v.flex(row, null, center);
    height: 100%;
    padding: 10px 0;
    @include v.tablet {
      padding: 20px 0;
    }
    @include v.desktop {
      padding: 40px 0;
    }
    .tab-navigation-item {
      display: flex;
      align-items: center;
      width: 33.33%;
      height: 100%;
      //white-space: nowrap;
      cursor: pointer;
      @include v.tablet {
        @include v.flex(column, center, baseline);
      }
      &:not(:first-child) {
        padding-left: 20px;
        @include v.tablet {
          //padding-left: 48px;
        }
        @include v.desktop {
          padding-left: 30px;
        }
      }
      &:not(:last-child) {
        //padding-right: 20px;
        border-right: 2px solid v.color(primary100);
        @include v.tablet {
          padding-right: clamp(10px, 15px, 48px);
        }
        @include v.desktop {
          padding-right: 30px;
        }
      }
      &:first-child {
        padding-left: 10px;
        @include v.tablet {
          padding-left: 0;
        }
      }
      .item-name {
        font-weight: 700;
        font-size: 0.875rem;
        color: v.color(gray900);
        @include v.tablet {
          font-size: 1.25rem;
        }
        @include v.desktop {
          font-size: 1.75rem;
        }
      }
      .icon-down {
        width: 12px;
        height: 12px;
        margin-left: 8px;
        background: url(v.$icon + "ico-down-gray.png") no-repeat;
        background-size: cover;
      }
      .item-desc {
        display: none;
        font-size: 400px;
        font-size: 0.75rem;
        color: v.color(gray600);
        @include v.tablet {
          padding-top: 4px;
          display: block;
        }
        @include v.desktop {
          padding-top: 24px;
          font-weight: 500;
          font-size: 1.125rem;
        }
      }
    }
  }
}
</style>

<!-- 스크롤 모드로 사용할 경우 -->
<!-- <template>
  <div>
    <page-header title="요금제 안내" />
    <tab-navigation
      :tabs="[
        { id: 'sms', label: '문자', target: 'sms-section' },
        { id: 'rcs', label: 'RCS', target: 'rcs-section' },
        { id: 'kakao', label: '카카오', target: 'kakao-section' }
      ]"
      mode="scroll"
    />
    <div id="sms-section">문자 섹션 내용...</div>
    <div id="rcs-section">RCS 섹션 내용...</div>
    <div id="kakao-section">카카오 섹션 내용...</div>
  </div>
</template> -->

<!-- v-if로 전환하는 모드로 사용할 경우 -->
<!-- <template>
  <div>
    <page-header title="요금제 안내" />
    <tab-navigation
      v-model="activeTab"
      :tabs="[
        { id: 'sms', label: '문자' },
        { id: 'rcs', label: 'RCS' },
        { id: 'kakao', label: '카카오' }
      ]"
      mode="switch"
    />
    <div v-if="activeTab === 'sms'">문자 섹션 내용...</div>
    <div v-if="activeTab === 'rcs'">RCS 섹션 내용...</div>
    <div v-if="activeTab === 'kakao'">카카오 섹션 내용...</div>
  </div>
</template> -->
