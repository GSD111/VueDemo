<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl"/>
    <div class="shop__content">
      <div class="shop__content__title">{{ item.title }}</div>
      <div class="shop__content__tags">
          <span
            v-for="(innerItem,index) in item.tag"
            :key="index"
            class="shop__content__tag">{{ innerItem }}</span>
      </div>
      <p class="shop__content__highlight">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
@import "../style/mixin.scss";

.shop {
  display: flex;
  padding-top: .12rem;
  padding-bottom: .12rem;
  border-bottom: 1px solid $content-bgColor;

  &__img {
    margin-right: .16rem;
    width: .56rem;
    height: .56rem;
  }

  &__content {
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }

    &__tag {
      margin-right: .16rem;
    }

    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
  }
}
</style>
