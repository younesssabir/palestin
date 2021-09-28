<template>
  <div class="TopProducts">
      <div class="container"><!--<button @click="update_cart_length">Click</button>-->
            <nuxt-link to="/shop"><h3>Our Top Products</h3></nuxt-link>
            <div class="d-f fw-w">
                <div class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column" v-for="(prod,index) in products_founds.length" :key="index">
                        <div class="ico">
                            <div @click="add_to_wishlist(products_founds[index].id)" class="heart">
                                <i class="fa fa-heart"></i>
                            </div>
                            <div @click="add_to_cart(products_founds[index].id,products_founds[index].price)" :id="products_founds[index].id" class="shopping">
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                        </div>
                        <nuxt-link :to="'/products/'+products_founds[index].slug | slug"><img class="m-2 prod" :src="products_founds[index].img[0].id" alt=""></nuxt-link>
                        <nuxt-link :to="'/products/'+products_founds[index].slug | slug"><div class="name">{{products_founds[index].nom | lowerCase}}</div></nuxt-link>
                        <div class="stars">
                            <img v-for="(review,index) in products_founds[index].reviews" :key="index+'mlk'" src="../assets/svg/star.svg" alt="">
                            <img v-for="(review,index) in 5-products_founds[index].reviews" :key="index+'plo'" src="../assets/svg/star_gray.svg" alt="">
                        </div>
                        <div class="prices">
                            <span class="compare_price">{{products_founds[index].compare_price}} dh</span>
                            <span class="price">{{products_founds[index].price}} dh</span>
                        </div>
                        <div class="addToCarte">
                            <input class="addCarte" type="button" value="Add To Carte">
                        </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
