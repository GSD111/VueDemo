<template>
  <div class="content">
    <div class="category">
      <div class="category__item  category__item--active">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令鲜蔬</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
        <div class="product__item__detail">
           <h4 class="product__item__title">小番茄250/克</h4>
          <p class="product__item__sales">月售100件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;33.6</span>
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          0
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
@import '../../style/viriables.scss';
.content {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 1.66rem;
  bottom: .5rem;
}

.category {
  width: .76rem;
  height: 100%;
  overflow-y: scroll;
  background: $search-bgColor;
  color:$content-fontcolor;
  &__item{
    line-height:.4rem;
    font-size:.14rem;
    text-align:center;
    &--active{
      background: $bgColor;
    }
  }
}
.product{
  flex:1;
  overflow-y: scroll;
  &__item{
    position:relative;
    display: flex;
    padding:.12rem 0;
    margin:0 .16rem;
    border-bottom: solid .01rem $content-bgColor;
    &__detail{
      overflow: hidden;
    }
    &__img{
      width:.68rem;
      height:.68rem;
      margin-right:.16rem;
    }
    &__title{
      margin:0;
      line-height:.2rem;
      font-size:.14rem;
      color:$content-fontcolor;
      @include ellipsis;
    }
    &__sales{
      margin:.06rem 0;
      font-size:.12rem;
      color:$content-fontcolor;
    }
    &__price{
      margin:0;
      line-height:.2rem;
      color:#e93b3b;
    }
    &__yen{
      font-size:.14rem;
    }
    &__origin{
      margin-left:.06rem;
      line-height:.2rem;
      font-size:.12rem;
      color:#999;
      text-decoration:line-through;
    }

  }
  .product__number{
    position:absolute;
    right:0;
    bottom:.12rem;
    &__minus,&__plus{
      display: inline-block;
      width:.2rem;
      height:.2rem;
      line-height:.16rem;
      border-radius:50%;
      font-size:.2rem;
      text-align:center;
    }
    &__minus{
      border:solid .01px $content-btn;
      color:$content-btn;
      margin-right:.05rem;
    }
    &__plus{
      background:$btnColor;
      color:$bgColor;
      margin-left:.05rem;
    }
  }
}
</style>
