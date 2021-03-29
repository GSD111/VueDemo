import { createStore } from 'vuex'

export default createStore({
  state: {
    // shopId 商家id,productId产品id,product 产品信息
    cartList: {}
  },
  mutations: {
    addItemToCart (state, payload) {
      const {
        shopId,
        productId,
        product
      } = payload
      console.log(shopId, productId, product)
    }
  },
  actions: {},
  modules: {}
})
