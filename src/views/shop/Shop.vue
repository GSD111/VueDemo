<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe7ea;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe608;</span>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <ShopInfo :item="item"/>
    <Content />
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
import { useRouter, useRoute } from 'vue-router'
import Content from '@/views/shop/Content'

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    console.log(route.name, route.params)
    const handleBackClick = () => {
      router.back()
    }
    const item =
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tag: ['月售1万+', '起送￥0元', '基础运费￥5元'],
        desc: 'VIP尊享满89元减4元运费劵(每月3张)'
      }

    // console.log(item)
    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.wrapper {
  padding: 0 .18rem;
}

.shop {
  border: none;
}

.search {
  display: flex;
  padding: .2rem 0 .16rem 0;
  line-height: .32rem;

  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #b6b6b6;
  }

  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    line-height: .32rem;
    border-radius: .16rem;

    &__icon {
      width: .44rem;
      text-align: center;
      color: #b7b7b7;
    }

    &__input {
      display: block;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      padding-right: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;

      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}

</style>
