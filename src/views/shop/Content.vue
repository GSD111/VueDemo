<template>
  <div class="content">
    <div class="category">
      <div class="category__item  category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令鲜蔬</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item.id">
        <img class="product__item__img" :src="item.imgUrl"/>
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;{{ item.price }}</span>
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          {{ cartList?.[shopId]?.[item.id]?.count || 0 }}
          <span class="product__number__plus"
                @click="()=>{ addItemToCart(shopId,item.id,item) }"
          >+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const addItemToCart = (shopId, productId, product) => {
    // console.log(shopId, productId, product)
    store.commit('addItemToCart', {
      shopId,
      productId,
      product
    })
  }
  return {
    cartList,
    addItemToCart
  }
}
export default {
  name: 'Content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    // console.log(route.params.id)
    const list = reactive([
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
        name: '小番茄250/克',
        sales: '100',
        price: '33.6',
        oldPrice: '66.6'
      },
      {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png',
        name: '车厘子500/克',
        sales: '1000',
        price: '33.6',
        oldPrice: '66.6'
      },
      {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
        name: '奉节橙子500/克',
        sales: '10000',
        price: '33.6',
        oldPrice: '66.6'
      },
      {
        id: 4,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/crab.png',
        name: '帝王蟹250/克',
        sales: '100',
        price: '33.6',
        oldPrice: '66.6'
      }
    ])
    const {
      cartList,
      addItemToCart
    } = useCartEffect()
    return {
      list,
      cartList,
      shopId,
      addItemToCart
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
@import '../../style/viriables.scss';

.content {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 1.66rem;
  bottom: .5rem;
}

.category {
  width: .76rem;
  height: 100%;
  overflow-y: scroll;
  background: $search-bgColor;
  color: $content-fontcolor;

  &__item {
    line-height: .4rem;
    font-size: .14rem;
    text-align: center;

    &--active {
      background: $bgColor;
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: solid .01rem $content-bgColor;

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
    }

    &__price {
      margin: 0;
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

  .product__number {
    position: absolute;
    right: 0;
    bottom: .12rem;

    &__minus, &__plus {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      line-height: .16rem;
      border-radius: 50%;
      font-size: .2rem;
      text-align: center;
    }

    &__minus {
      border: solid .01px $content-btn;
      color: $content-btn;
      margin-right: .05rem;
    }

    &__plus {
      background: $btnColor;
      color: $bgColor;
      margin-left: .05rem;
    }
  }
}
</style>
