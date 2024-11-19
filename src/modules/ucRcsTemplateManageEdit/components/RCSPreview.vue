<template>
  <PreviewDefault size="lg">
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
          <IconShoppingCart v-if="type === '출고'" />
          <IconPaper v-if="type === '주문'" />
          <IconTruck v-if="type === '배송'" />
          <IconCalendar v-if="type === '예약'" />
          <IconCheck v-if="type === '승인'" />
          <IconPiggyBank v-if="type === '입금'" />
          <IconWallet v-if="type === '출금'" />
          <IconCheckCancel v-if="type === '취소'" />
          <IconDocs v-if="type === '명세서'" />
          <IconSignUp v-if="type === '회원가입'" />
          <IconExpand v-if="type === '인증'" />
        </div>
        <span>{{ type }}</span>
      </div>
      <div class="rcs-content rcs-col-content">
        <p class="rcs-col-content-title">썸네일형</p>
        <div v-for="(item, index) in displayContents" :key="index">
          <hr v-if="item.hasLine" class="rcs-col-content-hr" />
          <template v-if="item.type === 'one'">
            <p>{{ item.text[0] }}</p>
          </template>
          <template v-else-if="item.type === 'two'">
            <div class="row">
              <div v-for="(text, i) in item.text" :key="i" class="col">
                <p>{{ text }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="rcs-content rcs-template-content">
        <p class="rcs-template-content-title">{{ displayRcsTemplateTitle}}</p>
        <p class="rcs-template-content-desc"> {{ dispalyRcsTemplateDesc }} </p>
      </div>
      <div class="rcs-content rcs-thumbnail">
        <ul>
          <li>
            <div class="thumb-img">
              <img src="/" alt="">
            </div>
            <p>썸네일 내용 영역입니다. 썸네일 내용 영역입니다. 썸네일 내용 영역입니다. </p>
          </li>
          <li>
            <div class="thumb-img"><p>썸네일 2</p></div>
            <p>썸네일 내용 영역입니다. 썸네일 내용 영역입니다. 썸네일 내용 영역입니다. </p>
          </li>
          <li>
            <div class="thumb-img"><p>썸네일 3</p></div>
            <p>썸네일 내용 영역입니다. 썸네일 내용 영역입니다. 썸네일 내용 영역입니다. </p>
          </li>
        </ul>
      </div>
      <div class="rcs-content rcs-button">
        <b-button variant="secondary" v-for="(item, index) in buttons" :key="'btn-display-' + index" >{{ item.label }}</b-button>
      </div>
      <div class="rcs-content m-0">
        <p class="m-0 f-cpation2 c-gray700">무료 수신거부 <span class="ml-1 pl-2 text-underline text-primary">{{displayNumber}}</span></p>
      </div>
    </div>
  </PreviewDefault>
</template>

<script>
import PreviewDefault from '@/components/service/preview/PreviewDefault.vue'
import IconShoppingCart from '@/components/service/icons/IconShoppingCart.vue';
import IconPaper from '@/components/service/icons/IconPaper.vue';
import IconTruck from '@/components/service/icons/IconTruck.vue';
import IconCalendar from '@/components/service/icons/IconCalendar.vue';
import IconCheck from '@/components/service/icons/IconCheck.vue';
import IconPiggyBank from '@/components/service/icons/IconPiggyBank.vue';
import IconWallet from '@/components/service/icons/IconWallet.vue';
import IconCheckCancel from '@/components/service/icons/IconCheckCancel.vue';
import IconDocs from '@/components/service/icons/IconDocs.vue';
import IconSignUp from '@/components/service/icons/IconSignUp.vue';
import IconExpand from '@/components/service/icons/IconExpand.vue';

export default {
  components: {
    PreviewDefault, PreviewDefault, IconShoppingCart, IconPaper, IconTruck, IconCheck, IconPiggyBank, IconWallet, IconCheckCancel, IconDocs, IconSignUp, IconExpand, 
  },
  props: {
    type: {
      type: String
    },
    displayContents: {
      type: Array
    },
    displayRcsTemplateTitle: {
      type: String
    },
    dispalyRcsTemplateDesc: {
      type: String
    },
    buttons: {
      type: Array
    },
    displayNumber: {
      type: String
    }
  },
  name: 'RCSPreview',
}
</script>