<template>
  <b-modal id="rcs-info-modal" hide-header-close size="lg" centered title="RCS 발신번호 사전등록 안내">

    <div class="card">
      <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">RCS 발신번호 사전등록 안내</p>
      <ul>
        <li>전기통신사업법 제84조에 따라 2015년 10월 16일부로 '발신번호 사전등록제'가 시행되었습니다.</li>
        <li>'발신번호 사전 등록제'란, 거짓으로 표시된 전화번호로 인한 이용자 피해 예방을 위한 것으로, 문자 메시지 발송 시 사전 인증된 발신 번호로만 사용할 수 있도록 등록하는 제도 입니다.</li>
        <li>이에 따라, 전기통신사업법 제 84조 2항(전화번호의 거짓 표시 금지 및 이용자 보호)에 위반되지 않도록 자신의 발신번호를 사전에 등록하고, 등록된 번호로만 문자 메시지를 발송해야 합니다.</li>
        <li>또한, 발신 번호는 기업, 기관 혹은 본인이 소유한 번호 여야 하며, 등록된 발신 번호로 전송한 메시지가 발신 번호 변조로 의심되어 KISA(한국인터넷진흥원)로부터 소명 요청을 받을 경우, 해당 고객의 발신 번호 소유를 증명할 수 있어야 합니다.</li>
      </ul>
    </div>


    <div class="card">
      <p class="m-0 mb-1 pb-3 f-body1 c-gray700">RCS 발신번호 등록 안내</p>

      <div class="table-responsive">
        <table class="table">
          <colgroup>
            <col width="20%">
            <col width="80%">
          </colgroup>
          <tbody>
            <tr>
              <th>1. RCS 가입 및 브랜드 생성</th>
              <td>
                <p class="mt-0 mb-1 f-body4 c-gray500">RCS 발신번호 등록을 위해서는 RCS Biz Center 가입 후, 브랜드를 생성해야 합니다.<br/>
                  사업자등록증 사본이 필요합니다.</p>
                <b-button variant="secondary" class="btn-svg btn-svg-right">
                  <span>RCS Biz Center 바로가기</span>
                  <IconArrowRight />
                </b-button>
              </td>
            </tr>
            <tr>
              <th>2. RCS 발신번호 등록 요청</th>
              <td>
                <ol class="table-content-list">
                  <li>RBC 로그인 ID , RBC API Key 가 필요합니다.</li>
                  <li>통신서비스 이용증명원이 필요합니다.</li>
                  <li>RCS 발신번호는 RBC의 승인과정을 통해 등록됩니다.(1~3일 소요)</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th>3. RCS 발신번호 관리</th>
              <td>
                <ol class="table-content-list">
                  <li>RCS 발신번호가 등록되면 문자 발신번호도 동시에 등록됩니다.</li>
                  <li>발신번호는 브랜드 1개당 N개 추가 할 수 있습니다.</li>
                </ol>
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
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'

export default {
components: { IconArrowRight, },
name: 'RcsInfoModal',
  props: {
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('rcs-info-modal');
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
ol,
ul {
  margin: 0;
  padding-left: 24px;
  li {
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray500);
  }
}
ol li {
  @include typography.font-style(14px, 700, 140%, -0.28px);
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