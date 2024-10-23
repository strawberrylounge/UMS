<template>
  <div>
    <p class="chart-title">당일 발송건수 <span class="chart-date">2024.09.09</span></p>
    <div class="card chart-card">
      <div class="chart-container">
        <Bar
          id="service-today-chart"
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
  name: 'TodayChart',
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
        indexAxis: "y",
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            title: {
              color: '#374151',
              font: {
                family: 'Pretendard',
                size: 12,
                style: 'normal',
                weight: 400,
              },
            },
            ticks: {
              color: '#374151',
              align: 'end',
              font: {
                family: 'Pretendard',
                size: 12,
                style: 'normal',
                weight: 400,
              },
            },
          },
          y: {
            title: {
              color: '#374151',
              font: {
                family: 'Pretendard',
                size: 12,
                style: 'normal',
                weight: 400,
              },
            },
            ticks: {
              color: '#374151',
              align: 'end',
              font: {
                family: 'Pretendard',
                size: 12,
                style: 'normal',
                weight: 400,
              },
            },
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
      this.chartData.labels = this.categories

      this.chartData.datasets = [{
        axis: 'y',
        label: 'Count',
        barThickness: 10,
        borderRadius: 8,
        backgroundColor: (ctx) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 220, 0);
          
          gradient.addColorStop(0, 'rgba(109, 110, 250, .5)'); // 시작 색상
          gradient.addColorStop(1, 'rgba(109, 110, 250, 1)'); // 끝 색상: 불투명하게 변경

          return gradient;
        },
        data: this.categories.map(() => Math.floor(Math.random() * 18001)),
      }];

    },
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