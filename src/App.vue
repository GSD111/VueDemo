<template>
  <div class="footer">
    <span class="footer__item footer__item--active">
      <div class="iconfont">&#xe658;</div>
      <div class="footer__title">首页</div>
    </span>
    <span class="footer__item">
      <div class="iconfont">&#xe638;</div>
      <div class="footer__item">购物车</div>
    </span>
    <span class="footer__item">
      <div class="iconfont">&#xe601;</div>
      <div class="footer__title">订单</div>
    </span>
    <span class="footer__item">
      <div class="iconfont">&#xe621;</div>
      <div class="footer__title">我的</div>
    </span>
  </div>
  <router-view/>
</template>

<style lang="scss">
     .footer{
       display:flex;
       position: absolute;
       left:0px;
       //padding:0 .18rem;
       bottom:0px;
       width:100%;
       height:.49rem;
       border-top: solid  1px #f1f1f1;
       &__item{
         flex:1;
         text-align:center;
         .iconfont{
               margin:0.07rem 0 0.02rem 0;
               font-size:.2rem;
             }
         &--active{
           color:#1fa4fc;
         }
       }
       &__title{
         font-size:.2rem;
         transform: scale(.5 , .5);
         transform-origin: center top;
       }
     }
</style>
