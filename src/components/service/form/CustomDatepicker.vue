<template>
  <div class="datepicker-container">
    <b-form-datepicker
      v-model="selectedDate"
      :date-format-options="dateFormatOptions"
      class="service-custom-datepicker"
      placeholder="YYYY-MM-DD"
    />
    <div class="calendar-icon">
      <IconCalendarBlank />
    </div>
  </div>
</template>

<script>
import IconCalendarBlank from '@/components/service/icons/IconCalendarBlank.vue'

export default {
  components: { IconCalendarBlank },
  name: "CustomDatepicker",
  data() {
    return {
      selectedDate: null,
      formattedDate: null,
      dateFormatOptions: { year: 'numeric', month: '2-digit', day: '2-digit' }
    };
  },
  watch: {
    selectedDate(newDate) {
      if (newDate) {
        this.formattedDate = this.formatDate(newDate);
      } else {
        this.formattedDate = null;
      }
    }
  },
  methods: {
    formatDate(date) {
      const year = date.getFullYear();
      const month = (`0${date.getMonth() + 1}`).slice(-2); // 0부터 시작하므로 +1
      const day = (`0${date.getDate()}`).slice(-2);
      return `${year}-${month}-${day}`;
    }
  }
};
</script>

<style scoped lang="scss">
.datepicker-container {
  position: relative;
}
.form-group {
  margin: 0;
}
.service-custom-datepicker {
  width: 100%;
  height: auto;
  padding: 11px 43px 11px 15px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--white);
  box-shadow: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-900);
  &::placeholder {
    color: var(--gray-400);
  }
  &:hover {
    border-color: var(--gray-500);
  }
  &.is-invalid {
    border-color: var(--red-600);
    & + .calendar-icon svg path {
      fill: var(--red-600);
    }
  }
  &:disabled {
    background-color: var(--gray-50);
    & + .calendar-icon svg path {
      fill: var(--gray-400);
    }
  }
}
.calendar-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10; /* 다른 요소보다 위에 표시 */
  pointer-events: none; /* 아이콘 클릭시 달력이 닫히지 않게 */
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: var(--gray-700);
    }
  }
}
</style>
