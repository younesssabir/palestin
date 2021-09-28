<template>
  <div class="TopHeader">
      <div class="container">
          <div class="flex">
              <div class="flex">
                    <div @click="show" class="btn_tooggle">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </div>
                    <div class="searchBtn">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-5 svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </div>
                </div>
                <div class="flx">
                    <div class="logo d-ib">
                        <nuxt-link to="/"><img class="baywa-logo-svg" id="site-logo" src="https://storeno.b-cdn.net/stores/6-2021/1623862832159.png?height=520" alt="Logo"></nuxt-link>
                    </div>
                    <div class="logoIntro d-ib">
                        <h4>Morocco Fresh.</h4>
                    </div>
                </div>
                <div class="search d-ib">
                    <input type="text" name="search" id="searchItems" placeholder="Search term, article number ...">
                    <div class="d-ib c-p searchIcon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-5 svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </div>
                </div>
                <div class="icons d-ib">
                    <div @click="get_cookie_name('STOREINO-CART')" class="Account d-ib ta-c mx-2 c-p">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="w-5 svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        <span class="d-b">My account</span>
                    </div>
                    <div class="Bookmarks d-ib ta-c mx-2 c-p">
                        <nuxt-link to="/wishlist">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="w-5 svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                        <span class="d-b bmk">Bookmarks</span>
                        <span class="Book_Mark_Popup">{{wishlist_dialogStatus}}</span>
                        </nuxt-link>
                    </div>
                    <div class="Shopping d-ib ta-c mx-2 c-p">
                        <nuxt-link to="/cart">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="w-5 svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                        <span class="d-b shop">Shopping cart</span>
                        <span class="cartPopup">{{cart_dialogStatus}}</span>
                        </nuxt-link>
                    </div>
                </div>
                
          </div>
      </div>
      <div :class="showMenu">
          <MenuToogle />
      </div><!---->
  </div>
</template>

