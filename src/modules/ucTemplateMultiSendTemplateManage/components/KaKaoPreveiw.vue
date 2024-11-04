<template>
  <PreviewTalk>
    <div class="w-100">
      <p class="f-body6">웹템플릿 등록 테스트 입니다.</p>
      <b-button variant="secondary" class="w-100">배송조회</b-button>
    </div>
  </PreviewTalk>
</template>

<script>
import PreviewTalk from '@/components/service/preview/PreviewTalk.vue';

export default {
  components: { PreviewTalk },
  name: 'KaKaoPreview'
}
</script>