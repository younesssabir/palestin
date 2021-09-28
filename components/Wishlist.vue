<template>
  <div class="Wishlist">
    <div class="container">
      <div class="row">
        <div v-for="(wish_list,index) in wishlist.length" :key="index" class="col-3 all">
          <div class="container_col">
            <nuxt-link :to="'/products/'+wishlist[index].slug |slug"><div class="item_img_container">
                <img
                  loading="lazy"
                  :src="wishlist[index].img[0].id"
                  alt=""
                /></div
            ></nuxt-link>
            <div class="item_details">
              <div class="item_center">
                <div></div>
                <div class="item_price">
                  <h6 dir="auto" class="sale_price">
                    {{wishlist[index].price}} dh
                  </h6>
                  <h6 dir="auto" class="compare_price">
                    {{wishlist[index].compare_price}} dh
                  </h6>
                </div>
              </div>
              <div class="item_description">
                <nuxt-link :to="'/products/'+wishlist[index].slug |slug"><h6>{{wishlist[index].nom}}</h6></nuxt-link>
              </div>
            </div>
            <div class="item_actions">
              <div @click="remove_wishlist(wishlist[index].id)" class="item_first_action">
                <span class="first_action_icon"
                  ><svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 352 512"
                  >
                    <path
                      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    ></path></svg
                ></span>
                <span>REMOVE</span>
              </div>
              <div @click="move_to_card(wishlist[index].id)" class="item_seconde_action">
                <span class="seconde_action_icon"
                  ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                    ></path></svg
                ></span>
                <span> MOVE TO CARD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link v-if="wishlist.length!=0" to="/shop" class="primary-btn cart-btn cart-btn-left">CONTINUE SHOPPING</nuxt-link>
      <div v-else class="shop_cart">
        <div class="empty_cart_div">
          <img
            loading="lazy"
            src="https://themes.storeino.com/hicham/img/cart_empty.c98984a.png"
            alt=""
            srcset=""
          />
          <h2>Your wishlist is empty</h2>
          <div
            class="btn_container"
            style="text-align: left"
          >
            <button
              type="button"
              aria-label="button"
              class="log"
              style="background: #008c46; padding: 12px 45px"
            >
              <nuxt-link to="/shop">Start shopping</nuxt-link>
            </button>
          </div>
          <nuxt-link to="/shop" class="primary-btn cart-btn cart-btn-left">CONTINUE SHOPPING</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/store.js'
