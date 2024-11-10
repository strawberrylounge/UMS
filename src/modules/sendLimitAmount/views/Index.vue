<template>
  <div class="send-limit-spam list-view">
    <LimitSpamTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>메시지 허브는 메시지 발송 오사용과 해킹 등으로 비용을 과도하게 사용되는 부분을 사전에 차단할 수 있도록 한도금액 설정을 하고 있습니다.</li>
          <li>회원사 단위 또는 프로젝트 단위로 월/일 금액을 설정할 수 있습니다.</li>
          <li>후불 요금제 업체는 월 한도금액은 필수이고 금액을 늘리고 싶으시면 [한도금액 상향 요청] 버튼을 이용하십시오.(승인 과정이 있습니다.)</li>
        </ul>
      </div>

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <p class="m-0 f-title1 c-gray900">고객사 한도금액</p>
          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" v-b-modal.add-limit-modal>
            <span>등록</span>
            <IconArrowRight />
          </b-button>
        </div>
        <div class="table-responsive border-bottom-0">
          <table class="table">
            <thead>
              <tr>
                <th>월 한도금액</th>
                <th>일 한도금액</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1]" :key="index">
                <td>200,000</td>
                <td>미사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 리스트 영역 End -->
    </div>

    <AddLimitModal />
  </div>
</template>

<script>
import LimitSpamTabs from '@/components/service/limitSpam/LimitSpamTabs.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'
import AddLimitModal from '@/modules/sendLimitAmount/components/modal/AddLimitModal.vue'

export default {
  components: { LimitSpamTabs,  IconArrowRight, AddLimitModal, },
  name: "AddressManage",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
</style>
