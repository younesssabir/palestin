<template>
  <div>
      <HeaderTopBaywa />
      <!--<Menu />-->
      <Products />
      <Footer />
  </div>
</template>

<script>
import store from "../store/store.js"
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
//import Menu from '../components/Menu.vue'
import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Footer,Products//,Menu
  },
  data() {
    return {/*info:'123',all_products:[]*/}
  },
  computed:{ 
      //get_all_products(){ this.all_products = store.state.get_products ; return this.all_products}
  },
  //mounted(){ this.all_products = this.get_all_products /*; alert('this.all_products')*/ },
  methods: {}
}
</script>
<style>
*{
    /**/background-color: #f4f4f4;
}
</style>
