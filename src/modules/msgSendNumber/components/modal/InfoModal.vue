<template>
  <b-modal id="info-modal" hide-header-close size="lg" centered title="문자 발신번호 사전등록 안내">

    <div class="card">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">문자 발신번호 사전등록 안내</p>
      <ul>
        <li>전기통신사업법 제84조에 따라 2015년 10월 16일부로 '발신번호 사전등록제'가 시행되었습니다.</li>
        <li>'발신번호 사전 등록제'란, 거짓으로 표시된 전화번호로 인한 이용자 피해 예방을 위한 것으로, 문자 메시지 발송 시 사전 인증된 발신 번호로만 사용할 수 있도록 등록하는 제도 입니다.</li>
        <li>이에 따라, 전기통신사업법 제 84조 2항(전화번호의 거짓 표시 금지 및 이용자 보호)에 위반되지 않도록 자신의 발신번호를 사전에 등록하고, 등록된 번호로만 문자 메시지를 발송해야 합니다.</li>
        <li>또한, 발신 번호는 기업, 기관 혹은 본인이 소유한 번호 여야 하며, 등록된 발신 번호로 전송한 메시지가 발신 번호 변조로 의심되어 KISA(한국인터넷진흥원)로부터 소명 요청을 받을 경우, 해당 고객의 발신 번호 소유를 증명할 수 있어야 합니다.</li>
      </ul>
    </div>


    <div class="card">
      <div class="d-flex align-items-center justify-content-between mb-1 pb-3">
        <p class="m-0 f-body1 c-gray700">문자 발신번호 등록 안내</p>
        <p class="m-0 d-flex align-items-center">
          <span class="f-body5 c-gray500">* 통신서비스 이용증명원</span>
          <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
            <IconQuestion />
          </b-button>
        </p>
      </div>

      <div class="table-responsive">
        <table class="table">
          <colgroup>
            <col width="20%">
            <col width="80%">
          </colgroup>
          <tbody>
            <tr>
              <th>휴대폰 번호 등록</th>
              <td>
                <p class="mb-1 pb-3 f-body4 c-gray500">휴대폰 번호 등록휴대폰에 설치된 PASS로 본인인증 후 아래 서류를 첨부하시면, 고객센터에서 검토 후 발신번호가<br/> 등록됩니다. (1~3일 소요)</p>
                <p class="m-0 f-body5 c-gray500">제출서류</p>
                <ul class="table-content-list">
                  <li>휴대폰 소유자 재직증명서 (대표자는 제외)</li>
                  <li>사업자 등록증</li>
                  <li>통신서비스 가입증명원</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>유선 번호 등록</th>
              <td>
                <p class="mb-1 pb-3 f-body4 c-gray500">유선 번호 입력 후 아래 서류를 첨부하시면, 고객센터에서 검토 후 발신번호가 등록됩니다. (1~3일 소요)</p>
                <p class="m-0 f-body5 c-gray500">제출서류</p>
                <ul class="table-content-list">
                  <li>통신서비스 가입증명원</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>타인 / 타사 번호 등록</th>
              <td>
                <p class="mb-1 pb-3 f-body4 c-gray500">타인/타사 번호 등록 신청 시 아래 서류를 첨부하시면, 고객센터에서 검토 후 발신번호가 등록됩니다. (1~3일 소요)</p>
                <p class="m-0 f-body5 c-gray500">제출서류</p>
                <ul class="table-content-list">
                  <li>신분증 사본 (위임업체 대리인 / 수임업체 대리인)</li>
                  <li>재직증명서 (위임업체 대리인 / 수임업체 대리인)</li>
                  <li>인감증명서 (위임업체 / 수임업체)</li>
                  <li>인감이 날인된 위임장</li>
                  <li>위임-수임관계 확인 서류</li>
                  <li>통신서비스 가입증명원</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconQuestion from '@/components/service/icons/IconQuestion.vue'

export default {
components: { IconQuestion, },
name: 'InfoModal',
  props: {
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('info-modal');
    },
    msgTooltip() {
      return '문자 메시지처럼 문자 형식의 텍스트를 입력할 수 있습니다.<br/>에뮬레이터에 노출되는 이미지는 변경되지 않습니다.\n최대 90자까지(공백포함) 입력이 가능합니다.'
    }
  }
}
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

.card {
  padding: 28px;
  & + .card {
    margin-top: 20px;
  }
}
ul {
  margin: 0;
  padding-left: 24px;
  li {
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray500);
  }
}
.btn-tooltip {
  margin-bottom: 2px;
  margin-left: 2px;
}
.table tr {
  &:first-child th,
  &:first-child td {
    border-top: none;
  }
  &:last-child td {
    border-bottom: none;
  }
  th {
    padding: 16px;
    background-color: var(--gray50);
    @include typography.font-style(14px, 700, 140%, -0.28px);
    color: var(--gray500);
    text-align: center;
    vertical-align: middle;
  }
  td {
    padding: 16px;
    &:hover {
      background-color: var(--white);
    }
  }
}
</style>