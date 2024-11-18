<template>
  <div class="search-container">
    <input
      type="password"
      class="form-control"
    />
    <span class="search-icon">
      <IconEye />
    </span>
  </div>
</template>

<script>
import IconEye from '@/components/service/icons/IconEye.vue';

export default {
  components: { IconEye, },
  name: 'PasswordInput',
  props: {
    placeholder: {
      type: String,
      default: '검색어를 입력해주세요'
    }
  },
  data() {
    return {
      type: 'password'
    };
  },
  methods: {
    toggleType() {
      if (this.type == 'password') {
        this.type = 'text'
      }
      if (this.type == 'text') {
        this.type = 'password'
      }
    }
  }
};
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  width: 100%;
  position: relative;
}
.form-control {
  padding-right: 43px;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  z-index: 2;
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: var(--gray700);
    }
  }
}
</style>
