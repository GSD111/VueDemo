<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
      v-for="item in nearbyList"
      :key="item.id"
      class="nearby__item">
      <img class="nearby__item__img"
           :src="item.imgUrl"/>
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            v-for="(innerItem,index) in item.tag"
            :key="index"
            class="nearby__content__tag">{{ innerItem }}</span>
        </div>
        <p class="nearby__content__highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
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
        id: 2,
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
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';

.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    display: flex;
    padding-top: .12rem;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;

    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }

  &__content {
    //display: flex;
    //padding-bottom:.12rem;
    //border-bottom: 3px solid $content-bgColor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }

    &__tag {
      margin-right: .16rem;
    }

    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
    }
  }
}
</style>
