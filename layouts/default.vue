<template>
  <div>
      <HeaderTopBaywa />
      <Menu />
      <AutoSlider />
      <AboutUs />
      <Categories />
      <TopProducts />
      <Recommendations />
      <Footer />
  </div>
</template>

<script>
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
import Menu from '../components/Menu.vue'
import AutoSlider from '../components/AutoSlider.vue'
//import SlideShow from '../components/SlideShow.vue'
import Categories from '../components/Categories.vue'
import AboutUs from '../components/AboutUs.vue'
import TopProducts from '../components/TopProducts.vue'
import Recommendations from '../components/Recommendations.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Menu
    ,Categories,AboutUs,TopProducts,Recommendations,Footer,AutoSlider
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>

</style>
