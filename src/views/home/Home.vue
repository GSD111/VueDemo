<template>
  <div class="wrapper">
    <Header/>
    <Nearby/>
  </div>
  <Footer :currentIndex="0"/>
</template>
<script>
import Header from '@/views/home/Header'
import Nearby from '@/views/home/Nearby'
import Footer from '@/views/home/Footer'

export default {
  name: 'Home',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Nearby,
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .5rem;
  padding: 0 .18rem .3rem .18rem;
}
</style>
