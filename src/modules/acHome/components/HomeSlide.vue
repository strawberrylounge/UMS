<template>
  <div class="service-home-slide">
    <p class="title">{{ title }}</p>
    <b-carousel id="home-carousel" no-wrap controls no-interval>
      <b-carousel-slide v-for="(item, index) in data" :key="index">
        <div class="slide-content">
          <p v-if="item.title" class="content-title">{{ item.title }}</p>
          <p class="content-description">{{ item.description }}</p>
          <p v-if="item.date" class="content-date">{{ item.date }}</p>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeSlide",
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@use "~@/assets/scss/service/base/typography" as *;

#home-carousel {
  max-width: 100%;
}
.title {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
}
.slide-content {
  display: flex;
  flex-direction: column;
  min-height: 148px;
  padding: 24px 56px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--white);
  box-shadow: 0px 4px 16px 0px rgba(83, 88, 113, 0.08);
  text-align: left;
}
.content-title {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
  color: var(--gray-400);
}
.content-description {
  margin-bottom: 8px;
  @include multiline-ellipsis(3);
  color: var(--gray-700);
}
.content-date {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
  color: var(--gray-500);
}
</style>
