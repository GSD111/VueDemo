<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <Order />
  </div>
</template>

<script>
import TopArea from "@/views/orderConfirmation/TopArea";
import ProductList from "@/views/orderConfirmation/ProductList";
import Order from "@/views/orderConfirmation/Order";
export default {
  name: 'OrderConfirmation',
  components: {TopArea ,ProductList ,Order },
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $content-bgColor;
}
</style>
