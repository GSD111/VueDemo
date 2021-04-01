import { useStore } from 'vuex'
import { computed } from 'vue'
import {useRouter} from "vue-router";
//购车物逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const router = useRouter()
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
  //返回上一页
  const handleBackClick = () => {
    router.back()
  }
  //获取购物车中的产品
  const CartProductList = computed(() => {
    const CartProductList = cartList[shopId]?.productList || []

    return CartProductList
  })
  return {cartList, CartProductList,changItemCart,handleBackClick}
}
