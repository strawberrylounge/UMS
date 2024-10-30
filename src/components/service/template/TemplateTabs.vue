<template>
  <div class="message-tabs-wrap">
    <div class="message-tabs">
      <div :class="['tab', isActive('/uc/template/multiSendTemplateList'), isActive('/uc/template/multiSendTemplateManage')]">
        <a href="/uc/template/multiSendTemplateList">원스텝메시지</a>
      </div>
      <div :class="['tab', isActive('/uc/template/smsTemplateList'), isActive('/uc/template/smsTemplateManage')]">
        <a href="/uc/template/smsTemplateList">문자</a>
      </div>
      <div :class="['tab', isActive('/uc/template/rcsTemplateList'), isActive('/uc/template/rcsTemplateManage'), isActive('/uc/template/rcsTemplateManage/edit')]">
        <a href="/uc/template/rcsTemplateList">RCS</a>
      </div>
      <div :class="['tab', isActive('/uc/template/alimTalkTemplateList'), isActive('/uc/template/alimTalkTemplateManage'),]">
        <a href="/uc/template/alimTalkTemplateList">카카오톡</a>
      </div>
    </div>
    <p class="breadcrumb f-body5 c-gray700">템플릿 > {{breadCrumbTitle}}</p>
  </div>
</template>

<script>
import '@/assets/scss/service/messageTabs.scss'

export default {
  name: "TemplateTabs",
  computed: {
    breadCrumbTitle() {
      switch (this.$route.path) {
        case '/uc/template/multiSendTemplateList':
          return '원스텝메시지';
        case '/uc/template/smsTemplateList':
          return '문자';
        case '/uc/template/smsTemplateManage':
          return '문자 > 템플릿 등록';
        case '/uc/template/rcsTemplateList':
        case '/uc/template/rcsTemplateManage/edit':
          return 'RCS';
        case '/uc/template/rcsTemplateManage':
          return 'RCS > 템플릿 등록';
        case '/uc/template/alimTalkTemplateList':
          return '카카오톡';
        case '/uc/template/alimTalkTemplateManage':
          return '카카오톡 > 템플릿 등록';
        case '/uc/template/multiSendTemplateManage':
          return '원스텝메시지 > 템플릿 등록';
        default:
          return ''
      }
    },
  },
  methods: {
    isActive(link) {
      return window.location.pathname === link ? 'active' : '';
    }
  }
}
</script>