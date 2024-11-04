<template>
  <div class="uc-alimtalk-template-list list-view">
    <TemplateTabs />

    <div class="tab-contents">
      <div class="info card">
        <ul>
          <li>알림톡 메시지를 발송하기 위해서는 템플릿을 먼저 등록하고,검수 과정을 통해 승인 상태가 되어야 메시지 발송이 가능합니다.</li>
          <li>템플릿을 등록 (등록완료) 하시고 템플릿 상세에서 [검수요청] 하시면 검수 과정을 통해 템플릿이 처리(승인/반려) 됩니다.</li>
          <li>템플릿 코드를 클릭하시면 템플릿 상세를 보실 수 있고 수정도 가능합니다.([등록완료], [반려] 상태일 경우 수정 가능)</li>
          <li>템플릿 상태를 클릭하시면 템플릿 관련 문의를 할 수 있고 반려 상태라면 반려 메시지를 확인할 수 있습니다.</li>
          <li>알림톡 템플릿 삭제는 [등록완료] 상태일 경우 삭제 가능합니다. 삭제 할 템플릿을 선택 하시고 [삭제]버튼을 클릭하십시오.</li>
        </ul>
      </div>

      <!-- 검색영역 Start -->
      <div class="search-section card border-0">
        <div class="search-section-forms">
          <div class="d-flex align-items-center flex-wrap">
            <label>검색조건</label>
            <b-dropdown id="template-dropdown" variant="secondary" class="template-dropdown">
              <template #button-content>
                <span>템플릿명</span>
                <IconArrowDown />
              </template>
              <b-dropdown-item-button>템플릿명</b-dropdown-item-button>
            </b-dropdown>
            <div class="search-group">
              <SearchInput />
            </div>
            <i class="vertical-divider"></i>
            <label>템플릿 상태</label>
            <b-form-group>
              <b-form-checkbox-group
                id="service-checkbox-group-template"
                v-model="statusSelected"
                :options="statusOptions"
                name="template-1"
              ></b-form-checkbox-group>
            </b-form-group>
          </div>
        </div>
        <b-button variant="dark" class="btn-submit">검색</b-button>
      </div>
      <!-- 검색영역 End -->

      <!-- 리스트 영역 Start -->
      <div class="table-section card">
        <div class="d-flex align-items-center">
          <p class="list-count">전체 <span class="text-primary">10건</span></p>
          <b-dropdown id="pageCount-dropdown" variant="secondary" class="pageCount-dropdown">
            <template #button-content>
              <span>{{ pageCount }}개씩 보기</span>
              <IconArrowDown />
            </template>
            <b-dropdown-item-button :class="pageCount == 10 ? 'active' : ''">10개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 20 ? 'active' : ''">20개씩 보기</b-dropdown-item-button>
            <b-dropdown-item-button :class="pageCount == 30 ? 'active' : ''">30개씩 보기</b-dropdown-item-button>
          </b-dropdown>
          <b-button variant="secondary" class="btn-svg btn-svg-right ml-auto" @click="navigateToManage">
            <span>템플릿 등록</span>
            <IconArrowRight />
          </b-button>
          <i class="vertical-divider"></i>
          <b-button variant="outline-primary" class="btn-svg btn-svg-right ml-2">
            <span>엑셀 다운로드</span>
            <IconArrowLineDown />
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="text-center">
                  <b-form-checkbox
                    id="selectAll"
                    name="selectAll"
                    value="selectAll"
                    size="lg"
                  ></b-form-checkbox>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    NO.
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center"> <!-- NOTE: 정렬시 class명 추가하면 스타일 변경됨 -->
                    템플릿 코드
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    템플릿 키
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    채널
                    <IconSort class="down" />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    템플릿명
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    상태/문의
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    등록자
                    <IconSort />
                  </div>
                </th>
                <th>
                  <div class="d-flex align-items-center">
                    최종수정일자
                    <IconSort />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
                <td class="text-center">
                  <b-form-checkbox
                    :id=index
                    :name=index
                    :value=index
                    size="lg"
                  ></b-form-checkbox>
                </td>
                <td>{{ index + 1 }}</td>
                <td>
                  <span class="text-underline">TPLdwiCS</span>
                </td>
                <td>TPGHSBwok</td>
                <td>@이커머스테크</td>
                <td>대행사2</td>
                <td>검수중</td>
                <td>testadmin</td>
                <td>2024.02.06 12:15:11</td>
              </tr>
            </tbody>
          </table>

          <Pagination />
        </div>
      </div>
      <!-- 리스트 영역 End -->

      <p>모달 예시입니다.<br/>
      데이터 연동시 상태에 따라 모달이 오픈되는 조건이 달라서 예시로 버튼 넣었습니다.</p>
      <div class="d-flex align-items-center">
        <b-button variant="outline-primary" @click="openTalkReturnModal">알림톡 반려 사유 모달</b-button>
        <b-button variant="outline-primary" @click="openTalkStatusModal">승인상태 상세 모달</b-button>
        <b-button variant="outline-primary" @click="openMoveRequestModal">운영이관 요청 모달</b-button>
      </div>
    </div>

    <AlertModal title="알림톡 반려 사유" desc="<p class='m-0 f-body3 c-gray500'>안녕하세요. 카카오톡 알림톡 검수 담당자입니다.<br/><br/>알림톡은 정보성 메시지에 한하여 발송이 가능하오나 해당 메시지 내용 확인 시 발송 목적이 확인되는 문구가 존재하지 않아 정보성 메시지인지 확인이 어렵습니다. 따라서 발송 목적이 확인되도록 메시지 수정 및 고정값 추가 요청드립니다.<br/>*테스트 메시지일 경우 메시지 내 ‘테스트(test)’를 고정값으로 추가 요청 드립니다.<br/><br/>더 자세한 알림톡 검수 가이드는 딜러사를 통해 확인 부탁드립니다. 감사합니다.</p>" />
    <TalkStatusModal/>
    <TalkMoveRequestModal />
  </div>