import axios from 'axios'
export default {
  data() {
    return { wishlist:[],products:[] }
  },
  methods: {
    move_to_card(id){
      ///////remove in wishlist////////
        this.remove_wishlist(id)
        ///////remove in cart store////////
        for (var i = 0; i < store.state.cart.length; i++) {
            var split = store.state.cart[i].split(',')
            if(split[0] == id){
                store.commit('delete_cart_array',i)
                break
            }
        }
        ///////update store cart and add new product////////
        for (var i = 0; i < this.products.data.length; i++){
            if(this.products.data[i].id == id){
                store.commit('fill_cart_array',id+',1,'+this.products.data[i].price)
            }
        }
        ///////remove cookie////////
          var phr = ''
          for (var i = 0; i < store.state.cart.length; i++) {
            phr += store.state.cart[i] + '&'
          }
          if (phr.charAt(phr.length - 1) == '&') {
            var edited_cookie = phr.slice(0, -1)
            var now = new Date()
            now.setMonth(now.getMonth() + 24)
            document.cookie =
              'STOREINO-CART=' +
              edited_cookie +
              ';Expires=' +
              now.toUTCString() +
              ';'
          }
          $nuxt.$emit('cart_clicked')
    },
    remove_wishlist(id){
      ////////remove in store////////
        for (var i = 0; i < store.state.wishlist.length; i++){
              if(store.state.wishlist[i] == id){
                  store.commit('delete_wishlist_array',i)
                  break
              }
        }
        ////////update data////////
        this.wishlist = []
        for(var i=0;i<this.products.data.length;i++){ 
              for(var j=0;j<store.state.wishlist.length;j++){
                  if(this.products.data[i].id==store.state.wishlist[j]){
                      this.wishlist.push({"id":this.products.data[i].id,"nom":this.products.data[i].nom,
                      "slug":this.products.data[i].slug,"img":this.products.data[i].img,"description":this.products.data[i].description,
                      "categorie_id":this.products.data[i].categorie_id,"price":this.products.data[i].price,"compare_price":this.products.data[i].compare_price
                      ,"reviews":this.products.data[i].reviews,"comments":this.products.data[i].comments})
                  }
              }
          }
          ////////update cookie////////
          var phr = ''
          for (var i = 0; i < store.state.wishlist.length; i++) {
            phr += store.state.wishlist[i] + '&'
          }
          if (phr.charAt(phr.length - 1) == '&') {
            var edited_cookie = phr.slice(0, -1)
            var now = new Date()
            now.setMonth(now.getMonth() + 24)
            document.cookie =
              'STOREINO-WISHLIST=' +
              edited_cookie +
              ';Expires=' +
              now.toUTCString() +
              ';'
          }
          /////////check if empty//////////
          if(store.state.wishlist.length == 0){
              var now = new Date()
              now.setMonth(now.getMonth() + 24)
              document.cookie =
                'STOREINO-WISHLIST='+'null'+';Expires=' + now.toUTCString() + ';'
          }
          $nuxt.$emit('cart_clicked')
    },
    get_cookie() {
        axios.get('http://localhost:3000/products').then((res) => {this.products = res 
              var name = "STOREINO-WISHLIST" + "=";
                var cDecoded = decodeURIComponent(document.cookie); //to be careful
                var cArr = cDecoded.split('; ');
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
                    store.commit('clear_wishlist_array')
                    for (var j = 0; j < arr.length; j++) {
                      store.commit('fill_wishlist_array', arr[j])
                    }
                }else{
                    store.commit('clear_wishlist_array')
                    }
                
                  for (var i = 0; i < store.state.cart.length; i++){
                    if(store.state.cart[i]=='' || store.state.cart[i]=="null") store.commit('delete_cart_array',i)
                }
                if(store.state.cart.length == 0) {
                    store.commit('clear_cart_array')
                }
                  
                  for(var i=0;i<this.products.data.length;i++){ 
                        for(var j=0;j<store.state.wishlist.length;j++){
                            if(this.products.data[i].id==store.state.wishlist[j]){
                                this.wishlist.push({"id":this.products.data[i].id,"nom":this.products.data[i].nom,
                                "slug":this.products.data[i].slug,"img":this.products.data[i].img,"description":this.products.data[i].description,
                                "categorie_id":this.products.data[i].categorie_id,"price":this.products.data[i].price,"compare_price":this.products.data[i].compare_price
                                ,"reviews":this.products.data[i].reviews,"comments":this.products.data[i].comments})
                            }
                        }
                    }
                    $nuxt.$emit('cart_clicked')
        })
    }
  },
  mounted() {
      this.get_cookie()
      
  },
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');

