<template lang="">
  <div class="page-notice-detail">
    <h2 class="sr-only">공지사항 상세 페이지</h2>
    <h3 class="customer-title">공지사항</h3>
    <div class="notice-detail tbl-detail">
      <div class="notice-header tbl-header">
        <div class="title">
          <LabelNotice type="guide" />
          <h4 class="txt-ellipsis">메세지허브 친구톡 서비스 종료 사전안내</h4>
        </div>
        <div class="info">
          <span>운영자</span>
          <span>2024.00.00</span>
        </div>
      </div>
      <div class="notice-contents tbl-contents">
        <p>
          안녕하세요.<br />
          항상 메시지허브를 이용해 주시는 고객님께 진심으로 감사드립니다.<br />
          카카오 정책 변경으로 인해 카카오친구톡 서비스가 종료될 예정이므로,
          이에 대한 안내를 드립니다.<br /><br />
          ■ 친구톡 서비스 종료 안내<br />
          - 종료 일자: 2023년 12월 31일(일)<br />
          ■ 유예기간 및 대상 안내<br />
          - 유예 기간: 2024년 12월 31일까지<br />- 유예 대상: 2023년 12월
          31일까지 등록된 친구톡 채널<br /><br />
          ※ 참고사항 2024-03-15<br />
          - 2024년 1월 1일부터 등록되는 신규 친구톡 채널은 친구톡 발송이
          불가능합니다.<br />
          - 친구톡 대체상품에 대한 API 개발 문서와 운영 가이드는 카카오에서
          2023년 4분기 내에 배포 예정이며, 고객사의 개발 변경사항, 신규 상품에
          대한 가격 및 오픈 일정 등에 대한 추가 안내가 이후에 이루어질
          예정입니다.<br /><br />
          ※ 문의사항<br />
          - 고객센터 번호: 1544-5992<br />
          - 대표 이메일: msghub@lguplus.co.kr<br />
          저희는 항상 안정적인 서비스 제공을 위해 최선을 다하겠습니다. 다시 한
          번 감사드립니다.
        </p>
      </div>
      <button type="button" class="btn-go-list">목록으로 이동</button>
    </div>
  </div>
</template>
<script>
import LabelNotice from "../../../components/LabelNotice.vue";

export default {
  name: "NoticeDetail",
  components: { LabelNotice },
};
</script>
<style lang="scss" scoped>
@use "../../../../../assets/scss/landing/abstracts/variables" as v;

.page-notice-detail {
  padding-top: 60px;
  @include v.desktop {
    padding-top: 100px;
  }
}
</style>
