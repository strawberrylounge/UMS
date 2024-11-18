<template>
  <b-modal id="qna-detail-modal" title="1:1 문의" hide-header-close size="md" centered>
    <dl>
      <dt>문의유형</dt>
      <dd>회원</dd>
    </dl>

    <dl>
      <dt>회사명</dt>
      <dd>abc</dd>
    </dl>

    <dl>
      <dt>이름</dt>
      <dd>testadmin</dd>
    </dl>

    <dl>
      <dt>이메일</dt>
      <dd>testadmin</dd>
    </dl>

    <dl>
      <dt>전화번호</dt>
      <dd>010-1234-5678</dd>
    </dl>

    <dl>
      <dt>문의제목</dt>
      <dd>결제방법 질문입니다</dd>
    </dl>

    <dl>
      <dt>문의내용</dt>
      <dd>내용입니다</dd>
    </dl>

    <dl>
      <dt>첨부파일</dt>
      <dd class="d-flex align-items-center">
        <span>추가수정.png</span>
        <b-button variant="dark" class="ml-auto">다운로드</b-button>
      </dd>
    </dl>

    <dl>
      <dt>문의상태</dt>
      <dd>답변완료</dd>
    </dl>

    <hr class="hr">

    <dl>
      <dt>답변자</dt>
      <dd>testadmin1</dd>
    </dl>

    <dl>
      <dt>답변 내용</dt>
      <dd>결제방법 답변입니다</dd>
    </dl>

    <dl>
      <dt>첨부 파일</dt>
      <dd></dd>
    </dl>

    <dl>
      <dt>답변 일자</dt>
      <dd>2024-07-30</dd>
    </dl>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
components: { },
name: 'QnADetailModal',
  props: {
  },
  data() {
    return {
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('qna-detail-modal');
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use "~@/assets/scss/service/base/typography" as typography;

dl {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &:last-child {
    margin: 0;
  }
  dt {
    min-width: 120px;
    margin: 0 12px 0 0;
    @include typography.font-style(14px, 500, 140%, -0.28px);
    color: var(--gray500);
  }
  dd {
    flex: 1 1 auto;
    margin: 0;
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray900);
  }
}
.hr {
  margin: 20px 0;
}
</style>