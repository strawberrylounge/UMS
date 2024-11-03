<template lang="">
  <div class="page-resource-list">
    <h2 class="sr-only">자료실 페이지</h2>
    <div class="filter-area">
      <h3 class="customer-title">자료실</h3>
      <SearchBox />
    </div>
    <div class="resource-list">
      <table class="tbl">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>첨부파일</th>
            <th>작성일</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <!-- 이벤트 -->
          <tr @click="$emit('show-detail')">
            <td class="num">000</td>
            <td class="align-left overflow">
              메세지허브 친구톡 서비스 종료 사전안내
            </td>
            <td>
              <div class="icon-wrap">
                <i class="icon-file"></i>
              </div>
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
  name: "ResourceList",
  components: { SelectBox, SearchBox, LabelNotice, Pagination },
};
</script>
<style lang="scss" scoped>
@use "../../../../../assets/scss/landing/abstracts/variables" as v;

.page-resource-list {
  padding-top: 60px;
  @include v.tablet {
    padding-top: 100px;
  }
  .filter-area {
    display: flex;
    flex-direction: column-reverse;
    @include v.tablet {
      @include v.flex(row, space-between, center);
    }
    .customer-title {
      padding-top: 40px;
    }
    .search-box {
      @include v.flex-between;
      gap: 8px;
      .search-input {
        width: calc(100% - 56px);
      }
    }
  }
  .resource-list {
    table {
      thead {
        tr {
          th {
            &:first-child {
              width: 10%;
            }
            &:nth-child(2) {
              width: 40%;
            }
            &:nth-child(3) {
              width: 20%;
            }
            &:nth-child(4) {
              width: 20%;
            }
            &:last-child {
              width: 10%;
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
            .icon-wrap {
              @include v.flex-center;
              .icon-file {
                position: relative;
                display: inline-block;
                width: 16px;
                height: 16px;
                @include v.tablet {
                  width: 24px;
                  height: 24px;
                }
                &::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 16px;
                  height: 16px;
                  background: url(v.$icon + "ico-file.png") no-repeat;
                  background-size: 100%;
                  @include v.tablet {
                    width: 24px;
                    height: 24px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
