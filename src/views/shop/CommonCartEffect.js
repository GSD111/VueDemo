import { useStore } from 'vuex'
import {computed, toRefs} from 'vue'
//购车物逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  // const { cartList } = toRefs(store.state)
  const changItemCart = (shopId, productId, productInfo, num) => {
    // console.log(shopId, productId, productInfo)
    store.commit('changItemCart', {
      shopId,
      productId,
      productInfo,
      num
    })
  }
  //获取购物车中的产品
  const CartProductList = computed(() => {
    const CartProductList = cartList[shopId]?.productList || []

    return CartProductList
  })
  return { cartList,changItemCart ,CartProductList}
}
