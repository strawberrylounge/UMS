<template>
  <PreviewDefault size="lg">
    <div class="preview-section sms">
      <p v-if="title" class="m-0 f-caption2 c-gray700">{{ title }}</p>
      <p class="m-0 mt-2 f-caption2 c-gray700">템플릿 내용</p>
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
    }
  },
}
</script>