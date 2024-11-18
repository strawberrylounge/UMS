<template>
  <div class="datepicker-container">
    <DatePicker v-model="selectedDate" :type="mode" :lang="lang" :placeholder="placeholderText">
      <template slot="icon-calendar">
        <IconCalendarBlank />
      </template>
    </DatePicker>
    <!-- <div class="calendar-icon">
      <IconCalendarBlank />
    </div> -->
  </div>
</template>

<script>
import IconCalendarBlank from '@/components/service/icons/IconCalendarBlank.vue'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  props: {
    mode: {
      type: String,
      default: "day", // 기본값은 일별 선택
    },
  },
  components: { IconCalendarBlank, DatePicker },
  name: "CustomVueDatepicker",
  data() {
    return {
      selectedDate: null,
      lang: {
        days: ['일', '월', '화', '수', '목', '금', '토'],
        months: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        monthsShort: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ]
      }
    };
  },
  computed: {
    // `mode`에 따라 placeholder 텍스트 변경
    placeholderText() {
      return this.mode === "month" ? "YYYY-MM" : "YYYY-MM-DD";
    },
  },
  methods: {
    setDate(date) {
      this.selectedDate = date;
    },
  },
};
</script>

<style lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

.datepicker-container {
  position: relative;
  .mx-datepicker {
    width: 100%;
  }
  .mx-input {
    width: 100%;
    height: auto;
    padding: 11px 43px 11px 15px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--white);
    box-shadow: none;
    @include typography.font-style(14px, 400, 140%, -0.28px);
    color: var(--gray900);
    &::placeholder {
      color: var(--gray400);
    }
    &:hover {
      border-color: var(--gray500);
    }
    &.is-invalid {
      border-color: var(--red-600);
      & + .calendar-icon svg path {
        fill: var(--red-600);
      }
    }
    &:disabled {
      background-color: var(--gray50);
      & + .calendar-icon svg path {
        fill: var(--gray400);
      }
    }
  }
  .mx-icon-calendar {
    svg {
      width: 20px;
      height: 20px;
    }
    path {
      fill: var(--white)
    }
  }
}
.mx-datepicker-main {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    @include typography.font-style(14px, 400, 140%, -0.28px);
    color: var(--gray900);
}
.mx-table {
  th {
    @include typography.font-style(12px, 400, 160%, -0.24px);
    color: var(--gray500);
  }
  td {
    @include typography.font-style(14px, 400, 180%, -0.28px);
    color: var(--gray900);
  }
}
.mx-calendar-content .cell:hover {
  background-color: var(--primary);
  border-radius: 50%;
  color: var(--white);
}
.mx-table-date .today {
  color: var(--primary);
}
.mx-calendar-header-label {
  button {
    @include typography.font-style(16px, 700, 140%, -0.32px);
    color: var(--gray900);
  }
}
.mx-icon-left:before, .mx-icon-right:before, .mx-icon-double-left:before, .mx-icon-double-right:before, .mx-icon-double-left:after, .mx-icon-double-right:after {
  width: 12px;
  height: 12px;
  border-width: 3px 0 0 3px;
  border-color: var(--gray900);
}
.mx-datepicker-popup {
  border-radius: 8px;
}
</style>
