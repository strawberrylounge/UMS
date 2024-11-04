<template>
  <div>
    <dl>
      <dt>API KEY 명</dt>
      <dd>내용 노출</dd>
    </dl>

    <dl>
      <dt>API KEY</dt>
      <dd>GW_TEST_1</dd>
    </dl>

    <dl>
      <dt>초당발송건수 TPS<br />
        입력범위 0~100</dt>
      <dd>
        <div class="box"><span>1,000</span></div>
      </dd>
    </dl>

    <dl>
      <dt>라인타입</dt>
      <dd>
        <div class="box"><span>일반</span></div>
      </dd>
    </dl>

    <dl>
      <dt>IP 체크</dt>
      <dd>사용</dd>
    </dl>

    <dl class="align-items-center">
      <dt>고객 접속 IP</dt>
      <dd>100.99.*.*100.99.70.*49.170.27.3014.51.250.25100.99.72.*106.246.229.114164.124.106.143118.222.92.5164.124.106.146</dd>
    </dl>

    <dl>
      <dt>상태</dt>
      <dd>사용</dd>
    </dl>

    <dl>
      <dt>결과수신여부
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
          <IconQuestion />
        </b-button>
      </dt>
      <dd>사용</dd>
    </dl>

    <dl>
      <dt>중복체크
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
          <IconQuestion />
        </b-button>
      </dt>
      <dd>내용 노출</dd>
    </dl>
  </div>
</template>

<script>
import IconQuestion from '@/components/service/icons/IconQuestion.vue'

export default {
components: { IconQuestion },
name: 'ApiKeyDetailView',
props: {
},
methods: {
  msgTooltip() {
    return ''
  },
}
}
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

dl {
  display: flex;
  & + dl {
    margin-top: 12px;
  }
  dt {
    width: 120px;
    margin-right: 12px;
    @include typography.font-style(14px, 500, 140%, -0.28px);
    color: var(--gray500);
  }
  dd {
    width: calc(100% - 120px - 12px);
    margin: 0;
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray900);
    word-break: break-all;
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      border-radius: 8px;
      background: var(--gray50);
    }
  }
}
</style>