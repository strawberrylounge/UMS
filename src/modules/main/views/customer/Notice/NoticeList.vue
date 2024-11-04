<template lang="">
  <div class="page-notice-list">
    <h2 class="sr-only">공지사항 페이지</h2>
    <div class="filter-area">
      <SelectBox />
      <SearchBox />
    </div>
    <div class="notice-list">
      <h3 class="customer-title">공지사항</h3>
      <table class="tbl">
        <thead>
          <tr>
            <th>번호</th>
            <th>종류</th>
            <th>제목</th>
            <th>작성일</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <!-- 이벤트 -->
          <tr @click="$emit('show-detail')">
            <td class="num">000</td>
            <td><LabelNotice type="event" /></td>
            <td class="align-left overflow">
              메세지허브 친구톡 서비스 종료 사전안내
            </td>
            <td>2024.00.00</td>
            <td>운영자</td>
          </tr>
          <!-- 점검 -->
          <tr @click="$emit('show-detail')">
            <td class="num">000</td>
            <td><LabelNotice type="check" /></td>
            <td class="align-left overflow">
              메세지허브 친구톡 서비스 종료 사전안내
            </td>
            <td>2024.00.00</td>
            <td>운영자</td>
          </tr>
          <!-- 장애 -->
          <tr @click="$emit('show-detail')">
            <td class="num">000</td>
            <td><LabelNotice type="failure" /></td>
            <td class="align-left overflow">
              메세지허브 친구톡 서비스 종료 사전안내
            </td>
            <td>2024.00.00</td>
            <td>운영자</td>
          </tr>
          <!-- 안내 -->
          <tr @click="$emit('show-detail')">
            <td class="num">000</td>
            <td><LabelNotice type="guide" /></td>
            <td class="align-left overflow">
              메세지허브 친구톡 서비스 종료 사전안내
            </td>
            <td>2024.00.00</td>
            <td>운영자</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>
<script>
import LabelNotice from "../../../components/LabelNotice.vue";
import Pagination from "../../../components/Pagination.vue";
import SearchBox from "../../../components/SearchBox.vue";
import SelectBox from "../../../components/SelectBox.vue";

export default {
  name: "NoticeList",
  components: { SelectBox, SearchBox, LabelNotice, Pagination },
};
</script>
<style lang="scss" scoped>
@use "../../../../../assets/scss/landing/abstracts/variables" as v;

.page-notice-list {
  padding-top: 60px;
  @include v.tablet {
    padding-top: 100px;
  }
  .filter-area {
    @include v.flex-between;
    padding-bottom: 32px;
    .base-select {
      margin-right: 8px;
    }
  }
  .notice-list {
    table {
      thead {
        tr {
          th {
            &:first-child {
              width: 15%;
              @include v.desktop {
                width: 10%;
              }
            }
            &:nth-child(2) {
              width: 15%;
              @include v.desktop {
                width: 10%;
              }
            }
            &:nth-child(3) {
              width: 35%;
              @include v.desktop {
                width: 45%;
              }
            }
            &:nth-child(4) {
              width: 25%;
            }
            &:last-child {
              width: 15%;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            &.num {
              @include v.tablet {
                font-size: 1.125rem;
              }
            }
            &.overflow {
              padding-left: 12px;
              font-size: 0.875rem;
              @include v.tablet {
                font-size: 1rem;
              }
              @include v.desktop {
                padding-left: 40px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
