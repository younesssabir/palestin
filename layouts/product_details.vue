<template>
  <div>
      <HeaderTopBaywa />
      <Menu />
      <ProductDetails /><!---->
      <Footer />
  </div>
</template>

<script>
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
//import Menu from '../components/Menu.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Footer,ProductDetails//,Collections,Menu
  },
  data() {
    return {}
  },
  mounted(){ },
  methods: { }
}
</script>
<style>
*{
    /**/background-color: #f4f4f4;
}
</style>
