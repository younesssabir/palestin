<template>
  <div>
      <HeaderTopBaywa />
      <Menu />
      <Cart /><!---->
      <Footer />
  </div>
</template>

<script>
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
import Menu from '../components/Menu.vue'
import Cart from '../components/Cart.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Footer,Cart,Menu
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
*{
    /**/background-color: #f4f4f4;
}
</style>
