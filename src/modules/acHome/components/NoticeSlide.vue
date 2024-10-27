<template>
  <div class="service-home-slide">
    <p class="title f-title1">{{ title }}</p>
    <b-carousel id="home-carousel" no-wrap controls no-interval>
      <b-carousel-slide v-for="(item, index) in data" :key="index">
        <div class="slide-content">
          <p v-if="item.title" class="content-title f-body3 f-bold c-gray700">{{ item.title }}</p>
          <p v-if="item.date" class="content-date f-body5 mt-auto mb-0 c-gray500">{{ item.date }}</p>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "NoticeSlide",
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

.content-title {
  margin-bottom: 8px;
  @include multiline-ellipsis(1);
}
</style>
