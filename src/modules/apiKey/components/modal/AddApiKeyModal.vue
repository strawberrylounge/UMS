<template>
  <b-modal id="add-apikey-modal" title="API KEY 생성" hide-header-close size="md" centered content-class="service-modal">
    <div class="form-row">
      <label>API KEY 명</label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>API KEY 암호</label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>API KEY 암호 확인</label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
      </div>
    </div>

    <div class="form-row">
      <label>초당발송건수 TPS<br/>
        입력범위 0~100</label>
      <div>
        <b-input class="w-100" placeholder="입력"></b-input>
        <p class="mt-2 mb-0 f-body5 c-failure">(TPS 중속은 영업팀과 별도 협의가 필요합니다.)</p>
      </div>
    </div>

    <div class="form-row">
      <label>라인타입</label>
      <div>
        <div class="box"><span class="f-body6 c-gray900">일반</span></div>
        <p class="mt-2 mb-0 f-body5 c-failure">(라인타입 변경은 영업팀과 별도협의가 필요합니다.)</p>
      </div>
    </div>

    <div class="form-row">
      <label>IP 체크</label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="ip">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="form-row align-items-start">
      <label>고객 접속 IP</label>
      <div class="d-flex align-items-start">
        <b-button variant="dark" class="btn-svg btn-svg-right mr-1" @click="addIpRow">
          <span>추가</span>
          <IconPlus />
        </b-button>
        <div class="ml-2 flex-fill">
          <div v-for="(item, index) in ipArray" :key="index" class="d-flex align-items-center" :class="{'mt-2': index > 0}">
            <b-input class="flex-fill" placeholder="입력" v-model="ipArray[index]"></b-input>
            <b-button variant="outline-secondary" class="ml-1" @click="deleteIp(index)">삭제</b-button>
          </div>
        </div>
      </div>
    </div>

    <div class="form-row">
      <label>상태</label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="status">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="form-row">
      <label>결과수신 여부
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
          <IconQuestion />
        </b-button>
      </label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="result">
            <b-form-radio name="type" value="사용">사용</b-form-radio>
            <b-form-radio name="type" value="미사용">미사용</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <div class="form-row">
      <label>중복체크
        <b-button v-b-tooltip.hover.html="msgTooltip" variant="light" class="btn-icon p-0 btn-tooltip btn-tooltip-dark">
          <IconQuestion />
        </b-button>
      </label>
      <div>
        <b-form-group class="radio-group m-0">
          <b-form-radio-group inline v-model="check">
            <b-form-radio name="type" value="프로젝트">프로젝트</b-form-radio>
            <b-form-radio name="type" value="API Key">API Key</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>
    </div>

    <template #modal-footer>
      <b-button variant="primary" disabled>생성</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconQuestion from '@/components/service/icons/IconQuestion.vue'
import IconPlus from '@/components/service/icons/IconPlus.vue'

export default {
components: { IconQuestion, IconPlus },
name: 'AddApiKeyModal',
props: {
  },
  data() {
    return {
      ip: '사용',
      status: '사용',
      result: '사용',
      check: '프로젝트',
      ipArray:[''],
    }
},
  methods: { 
    closeModal() {
      this.$bvModal.hide('add-apikey-modal');
    },
    msgTooltip() {
      return ''
    },
    addIpRow() {
      this.ipArray.push('')
    },
    deleteIp(index) {
      this.ipArray.splice(index, 1);
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/template.scss';
@use "~@/assets/scss/service/base/typography" as typography;

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 8px;
  background: var(--gray50);
}
.form-row input {
  width: auto;
}
</style>