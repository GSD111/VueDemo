<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order">
        <div class="order__title">
          沃尔玛
          <span class="order__status">已取消</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">&yen;33.6</div>
            <div class="order__content__count">共4件</div>
          </div>
        </div>
      </div>
    </div>
    <div class="orders">
      <div class="order">
        <div class="order__title">
          永辉超市
          <span class="order__status">已完成</span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
            <img class="order__content__img" src="http://www.dell-lee.com/imgs/vue3/tomato.png"/>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">&yen;33.6</div>
            <div class="order__content__count">共3件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :currentIndex="2"/>
</template>

<script>
import Footer from "@/views/home/Footer";
import {reactive,toRefs} from 'vue'

const useOrderListEffect = () => {
  const data = reactive({
    list: [
      {
        shopId: 1,
        shopName: '沃尔玛',
        products: [
          {
            id: 1,
            name: '小番茄',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
            price: '33.6',
          },
          {
            id: 2,
            name: '车厘子',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
            price: '33.6',
          },
          {
            id: 3,
            name: '橙子',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
            price: '33.6',
          }
        ]

      },
      {
        shopId: 2,
        shopName: '永辉超市',
        products: [
          {
            id: 1,
            name: '圣女果',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
            price: '33.6',
          },
          {
            id: 2,
            name: '波罗蜜',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
            price: '33.6',
          },
          {
            id: 3,
            name: '椰子',
            imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
            price: '33.6',
          }
        ]

      }
    ]
  })
  const lists = toRefs(data)
  // console.log(lists.list.value[1].shopName)
  return data
}

export default {
  name: "OrderList",
  components: {Footer},
  setup(){
    const {data} = useOrderListEffect()

    return data
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
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}

.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $bgColor;

  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }

  &__status {
    float: right;
    font-size: .14rem;
    color: #999;
  }

  &__content {
    display: flex;

    &__imgs {
      flex: 1;
    }

    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }

    &__info {
      width: .7rem;
    }

    &__price {
      margin-bottom: .04rem;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
      text-align: right;
    }

    &__count {
      font-size: .12rem;
      color: $content-fontcolor;
      text-align: right;
      line-height: .14rem;
    }
  }
}
</style>