<script>
//import EventBus from '../event-bus';
import store from '../store/store.js'
import axios from 'axios'
//import MenuToogle from '../components/MenuToogle.vue'
export default {
  components:{ /*MenuToogle  */},
  async fetch() {
      this.cart_ln = await fetch('http://localhost:3000/cart_length').then(res => res.json())
      this.cart_length =  this.cart_ln.length
  },
  created() {
      /////////////get cart cookie///////////////
        /**/this.$nuxt.$on('cart_clicked', () => {
                var all_cookie = document.cookie
                var spt = all_cookie.split('=') 
                var sh = spt.toString()
                var STOREINO_CART="null"
                var STOREINO_WISHLIST="null"
                var les = sh.split(';') 
                //////////cart//////////
                for (var i = 0; i < les.length; i++){ 
                     if(les[i].includes('STOREINO-CART') && les[i].includes('null') ){
                        STOREINO_CART="null"
                     }
                     if(les[i].includes('STOREINO-CART') && !les[i].includes('null') ){
                        STOREINO_CART=les[i].replace('STOREINO-CART,','')
                     }
                }
                if(STOREINO_CART!='null'){
                    this.cart_dialogStatus = 0
                    var arr = STOREINO_CART.split('&')
                    this.cart_dialogStatus = arr.length
                    this.cart_length = arr.length
                }else{
                    this.cart_dialogStatus = 0
                    store.commit('clear_cart_array')
                }
                //////////wishlist//////////
                for (var i = 0; i < les.length; i++){ 
                     if(les[i].includes('STOREINO-WISHLIST') && les[i].includes('null') ){
                        STOREINO_WISHLIST="null"
                     }
                     if(les[i].includes('STOREINO-WISHLIST') && !les[i].includes('null') ){
                        STOREINO_WISHLIST=les[i].replace('STOREINO-WISHLIST,','')
                     }
                }
                if(STOREINO_WISHLIST!='null'){//alert(STOREINO_WISHLIST)
                    this.wishlist_dialogStatus = 0
                    var arr = STOREINO_WISHLIST.split('&')
                    this.wishlist_dialogStatus = arr.length
                    this.WISHLIST_length = arr.length
                }else{
                    this.wishlist_dialogStatus = 0
                    store.commit('clear_wishlist_array')
                }
                /////////remove empty item//////
                for (var i = 0; i < store.state.cart.length; i++){
                    if(store.state.cart[i]=='' || store.state.cart[i]=="null") store.commit('delete_cart_array',i)
                }
                if(store.state.cart.length == 0) {
                    this.cart_dialogStatus = 0
                    store.commit('clear_cart_array')
                    var now = new Date()
                    now.setMonth(now.getMonth()+24)
                    document.cookie = "STOREINO-CART="+'null'+";Expires="+now.toUTCString()+";"
                }
                //console.log('STOREINO_CART : '+STOREINO_CART+'\nSTOREINO_WISHLIST : '+STOREINO_WISHLIST)
                /*//////////delete cookie
                if(STOREINO_CART == 'null'){
                    document.cookie = "STOREINO-CART=null; expires= Thu, 21 Aug 2014 20:00:00 UTC"
                }
                if(STOREINO_WISHLIST == 'null'){
                    document.cookie = "STOREINO-WISHLIST=null; expires= Thu, 21 Aug 2014 20:00:00 UTC"
                }*/
            });
            
    },
    beforeDestroy() {
        //this.$nuxt.$off('cart_clicked')
        //this.$nuxt.$off('wishlist_clicked')
    },
  data() {
    return { showMenu:'noShow',cart_ln:[] ,cart_length:0,watch:0,cart_dialogStatus: 0,wishlist_dialogStatus:0 }
  },
  methods: {
      get_cookie_name(cname) {
        let name = cname + "=";
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') { cookie = cookie.substring(1); }
            if (cookie.indexOf(name) == 0) {
                const result = decodeURIComponent(cookie.substring(name.length, cookie.length))
                console.log(result)
                return result
            }
        }
        return "null";
    },
      show(){
          if(this.showMenu=='noShow') {this.showMenu='show'}
          else {this.showMenu='noShow'}
      }
  },
  watch:{},
  mounted(){
      /////////////check if exist cookie////////////
            /**/var all_cookie = document.cookie
            var spt = all_cookie.split('=')
            var trouve = false
            for (var i = 0; i < spt.length; i++){
                if(spt[0] == 'STOREINO-CART' || spt[0] == 'STOREINO-WISHLIST'){
                    trouve = true ; break ;
                }
            }
            ///////////creat coockie////////////
            if(!trouve){
                var now = new Date()
                now.setMonth(now.getMonth()+24)
                document.cookie = "STOREINO-CART="+'null'+";Expires="+now.toUTCString()+";"
                document.cookie = "STOREINO-WISHLIST="+'null'+";Expires="+now.toUTCString()+";"
            }
            //////////////////////////
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.icons a{
    color: #9a9090;
}
.test{
    border: none;
}
.TopHeader{
    margin: 0;
    padding: 2px 0px 7px 0px;
}
.Account:hover,.Bookmarks:hover,.Shopping:hover{
    color: #008c46;
}
.baywa-logo-svg{
    width: 110px;
    height: 44px;
}
#searchItems{
    padding-left: 15px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 45px;
    width: 17em;
    margin-right: -4px;
    color: white;
    background: white;
    padding-top: 8px;
    border: 1px solid black;
}
.searchIcon{
    background: none;
    padding: 10px;
    margin-left: 0px;
}
.logoIntro h4{
    white-space: nowrap;
    margin-left: 20px;
    margin-right: 20px;
    color: #008c46;
    font-size: 20px;
    font-family: Arial, sans-serif;
    font-weight: 500;
}
.icons{
    color: #9a9090;
    //float: right;
    margin: 0px;
    //padding-top: 10px;
    //display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    float: none;
}
.icons span{
    font-size: 11px;
}
.searchIcon svg{
    color: #006f3b;
}
.cartPopup,.Book_Mark_Popup{
    font-family: Helvetica, Arial, sans-serif;
    /* content: attr(data-badge); */
    color: #fff;
    background-image: radial-gradient(#d7373c 99%, #ffffff 100%);
    border: 2px solid #fff;
    padding: 3px;
    border-radius: 50px;
    position: absolute;
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px;
    height: 24px;
    min-width: 24px;
    top: 16px;
}

.btn_tooggle svg{
    width: 28px;
    color: #008c46;
}
.btn_tooggle{
    display: none;
    /*position: absolute;
    left: 6px;
    top: 26px;*/
    cursor: pointer;
    //z-index: 9999;
}
.searchBtn{
    display: none;
    padding: 0 4px;
    margin: 0px 2% 0px 4%;
    cursor: pointer;
    font-size: 20px;
    color: #008c46;
}
.searchBtn:hover{
    //background-color: yellow;
}
.show{
    background-color: #f4f4f4;
    position: absolute;
    top: 8px;
    width: 100%;
    //height: 300px;
    left: 6px;
    z-index: 1;
    display: block;
}
.noShow{
    display: none;
}
.search{
    background-color: #f4f4f4;
}
.Account,.Bookmarks,.Shopping{
    float: right;
    //padding: 8px 0px;
}
.search{
    display: inline-block;
    background-color: white;
}
.TopHeader,.container,#site-logo,h4,svg,.icons{
    background-color: white;
    
}
.logo,.logoIntro,.Account,.Bookmarks,.Shopping,span,.logo a{
    background:none;
}
li a{
    color: black;
}
.flex{
    padding-top: 11px;
}
.flex .flex{
    padding-top: 0;
}
.icons a{
    background: white;
}
///////////////////////////////////////////////////////////////////////////////
@media (max-width: 975px){
.Book_Mark_Popup{
    top: 22px;
    right: 59px;
}
.cartPopup{
    right: 26px;
    top: 22px;
}
.Account span,.Bookmarks .bmk,.Shopping .shop{
    display: none;
}
.Account,.Bookmarks,.Shopping{
    float: right;
    //padding: 8px 0px;
}
.icons{
    //padding-top: 20px;
    display: flex;
}
}
@media (max-width: 663px){
.search {
    display: block;
}
.icons{
    margin: 0;
}
 #searchItems{
    width: 15em;
}
.search {
    display: inline-block;
}
}


