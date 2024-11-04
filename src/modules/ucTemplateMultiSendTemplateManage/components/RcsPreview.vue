<template>
  <div class="uc-rcs-template-manage">
    <PreviewDefault>
      <p class="mt-0 mb-1 pb-2 f-body1 c-gray700">썸네일형(세로)</p>
      <div class="preview-section rcs">
        <p class="rcs-title">[Web 발신]</p>
        <div class="preview-img">
          <div class="empty-img">
            <img src="@/assets/images/service/preview/preview-img.svg" alt="" class="img-icon">
            <p class="m-0 mt-1 c-caption2 c-gray500">작성페이지에서 이미지를<br/>
              삽입할 수 있습니다.</p>
          </div>
          <!-- <img src="" alt=""> -->
        </div>
        <div class="rcs-content rcs-type">
          <div class="icon">
            <IconShoppingCart />
          </div>
          <span>출고</span>
        </div>
        <div class="rcs-content rcs-col-content">
          <p class="rcs-col-content-title">썸네일형</p>
          <div>
            <p>내용 입력 예시</p>
            <div class="row">
              <p class="col">예시1</p>
              <p class="col">예시2</p>
            </div>
          </div>
        </div>
        <div class="rcs-content rcs-template-content">
          <p class="rcs-template-content-title">예시 제목</p>
          <p class="rcs-template-content-desc">예시 내용</p>
        </div>
        <div class="rcs-content rcs-thumbnail">
          <ul>
            <li>
              <div class="thumb-img">
                <img src="/" alt="">
              </div>
              <p>썸네일 내용 영역입니다. 썸네일 내용 영역입니다. 썸네일 내용 영역입니다. </p>
            </li>
          </ul>
        </div>
        <div class="rcs-content rcs-button">
          <b-button variant="secondary">버튼 영역</b-button>
        </div>
        <div class="rcs-content m-0">
          <p class="m-0 f-cpation2 c-gray700">무료 수신거부 <span class="ml-1 pl-2 text-underline text-primary">010-0000-0000</span></p>
        </div>
      </div>
    </PreviewDefault>
  </div>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue'
import IconShoppingCart from '@/components/service/icons/IconShoppingCart.vue';

export default {
  components: { PreviewDefault, IconShoppingCart, },
  name: 'RcsPreview',
}
</script>