//import EventBus from '../event-bus'
import store from "../store/store.js"
import axios from "axios"
export default {
  data() {
    return { products:[],products_founds:[],top_products_length:[],cart_ln:[] }
  },
  async fetch() {
      //this.cart_ln = await fetch('http://localhost:3000/cart_length').then(res => res.json())
      this.products = await fetch('http://localhost:3000/products').then(res => res.json())
      this.top_products_length = await fetch('http://localhost:3000/top_products_length').then(res => res.json())
      for(var i=0;i<this.products.length;i++){
            for(var j=0;j<this.top_products_length.length;j++){
                if(this.products[i].id==this.top_products_length[j].id){
                    this.products_founds.push({"id":this.products[i].id,"nom":this.products[i].nom,
                    "slug":this.products[i].slug,"img":this.products[i].img,"description":this.products[i].description,
                    "categorie_id":this.products[i].categorie_id,"price":this.products[i].price,"compare_price":this.products[i].compare_price
                    ,"reviews":this.products[i].reviews,"comments":this.products[i].comments})
                }
            }
        }
    },
  mounted(){
        this.get_cookie()
        $nuxt.$emit('cart_clicked')/**/
  },
  methods: {
      get_cookie(){
        var name = "STOREINO-WISHLIST" + "=";
        var cDecoded = decodeURIComponent(document.cookie); //to be careful
        var cArr = cDecoded.split('; ');//console.log('test : '+cArr)
        var wishlist_result;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) wishlist_result = val.substring(name.length);
        });
        var name = "STOREINO-CART" + "=";
        var cDecoded = decodeURIComponent(document.cookie); //to be careful
        var cArr = cDecoded.split('; ');
        var cart_result;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) cart_result = val.substring(name.length);
        });
        /////cart////
        if(cart_result!='null'){
            var arr = cart_result.split('&')
            //this.cart_length = arr.length
            store.commit('clear_cart_array')
            for (var j = 0; j < arr.length; j++) {
              store.commit('fill_cart_array', arr[j])
            }
        }else{
            store.commit('clear_cart_array')
            }
        /////wishlist////
        if(wishlist_result!='null'){
            var arr = wishlist_result.split('&')
            //this.cart_length = arr.length
            store.commit('clear_wishlist_array')
            for (var j = 0; j < arr.length; j++) {
              store.commit('fill_wishlist_array', arr[j])
            }
        }else{
            store.commit('clear_wishlist_array')
            }
      },
      add_to_cart(id,price){
            if(store.state.cart.length == 0){
                var arr=id+",1,"+price
                store.commit('fill_cart_array',arr)
            }
            else{
                var found = false;
                for (var i = 0; i < store.state.cart.length && !found; i++) {
                    var str = store.state.cart[i].split(',')
                    if (str[0] == id) {
                        found = true;
                        var arr=id+",1,"+price
                        store.commit('delete_cart_array',i)
                        store.commit('fill_cart_array',arr)
                        break;
                    }
                }
                if(!found){
                    var arr=id+",1,"+price
                    store.commit('fill_cart_array',arr)
                }
            }

            var phr = ""
            for (var i = 0; i < store.state.cart.length ; i++){
                phr+=store.state.cart[i]+"&"
            }
            if(phr.charAt(phr.length-1)=='&'){
                var edited_cookie = phr.slice(0, -1)
                var now = new Date()
                now.setMonth(now.getMonth()+24)
                document.cookie = "STOREINO-CART="+edited_cookie+";Expires="+now.toUTCString()+";"
            }
            this.get_cookie()
            $nuxt.$emit('cart_clicked')

            
      },
      add_to_wishlist(id){
          if(store.state.wishlist.length == 0){
                store.commit('fill_wishlist_array',id)
            }
            else{
                var found = false;
                for (var i = 0; i < store.state.wishlist.length && !found; i++) {
                    if (store.state.wishlist[i] == id) {
                        found = true;
                        break;
                    }
                }
                if(!found){
                    store.commit('fill_wishlist_array',id)
                }
            }

            var phr = ""
            for (var i = 0; i < store.state.wishlist.length ; i++){
                phr+=store.state.wishlist[i]+"&"
            }
            if(phr.charAt(phr.length-1)=='&'){
                var edited_cookie = phr.slice(0, -1)
                var now = new Date()
                now.setMonth(now.getMonth()+24)
                document.cookie = "STOREINO-WISHLIST="+edited_cookie+";Expires="+now.toUTCString()+";"
            }
            this.get_cookie()
            $nuxt.$emit('cart_clicked')

            /*/////////////////////update json file(cart_length)////////////////////
            ////delete all data//////////
            /*for (var i = 0; i < this.cart_ln.length ; i++){
                axios.delete('http://localhost:3000/cart_length/' + this.cart_ln[i].id)
                //axios.post('http://localhost:3000/cart_length',{
                //    id:"a",nom:"b",price:"c",quantity:"d",total:"e"
                //})
            }
            ////send all data//////////
            //alert(store.state.length)
            for (var i = 0; i < store.state.cart.length ; i++){
                var str = store.state.cart[i].split(',')
                axios.post('http://localhost:3000/cart_length',
                {
                    id:str[0],quantity:str[1],price:str[2]
                },
                )
            }*/
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
a{
    color: black;
    text-transform: capitalize;
}
.column:hover a{
    color: #008c46;
}
.prod{
    //padding-right: 13px;
    //width: 100%;
    height: 160px;
    object-fit: contain;
    background: white;
    //width: 96.6%;
    width: 100%;
    padding: 0;
    margin: 0 0 6px 0;
}
.TopProducts{
    background-color: #f4f4f4;
    padding-top: 21px;
}
.TopProducts h3{
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
.name{
    text-align: center;
    padding: 15px 0px;
    padding-left: -21px;
    margin: -8px 4px;
    margin-left: 8px;
    background-color: white;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 23px;
    color: #676767;
    margin-bottom: 5px;
    width: 100%;
    /* padding: 0; */
    margin: 0 0 0px 0;
}
.name:hover{
    color: #008c46;
    cursor: pointer;
}
.prices{
    text-align: center;
    padding: 5px 0px;
    padding-left: -21px;
    margin: -6px 4px;
    margin-left: 8px;
    background-color: white;
    /* font-weight: 600; */
    font-style: normal;
    font-size: 15px;
    /* line-height: 23px; */
    margin-bottom: 0;
    background: white;
    width: 100%;
    padding: 0;
    margin: 0 0 0px 0;
}
.compare_price{
    color: #808080;
    text-decoration: line-through;
    text-decoration-color: red;
}
.price{
    font-size: 20px;
    font-weight: 500;
}
.addCarte{
    background-color: #008c46;
    color: #ffffff;
    border: none;
    padding: 10px 50px;
    font-weight: 600;
    width: 80%;
    cursor: pointer;
}
.addToCarte{
    text-align: center;
    padding: 5px 0px;
    padding-left: -21px;
    margin: -6px 4px;
    margin-left: 8px;
    background-color: white;
    /* font-weight: 600; */
    font-style: normal;
    font-size: 15px;
    /* line-height: 23px; */
    margin-bottom: 0;
    background: white;
    width: 100%;
    padding: 0;
    margin: 0 0 0px 0;
    padding-bottom: 11px;
}
.stars img{
    width: 17px;
}
.stars{
    text-align: center;
    padding: 0px 0px;
    padding-left: -21px;
    //margin: -17px 4px;
    margin-left: 10px;
    background-color: white;
    margin: 0;
}
.shopping i,.heart i{
    padding: 4px;
    padding-top: 8px;
    padding-right: 10px;
    padding-left: 8px;
    /* margin: 0 11px; */
    margin-right: 5px;
    border-radius: 50%;
    background-color: #fff;
    transition: all,.3s;
    box-shadow: 0 0 1px rgb(0 0 0 / 50%);
    cursor: pointer;
    color: #d9d1d1;
    font-size: 22px;
    display: flex;
    padding: 0;
    width: 40px;
    height: 37px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 24px;
}
.heart i{
    font-size: 20px;
}
.shopping i{
    font-size: 18px;
}
.shopping i:hover,.heart i:hover{
    background-color: #008c46;
    color: white;
    animation: ro 1s linear /*infinite*/;
}
@keyframes ro {
    0%{transform: rotate(0);}
    100%{transform: rotate(360deg);}/**/
}
.ico{
    background-color: white;
    //padding: 5px 0px;
    padding-left: -21px;
    margin: -8px 5px;
    margin-left: 8px;
    height: 47px;
    margin: 0;
    padding-top: 4px;
    background: white;
    width: 100%;
    /* padding: 0; */
    margin: 0 0 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
}
.ico .heart,.ico .shopping{
    /*display: inline-block;
    float: right;*/
}
.column{
    margin-bottom: 27px;
    padding-right:8px;
}
.heart,.shopping,.stars img,.price,.compare_price{
    background-color: white;
}
.shopping{
    display: flex;
}
.heart{
    margin-right: 5px;
}
@media (max-width: 430px){
.TopProducts h3{
        font-size: 1.5em;
    }
}/**/
</style>
