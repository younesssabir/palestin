<template>
<div class="Collections">
    <div class="">
        <div v-if="!$route.params.id" class="d-f fw-w">
            <div class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column test" v-for="(img,index) in categories.data" :key="index">
                    <nuxt-link v-if="categories.data[index].subCategories.length!=0" :to="'/collections/'+categories.data[index].nom.toLowerCase() | slug"><img class="m-2 img" :src="categories.data[index].img" alt=""></nuxt-link>
                    <nuxt-link v-if="categories.data[index].subCategories.length!=0" :to="'/collections/'+categories.data[index].nom.toLowerCase() | slug"><div class="title">{{categories.data[index].nom | toLowerCase}}</div></nuxt-link>
                    <nuxt-link v-if="categories.data[index].subCategories.length==0" :to="'/shop/'+categories.data[index].nom.toLowerCase() | slug"><img class="m-2 img" :src="categories.data[index].img" alt=""></nuxt-link>
                    <nuxt-link v-if="categories.data[index].subCategories.length==0" :to="'/shop/'+categories.data[index].nom.toLowerCase() | slug"><div class="title">{{categories.data[index].nom | toLowerCase}}</div></nuxt-link>
                    
            </div>
        </div>
        <div v-else>
                <h3 class="categ_title">{{$route.params.id}}</h3>
                <div v-for="(cat,index) in categories.data" :key="index">
                    <div v-if="categories.data[index].nom==$route.params.id" class="d-f fw-w">
                        <div v-for="(cat,index2) in categories.data[index].subCategories" :key="index2" class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column">
                                <div v-for="(cat,index3) in categories.data" :key="index3">
                                    <div v-if="categories.data[index].subCategories[index2].id==categories.data[index3].id">
                                            <nuxt-link :to="'/shop/'+categories.data[index3].nom.toLowerCase() | slug"><img class="m-2 img" :src="categories.data[index3].img" alt=""></nuxt-link>
                                            <nuxt-link :to="'/shop/'+categories.data[index3].nom.toLowerCase() | slug"><div class="title">{{categories.data[index3].nom}}</div></nuxt-link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios"
//import store from "../store/store.js"
export default {
  data() {
    return {parentsCategories:[],categories:[],products:[]}
  },
  created(){ /*this.check_if_empty() */},
  mounted(){this.getData()},
  methods: {
      getData(){
          axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res})
          axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
          axios.get('http://localhost:3000/products').then(res => {this.products=res ; this.Products_found=this.products.data.length})
          //alert(this.products)
      },
      empty_collection(){
            /*for (var i = 0; i < elements.length; i++){

            }*/
      },
      check_if_empty(){
          //console.log(document.getElementsByClassName('check_if_empty').length);
          /*var elements = document.getElementsByClassName('check_if_empty');
          for (var i = 0; i < elements.length; i++){
              if(elements.item(i).innerHTML=='' || elements.item(i).innerHTML==null){
                    elements.item(i).parentNode.removeChild(elements.item(i));
              }
          }*/

          //console.log(elements.item(0).innerHTML)
          //alert(elements)
          /*if(elements.value == null){
                alert('empty')
          }
          else  alert('not empty')*/
            /*while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
                }*/
         //var div1= document.getElementsByClassName('div1').innerHTML='jhjhjhj';
         //alert(document.getElementsByClassName('div1').innerHTML)
         //if(div1.innerHTML == null || div1.innerHTML == "") {alert('empty') ; /*div1.remove();*/ }
         //else alert('not empty')
         /*var elem = document.getElementsByClassName("test"); ***********************
         alert(elem.length)
         for(var i=0;i<elem.length;i++){
             if(elem.item(i).innerHTML=='' || elem.item(i).innerHTML==null){
                 elem.item(i).remove();
             }
         }*/
         const divs = document.querySelectorAll('.test');
         alert(divs.length)
         for(var i=0;i<divs.length;i++){
             if( divs.item(i).innerHTML=='') divs.item(i).remove();
         }
            /*divs.forEach(div => {
            if (divs.innerHTML === '') {
                div.remove();
            }
            });*/
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.img{
    padding-right: 13px;
    width: 100%;
    height: 160px;
}
.Collections{
    background-color: #f4f4f4;
}
.Collections h3{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
}
.title{
        color: #1c1c1c;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 0 10px;
    background: #fff;
    /* display: block; */
    /* text-decoration: none; */
    /* text-align: center; */
    padding: 15px 0px;
    padding-left: -21px;
    /* margin: -6px 4px; */
    /* margin-left: 8px; */
    background-color: white;
    /* font-weight: 600; */
    /* font-style: normal; */
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
.categ_title{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    text-align: center;
    color: gray;
    letter-spacing: 2px;
    font-family: monospace;
    border: 1px dashed;
    box-shadow: 0 5px 9px #e3e3e3;
    margin-bottom: 5px;
    box-shadow: 0 5px 9px #e3e3e3;
}
</style>
