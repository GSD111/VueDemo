<template>
<!--  <ProductList />-->
  cart list
</template>

<script>
import ProductList from "@/views/orderConfirmation/ProductList";
import getLocalCartList from '../../store/index'
import { useRoute} from 'vue-router'
export default {
  name: 'CartList',
  // components: {ProductList},
  // setup(){
  //   const router = useRoute()
  //   // console.log(router)
  //   //  const getLocalCartList =() => {
  //   //
  //   //   console.log(getLocalCartList())
  //   // }
  //     console.log(getLocalCartList.state.cartList)
  //    return {getLocalCartList}
  // }
}
</script>

<style lang="scss" scoped>

</style>
