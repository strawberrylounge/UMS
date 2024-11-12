<template>
  <div>
    <div class="d-flex align-items-center">
      <p class="m-0 mr-1 pr-3 f-title3 c-gray900">전체 성공/실패 현황</p>
      <p class="m-0 f-body4 c-gray500">발송성공 <span class="count c-primary">1건</span></p>
      <i class="vertical-divier"></i>
      <p class="m-0 f-body4 c-gray500">발송실패 <span class="count c-states-red">1건</span></p>
      <div id="legend-container">
        <ul class="category"></ul>
      </div>
    </div>

    <div class="chart-card card">
      <div class="chart-container">
        <Bar
          ref="chartCanvas"
          :chart-options="chartOptions"
          :chart-data="chartData"
          :height="540"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

const backgroundHighlightFailDay = {
  id: 'backgroundHighlightFailDay',
  beforeDraw(chart) {
    const { ctx, chartArea, tooltip } = chart;
    if (tooltip._active && tooltip._active.length) {
      const chartWidth = chart.width;
      const xAxisLength = chart.scales.x.ticks.length
      const activePoint = tooltip._active[0];
      const barWidth = activePoint.element.width
      const x = activePoint.element.x - 10 - barWidth / 2;

      ctx.save();
      ctx.fillStyle = '#f3f4f6'; // 배경색 설정
      ctx.fillRect(x, chartArea.top, (chartWidth / xAxisLength - 2), chartArea.bottom - chartArea.top); // x축 영역 너비에 맞춰서 설정
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

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, backgroundHighlightFailDay, htmlLegendPlugin)

export default {
  name: 'FailChart',
  components: { Bar },
  data() {
    return {
      categories: ['미등록 발신번호', '요청한 데이터 없음', '발송타임아웃', '승인된카카오톡 템플릿 없음', '기타 오류'],
      colors: ['#6D6EFA', '#FF594F', '#D2D2FD', '#FED932', '#F7A355'],
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
      const dates = ['2024.09.29', '2024.09.30', '2024.10.01', '2024.10.02', '2024.10.03', '2024.10.04', '2024.10.05', '2024.10.06', '2024.10.07', '2024.10.08', '2024.10.09', '2024.10.10', '2024.10.11', '2024.10.12', '2024.10.13', '2024.10.14'];
      
      this.chartData.labels = dates;

      const datasets = this.categories.map((category, index) => {
        return {
          label: category,
          data: dates.map(() => Math.floor(Math.random() * 100001)), // 0 ~ 100000 사이의 임의의 값
          backgroundColor: this.colors[index],
          borderColor: this.colors[index],
          borderRadius: 8,
          pointStyle: 'circle',
        }
      });
      this.chartData.datasets = datasets;
    }
  },
}
</script>

<style scoped lang="scss">
.count {
  padding-left: 6px;
}
.vertical-divier {
  width: 1px;
  height: 16px;
  background: var(--border-color);
  margin: 0 12px;
}
#legend-container {
  margin-left: auto;
}
.category {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.chart-card {
  margin-top: 28px;
  padding: 28px;
  box-shadow: 0px 10px 13px 0px rgba(17, 38, 146, 0.05);
}
</style>