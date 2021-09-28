<template>
  <div>
      <HeaderTopBaywa />
      <Menu />
      <Wishlist /><!---->
      <Footer />
  </div>
</template>

<script>
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
import Menu from '../components/Menu.vue'
import Wishlist from '../components/Wishlist.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Footer,Wishlist,Menu
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
