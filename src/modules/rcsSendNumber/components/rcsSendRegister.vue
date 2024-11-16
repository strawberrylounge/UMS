<template>
  <div class="tab-contents">
    <div class="info card">
      <ul>
        <li>전기통신사업법 제 84조'SMS 발신 번호 사전 등록제'가 2015년 10월 16일부로 시행됨에 따라 SMS를 발송하려면 발신 번호를 먼저 등록하셔야 합니다.</li>
        <li>RCS 발신번호를 등록하면 문자 발신번호까지 동시에 등록됩니다.</li>
      </ul>
    </div>

    <div class="table-section card">
      <div class="d-flex">
        <div class="text-section">
          <p class="mt-0 mb-1 pb-3 f-body1 c-gray700">RCS 발신번호 등록</p>
          <ul>
            <li>RCS Biz Center 에서 브랜드를 생성해야 RCS 발신번호 등록이 가능합니다.</li>
            <li>등록된 RCS 발신번호는 선택한 브랜드에 종속됩니다.</li>
            <li>등록된 RCS 발신번호는 문자 발신번호에 동시 등록됩니다.</li>
            <li>RCS 발신번호를 여러 개 등록할 경우, 기존에 등록된 발신번호가 있다면 해당 발신번호는 다음 단계에서 표시되지 않습니다.</li>
            <li>입력한 RCS 발신번호가 기존에 모두 등록되어 있다면 다음 단계로 넘어가지 않습니다.</li>
            <li>대표번호 문자 수신 서비스(MO)를 사용하실 경우 MO 체크박스를 체크해 주세요.</li>
            <li>RBC에서 등록한 브랜드에 "LG유플러스" 대행사 지정을 반드시 해 주세요.</li>
          </ul>
        </div>

        <i class="vertical-divider"></i>

        <div class="flex-fill">
          <div class="form-row">
            <label>브랜드</label>
            <div class="d-flex align-items-center">
              <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown flex-fill">
                <template #button-content>
                  <span>{{ brand }}</span>
                  <IconArrowDown />
                </template>
                <b-dropdown-item-button :class="{active: brand === '더미브랜드이름'}" @click="setBrand('더미브랜드이름')">더미브랜드이름</b-dropdown-item-button>
              </b-dropdown>
              <span class="ml-1 pl-2 f-body5 c-gray400">발신번호 등록은 브랜드가 먼저 등록되어야 하며, 승인완료 된 브랜드만 보여집니다.<br />
                대표번호문자수신서비스(MO)를 사용하실 경우 MO체크박스에 체크해주세요.</span>
            </div>
          </div>

          <div class="form-row">
            <label>RCS 발신번호</label>
            <div class="table-btn">
              <table class="table">
                <colgroup>
                  <col width="45%" />
                  <col width="45%" />
                  <col width="5%" />
                  <col width="5%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>발신번호</th>
                    <th>발신번호명</th>
                    <th colspan="2">MO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in rows" :key="'input-' + index">
                    <td>
                      <b-input 
                        placeholder="입력"
                        v-model="rows[index]['input1']"
                      ></b-input>
                    </td>
                    <td>
                      <b-input 
                        placeholder="입력" 
                        v-model="rows[index]['input2']"
                      ></b-input>
                    </td>
                    <td><b-form-checkbox></b-form-checkbox></td>
                    <td>
                      <button type="button" class="btn btn-icon p-0" @click="removeRow(index)">
                        <IconClose />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="pt-0 border-0">
                      <button type="button" class="btn btn-add" @click="addRow">
                        <IconPlus />
                        <span class="pl-2 f-body2 c-gray600">추가</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form-row">
            <label>
              통신서비스<br/>
              가입증명원
            </label>
            <div class="d-flex align-items-center">
              <div class="file-upload flex-fill mr-1">
                <label for="upload" class="btn btn-dark btn-sm mb-0">파일 선택</label>
                <input
                  id="upload"
                  type="file"
                  @change="handleFileUpload"
                  class="d-none"
                />
                <span v-if="selectedFileName" class="f-body6 c-gray900">{{ selectedFileName }}</span>
                <span v-else class="f-body6 c-gray400">선택된 파일 없음</span>
              </div>
              <p class="m-0 ml-2 f-body5 c-states-red">첨부 파일 확장자는 png, jpg, pdf, zip, tif, tiff만 허용됩니다.<br />
                (5M 이하 파일 가능)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="submit-wrap mt-5">
        <b-button variant="outline-primary" size="lg" @click="registerSubmit">승인요청</b-button>
        <b-button variant="primary" size="lg" class="ml-3" @click="setListView">목록</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlus from '@/components/service/icons/IconPlus.vue';
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue';
import IconClose from '@/components/service/icons/IconClose.vue';

export default {
  components: { IconPlus, IconArrowDown, IconClose, },
  props: {
    setListView: {
      type: Function
    },
    registerSubmit: {
      type: Function
    }
  },
  name: 'msgSendRegister',
  data() {
    return {
      brand: '더미브랜드이름',
      rows: [{ 'input1': '', 'input2': '' }],
      selectedFileName: '',
    }
  },
  methods: {
    setBrand(value) {
      this.brand = value
    },
    addRow() {
      this.rows.push({'input1': '', 'input2': ''});
    },
    removeRow(index) {
      this.rows.splice(index, 1);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFileName = file.name;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';
@use '@/assets/scss/service/msgSend.scss';
.b-dropdown{
  max-width: 355px;
}
</style>