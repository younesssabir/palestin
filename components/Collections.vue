<template>
  <!--<Menu />-->
  <div class="collections">
      <div class="container">
          <Sidebar :is_categ="is_categ" :products_params="products_params" :collections_params="collections_params" :get_param_product="get_param_product"/>
          <!--<div class="contents">
              <AllCollections />
          </div>-->
      </div>
  </div>
</template>
<script>
//import AllCollections from '../components/AllCollections.vue'
//import Menu from './Menu.vue'
import Sidebar from './Sidebar.vue'
import store from "../store/store.js"
import axios from "axios"
export default {
    components:{Sidebar/*Menu,*/},
  data() {
    return {categories:[],collections_params:[],products_params:[],get_param_product:[],is_categ:false}
  },
  mounted(){/*alert('kjjhjhjh')*/
      this.collections_params=[]
      this.products_params=[]
      store.commit('clear_get_products_array')
      store.commit('clear_get_collections_array') 
      if(this.$route.params.id!='undefined' && this.$route.params.id!=null)
          {
                this.collections_params.push(this.$route.params.id)
                store.commit('fill_get_collections_array',this.$route.params.id)

                axios.get('http://localhost:3000/categories').then(res => {this.categories=res 
                        //alert(this.$route.params.id)
                        for(var k=0;k<this.categories.data.length;k++){
                            if(this.categories.data[k].slug==this.$route.params.id) { this.is_categ=true ; break  }
                            else {  this.is_categ=false ; break }
                        }
                })
         //alert(this.is_categ) 
         }
         $nuxt.$emit('cart_clicked')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.collections{
    padding: 3px 0px 30px 0px;
    background-color: #f4f4f4;
}
/*.sidebar{
    background-color: rgb(129, 129, 54);
    width: 30%;
}*/
.contents{
    background-color: #f4f4f4;
    width: 67%;
    display: inline-block;
    margin: 0;
    padding: 0;
    float:right;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
@media (max-width: 821px){
    .collections{
        padding-top: 100px;
    }
}
</style>
