<template>
  <nav class="pagination">
    <ul class="pagination-list">
      <li class="pagination-item">
        <b-button class="btn btn-arrow arrow-left arrow-left-double" disabled>
          <IconArrowDoubleRight />
        </b-button>
      </li>
      <li class="pagination-item">
        <b-button class="btn btn-arrow arrow-left">
          <IconArrowRight />
        </b-button>
      </li>
      <li class="pagination-item"><a class="pagination-link active" href="#">1</a></li>
      <li class="pagination-item"><a class="pagination-link" href="#">2</a></li>
      <li class="pagination-item"><a class="pagination-link last-link" href="#">3</a></li>
      <li class="pagination-item">
        <b-button class="btn btn-arrow arrow-right">
          <IconArrowRight />
        </b-button>
      </li>
      <li class="pagination-item">
        <b-button class="btn btn-arrow arrow-right arrow-right-double">
          <IconArrowDoubleRight />
        </b-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconArrowDoubleRight from '@/components/service/icons/IconArrowDoubleRight.vue'
import IconArrowRight from '@/components/service/icons/IconArrowRight.vue'

export default {
  components: { IconArrowDoubleRight, IconArrowRight },
  name: 'Pagination'
}
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  margin: 20px 0;
  ul {
    margin: 0 auto;
  }
}
</style>