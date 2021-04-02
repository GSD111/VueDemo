<template>
  <!--  <ProductList />-->
  <div class="header">
    我的全部购物车
  </div>
  <div class="warning">
    购物车空空如也哦~~~
    <router-link to="/">
      <div class="warning__btn">
        去首页逛逛
      </div>
    </router-link>
  </div>
  <Footer :currentIndex="1"/>
</template>

<script>
import Footer from '@/views/home/Footer'
import ProductList from "@/views/orderConfirmation/ProductList";
import getLocalCartList from '../../store/index'
import {useRoute} from 'vue-router'

export default {
  name: 'CartList',
  components: {Footer},
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
.header {
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: #333;
  text-align: center;
  white-space: nowrap;
}

.warning {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: .16rem;
  color: #e6e6e6;
   a{
     text-decoration: none;
     color:#fff;
   }
  &__btn {
    width: 1.1rem;
    line-height: .4rem;
    text-align: center;
    margin: 0 auto;
    font-size: .14rem;
    background-color: #4FB0F9;
    border-radius: .6rem;
    color: #fff;
    margin-top: .13rem;
  }
}

</style>
