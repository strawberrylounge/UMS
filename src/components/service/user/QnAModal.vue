<template>
  <b-modal scrollable id="qna-modal" title="1:1 문의" hide-header-close size="md" centered content-class="service-modal">
    <div class="form-row">
      <label>문의유형 <span class="require">*</span></label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="radio">
            <b-form-radio name="type" value="회원">회원</b-form-radio>
            <b-form-radio name="type" value="결제">결제</b-form-radio>
            <b-form-radio name="type" value="서비스">서비스</b-form-radio>
            <b-form-radio name="type" value="기타">기타</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="form-row">
      <label>회사명 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" value='abc' disabled></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>이름 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" value='testadmin'></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>이메일 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" value='testadmin'></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>전화번호 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" value='testadmin'></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>문의제목 <span class="require">*</span></label>
      <div>
        <b-input class="w-100" placeholder="제목을 입력하세요(100자)"></b-input>
      </div>
    </div>

    <div class="form-row align-items-start">
      <label>문의내용 <span class="require">*</span></label>
      <div>
        <b-form-textarea
          id="content"
          rows="6"
          max-rows="6"
          class="w-100"
        ></b-form-textarea>
        <p class="textarea-count mt-2 mb-0">0 / 1000자</p>

        <div class="mt-1 pt-2 d-flex align-items-center">
          <b-form-file class="m-0 d-none" plain ref="fileInput"></b-form-file>
          <b-button variant="secondary" class="btn-svg btn-svg-right mr-1" @click="triggerFileInput">
            <span>파일 첨부</span>
            <IconPlus />
          </b-button>
          <p class="m-0 ml-2 f-body5 c-gray500">첨부 가능 : 사진,PDF, 한글, 엑셀, PPT<br/>
            파일은 5MB까지 가능합니다.</p>
        </div>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="outline-primary" @click="confirmSave">취소</b-button>
      <b-button variant="primary" @click="confirmSave">등록</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue'

export default {
components: { IconPlus, },
name: 'QnAModal',
  props: {
    confirmSave: {
      type: Function
    }
  },
  data() {
    return {
      radio: '회원'
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('qna-modal');
    },
    triggerFileInput() {
      // 파일 입력 요소 클릭
      this.$refs.fileInput.$el.click();
    },
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
label {
  margin-bottom: 0;
}
.form-row {
  margin: 0;
}
.flex-row-input {
  margin-bottom: 12px;
  input {
    width: calc(50% - 6px);
    & + input {
      margin-left: 12px;
    }
  }
}
</style>