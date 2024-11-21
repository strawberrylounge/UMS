<template>
  <div class="uc-template-multi-send-manage">
    <TemplateTabs />

    <div class="tab-contents" :class="channelSelected.length ? 'd-flex align-items-start' : ''">
      <div class="preview card p-sticky" v-if="channelSelected.length">
        <p class="preview-title">미리보기</p>
        <RcsPreview v-if="channelTab === 'rcs'" />
        <KaKaoPreveiw v-else-if="channelTab === 'kakao'" />
        <SmsPreview v-else :title="smsTitle" :desc="smsDesc" />
      </div>

      <div class="section card" :class="channelSelected.length === 0 ? 'no-preview' : ''">
        <p class="title f-title1 c-gray900">템플릿 등록</p>

        <p class="m-0 f-body1 c-gray700">01. 발송정보</p>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">메시지 구분 <span class="require">*</span></label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline v-model="message">
              <b-form-radio name="message" value="info">정보성</b-form-radio>
              <b-form-radio name="message" value="ads">광고용</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">메시지 타입 <span class="require">*</span></label>
          <b-form-group class="radio-group m-0">
            <b-form-radio-group inline v-model="type">
              <b-form-radio name="type" value="info">텍스트</b-form-radio>
              <b-form-radio name="type" value="ads">이미지</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="d-flex align-items-center section-col">
          <label class="form-label">템플릿 명</label>
          <b-input placeholder="입력" class="template-input" v-model="title"></b-input>
        </div>

        <hr class="hr" />

        <p class="m-0 f-body1 c-gray700">02. 채널 선택</p>

        <div class="d-flex section-col">
          <label class="form-label">채널</label>
          <b-form-group id="channel-checkbox">
            <b-form-checkbox-group
              id="service-checkbox-group-template"
              v-model="channelSelected"
              :options="channelOptions"
              name="channel"
            ></b-form-checkbox-group>
          </b-form-group>

          <i class="vertical-divider"></i>
            
          <label class="form-label">발송순서</label>
          <div v-if="channelSelected.length" class="channel-list">
            <draggable v-model="selectedChannels" handle=".drag-handle" tag="div" animation="200">
              <div v-for="(channel, index) in selectedChannels" :key="channel.value" class="d-flex align-items-center mb-2">
                <span class="order">{{ index + 1 }}</span>
                <i class="drag-handle bi bi-list"></i>
                <b-input v-model="channel.text" class="flex-grow-1 mx-2" disabled></b-input>
              </div>
            </draggable>
            <b-button variant="dark" size="sm" @click="sortByPriority">저가 우선정렬</b-button>
          </div>
        </div>

        <hr class="hr" />
        
        <div class="section-col">
          <p class="m-0 f-body1 c-gray700">03. 채널 설정</p>
        </div>

        <div class="section-col">
          <div class="sub-tabs-wrap" v-if="channelSelected.length">
            <div class="service-sub-tabs">
              <div v-for="(item, index) in selectedChannels" :key="'sub-tab-' + index" class="tab" :class="{active: channelTab === item.value}">
                <button class="btn" @click="changeSubTab(item.value)">{{item.text}}</button>
              </div>
            </div>
          </div>

          <div class="empty-channel" v-else>
            <p class="m-0 f-body3 c-gray500">채널을 선택해주세요.</p>
          </div>
        </div>

        <RcsContents v-if="channelTab === 'rcs'" :message="message" />
        <KaKaoContents v-if="channelTab === 'kakao'" />
        <SmsContents v-if="channelTab === 'sms'" ref="smsComponent"  @update-type="handleSMSData" />

        <div class="submit-wrap">
          <b-button variant="outline-secondary" size="lg">취소</b-button>
          <b-button variant="secondary" size="lg">임시저장</b-button>
          <b-button variant="primary" size="lg">등록</b-button>
        </div>
      </div>
    </div>

    <p>모달 예시입니다.<br/>모달이 오픈되는 조건이 달라서 예시로 버튼 넣었습니다.</p>
      <div class="d-flex align-items-center">
        <b-button variant="outline-primary" @click="alertRegister">등록(정보 미입력시)</b-button>
        <b-button variant="outline-primary" @click="confrimRegister">등록(정보 모두 입력시)</b-button>
      </div>
      
    <AlertModal title="통합 템플릿 관리" :desc="alertMsg.desc" />
    <ConfirmModal title="통합 템플릿 관리" desc="템플릿을 등록 하시겠습니까?" />
  </div>
</template>

<script>
import TemplateTabs from '@/components/service/template/TemplateTabs.vue'
import AlertModal from '@/components/service/modal/AlertModal.vue'
import ConfirmModal from '@/components/service/modal/ConfirmModal.vue'
import draggable from 'vuedraggable';
import RcsContents from '@/modules/ucTemplateMultiSendTemplateManage/components/RcsContents.vue';
import RcsPreview from '@/modules/ucTemplateMultiSendTemplateManage/components/RcsPreview.vue';
import KaKaoPreveiw from '@/modules/ucTemplateMultiSendTemplateManage/components/KaKaoPreveiw.vue';
import SmsPreview from '@/modules/ucTemplateMultiSendTemplateManage/components/SmsPreview.vue';
import KaKaoContents from '@/modules/ucTemplateMultiSendTemplateManage/components/KaKaoContents.vue';
import SmsContents from '@/modules/ucTemplateMultiSendTemplateManage/components/SmsContents.vue';

