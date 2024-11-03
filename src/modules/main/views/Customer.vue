<template>
  <div class="landing-wrapper">
    <Header />
    <main class="page-customer landing-sub">
      <div class="sub-top">
        <PageHeader
          title="고객 안내"
          subtitle="무엇을 도와드릴까요?"
          imageName="customer-header"
        />
        <TabNavigation
          :modelValue="activeTab"
          @update:modelValue="handleTabChange"
          :tabs="customerSections"
          mode="switch"
        />
      </div>
      <div class="sub-contents">
        <div v-if="activeTab === 'notice'">
          <NoticeList
            v-if="!showNoticeDetail"
            @show-detail="showNoticeDetail = true"
          />
          <NoticeDetail v-else @go-back="showNoticeDetail = false" />
        </div>
        <FaqList v-if="activeTab === 'faq'" />
        <ResourceList v-if="activeTab === 'resource'" />
        <InquiryForm v-if="activeTab === 'inquiry'" />
      </div>
    </main>
    <BtnInquiry :is-landing="false" />
    <BtnTop :is-landing="false" />
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import PageHeader from "../components/PageHeader.vue";
import TabNavigation from "../components/TabNavigation.vue";
import NoticeList from "./customer/Notice/NoticeList.vue";
import ResourceList from "./customer/ResourceCenter/ResourceList.vue";
import FaqList from "./customer/Faq/FaqList.vue";
import InquiryForm from "./customer/Inquiry/InquiryForm.vue";
import BtnInquiry from "../components/buttons/BtnInquiry.vue";
import BtnTop from "../components/buttons/BtnTop.vue";
import NoticeDetail from "./customer/Notice/NoticeDetail.vue";

export default {
  name: "Customer",
  components: {
    Header,
    Footer,
    PageHeader,
    TabNavigation,
    NoticeList,
    ResourceList,
    FaqList,
    InquiryForm,
    BtnInquiry,
    BtnTop,
    NoticeDetail,
  },
  data() {
    return {
      activeTab: "notice",
      showNoticeDetail: false,
      customerSections: [
        {
          id: "notice",
          label: "공지사항",
        },
        {
          id: "faq",
          label: "자주 묻는 질문",
        },
        {
          id: "resource",
          label: "자료실",
        },
        {
          id: "inquiry",
          label: "1:1 문의",
        },
      ],
    };
  },
  methods: {
    handleTabChange(newTab) {
      this.activeTab = newTab;
      this.showNoticeDetail = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
