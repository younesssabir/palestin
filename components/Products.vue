<template>
  <!--<Menu />-->
  <div class="products">
      <div class="container">
          <Sidebar :products_params="products_params" :collections_params="collections_params" :get_param_product="get_param_product" />
          <!--<div class="contents">
              <AllCollections />
          </div>-->
      </div>
  </div>
</template>
<script>
//import AllCollections from '../components/AllCollections.vue'
import axios from "axios"
import Sidebar from './Sidebar.vue'
//import Menu from './Menu.vue'
import store from "../store/store.js"
export default {
    components:{Sidebar/*Menu,*/},
  data() {
    return {collections_params:[],products_params:[],parentsCategories:[],categories:[],products:[],get_param_product:[]}
  },
  mounted(){ //alert('test')
      if(this.$route.params.id!='undefined' && this.$route.params.id!=null)
          {
                store.commit('clear_get_products_array')
                store.commit('clear_get_collections_array')
                this.products_params=[]
                this.get_param_product=[]
                this.collections_params=[]
                let str = this.$route.params.id;
                const myArr = str.split("+");
                axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res})
                axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
                axios.get('http://localhost:3000/products').then(res => {this.products=res 
                            for(var i=0;i<this.categories.data.length;i++){
                            for(var j=0;j<myArr.length;j++){
                                if(this.categories.data[i].slug==myArr[j]){
                                    for(var k=0;k<this.products.data.length;k++){
                                        if(this.products.data[k].categorie_id==this.categories.data[i].id && this.categories.data[i].slug==myArr[j]){
                                            this.products_params.push(this.products.data[k].slug)
                                            store.commit('fill_get_products_array',this.products.data[k].slug)
                                            this.get_param_product.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                                        }
                                    }
                                }
                            }
                        }
                        if(this.products_params.length==0){
                            this.products_params=[]
                            store.commit('clear_get_products_array')
                            /*for(var k=0;k<this.products.data.length;k++){
                                this.products_params.push(this.products.data[k].slug)
                                store.commit('fill_get_products_array',this.products.data[k].slug)
                            }*/
                        }
                        if(this.get_param_product.length==0) this.get_param_product.push('empty_products')
                })
          }
          else{
                this.getData() //; alert('empty')
          }
          /*if(this.products_params.length!=0){

          }*/
          $nuxt.$emit('cart_clicked')
  },
  methods: {
      getData(){
            store.commit('clear_get_products_array')
            store.commit('clear_get_collections_array')
            this.products_params=[]
            this.collections_params=[]
            this.get_param_product=[]
            axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res})
            axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
            axios.get('http://localhost:3000/products').then(res => {this.products=res 
                        for(var k=0;k<this.products.data.length;k++){
                                this.products_params.push(this.products.data[k].slug)
                                    this.get_param_product.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                                store.commit('fill_get_products_array',this.products.data[k].slug)
                        }
                    })
          //alert(this.products)
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.products{
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
    .products{
        padding-top: 100px;
    }
}
</style>
