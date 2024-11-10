<template>
  <div class="preview-talk">
    <PreviewDefault :size="size">
      <img
        src="@/assets/images/service/preview/talk-button.png"
        alt="카카오톡 상단 버튼들"
        class="top-image"
      />
      <img
        src="@/assets/images/service/preview/talk-info.png"
        alt="카카오톡 상단 안내 사항"
        class="top-image info"
      />
      <div class="content-wrap">
        <div class="avatar"></div>
        <div class="content">
          <div class="content-wrap">
            <slot />
          </div>
        </div>
      </div>
    </PreviewDefault>
  </div>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';

export default {
  components: {PreviewDefault, },
  name: "PreviewTalk",
  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/abstracts/variables" as *;

.top-image {
  width: 100%;
  &.info {
    margin-top: 5px;
  }
}
.content-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  .avatar {
    width: 29px;
    height: 29px;
    border-radius: 11.213px;
    border: 0.345px solid rgba(0, 0, 0, 0.2);
    background: var(--gray300);
  }
  .content {
    margin-top: 20px;
    width: calc(100% - 29px - 6px);
    min-height: 64px;
    background: url("#{$img}preview/talk-content.png") no-repeat;
    background-size: 100%;
    &-wrap {
      margin-top: 32px;
      padding: 10px;
      background-color: var(--white);
      border-radius: 0 0 8px 8px;
    }
  }
}
</style>
