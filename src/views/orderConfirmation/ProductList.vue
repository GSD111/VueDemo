<template>
  <div class="products">
    <div class="products__title">{{ shopName }}</div>
    <div class="products__wrapper">
      <div class="products__list">
        <template v-for="item in CartProductList" :key="item.id">
          <div class="products__item" v-if="item.count > 0">
            <img class="products__item__img" :src="item.imgUrl"/>
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
              <span>
                  <span class="products__item__yen">&yen;</span>
                  {{ item.price }} x {{ item.count }}
              </span>
                <span class="products__item__total">
                 <span class="products__item__yen">&yen;</span>
                 {{ (item.price * item.count).toFixed(2) }}
              </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {useCommonCartEffect} from '../shop/CommonCartEffect'
import {useRoute} from 'vue-router'

export default {
  name: "ProductList",
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const {CartProductList, shopName} = useCommonCartEffect(shopId)
    return {CartProductList, shopName}
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.products {
  margin: .16rem .18rem .2rem .18rem;
  background: $bgColor;
  overflow-y: scroll;

  &__wrapper {
    position: absolute;
    margin: 0 .18rem;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
    overflow-y: scroll;
  }

  &__list {
    background: $bgColor;
  }

  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem .16rem;

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      flex: 1;
      overflow: hidden;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }

    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #e93b3b;
    }

    &__yen {
      font-size: .14rem;
    }

    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }
  }
}
</style>
