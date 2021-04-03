<template>
  <!--  <ProductList />-->
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
<!--    <div class="warning">-->
<!--      购物车空空如也哦~~~-->
<!--      <router-link to="/">-->
<!--        <div class="warning__btn">-->
<!--          去首页逛逛-->
<!--        </div>-->
<!--      </router-link>-->
<!--    </div>-->
      <div class="products__list">
        <div class="products__title">{{data.shopName}}</div>
        <div class="products__item" v-for="item in data.productList" :key="item.id">
          <img class="products__item__img" :src="item.imgUrl"/>
          <div class="products__item__detail">
            <h4 class="products__item__title">{{item.name}}</h4>
            <p class="products__item__price">
              <span>
                  <span class="products__item__yen">&yen;</span>
                  {{item.price}} x {{item.count}}
              </span>
              <span class="products__item__total">
                 <span class="products__item__yen">&yen;</span>
                 {{ (item.price * item.count).toFixed(2)}}
              </span>
            </p>
          </div>
        </div>
      </div>
  </div>
<!--   </template>-->
  <Footer :currentIndex="1"/>
</template>

<script>
import Footer from '@/views/home/Footer'
import getLocalCartList from '../../store/index'
import  { toRefs } from 'vue'

export default {
  name: 'CartList',
  components: {Footer},
  setup(){
    const {cartList} = toRefs(getLocalCartList.state)
    const data = cartList.value[1]
     return {data}
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .5rem;
  background: rgb(248, 248, 248);
}
.title {
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
  color: #333;
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
.products {
  margin: .16rem .18rem .2rem .18rem;
  background: $bgColor;
  overflow-y: scroll;
  &__list {
    background: $bgColor;
    margin: 0 .18rem;
  }

  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem .16rem;

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      flex: 1;
      overflow: hidden;
    }

    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }

    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #e93b3b;
    }

    &__yen {
      font-size: .14rem;
    }

    &__total {
      flex: 1;
      text-align: right;
      color: #000;
    }
  }
}

</style>
