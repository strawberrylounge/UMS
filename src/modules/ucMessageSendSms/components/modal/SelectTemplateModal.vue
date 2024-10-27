<template>  
  <b-modal id="select-template-modal" title="템플릿 선택" hide-header-close size="xl" centered>
    <div class="d-flex">
      <div class="template-area">
        <label for="template">템플릿 검색</label>
        <b-input-group class="w-100">
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="dark">조회</b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="d-flex justify-content-between">
          <label>템플릿 이름 (템플릿 ID)</label>
          <span class="count">총 <span class="text-primary">2건</span></span>
        </div>
        <div class="dropdown b-dropdown list">
          <ul class="dropdown-menu show">
            <li>0904_SMS_정보성</li>
            <li>0904_SMS_정보성</li>
            <li>0904_SMS_정보성</li>
          </ul>
        </div>
      </div>
      <div class="template-area">
        <p class="sub-title">템플릿 내용</p>
        <dl>
          <dt>발송유형</dt>
          <dd>SMS</dd>
        </dl>
        <dl>
          <dt>메시지 구분</dt>
          <dd>내용 노출</dd>
        </dl>
        <dl>
          <dt>템플릿 명</dt>
          <dd>0904_SMS_정보성</dd>
        </dl>
        <dl>
          <dt>내용</dt>
          <dd>0904_SMS_정보성</dd>
        </dl>
      </div>
      <div class="template-area">
        <div class="preview-image">
          <!-- NOTE: 템플릿 내용 들어가는 부분 -->
          <div class="bg-white p-2">웹 템플릿 등록 테스트입니다.</div>
        </div>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary">템플릿 선택</b-button>
      <b-button variant="outline-primary" @click="closeModal">취소</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "selectTemplateModal",
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('select-template-modal');
    },
  }
};
</script>

<style scoped lang="scss">
.template-area {
  width: calc(100% / 3);
  padding: 0 20px;
  & + .template-area {
    border-left: 1px solid var(--border-color);
  }
  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray500);
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
}
.input-group {
  margin: 12px 0 20px;
  .btn {
    width: 95px;
    margin-left: 4px;
  }
}
.list {
  height: 360px;
  overflow-y: auto;
  .dropdown-menu {
    position: static;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 0;
    li {
      padding: 8px 16px;
      &.active,
      &:hover {
        background-color: var(--gray100);
      }
      &:last-child {
        border-bottom: 1px solid var(--border-color);
      }
      a,button {
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        letter-spacing: -0.28px;
        color: var(--gray900);
        &:hover {
          background-color: var(--gray100);
        }
      }
      & + li {
        border-top: 1px solid var(--border-color);
      }
    }
  }
}
.count {
  font-size: 14px;
  font-weight: 700;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray500);
}
.sub-title {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
  color: var(--gray700);
}
dl {
  margin-bottom: 0;
  & + dl {
    margin-top: 28px;
  }
  dt {
    margin: 0 0 8px 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray500);
  }
  dd {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.28px;
    color: var(--gray700);
  }
}
</style>