.Wishlist {
  background-color: #f4f4f4;
  padding: 20px 0;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    margin-bottom: 30px;
    padding: 13px 0;
    background: #f4f4f4;
}
.primary-btn.cart-btn {
    //padding: 14px 30px 12px;
    text-decoration: none;
    //font-weight: 700;
    margin: 0 14px;
    padding: 23px 30px;
    font-weight: 400;
}
.cart-btn-left {
    color: #fff;
    background: var(--primary-color);
    border-radius: 3px;
    opacity: .9;
}
.container_col {
    margin-bottom: 12px;
    border-radius: .5rem;
    box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
    overflow: auto;
    transition: all .3s ease-in-out;
}
a {
    text-decoration: none;
    color: #fff;
}
.container_col .item_img_container {
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    cursor: pointer;
}
.container_col img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
}
img {
    cursor: pointer;
    height: auto;
}
.item_details {
    padding: 5px;
    color: #333;
}
.item_center {
    display: flex;
    justify-content: center;
}
.item_price {
    display: flex;
}
.item_price h6 {
    padding: 2px;
    font-size: 15px;
}
.sale_price {
    margin: 0 8px;
    //padding: 0;
}
.item_price .compare_price {
    text-decoration: line-through;
}
.item_price h6 {
    padding: 2px;
    font-size: 15px;
}
.item_description {
    padding: 5px 0;
}
.item_description h6 {
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    margin: 0;
    padding: 0;
}
.item_actions {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    font-weight: 600;
}
.item_first_action {
    background: #fff;
    font-size: 10px;
    padding: 0;
    width: 25%;
}
.item_first_action, .item_seconde_action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 5px;
    cursor: pointer;
}
.item_first_action .first_action_icon {
    display: flex;
    padding: 0 3px;
}
.item_first_action .first_action_icon svg {
    height: 12px;
    fill: #b1b1b1;
}
.item_seconde_action {
    background: var(--primary-color);
    color: #fff;
}
.item_first_action, .item_seconde_action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 5px;
    cursor: pointer;
}
.item_seconde_action .seconde_action_icon {
    display: flex;
    padding: 0 3px;
}
.item_seconde_action .seconde_action_icon svg {
    height: 12px;
    fill: #fff;
}
.primary-btn.cart-btn {
    /*padding: 14px 30px 12px;
    text-decoration: none;
    font-weight: 700;
    margin: 0 14px;*/
}
.cart-btn-left {
    color: #fff;
    background: #008c46;
    border-radius: 3px;
    opacity: .9;
}
.first_action_icon,.first_action_icon svg{
    background: white;
}
.item_seconde_action,.item_seconde_action span,.item_seconde_action svg{
    background: #008c46;
}
@media only screen and (min-width: 992px){
    [class*=col-] {
        width: 30%;
    }
}
@media only screen and (max-width: 992px){
    [class*=col-] {
        width: 28.66%;
    }
}
[class*=col-] {
    float: left;
    padding: 0 15px;
}
@media only screen and (max-width: 768px){
    [class*=col-] {
        width: 43%;
    }
}
@media only screen and (max-width: 532px){
    [class*=col-] {
        width: 100%;
    }
}
@media (max-width: 821px) {
  .Wishlist {
    padding-top: 100px;
  }
}
@media (max-width: 870px) {
  .item_first_action,.item_seconde_action {
    font-size: 0.7em;
  }
}
.col-3:hover{
    position: relative;
    top: -7px;
    //margin-top: 4px;
    transform: translateY(5px);
    //box-shadow: 0 10px 7px -2px rgb(0 0 0 / 10%);
}
.shop_cart {
    max-width: 1170px;
}
.empty_cart_div {
    margin: 14px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.empty_cart_div img {
    max-height: 50%;
    max-width: 50%;
    cursor: pointer;
}
.empty_cart_div h2 {
    color: #e53c49;
    font-size: 21px;
    padding: 12px 0;
}
.btn_container {
    margin: 12px 0;
}
button {
    height: 100%;
    padding: 12px 25px;
    font-weight: 500;
    color: #fff;
    font-family: var(--font-family);
    font-weight: 600;
    background: #000;
    border: 1px solid;
    border-radius: 3px;
    cursor: pointer;
    opacity: .8;
    outline: none;
}
.primary-btn.cart-btn {
    /*padding: 14px 30px 12px;
    text-decoration: none;
    font-weight: 700;
    margin: 0 14px;
    text-align: center;*/
}
.log a{
    background: none;
    color: white;
}
h6:hover{
    color: #008c46;
}
h6{
    display: contents;
}
.item_seconde_action{
  font-weight: 300;
}
</style>
