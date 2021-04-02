<template>
  <div class="mask" v-if="showCart && calculations.total > 0" @click="handleShowCartChange"/>
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all" @click="() => setCartItemChecked(shopId)">
           <span
             class="product__header__icon iconfont"
             v-html="calculations.allChecked ?'&#xe652;':'&#xe667;'"
           />
          全选
        </div>
        <div class="product__header__clear">
          <span class="product__header__btn" @click="() => clearCartProducts(shopId)">清空购物车</span>
        </div>
      </div>
        <div class="product__item" v-for="item in CartProductList" :key="item.id">
          <div class="product__item__checked iconfont"
               v-html="item.check ? '&#xe652;':'&#xe667;'"
               @click="()=>{ handleCartItemChecked(shopId,item.id) }"/>
          <img class="product__item__img" :src="item.imgUrl"/>
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;{{ item.price }}</span>
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span class="product__number__minus"
                  @click="()=>{ changItemCart(shopId,item.id,item,-1) }"
            >-</span>
            {{ getProductCartInfo(shopId, item.id) }}
            <span class="product__number__plus"
                  @click="()=>{ changItemCart(shopId,item.id,item,1) }"
            >+</span>
          </div>
        </div>
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png"
             @click="handleShowCartChange"/>
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>
      <div class="check__info">总计：
        <span class="check__info__price">&yen; {{ calculations.price }}</span>
      </div>
      <div class="check__btn" v-show="calculations.total > 0">
         <router-link :to="{ path:`/orderConfirmation/${shopId}` }"> 去结算</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {ref} from 'vue'
import {useCommonCartEffect} from './CommonCartEffect'
//购物车商品信息、数量、价格获取计算
const useCartEffect = (shopId) => {
  const store = useStore()
  const {cartList, CartProductList, calculations, changItemCart} = useCommonCartEffect(shopId)
  // const cartList = store.state.cartList
  //修改商品选中状态
  const handleCartItemChecked = (shopId, productId) => {
    store.commit('changeCartChecked', {shopId, productId})
  }
  const setCartItemChecked = (shopId) => {
    store.commit('setCartItemChecked', {shopId})
  }
  //清空购物车
  const clearCartProducts = (shopId) => {
    store.commit('clearCartProducts', shopId)
  }

  //商品数量显示
  const getProductCartInfo = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId].count || 0
  }

  return {
    CartProductList, cartList, calculations, changItemCart, getProductCartInfo,
    handleCartItemChecked, clearCartProducts, setCartItemChecked
  }
}

//展示隐藏购物车逻辑
const toggleCartShow = () => {
  const showCart = ref(false)
  const handleShowCartChange = () => {
    showCart.value = !showCart.value
  }
  return {showCart, handleShowCartChange}
}


export default {
  name: 'Cart',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const {
      CartProductList, cartList, calculations, getProductCartInfo,
      changItemCart, handleCartItemChecked, clearCartProducts, setCartItemChecked
    } = useCartEffect(shopId)
    const {showCart, handleShowCartChange} = toggleCartShow()

    // const { showToast } = ToatsFunction()
    // const handleClick = () =>{
    //   showToast('测试一下')
    // }
    return {
      shopId, CartProductList, cartList, calculations, showCart, setCartItemChecked, getProductCartInfo,
      changItemCart, handleCartItemChecked, clearCartProducts, handleShowCartChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import '../../style/mixin.scss';

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}

.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
  z-index: 2;
  background-color: $bgColor;
}

.product {
  flex: 1;
  overflow-y: scroll;
  background: $bgColor;

  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;

    &__all {
      width: .64rem;
      margin-left: .17rem;
    }

    &__icon {
      display: inline-block;
      color: $btnColor;
      vertical-align: top;
      font-size: .19rem;
    }

    &__clear {
      flex: 1;
      margin-right: .16rem;
      text-align: right;
    }

    &__btn {
      display: inline-block;
    }
  }

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: solid .01rem $content-bgColor;

    &__checked {
      color: $btnColor;
      font-size: .2rem;
      line-height: .5rem;
      margin-right: .2rem;
    }

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
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

.check {
  display: flex;
  line-height: .49rem;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  background-color: $bgColor;

  &__icon {
    position: relative;
    width: .84rem;

    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }

    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      text-align: center;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      border-radius: 50%;
      background-color: $hightlight-fontColor;
      font-size: .12rem;
      color: $bgColor;
      transform: scale(.5);
      transform-origin: left center;
    }
  }

  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;

    &__price {
      font-size: .18rem;
      color: $hightlight-fontColor;
    }
  }

  &__btn {
    width: .98rem;
    font-size: .14rem;
    color: $bgColor;
    text-align: center;
    background: #4fb0f9;

    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}

</style>
