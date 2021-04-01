import {useStore} from 'vuex'
import {computed} from 'vue'
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

  //计算购物车中的商品数量及金额总价
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = {total: 0, price: 0, allChecked: true}
    if (productList) {
      for (const i in productList) {
        // console.log(i)
        const product = productList[i]
        result.total += product.count        //计算商品数量
        if (product.check) {
          result.price += (product.count * product.price)   //计算商品价格
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false            //商品选中状态
        }
        // console.log(productList[i])
        // count += productList[i].count
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  //商家的名称
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    // console.log(cartList[shopId]?.shopName)
    return shopName

  })
  return {cartList, CartProductList, shopName, calculations, changItemCart, handleBackClick}
}
