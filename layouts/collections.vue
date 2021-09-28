<template>
  <div>
      <HeaderTopBaywa />
      <!--<Menu />-->
      <Collections />
      <Footer />
  </div>
</template>

<script>
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
//import Menu from '../components/Menu.vue'
import Collections from '../components/Collections.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Footer,Collections//,Menu
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
