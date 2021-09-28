<template>
<div class="categories">
    <div class="container">
        <nuxt-link to="/collections"><h3>Our top categories</h3></nuxt-link>
        <div class="d-f fw-w">
            <div :class="{ no_padding: index==2 && screen_width>900 }" class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column" v-for="(img,index) in categories_founds.length" :key="index">
                    <div class="padding_rigth">
                        <nuxt-link v-if="categories_founds[index].subCategories.length!=0" :to="'/collections/'+categories_founds[index].slug | slug"><img class="m-2 img" :src="categories_founds[index].img" alt=""></nuxt-link>
                        <nuxt-link v-if="categories_founds[index].subCategories.length!=0" :to="'/collections/'+categories_founds[index].slug | slug"><div class="title">{{categories_founds[index].nom | lowerCase}}</div></nuxt-link>
                        <nuxt-link v-if="categories_founds[index].subCategories.length==0" :to="'/shop/'+categories_founds[index].slug | slug"><img class="m-2 img" :src="categories_founds[index].img" alt=""></nuxt-link>
                        <nuxt-link v-if="categories_founds[index].subCategories.length==0" :to="'/shop/'+categories_founds[index].slug | slug"><div class="title">{{categories_founds[index].nom | lowerCase}}</div></nuxt-link>
                    </div>
            </div>
        </div><!---->
    </div>
</div>
</template>

<script>
import store from "../store/store.js"
import axios from "axios"
export default {
    data() {
      return  { categories:[],categories_founds:[],top_categories_length:[],screen_width:0 }
    },
    mounted(){//||index==5||index==8||index==11||index==14||index==17
        this.screen_width = screen.width
    },
    async fetch() {
      this.categories = await fetch(
        'http://localhost:3000/categories'
      ).then(res => res.json())

      this.top_categories_length = await fetch(
        'http://localhost:3000/top_categories_length'
      ).then(res => res.json())

      for(var i=0;i<this.categories.length;i++){
            for(var j=0;j<this.top_categories_length.length;j++){
                if(this.categories[i].id==this.top_categories_length[j].id){
                    this.categories_founds.push({"id":this.categories[i].id,"nom":this.categories[i].nom,
                    "slug":this.categories[i].slug,"img":this.categories[i].img,"subCategories":this.categories[i].subCategories})
                }
            }
        }
    }
    /*
  data() {
    return  { categories:[],categories_founds:[],top_categories_length:[] }
  },
  mounted(){
      axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
      axios.get('http://localhost:3000/top_categories_length').then(res => {this.top_categories_length=res
        for(var i=0;i<this.categories.data.length;i++){
            for(var j=0;j<this.top_categories_length.data.length;j++){
                if(this.categories.data[i].id==this.top_categories_length.data[j].id){
                    this.categories_founds.push({"id":this.categories.data[i].id,"nom":this.categories.data[i].nom,
                    "slug":this.categories.data[i].slug,"img":this.categories.data[i].img,"subCategories":this.categories.data[i].subCategories})
                }
            }
        }
      })
  },
  methods: {}*/
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.img{
    padding-right: 13px;
    width: 100%;
    height: 160px;
    margin: 0;
    padding: 0;
}
.categories{
    background-color: #f4f4f4;
}
.categories h3{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    color: #7d6e6e;
    text-align: center;
    color: gray;
    letter-spacing: 2px;
    font-family: monospace;
    border: 1px dashed;
    box-shadow: 0 5px 9px #e3e3e3;
    margin-bottom: 5px;
    box-shadow: 0 5px 9px #e3e3e3;
    border: none;
    text-align: left;
    border-bottom: 1px solid #cfc5c5;
    box-shadow: none;
    margin-right: 5px;
}
h3:hover{
    color: #008c46;
}
.title{
    text-align: center;
    padding: 15px 0px;
    padding-left: -21px;
    margin: -6px 4px;
    margin-left: 8px;
    background-color: white;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 0;
    text-transform: capitalize;
    margin: 0;
}
.column{
    margin-bottom: 27px;
    //padding-right: 5px;
    /*display: grid;
    justify-content: space-around;*/
}
.column:hover a{
    color: #008c46;
}
a{
    color: black;
}
@media (max-width: 430px){
.categories h3{
        font-size: 1.5em;
    }
}
.padding_rigth{
    padding-right: 5px;
    //width: 99%;
}
</style>
