<template>
  <div class="table-section">
    <div class="table-section-header">
      <p class="title">알람 수신</p>
      <b-button variant="dark" v-b-modal.search-receiver-modal>등록</b-button>
    </div>
    <div class="table-section-body">
      <div class="table-responsive">
        <table class="table">
          <colgroup>
            <col width="25%">
            <col width="60%">
            <col width="15%">
          </colgroup>
          <thead>
            <tr>
              <th>수신자명</th>
              <th>핸드폰 번호</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
              <td>수신자</td>
              <td>010-1234-5678</td>
              <td>
                <button type="button" class="btn btn-icon p-0">
                  <IconClose />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="my-3">NOTE: 아래는 검색된 내용이 없을 경우 테이블 예시입니다.</p>
      <div class="table-responsive">
        <table class="table">
          <colgroup>
            <col width="25%">
            <col width="50%">
            <col width="25%">
          </colgroup>
          <thead>
            <tr>
              <th>API명</th>
              <th>API Key</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3" class="f-body2 c-gray500 text-center">검색된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <SearchReceiverModal />
  </div>
</template>

<script>
import IconClose from '@/components/service/icons/IconClose.vue';
import SearchReceiverModal from '@/components/service/alarm/modal/SearchReceiverModal.vue'

export default {
  components: { IconClose, SearchReceiverModal },
  name: 'AlarmTable'
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/service/alarm.scss';
</style>