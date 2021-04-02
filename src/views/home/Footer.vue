<template>
  <div class="footer">
    <span
      v-for="(item,index) in footerList"
      :key="index"
      :class="{'footer__item':true ,'footer__item--active': index==currentIndex }">
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"/>
        <div class="footer__title">{{ item.text }}</div>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props:['currentIndex'],
  setup() {
    const footerList = [
      {
        icon: '&#xe658;',
        text: '首页',
        to: {name: 'Home'}
      },
      {
        icon: '&#xe638;',
        text: '购物车',
        to: {name: 'CartList'}
      },
      {
        icon: '&#xe601;',
        text: '订单',
        to: {name: 'OrderList'}
      },
      {
        icon: '&#xe621;',
        text: '我的',
        to: {name: 'Home'}
      }
    ]

    return {footerList}
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
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: .2rem;
    }

    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }

  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
