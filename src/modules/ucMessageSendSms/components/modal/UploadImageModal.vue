<template>  
  <b-modal id="upload-image-modal" content-class="service-modal" hide-header-close centered size="lg">
    <template #modal-title>
      <h5 class="modal-title">이미지 업로드</h5>
      <p class="title-desc">* 광고성메시지 수신거부번호는 내용 하단에 포함됩니다. 또한 광고 표기는 제목 또는 내용에 포함되어 있어야 합니다.</p>
    </template>

    <ul class="info">
      <li>• 이미지를 사용하실 채널을 선택해 주십시오. (채널마다 이미지 형식이 다를 수 있습니다.)</li>
      <li>• 이미지는 jpg, jpeg 형식만 지원합니다.</li>
      <li>• 이미지 용량은 300KB 이하여야 합니다.</li>
    </ul>

    <label class="mt-1 pt-3 mb-0 f-body1 c-gray900">이미지 사용 채널</label>
    <div class="checkbox-wrap">
      <b-form-checkbox value="MMS" >MMS</b-form-checkbox>
      <b-button v-b-tooltip.hover.html="mmsTooltip" variant="dark" class="btn-icon p-0">
        <IconQuestion />
      </b-button>
      <b-form-checkbox value="RCS" >RCS</b-form-checkbox>
      <b-button v-b-tooltip.hover.html="rcsTooltip" variant="dark" class="btn-icon p-0">
        <IconQuestion />
      </b-button>
      <b-form-checkbox value="talk" >친구톡</b-form-checkbox>
      <b-button v-b-tooltip.hover.html="talkTooltip" variant="dark" class="btn-icon p-0">
        <IconQuestion />
      </b-button>
      <b-dropdown id="channel-dropdown" variant="secondary" class="channel-dropdown">
        <template #button-content>
          <span>{{selectChannel}}</span>
          <IconArrowDown />
        </template>
        <b-dropdown-item-button :class="selectChannel == 'Normal' ? 'active' : ''">Normal</b-dropdown-item-button>
        <b-dropdown-item-button :class="selectChannel == 'Wide' ? 'active' : ''">Wide</b-dropdown-item-button>
      </b-dropdown>
    </div>

    <div class="upload-area">
      <b-form-file v-model="file" class="mt-3" plain ref="fileInput"></b-form-file>
      <span class="f-body6 c-gray700">이미지 영역</span>
    </div>

    <template #modal-footer>
      <b-button variant="primary" @click="triggerFileInput">파일찾기</b-button>
      <b-button variant="primary">업로드</b-button>
      <b-button variant="outline-primary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
import IconQuestion from '@/components/service/icons/IconQuestion.vue'
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'

export default {
  components: { IconQuestion, IconArrowDown, },
  name: "UploadImageModal",
  data() {
    return {
      selectChannel: 'Normal',
      file: null,
    }
  },
  methods: {
    closeModal() {
      this.$bvModal.hide('upload-image-modal');
    },
    mmsTooltip() {
      return '<ul><li>* 이미지는 jpg, jpeg 형식만 지원합니다.</li><li>* 이미지 용량은 300KB 이하여야 합니다.</li><li>* 이미지 권장 사이즈는 320*240 또는 440*330 입니다.</li></ul>'
    },
    rcsTooltip() {
      return '<ul><li>* 이미지는 jpg, jpeg 형식만 지원합니다.</li><li>* 이미지 용량은 1MB 이하여야 합니다.</li><li>* 이미지 권장 사이즈는 568*336 또는 568*528 입니다.</li></ul>'
    },
    talkTooltip() {
      return '<ul><li>* 이미지는 jpg, jpeg, png 형식만 지원합니다.</li><li>* 이미지 용량은 Normal은 500KB이하, Wide는 2MB 이하여야 합니다.</li><li>* Wide 이미지 권장 사이즈는 가로 길이 최소 800px, 세로 길이는 최소 600px 이상입니다.</li><li>* 이미지 제한 사이즌 가로:세로 비율 2:1 이상, 4:3 이하여야 합니다.</li></ul>'
    },
    triggerFileInput() {
      // 파일 입력 요소 클릭
      this.$refs.fileInput.$el.click();
    },
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

.info {
  margin: 20px 0 0;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #DDE1E7;
  background: var(--gray50);
  list-style: none;
  li {
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray700);
  }
}
.checkbox-wrap {
  display: flex;
  align-items: center;
  margin: 20px 0;
  .btn-icon {
    margin: -3px 20px 0 6px;
    background-color: var(--white);
    border: none;
  }
}
.channel-dropdown {
  width: 123px;
}
.upload-area {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 333px;
  border: 1px solid #DDE1E7;
  border-radius: 12px;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: 3;
    opacity: 0;
  }
}
</style>
