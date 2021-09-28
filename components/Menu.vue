<template>
  <div class="TopMenu">
      <div class="mt-2 py-3 container">
            <ul>
                <li v-for="(categ,index) in parentsCategories.data" :key="index">
                    <nuxt-link v-if="parentsCategories.data[index].subCategories.length!=0" :to="'/collections/'+parentsCategories.data[index].slug | slug"><span @click="goto_collection(parentsCategories.data[index].slug)">{{parentsCategories.data[index].nom | lowerCase}}</span></nuxt-link>
                    <nuxt-link v-else :to="'/shop/'+parentsCategories.data[index].slug | slug"><span>{{parentsCategories.data[index].nom | lowerCase}}</span></nuxt-link>
                </li>
                <!---->
            </ul>
      </div>
  </div>
</template>
<script>
import axios from "axios"
import store from "../store/store.js"
export default {
  data() {
    return {parentsCategories:[]}
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData(){
          axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res /*; alert(this.parentsCategories.data[0].id)*/ })
          //axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
          //axios.get('http://localhost:3000/products').then(res => {this.products=res ; this.Products_found=this.products.data.length})
          //alert(this.products)
      },
      goto_collection(slug){
          store.commit('clear_get_products_array')
          store.commit('clear_get_collections_array')
          store.commit('fill_get_collections_array',slug)
          ////////////////////////////////////////////////
          
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.TopMenu{
    background-color: #f4f4f4;
    border-bottom: 1px solid #d3cece;
    box-shadow: 0 7px 8px #e3e3e3;
    margin-bottom: 25px;
}
ul{
    list-style-type: none;
    white-space: nowrap;
}
ul li{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    font-family: sans-serif;
    text-transform: capitalize;
}
li a{
    color: black;
}
ul li a:hover{
    background-color: #f6f6f6;
    color: #008c46;
}
/*.show li{
  display: block;
}
.noShow{
  display: none;
}*/
/////////////////////////////////////////////////////////////////////////////
@media (max-width: 821px){
.TopMenu{
    display: none;
}
}
</style>
