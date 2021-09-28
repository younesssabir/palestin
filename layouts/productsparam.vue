<template>
<div>
      <HeaderTopBaywa />
      <!--<Menu />-->
      <Products />
      <Footer />
  </div>
  <!--<div style="display: inline;">
    <HeaderTopBaywa />
      <Menu />
      <div class="product">
      <div class="container">
              <div style="display: inline;"><Sidebar /></div>
              <div class="contents">
                  <div v-for="(pr,index) in products.data" :key="index">
                      <div v-for="(cat,index1) in categories.data" :key="index1">
                          <div v-if="products.data[index].categorie_id==categories.data[index1].id && categories.data[index1].slug==$route.params.id" class="d-f fw-w">
                              <div class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column">
                                      <nuxt-link :to="'/products/'+products.data[index].nom.toLowerCase() | slug"><img class="m-2 img" :src="products.data[index].img" alt=""></nuxt-link>
                                      <nuxt-link :to="'/products/'+products.data[index].nom.toLowerCase() | slug"><div class="title">{{products.data[index].nom | toLowerCase}}</div></nuxt-link>  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
  </div> -->
</template>
<script>
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
//import Menu from '../components/Menu.vue'
import Products from '../components/Products.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    HeaderTopBaywa,Footer,Products//,Menu
  },
  data() {
    return {}
  },
  mounted(){/*alert('testtest')*/},
  methods: {}
}
/*import axios from "axios"
import store from "../store/store.js"
import HeaderTopBaywa from '../components/HeaderTopBaywa.vue'
import Menu from '../components/Menu.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
      HeaderTopBaywa,Menu,Sidebar,Footer
  },
  data() {
    return {parentsCategories:[],categories:[],products:[]}
    },
  mounted(){this.getData() },
  methods: {
     getData(){
          axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res})
          axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
          axios.get('http://localhost:3000/products').then(res => {this.products=res ; this.Products_found=this.products.data.length})
      }
  }
}*/
</script>
<style lang="scss" scoped>
/*@import url('../assets/mini_framework.css');
.product{
    padding: 30px 0px 30px 0px;
    background-color: #f4f4f4;
}
.contents{
    background-color: #f4f4f4;
    width: 67%;
    display: inline-block;
    margin: 0;
    padding: 0;
    float:right;
}
.img{
    padding-right: 13px;
    width: 100%;
    height: 160px;
}
.title{
    color: #1c1c1c;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 0 10px;
    background: #fff;
    padding: 15px 0px;
    padding-left: -21px;
    background-color: white;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 23px;
    text-align: center;
    margin: -6px 4px;
    margin-left: 8px;
}
.column{
    margin-bottom: 27px;
    cursor: pointer;
}
.column:hover{
    color: #008c46;
}
.contenu{
    width: 75%;
    background-color: rgb(190, 38, 236);
}
.flexs{
    display: flex;
    margin-top: 40px;
}
.one_param{

}
@media (max-width: 1199px){
 .container,.flexs {
    max-width: 100%;
}   
}*/
</style>
