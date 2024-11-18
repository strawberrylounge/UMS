<template>
  <div class="card">
    <p class="mt-0 f-title1 c-gray700">이용(발송성공)건수 추이</p>
    <div id="legend-container" class="d-flex">
      <ul class="category ml-auto pb-1"></ul>
    </div>
    <div class="chart-container">
      <Bar
        ref="stateChartCanvas"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :height="470"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

const backgroundHighlightStateCurrent = {
  id: 'backgroundHighlightStateCurrent',
  beforeDraw(chart) {
    const { ctx, chartArea, tooltip } = chart;
    if (tooltip._active && tooltip._active.length) {
      const chartWidth = chart.width;
      const activePoint = tooltip._active[0];
      const barWidth = activePoint.element.width
      const x = activePoint.element.x - 48 - barWidth / 2;

      ctx.save();
      ctx.fillStyle = '#f3f4f6'; // 배경색 설정
      ctx.fillRect(x, chartArea.top, (chartWidth / 2 - 14), chartArea.bottom - chartArea.top); // x축 영역 너비에 맞춰서 설정
      ctx.restore();
    }
  }
};

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  if (legendContainer) {
    const listContainer = legendContainer.querySelector('ul');

    return listContainer;
  }
};


const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    if (ul) {
      while (ul.firstChild) {
        ul.firstChild.remove();
      }
      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'category-item d-flex align-items-center';
        li.style.margin = '0 0 0 16px'
        li.style.cursor = 'pointer'

        li.onclick = () => {
          const {type} = chart.config;
          if (type === 'pie' || type === 'doughnut') {
            chart.toggleDataVisibility(item.index);w
          } else {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
          }
          chart.update();
        };

        const boxSpan = document.createElement('i');
        boxSpan.className = 'category-item-circle rounded-circle mr-2';
        boxSpan.style.width = '8px'
        boxSpan.style.height = '8px'
        boxSpan.style.backgroundColor = item.fillStyle

        const textContainer = document.createElement('span');
        textContainer.className = 'f-body6 c-gray700';
        textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    }
  }
};

export default {
  name: 'StateCurrentBarChart',
  components: { Bar },
  data() {
    return {
      categories: ['이용 건수'],
      colors: ['#5C6EFD'],
      chartData: {
        labels: [], 
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          htmlLegend: {
            // ID of the container to put the legend in
            containerID: 'legend-container',
          },
          legend: {
            display: false,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#374151',
            titleFont: { family: 'Pretendard', size: 12, weight: 400 },
            bodyColor: '#111827',
            bodyFont: { family: 'Pretendard', size: 12, weight: 700 },
            cornerRadius: 8,
            borderWidth: 1,
            borderColor: '#E5E7EB',
            usePointStyle: true,
            boxWidth: 6,
            callbacks: {
              title: (tooltipItems) => {
                const date = tooltipItems[0].label;
                return `${date}`; // 날짜 텍스트만 표시
              },
              label: (context) => {
                let label = ` ${context.dataset.label}: ${context.formattedValue}`;
                return label; // 데이터 텍스트 포맷
              },
              // labelPointStyle: () => ({
              //   pointStyle: 'circle',
              //   rotation: 0,
              //   pointRadius: 1 // 동그라미 크기를 간접적으로 제한
              // }),
            }
          },
        },
        interaction: {
          mode: 'index', // x축을 기준으로 툴팁을 표시
          intersect: false,
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
              align: 'center', 
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
              align: 'center', 
              font: {
                family: 'Pretendard',
                size: 12,
                style: 'normal',
                weight: 400,
              },
            },
          }
        }
      },
    }
  },
  created() {
    this.generateRandomData();
  },
  methods: {
    // 임시 데이터
    generateRandomData() {
      const dates = ['2024-09', '2024-10'];

      this.chartData.labels = dates;

      const datasets = this.categories.map((category, index) => {
        return {
          label: category,
          data: dates.map(() => Math.floor(Math.random() * 5)), // 0 ~ 100000 사이의 임의의 값
          backgroundColor: this.colors[index],
          borderColor: this.colors[index],
          borderRadius: 8,
          pointStyle: 'circle',
        }
      });
      this.chartData.datasets = datasets;
    }
  },
  mounted() {
    ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, backgroundHighlightStateCurrent, htmlLegendPlugin)
  },
  beforeDestroy() {
    ChartJS.unregister(backgroundHighlightStateCurrent); // 플러그인 해제
  },
}
</script>

<style scoped lang="scss">
.card {
  padding: 28px;
  .f-title1 {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>