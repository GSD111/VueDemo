<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link :to="`/shop/${item.id}`" v-for="item in nearbyList" :key="item.id">
      <ShopInfo :item="item"/>
    </router-link>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const nearbyList = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tag: ['月售1万+', '起送￥0元', '基础运费￥5元'],
        desc: 'VIP尊享满89元减4元运费劵(每月3张)'
      },
      {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '永辉超市',
        tag: ['月售9000+', '起送￥0元', '基础运费￥5元'],
        desc: 'VIP尊享满99元减30元运费劵(每月3张)'
      },
      {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '华润万家',
        tag: ['月售8000+', '起送￥1.5元', '基础运费￥5元'],
        desc: 'VIP尊享满199元减40元运费劵(每月3张)'
      }
    ]

    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }
}
</style>
