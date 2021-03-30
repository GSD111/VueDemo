import { useStore } from 'vuex'
import {  toRefs } from 'vue'
//购车物逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changItemCart = (shopId, productId, productInfo, num) => {
    // console.log(shopId, productId, productInfo)
    store.commit('changItemCart', {
      shopId,
      productId,
      productInfo,
      num
    })
  }
  return { cartList,changItemCart }
}
