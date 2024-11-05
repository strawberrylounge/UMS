<template lang="">
  <div class="pagination-wrap">
    <ul class="pagination">
      <li class="page-item arrow-first disabled">
        <button class="page-link" aria-label="처음으로"></button>
      </li>
      <li class="page-item arrow-prev disabled">
        <button class="page-link" aria-label="이전"></button>
      </li>
      <li class="page-item">
        <button class="page-link on" aria-current="page">1</button>
      </li>
      <li class="page-item">
        <button class="page-link">2</button>
      </li>
      <li class="page-item">
        <button class="page-link">3</button>
      </li>
      <li class="page-item arrow-next">
        <button class="page-link" aria-label="다음"></button>
      </li>
      <li class="page-item arrow-last">
        <button class="page-link" aria-label="마지막으로"></button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Pagination",
};
</script>
<style lang="scss" scoped>
@use "../../../assets/scss/landing/abstracts/variables" as v;

.pagination-wrap {
  padding-top: 20px;
  @include v.tablet {
    padding-top: 40px;
  }
  .pagination {
    @include v.flex-center;
    .page-item {
      height: 100%;
      .arrow-first,
      .arrow-prev {
        padding-right: 8px;
        @include v.tablet {
          padding-right: 20px;
        }
      }
      .arrow-next,
      .arrow-last {
        padding-right: 8px;
        @include v.tablet {
          padding-left: 20px;
        }
      }
      &:not(:last-child) {
        padding-right: 20px !important;
        @include v.tablet {
          padding-right: 28px !important;
        }
      }
      .page-link {
        position: relative;
        width: 12px;
        height: 100%;
        font-weight: 400;
        font-size: 0.75rem;
        color: v.color(gray600);
        @include v.tablet {
          font-size: 1rem;
        }
        &.on {
          font-weight: 700;
          color: v.color(primary300);
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          transform: translate(-50%, -50%);
        }
      }

      // 처음
      &.arrow-first {
        .page-link {
          &::after {
            // background: url(v.$icon + "ico-pagination-first.png") no-repeat;
            background-size: 100%;
          }
        }
        &.disabled {
          .page-link {
            &::after {
              background: url(v.$icon + "ico-pagination-first-disabled.png")
                no-repeat;
              background-size: 100%;
            }
          }
        }
      }
      // 이전
      &.arrow-prev {
        .page-link {
          &::after {
            // background: url(v.$icon + "ico-pagination-prev.png") no-repeat;
            background-size: 100%;
          }
        }
        &.disabled {
          .page-link {
            &::after {
              background: url(v.$icon + "ico-pagination-prev-disabled.png")
                no-repeat;
              background-size: 100%;
            }
          }
        }
      }
      // 다음
      &.arrow-next {
        .page-link {
          &::after {
            background: url(v.$icon + "ico-pagination-next.png") no-repeat;
            background-size: 100%;
          }
        }
        &.disabled {
          .page-link {
            &::after {
              /* background: url(v.$icon + "ico-pagination-next-disabled.png")
                no-repeat;*/
              background-size: 100%;
            }
          }
        }
      }
      // 마지막
      &.arrow-last {
        .page-link {
          &::after {
            background: url(v.$icon + "ico-pagination-last.png") no-repeat;
            background-size: 100%;
          }
        }
        &.disabled {
          .page-link {
            &::after {
              /*  background: url(v.$icon + "ico-pagination-last-disabled")
                no-repeat;*/
              background-size: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
