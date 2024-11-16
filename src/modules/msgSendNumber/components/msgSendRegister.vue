<template>
  <div class="tab-contents">
    <div class="info card">
      <ul>
        <li>전기통신사업법 제 84조'SMS 발신 번호 사전 등록제'가 2015년 10월 16일부로 시행됨에 따라 SMS를 발송하려면 발신 번호를 먼저 등록하셔야 합니다.</li>
        <li>첨부 파일 확장자는 png, jpg, pdf, zip, tif, tiff만 허용됩니다. (5M 이하 파일 가능)</li>
      </ul>
    </div>

    <!-- 검색 영역 Start -->
    <div class="info card">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">문자 발신번호 등록</p>
      <div class="d-flex align-items-center">
        <label class="mb-0 mr-4 f-body5 c-gray700">등록방법 선택</label>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="radio">
            <b-form-radio name="type" value="phone1">휴대폰 번호 등록</b-form-radio>
            <b-form-radio name="type" value="phone2">유선 번호 등록</b-form-radio>
            <b-form-radio name="type" value="phone3">타인 / 타사 등록</b-form-radio>
            <b-form-radio name="type" value="phone4">대리인</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>
    <!-- 검색 영역 End -->

    <!-- 리스트 영역 Start -->
    <div class="table-section card">
      <msgSendRegisterPhone1 v-if="radio == 'phone1'" />
      <msgSendRegisterPhone2 v-if="radio == 'phone2'" />
      <msgSendRegisterPhone3 v-if="radio == 'phone3'" />
      <msgSendRegisterPhone4 v-if="radio == 'phone4'" />

      <div class="submit-wrap mt-5">
        <b-button variant="outline-primary" size="lg" @click="addNumber">승인요청</b-button>
        <b-button variant="primary" size="lg" class="ml-3" @click="setListView">목록</b-button>
      </div>
    </div>
    <!-- 리스트 영역 End -->
  </div>
</template>

<script>
import msgSendRegisterPhone1 from '@/modules/msgSendNumber/components/msgSendRegisterPhone1.vue';
import msgSendRegisterPhone2 from '@/modules/msgSendNumber/components/msgSendRegisterPhone2.vue';
import msgSendRegisterPhone3 from '@/modules/msgSendNumber/components/msgSendRegisterPhone3.vue';
import msgSendRegisterPhone4 from '@/modules/msgSendNumber/components/msgSendRegisterPhone4.vue';

export default {
  components: { msgSendRegisterPhone1, msgSendRegisterPhone2, msgSendRegisterPhone3, msgSendRegisterPhone4, },
  props: {
    setListView: {
      type: Function
    },
    addNumber: {
      type: Function
    }
  },
  name: 'msgSendRegister',
  data() {
    return {
      radio: 'phone1',
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
</style>