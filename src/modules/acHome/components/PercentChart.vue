<template>
  <div class="w-100">
    <div class="d-flex justify-content-between">
      <p class="chart-title">발송 성공/실패율 <span class="chart-date">2024.09</span></p>
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
        <LineChart
          :chart-options="chartOptions"
          :chart-data="chartData"
          :height="280"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Line as ChartLine } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement)

export default {
  name: 'PercentChart',
  components: { LineChart: ChartLine },
  data() {
    return {
      categories: ['성공률', '실패율'],
      colors: ['#5C6EFD', '#FF594F'],
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
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          y: {
            ticks: {
              callback: function(value) {
                return value + '%'; // Y축 값에 % 붙이기
              }
            }
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
      const dates = ['SMS', 'LMS', 'MMS', 'KAKAO', 'RCS', '기타'];
      
      this.chartData.labels = dates;

      const datasets = this.categories.map((category, index) => {
        return {
          label: category,
          data: dates.map(() => Math.floor(Math.random() * 101)), // 0 ~ 100 사이의 임의의 값
          borderColor: this.colors[index],
          backgroundColor: this.colors[index],
          borderWidth: 1,
          fill: true,
          lineTension: 0.4,
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
    padding: 28px;
  }
}
</style>