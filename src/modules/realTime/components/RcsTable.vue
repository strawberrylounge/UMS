<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>
            <div class="d-flex align-items-center">
              날짜
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              상품
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              전환발송
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              전체건수
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              발송중건수
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              발송대기건수
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              성공건수
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              실패건수
              <IconSort />
            </div>
          </th>
          <th>
            <div class="d-flex align-items-center">
              발송성공률
              <IconSort />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in [0,1,2,3,4]" :key="index">
          <td>2024.02.06 12:15:11</td>
          <td>SMS</td>
          <td>N</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0%</td>
        </tr>
      </tbody>
    </table>

    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/service/Pagination.vue';
import IconSort from '@/components/service/icons/IconSort.vue';

export default {
  components: { Pagination, IconSort, },
  name: "RcsTable",
  props: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .table tbody tr:last-child td {
    border-bottom: 1px solid var(--border-color);
  }
</style>