<template>
<div class="Products"><h1 @click="update">click</h1><h5>val : {{val}}</h5><h1>info : {{all_products}}</h1>
    <!--<params />-->
    <!--<div v-for="(pr,index) in all_products" :key="index">
        <li>pr : {{all_products[index]}}</li>
    </div>-->
    <!--<div>
        <div v-if="!$route.params.id" class="d-f fw-w">
            <div class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column test" v-for="(img,index) in products.data" :key="index">
                    <nuxt-link :to="'/products/'+products.data[index].nom.toLowerCase() | slug"><img class="m-2 img" :src="products.data[index].img" alt=""></nuxt-link>
                    <nuxt-link :to="'/products/'+products.data[index].nom.toLowerCase() | slug"><div class="title">{{products.data[index].nom | toLowerCase}}</div></nuxt-link>
                    
            </div>
        </div>
        <div v-else><h5>$route.params.id : {{$route.params.id}}</h5>
            we heve some params here!!! 
            <h4>{{all_products}}</h4>
            <div v-for="(pr,index) in all_products" :key="index">
                <li>{{all_products[index]}}</li>
            </div>
        </div>
        <input style="width:400px" v-model="fill_input" type="text">
        <h1>get_params : {{get_params}}</h1>
        <div v-if="store.state.prod_params=='/shop/'">
            <h1>show all products here</h1>
        </div>
        <div v-if="store.state.prod_params[0]=='/shop/'">
                <h3 @click="get_products" class="categ_title">{{$route.params.id}}</h3>
                
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
    </div>-->
</div>
</template>
<script>
import axios from "axios"
//import Params from "./Params.vue"
import store from "../store/store.js"
export default {
  props:['all_products'],
  components:{/*Params Sidebar*/}
  ,data() {
    return {parentsCategories:[],categories:[],products:[],pr:[],get_params:[],all_products:[],val:0,prs:[],render: true}
  },
  async fetch(context){
      this.val = context.store.state.get_products.length
      alert(this.val)
  },
  computed:{ 
      get_all_products(){ this.all_products = store.state.get_products ; return this.all_products}
  },
  mounted(){ this.getData() ; this.all_products=this.get_all_products /*; this.prs=store.getters.getProducts ; alert('this.all_products')*/ }
  ,watch:{//'$route.query': '$fetch',
      //all_products(){ this.val = this.all_products.length /*alert('this.all_products')*/ }
  }
  ,methods: {update(){
      this.$mount();alert('update')
    },
      fct(){
          alert('fct')
      },
      click(){
          var str=store.commit('get_products_array')
          alert(str)
          //var arr=store.commit('get_products_array')
          //this.all_products=store.state.get_products
          //alert(this.all_products.length)
      },
      getData(){
          axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res})
          axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
          axios.get('http://localhost:3000/products').then(res => {this.products=res ; this.Products_found=this.products.data.length})
      },
      get_products(){
          alert(store.state.prod_params)
          //store.state.cpt++;
          //alert('cpt : '+store.state.cpt)
          //alert(window.location.href)
          //alert(this.$route.params.id)
           /*var trouve = false ; 
            for (var i = 0; i < this.products.data.length; i++){
                for (var j = 0; j < this.categories.data.length; j++){
                    if(this.products.data[i].categorie_id==this.categories.data[j].id && this.categories.data[j].slug==this.$route.params.id){
                        trouve = true ; this.pr.push(this.products.data[i].id,this.products.data[i].nom,this.products.data[i].slug,this.products.data[i].img)
                    }
                }
            } 
            alert('trouve : '+trouve+'   pr : '+this.pr)*/
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
.Products{
    background-color: #f4f4f4;
}
.Products h3{
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
