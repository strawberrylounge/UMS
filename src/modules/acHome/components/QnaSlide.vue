<template>
  <div class="service-home-slide d-flex flex-column justify-content-between">
    <p class="title f-title1">{{ title }}</p>
    <b-carousel id="home-carousel" no-wrap controls no-interval>
      <b-carousel-slide v-for="(item, index) in data" :key="index">
        <div class="slide-content">
          <p v-if="item.title" class="mb-2 content-title f-body1 c-gray400">{{ item.title }}
            <span v-if="item.status === '(답변완료)'" class="ps-2 text-primary">{{ item.status }}</span>
            <span v-else class="ps-2 c-states-red">{{ item.status }}</span>
          </p>
          <p v-if="item.description" class="m-0 f-body3 c-gray700 content-description">{{ item.description }}</p>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "QnaSlide",
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

.content-description {
  @include multiline-ellipsis(1);
}
</style>
