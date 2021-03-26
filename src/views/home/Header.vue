<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe63f;</span>
    渝中区环球国际金融中心
    <span class="iconfont position__notice">&#xe613;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe608;</span>
    山姆会员购物优惠多多
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
  </div>
  <div class="icons">
    <div
      v-for="(item,index) in iconsList"
      :key="index"
      class="icons__item">
      <img class="icons__item__img" :src="item.imgUrl"/>
      <p class="icons__item__desc">{{ item.text }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'header',
  setup () {
    const iconsList = [
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/%E8%B6%85%E5%B8%82.png',
        text: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        text: '菜市场'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        text: '水果店'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        text: '鲜花绿植'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        text: '医药健康'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        text: '家居时尚'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        text: '烘培蛋糕'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        text: '签到'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        text: '大牌免运'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        text: '红包套餐'
      }
    ]

    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  color: $content-fontcolor;
  @include ellipsis;

  .position__icon {
    margin-right: .08rem;
    font-size: .2rem;
  }

  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}

.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;
  font-size: .14rem;

  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;

  &__img {
    width: 100%;
    border-radius: .08rem;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;

  &__item {
    width: 20%;

    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }

    &__desc {
      color: $content-fontcolor;
      margin: .06rem 0 .16rem 0;
      text-align: center;
    }
  }
}

.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background-color: $content-bgColor;
}
</style>
