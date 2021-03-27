<template>
  <ShopInfo :item="item"/>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const item = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tag: ['月售1万+', '起送￥0元', '基础运费￥5元'],
        desc: 'VIP尊享满89元减4元运费劵(每月3张)'
      }
    ]
    return { item }
  }
}
</script>

<style lang="scss" scoped>

</style>
