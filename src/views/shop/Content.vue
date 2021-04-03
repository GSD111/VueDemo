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
          <span class="product__number__minus iconfont"
                @click="()=>{ changeItem(shopId,item.id,item,-1,shopName) }"
          >&#xe691;</span>
          {{ cartList?.[shopId]?.productList?.[item.id]?.count || 0 }}
          <span class="product__number__plus iconfont"
                @click="()=>{ changeItem(shopId,item.id,item,1,shopName) }"
          >&#xe606;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from './CommonCartEffect'


//购物车相关逻辑
const useCartEffect = () => {
  const route = useRoute()
  const store = useStore()
  const shopId = route.params.id
  const { cartList,changItemCart } = useCommonCartEffect()
  const changeItem = (shopId,productId,item,num,shopName) =>{
    changItemCart(shopId,productId,item,num)
    changeShopName(shopId,shopName)
  }
  const changeShopName = (shopId,shopName) =>{
    store.commit('changeShopName',{ shopId,shopName})
  }
  return {
    cartList,
    shopId,
    changItemCart,changeItem
  }
}
export default {
  name: 'Content',
  props:['shopName'],
  setup () {
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
    const { cartList,shopId,changeItem} = useCartEffect()
    return { list,cartList, shopId, changeItem }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
@import '../../style/viriables.scss';
@import "../../style/product.scss";
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

</style>
