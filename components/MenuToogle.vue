<template>
  <div class="Menu_Toogle">
      <div>
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
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.Menu_Toogle{
    background-color: #f4f4f4;
    border-bottom: 1px solid #d3cece;
    box-shadow: 0 7px 8px #e3e3e3;
    position: absolute;
    top: 64px;
}
ul{
    list-style-type: none;
    white-space: nowrap;
}
ul li{
    display: block;
    cursor: pointer;
    font-family: sans-serif;
    text-align: center;
    background-color: transparent;
    padding: 10px 0px;
        list-style-type: none;
    /* padding: 12px 7px 7px 13px; */
    /* margin-bottom: 4px; */
    border-top: 1px solid #d2d3d8;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    box-shadow: 0 5px 9px #e3e3e3;
    text-transform: capitalize;
}
ul li:hover{
    background-color: #f6f6f6;
}
.show,.Menu_Toogle,ul{
    width: 100%;
}
li a{
    color: black;
}
/*.show li{
  display: block;
}
.noShow{
  display: none;
}*/
/////////////////////////////////////////////////////////////////////////////
/*@media (max-width: 821px){
.TopMenu{
    display: none;
}
}*/
</style>