</template>

<script>
import IconArrowDown from '@/components/service/icons/IconArrowDown.vue'
import TemplateTabs from '@/components/service/template/TemplateTabs.vue'
import SearchInput from '@/components/service/form/SearchInput.vue'
import IconSort from '@/components/service/icons/IconSort.vue';
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue';
import Pagination from '@/components/service/Pagination.vue';
import AlertModal from '@/components/service/modal/AlertModal.vue'
import IconArrowLineDown from '@/components/service/icons/IconArrowLineDown.vue';
import TalkStatusModal from '@/modules/ucAlimTalkTemplateList/components/modal/TalkStatusModal'
import TalkMoveRequestModal from '@/modules/ucAlimTalkTemplateList/components/modal/TalkMoveRequestModal'

export default {
  components: { IconArrowDown, SearchInput, Pagination, IconSort, TemplateTabs, IconArrowRight, AlertModal, IconArrowLineDown, TalkStatusModal, TalkMoveRequestModal, },
  name: "ucAlimTalkTemplateList",
  data() {
    return {
      statusSelected: [],
      statusOptions: [
        { text: '전체', value: 'all' },
        { text: '등록완료', value: 'complete' },
        { text: '승인대기', value: 'wait' },
        { text: '검수시작', value: 'start' },
        { text: '승인', value: 'allow' },
        { text: '반려', value: 'notallow' },
        { text: '저장', value: 'save' },
        { text: '해지', value: 'cancel' },
      ],
      pageCount: 10,
    }
  },
  methods: {
    navigateToManage() {
      this.$router.push(`/uc/template/alimTalkTemplateManage`);
    },
    openTalkReturnModal() {
      this.$bvModal.show('alert-modal');
    },
    openTalkStatusModal() {
      this.$bvModal.show('talk-status-modal');
    },
    openMoveRequestModal() {
      this.$bvModal.show('talk-move-request-modal');
    },
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;
@import '@/assets/scss/service/message.scss';
@import '@/assets/scss/service/template.scss';

.template-dropdown {
  min-width: 160px;
  margin: 0 16px;
}
.search-group {
  width: 355px;
  margin-right: 20px;
}
.form-group {
  margin-left: 24px;
  margin-bottom: 0;
}
.vertical-divider {
  width: 1px;
  height: 16px;
  margin: 0 20px;
  background: var(--border-color);
}
.list-view .pageCount-dropdown {
  margin-right: auto;
}
.table td {
  vertical-align: middle;
}
</style>
