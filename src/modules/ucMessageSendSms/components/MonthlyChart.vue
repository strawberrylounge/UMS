<template>
  <div>
    <div class="d-flex justify-content-between">
      <p class="chart-title">월별 발송건수 <span class="chart-date">2024.09</span></p>
      <ul class="chart-category-list">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="chart-category-item"
        >
          <i :style="{ backgroundColor: colors[index] }" class="rounded-circle"></i>
          <span>{{ category }}</span>
        </li>
      </ul>
    </div>
    <div class="card chart-card">
      <div class="chart-container">
        <Bar
          id="service-ㅡMonthly-chart"
          :options="chartOptions"
          :data="chartData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'MonthlyChart',
  components: { Bar },
  data() {
    return {
      categories: ['SMS', 'LMS', 'MMS', 'KAKAO', 'RCS', '기타'],
      colors: ['#5C6EFD', '#FAA0A2', '#49A677', '#FED932', '#BD6AFF', '#F7A355'],
      chartData: {
        labels: [], 
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    }
  },
  created() {
    this.generateRandomData();
  },
  methods: {
    // NOTE: 임시 데이터
    generateRandomData() {
      const dates = ['09.01', '09.02', '09.03', '09.04', '09.05', '09.06', '09.07', '09.08', '09.09', '09.10', '09.11', '09.12', '09.13', '09.14', '09.15', '09.16', '09.17', '09.18', '09.19', '09.20'];
      
      this.chartData.labels = dates;

      const datasets = this.categories.map((category, index) => {
        return {
          label: category,
          data: dates.map(() => Math.floor(Math.random() * 100001)), // 0 ~ 100000 사이의 임의의 값
          backgroundColor: this.colors[index],
          borderColor: this.colors[index],
          borderWidth: 1,
          borderRadus: 8,
        }
      });
      this.chartData.datasets = datasets;
    }
  },
}
</script>

<style scoped lang="scss">
.chart {
  &-card {
    padding: 27px 35px;
  }
}
</style>