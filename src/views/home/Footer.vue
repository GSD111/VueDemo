<template>
  <div class="footer">
    <span
      v-for="(item,index) in footerList"
      :key="index"
      :class="{'footer__item':true ,'footer__item--active': index==0 }">
      <div class="iconfont" v-html="item.icon"/>
      <div class="footer__title">{{ item.text }}</div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup () {
    const footerList = [
      {
        icon: '&#xe658;',
        text: '首页'
      },
      {
        icon: '&#xe638;',
        text: '购物车'
      },
      {
        icon: '&#xe601;',
        text: '订单'
      },
      {
        icon: '&#xe621;',
        text: '我的'
      }
    ]

    return { footerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.footer {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: solid .01rem $content-bgColor;
  color: $content-fontcolor;

  &__item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: .2rem;
    }

    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