export default {
  components: {
    TemplateTabs, AlertModal, draggable, RcsContents,
    ConfirmModal, RcsPreview, KaKaoContents, KaKaoPreveiw, SmsContents, SmsPreview,
  },
  name: "ucMultiSendTemplateList",
  data() {
    return {
      message: 'info',
      type: 'text',
      title: '',
      channelSelected: [],
      channelOptions: [
        { text: 'RCS', value: 'rcs' },
        { text: '카카오톡', value: 'kakao' },
        { text: '문자', value: 'sms' },
      ],
      selectedChannels: [],
      channelTab: '',
      alertMsg: {
        title: '통합 템플릿 관리',
        desc: 'RCS 승인 서술형 템플릿 브랜드명을 선택해주세요.'
      },
      currentType: 'sms',
      smsTitle: '',
      smsDesc: '',
    }
  },
  methods: {
    toggleMenu() {
      this.hideMenu = !this.hideMenu;
    },
    navigateToSmartSendMain() {
      this.$router.push(`/uc/message/smartSendMain`);
    },
    alertRegister() {
      this.alertMsg = {
        title: '통합 템플릿 관리',
        desc: 'RCS 승인 서술형 템플릿 브랜드명을 선택해주세요.'
      }
      this.$bvModal.show('alert-modal');
    },
    confrimRegister() {
      this.$bvModal.show('confirm-modal');
    },
    sortByPriority() {
      if (this.selectedChannels.length < 2) {
        this.alertMsg = {
          title: '통합 템플릿 관리',
          desc: '채널을 2개 이상 선택하세요.'
        }
        this.$bvModal.show('alert-modal');
        return
      }
      const priorityOrder = ["kakao", "rcs", "sms"];

      this.selectedChannels.sort(
        (a, b) => priorityOrder.indexOf(a.value) - priorityOrder.indexOf(b.value)
      );
    },
    changeSubTab(value) {
      this.channelTab = value
    },
    handleSMSData(data) {
      this.currentType = data.type;
      this.smsTitle = data.title;
      this.smsDesc = data.desc;
    }
  },
  watch: {
    channelSelected(newSelected) {
      this.selectedChannels = newSelected.map(value => {
        return this.channelOptions.find(option => option.value === value);
      });
      this.channelTab = newSelected[0]
    },
    message(newValue) {
      if (newValue === 'ads' && this.channelTab === 'kakao') {
        this.alertMsg = {
          title: '안내',
          desc: '카카오톡은 광고용 템플릿이 없습니다.'
        }
        this.$bvModal.show('alert-modal');
        this.message = 'info'
      }
    },
    channelTab(newValue) {
      if (newValue === 'kakao' && this.message === 'ads') {
        this.alertMsg = {
          title: '안내',
          desc: '카카오톡은 광고용 템플릿이 없습니다.'
        }
        this.$bvModal.show('alert-modal');
        this.channelTab = ''
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@use "~@/assets/scss/service/abstracts/variables" as *;
@use '@/assets/scss/service/message.scss';
@use '@/assets/scss/service/template.scss';

.section.no-preview {
  width: 100%;
  margin: 0;
}
.template-input,
.b-dropdown {
  width: 335px;
}
.vertical-divider {
  width: 1px;
  height: 164px;
  margin: 0 20px;
  background: var(--border-color);
}
.empty-channel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 39px;
  background-color: var(--gray50);
  border-radius: 12px;
}
.submit-wrap {
  margin-top: 48px;
}
.channel-list {
  .order {
    width: 30px;
    @include typography.font-style(14px, 700, 140%, -0.28px);
    color: var(--primary);
  }
  .drag-handle {
    width: 16px;
    height: 16px;
    background: url('#{$icon}icon-drag.svg');
    cursor: grab;
  }
  input {
    width: 200px;
    margin: 0 0 0 8px !important;
    padding: 5px 0;
    text-align: center;
    @include typography.font-style(14px, 400, 140%, -0.28px);
    color: var(--gray900);
    &:hover {
      border-color: var(--border-color);
    }
  }
  .btn-dark {
    margin-top: 12px;
    margin-left: 54px;
    width: calc(100% - 30px - 16px - 8px);
  }
}
.service-sub-tabs {
  display: flex;
  margin-top: 28px;
  border-bottom: 1px solid var(--border-color);
  .tab {
    .btn {
      margin: 0;
      padding: 0 0 12px 0;
      border: none;
      @include typography.font-style(16px, 700, 140%, -0.32px);
      color: var(--gray500)
    }
    & + .tab {
      margin-left: 28px;
    }
    &.active {
      .btn {
        position: relative;
        border-radius: 0;
        color: var(--primary);
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary);
        }
      }
    }
  }
}
</style>
