<template lang="">
  <a href="#" class="btn-inquiry"></a>
</template>
<script>
export default {
  name: "BtnInquiry",
};
</script>
<style lang="scss" scoped>
@use "../../../../assets/scss/landing/abstracts/variables" as v;

.btn-inquiry {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: v.color(white);
  box-shadow: 2px 6px 12px 0px rgba(98, 104, 138, 0.24);
  @include v.tablet {
    width: 64px;
    height: 64px;
    &::after {
      content: "1 :1 문의";
      position: absolute;
      left: 50%;
      bottom: 10px;
      font-weight: 700;
      font-size: 0.75rem;
      color: v.color(primary400);
      text-align: center;
      transform: translateX(-50%);
      white-space: nowrap;
    }
  }
  @include v.desktop {
    bottom: 40px;
    right: 40px;
    width: 100px;
    height: 100px;
    &::after {
      bottom: 15px;
      font-size: 0.875rem;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 18px;
    background: url(v.$common + "chat.png");
    background-size: 100%;
    transform: translate(-50%, -50%);
    @include v.tablet {
      top: 20px;
      width: 40px;
      height: 25px;
    }
    @include v.desktop {
      top: 35px;
      width: 75px;
      height: 45px;
    }
  }
}
</style>
