<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="top__header__back iconfont">&#xe7ea;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">重庆市九龙坡区华润广场A座</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">Jhon Sir</span>
          <span class="top__receiver__info__phone">13355555555</span>
        </div>
        <div class="top__receiver__icon iconfont">&#xe7ea;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__list">
        <div class="products__item"
             v-for="item in CartProductList"
             :key="item.id">
          <img class="products__item__img" :src="item.imgUrl"/>
          <div class="products__item__detail">
            <h4 class="products__item__title">{{ item.name }}</h4>
            <p class="products__item__price">
              <span class="products__item__yen">&yen; {{ item.price }} * {{ item.count }}</span>
              <span class="products__item__yen">&yen; {{ item.price * item.count }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../shop/CommonCartEffect'
import { useRoute } from 'vue-router'

export default {
  name: 'OrderConfirmation',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { CartProductList } = useCommonCartEffect(shopId)

    return { CartProductList }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $content-bgColor;
}

.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, $btnColor 50%);
  background-repeat: no-repeat;

  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;

    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }

  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;

    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      color: $content-fontcolor;
      font-size: .16rem;
    }

    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }

    &__info {
      padding: .06rem 0 0 .16rem;

      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: $content-btn;
      }
    }

    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: $content-fontcolor;
      font-size: .16rem;
    }
  }
}

.products{
    margin:.16rem .18rem .55rem .18rem;
    background: $bgColor;
  &__list{

  }
  &__item {
    position: relative;
    display: flex;
    padding: .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex:1;
      overflow: hidden;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }

    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      color: #e93b3b;
    }

    &__yen {
      font-size: .14rem;
    }

    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: #999;
      text-decoration: line-through;
    }

  }
}

</style>
