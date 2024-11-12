<template>
  <PreviewDefault size="lg">
    <div class="preview-section sms">
      <p v-if="title" class="m-0 f-caption2 c-gray700">{{ title }}</p>
      <p class="m-0 mt-2 f-caption2 c-gray700">{{ desc }}</p>
      <p class="m-0 mt-3 f-caption2 c-gray700">무료 수신거부 <span class="ml-1 pl-2 text-underline text-primary">010-0000-0000</span></p>
    </div>
    <div class="preview-img">
      <div class="empty-img">
        <img src="@/assets/images/service/preview/preview-img.svg" alt="" class="img-icon">
        <p class="m-0 mt-1 f-caption2 c-gray500">작성페이지에서 이미지를<br/>
          삽입할 수 있습니다.</p>
      </div>
      <!-- <img src="" alt=""> -->
    </div>
  </PreviewDefault>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue'

export default {
  components: { PreviewDefault, },
  name: 'SmsPreview',
  props: {
    title: {
      default: '',
    },
    desc: {
      default: '',
    }
  },
}
</script>