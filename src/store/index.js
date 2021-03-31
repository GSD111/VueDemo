import { createStore } from 'vuex'

export default createStore({
  state: {
    // shopId 商家id,shopName 商家名 productList 产品信息productId产品id, 数据结构如下：
    // carlist:{
    //   shopId:{
    //    shopName:'沃尔玛'
    //    productList:{
    //     productId:{
    //         id:1,
    //         name:'tomato'
    //       }
    //     }
    //   }
    // }
    cartList: {}
  },

  //处理购物车传递的数据
  mutations: {
    //获取购物车中的产品数据信息
    changItemCart (state, payload) {
      const {
        shopId,
        productId,
        productInfo
      } = payload
      // console.log(shopId, productId, productInfo)
      let shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      // if (!shopInfo) {
      //   shopInfo = {}
      // }
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      // console.log(state.cartList)
    },
    //获取商家信息
    changeShopName (state, payload) {
      const {
        shopId,
        shopName
      } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
    },
    //修改购物车中产品选中状态
    changeCartChecked (state, payload) {
      const {
        shopId,
        productId
      } = payload
      // console.log(shopId,productId)
      const productChecked = state.cartList[shopId].productList[productId]
      productChecked.check = !productChecked.check
    },
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (let key in products) {
          const product = products[key]
          product.check = true
        }
      }
    },

    //清空购物车
    clearCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    }
  },
  actions: {},
  modules: {}
})
