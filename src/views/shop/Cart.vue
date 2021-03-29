<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png"/>
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">总计：
        <spna class="check__info__price">&yen;127</spna>
      </div>
      <div class="check__btn">
        立即结算
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
}
.check{
  display:flex;
  line-height:.49rem;
  height:.49rem;
  border-top:.01rem solid $content-bgColor;
  &__icon{
    position:relative;
    width:.84rem;
    &__img{
      display: block;
      margin:.12rem auto;
      width:.28rem;
      height:.26rem;
    }
    &__tag{
      position: absolute;
      right:.2rem;
      top:.04rem;
      text-align: center;
      width:.2rem;
      height:.2rem;
      line-height:.2rem;
      border-radius:50%;
      background-color:$hightlight-fontColor;
      font-size:.12rem;
      color:$bgColor;
      transform: scale(.5);
    }
  }
  &__info{
    flex:1;
    color:$content-fontcolor;
    font-size:.12rem;
    &__price{
      font-size:.18rem;
      color:$hightlight-fontColor;
    }
  }
  &__btn{
    width:.98rem;
    font-size:.14rem;
    color:$bgColor;
    text-align:center;
    background:#4fb0f9;
  }
}

</style>
