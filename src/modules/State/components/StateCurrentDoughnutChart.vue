<template>
  <div class="card">
    <p class="mt-0 f-title1 c-gray700">이용서비스별추이</p>
    <div id="legend-doughnut-container" class="d-flex">
      <ul class="category ml-auto pb-1 d-flex"></ul>
    </div>
    <div class="chart-container">
      <Doughnut
        ref="stateDoughnutChartCanvas"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :height="470"
      />
    </div>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'
import { Chart as ChartJS, ArcElement, Title, Tooltip, CategoryScale, LinearScale } from 'chart.js'

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
            chart.toggleDataVisibility(item.index);
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
  name: 'StateCurrentDoughnutChart',
  components: { Doughnut },
  data() {
    return {
      categories: ['문자', 'RCS', 'KAKAO'],
      colors: ['#6D6EFA', '#BD6AFF', '#FED932'],
      chartData: {
        labels: ['문자', 'RCS', 'KAKAO'], 
        datasets: [
          {
            backgroundColor:['#6D6EFA', '#BD6AFF', '#FED932'],
            data: [30,30,40]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          htmlLegend: {
            containerID: 'legend-doughnut-container',
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
              label: (context, index) => {
                let label = ` ${context.label}: ${context.formattedValue}`;
                return label; // 데이터 텍스트 포맷
              },
            }
          },
        },
      },
    }
  },
  created() {
    ChartJS.register(Title, ArcElement, Tooltip, CategoryScale, LinearScale, backgroundHighlightStateCurrent, htmlLegendPlugin)
  },
  methods: {
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