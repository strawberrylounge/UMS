<template>  
  <b-modal id="preview-modal" title="미리보기" hide-header-close size="s" centered content-class="preview-modal" no-fade>

    <PreviewDefault>
      <div class="preview-img">
        <div class="empty-img">
          <img src="@/assets/images/service/preview/preview-img2.svg" alt="" class="img-icon">
          <p class="m-0 mt-1 c-caption2 c-gray500">이미지</p>
        </div>
        <!-- <img src="" alt=""> -->
      </div>
      <div class="my-1 py-3">
        <div class="preview-avatar">
          <img src="@/assets/images/service/preview/preview-avatar.svg" alt="">
        </div>
      </div>
      <p class="m-0 f-body6 c-gray900">더미브랜드이름</p>
      <ul class="card-list">
        <li>
          <p class="m-0 f-caption1 c-gary900">전화번호</p>
          <p class="m-0 mt-1 f-caption2 c-gray700">10006900</p>
        </li>
        <li>
          <p class="m-0 f-caption1 c-gary900">웹사이트</p>
          <p class="m-0 mt-1 f-caption2 c-gray700">http://www.naver.com</p>
        </li>
        <li>
          <p class="m-0 f-caption1 c-gary900">이메일</p>
          <p class="m-0 mt-1 f-caption2 c-gray700">test@test.co.kr</p>
        </li>
        <li>
          <p class="m-0 f-caption1 c-gary900">주소</p>
          <p class="m-0 mt-1 f-caption2 c-gray700">detailAddress</p>
        </li>
      </ul>
    </PreviewDefault>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue';

export default {
  components: {PreviewDefault, },
  name: "PreviewModal",
  data() {
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('preview-modal');
    }
  }
};
</script>

<style scoped lang="scss">
.preview-img {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 155px;
  .img-icon {
    width: 39px;
    height: 36px;
  }
}
.card-list {
  margin: 0 0 10px;
  padding: 0;
  list-style: none;
  li {
    margin: 8px 0 0;
    padding: 13px;
    background: var(--white);
    border-radius: 10px;
    p {
      line-height: 140%;
    }
  }
}
</style>
