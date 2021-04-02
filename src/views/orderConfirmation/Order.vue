<template>
  <div class="order">
    <div class="order__price">实付金额 &yen; <b>{{ calculations.price }}</b></div>
    <div class="order__btn" @click="() => handleSubmitClick(true)">提交订单</div>
  </div>
  <div class="mask" @click="() => handleSubmitClick(false)" v-show="showConfirm">
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开收银台吗？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="handleCancleOrder"
        >取消订单</div>
        <div
          class="mask__content__btn mask__content__btn--second"
          @click="handleConfirmOrder"
        >确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCommonCartEffect} from '../shop/CommonCartEffect'
import {useRoute ,useRouter } from "vue-router";
import { useStore } from "vuex"
import { ref } from 'vue'
export default {
name: "Order",
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const showConfirm = ref(false)
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)
    const handleCancleOrder = () =>{
      router.push('/')
    }
    const handleConfirmOrder = () =>{
      store.commit('clearCartProducts',shopId)
      router.push('/')
    }
    const handleSubmitClick = (status) =>{
      showConfirm.value = status
    }
    return { calculations ,showConfirm,handleCancleOrder,handleConfirmOrder,handleSubmitClick}
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: $bgColor;

  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: $content-btn;
  }

  &__btn {
    width: .98rem;
    text-align: center;
    color: $bgColor;
    background-color: #4FB0F9;
    font-size: .14rem;
  }
}
.mask{
  z-index:1;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:rgba(0,0,0,0.50);
  &__content{
    width:3rem;
    height:1.56rem;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: $bgColor;
    border-radius: .04rem;
    text-align:center;
    &__title{
      margin:.24rem 0 0 0 ;
      line-height: .26rem;
      font-size:.18rem;
      color:$content-fontcolor;
    }
    &__desc{
      margin:.08rem 0 0 0;
      font-size:.14rem;
      color:$content-btn;
    }
    &__btns{
      display:flex;
      margin:.24rem .58rem;
    }
    &__btn{
      flex:1;
      width:.8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size:.14rem;
      &--first{
        margin-right:.12rem;
        border:.01rem solid $btn;
        color:$btn;
      }
      &--second{
        margin-left:.12rem;
        background:$btn;
        color:$bgColor;
      }
    }
  }
}

</style>
