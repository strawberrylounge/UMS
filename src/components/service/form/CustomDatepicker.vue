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
      dateFormatOptions: { year: 'numeric', month: '2-digit', day: '2-digit' }
    };
  },
  methods: {
    setDate(date) {
      this.selectedDate = date;
    }
  }
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as typography;

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
      fill: var(--gray700);
    }
  }
}
</style>
