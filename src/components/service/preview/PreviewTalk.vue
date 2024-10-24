<template>
  <div class="preview-image preview-talk">
    <img src="@/assets/images/service/preview/talk-button.png" alt="카카오톡 상단 버튼들" class="top-image" />
    <img src="@/assets/images/service/preview/talk-info.png" alt="카카오톡 상단 안내 사항" class="top-image info" />
    <div class="content-wrap">
      <div class="avatar"></div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewTalk',
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/service/abstracts/variables" as *;

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
    border: 0.345px solid rgba(0, 0, 0, 0.20);
    background: var(--gray-300);
  }
  .content {
    margin-top: 20px;
    width: calc(100% - 29px - 6px);
    min-height: 64px;
    background: url('#{$img}preview/talk-content.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>