@media (max-width: 770px){
.logoIntro,.division{
    display: none;
}
#searchItems{
    width: 15em;
}
.icons{
    margin: 0;
}
}
@media (max-width: 575px){
#searchItems{
    font-size: 11px;
}
.searchIcon{
    padding: 9px 4px 11px 1px;
}
}
@media (max-width: 584px){   //3333
#searchItems{
    width: 13em;
    padding-left: 3px;
}
.icons{
    margin: 0;
}
}
@media (min-width: 821px){
.Menu_Toogle,.flex .flex{
    display: none;
}
}
@media (max-width: 723px){
.logo {
    //width: 63%;
}
}
@media (max-width: 545px){
.logo {
    width: 21%;
    //margin-left: 18%;
}
#site-logo{
    width: 100%;
}
}
@media (max-width: 388px){
.logo {
    //margin-left: 10%;
}
}

@media (max-width: 821px){
.btn_tooggle,.show{
    display: block;
}
.logo{
    //padding-top: 10px;
    width: 100%;
    //margin-left: 21%;
    /**/ text-align: center; 

}
#searchItems{
    //width: 15em;
    //display: none;
}
.logoIntro,.search {
    display: none;
}
.searchBtn{
    display: inline-block;
}
#site-logo{
    width: 100%;
}
.searchBtn,.btn_tooggle{
    background: none;
}
.TopHeader{
    /* table-layout: fixed; */
    position: fixed;
    z-index: 9999;
    background: #fff;
    /* top: 0; */
    /* left: 0; */
    /* height: 62px; */
    /* display: flex; */
    width: 100%;
    /* align-items: center; */
    box-shadow: 0 0 5px rgb(0 0 0 / 13%);
}
}
@media (max-width: 431px){
.logo {
    //margin-left: 14%;
}
}
@media (max-width: 360px){
.logo {
    //margin-left: 7%;
}
}
@media (max-width: 310px){
.logo {
    //margin-left: 0;
}
}
@media (max-width: 280px){
.logo {
    //display: none;
}
}
.flex,.flx{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}
.flex .flex{
    display: none;
}
@media (max-width: 821px){
.flex .flex{
    display: flex;
    //padding-top: 20px;
}
}
@media (max-width: 226px){
.Book_Mark_Popup, .cartPopup{
    display: none;
    //padding-top: 20px;
}
}
</style>
