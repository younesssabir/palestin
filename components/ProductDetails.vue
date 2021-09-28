<template>
  <div v-if="Products_found" class="product_details">
      <div class="container">
            <div class="d-f fw-w">
                <div class="lg-col-6 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column">
                    <div class="product_images">
                        <div v-for="(img,index) in prodcuct_data.img.length" :key="index" class="img1" @click="img_click(prodcuct_data.img[index].id)">
                            <img :src="prodcuct_data.img[index].id" alt="">
                        </div>
                    </div>
                    <div class="image_content">
                        <div :class="no_show_img" @mouseleave="mouseLeave" @mousemove="mouseMove" id="zoom-img" class="image1" :style="style"></div>
                        <img @mousemove="show_img_zoom" id="show_img_zoom_in" :class="show_img" :src="imgSrc" alt="">
                    </div>
                </div>
                <div class="lg-col-6 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column" style="padding-left: 20px;">
                    <h3>{{prodcuct_data.nom}}</h3>
                    <div class="stars">
                        <img v-for="(img,index) in prodcuct_data.reviews" :key="index" src="../assets/svg/star.svg" alt="">
                        <img v-for="(review,index) in 5-prodcuct_data.reviews" :key="index+'jj'" src="../assets/svg/star_gray.svg" alt="">
                    </div>
                    <span class="reviews">({{prodcuct_data.reviews}} reviews)</span>
                    <div class="flexy">
                        <div class="full_width">
                            <div @click="quantity_minus(prodcuct_data.id)" class="minus bg_gray" id="minus">-</div>
                            <div class="price">
                                <input
                                    @select="update_quantity(prodcuct_data.id)"
                                    @mouseup="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @mouseover="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @mouseout="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @mousemove="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @mouseleave="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @mousedown="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @mouseenter="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @keyup="update_quantity(prodcuct_data.id)"
                                    @keydown="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    @focus="update_quantity(prodcuct_data.id)"
                                    @change="update_quantity(prodcuct_data.id)"
                                    @keypress="
                                    update_quantity(prodcuct_data.id)
                                    "
                                    min="1" type="number" :id="prodcuct_data.id" v-model="quantity" name="quantity">
                            </div>
                            <div @click="quantity_plus(prodcuct_data.id)" class="plus">+</div>
                        </div>
                        <div class="prices_div">
                            <span class="compare_price"> {{prodcuct_data.compare_price}} dh</span>
                            <span class="price_div"> {{prodcuct_data.price}} dh</span>
                        </div>
                    </div>
                    <!--<img class="lazy" loading="lazy" width="25" height="25" src="https://themes.storeino.com/hicham/img/buy-online.002aaf4.svg" alt="shop bascket">
                    <div class="addToCarte">
                        <input type="button" value="Add To Carte" class="addCarte">
                    </div>
                    <div class="add_to_wishlist_and_social_media_icons">
                        <div class="add-wishlist "><span><img loading="lazy" src="https://themes.storeino.com/hicham/img/heart-shape-outline.9fa1e14.svg" width="15" height="15" alt="wishlist"></span> <span>Add To Wishlist</span></div>
                        <div class="ico" ><div class="facebook"><img src="../assets/svg/facebook.svg" alt="" width="37" height="37"></div> <div class="twitter"><img src="../assets/svg/twiter.svg" alt="" width="37" height="37"></div> <div class="instagram"><img src="../assets/svg/instagram.svg" alt="" width="37" height="37"></div><div class="whatsap"><img src="../assets/svg/whatsap.svg" alt="" width="37" height="37"></div><div class="pinterest"><img src="../assets/svg/pinterest.svg" alt="" width="37" height="37"></div></div>
                    </div>-->
                    <div class="flex">
                        <div @mousemove="set_bg_color" @mouseleave="set_bg_color_none" class="add_to_shopping_list" id="add_to_shopping_list">
                            <div class="wishlist_svg bg_body_color" id="wishlist_svg">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :fill="new_color" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                            </div>
                            <input type="button" value="Add to shopping list" class="addCarte bg_none" id="addCarte">
                        </div>
                        <div @click="add_to_cart(prodcuct_data.id,prodcuct_data.price)" class="shoose_variants">
                            <input type="button" value="Add to Cart" class="addCarte">
                        </div>
                    </div>
                </div>
            </div>

            <div class="nav-menu">
                <div class="nav-elements">
                    <ul>
                        <li>
                            <div @click="description_click" id="description" :class="active" class="element-container" style="font-weight: 700;">
                                <span>Description</span>
                            </div>
                        </li>
                        <li>
                            <div @click="reviews_click" id="reviews" class="element-container">
                                <span>Reviews ({{prodcuct_data.reviews}})</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="p_description">{{prodcuct_data.description}}</div>
            <div id="p_reviews" class="no_show">
                <div v-for="(img,index) in prodcuct_data.comments.length" :key="index+'555'" class="review"  style="background-color: white;">
                    <div class="a-profile-avatar">
                        <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" class="" data-src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png">
                        <span class="user_name">{{prodcuct_data.comments[index].user_name}}</span> 
                    </div>
                    <div class="stars">
                        <img v-for="(img,index1) in prodcuct_data.comments[index].stars" :key="index1" src="../assets/svg/star.svg" alt="">
                        <img v-for="(review,index) in 5-prodcuct_data.comments[index].stars" :key="index+'st'" src="../assets/svg/star_gray.svg" alt="">
                    </div>
                    <div v-for="(img,index2) in prodcuct_data.comments.length" :key="index2+'hh'" class="comments">{{prodcuct_data.comments[index2].comments}}</div>
                </div>
            </div>
      </div>
  </div>
</template>
<script>
import store from "../store/store.js"
import axios from "axios"
export default {
    components:{},
  data() {
    return {active:"active",products:[],Products_found:false,prodcuct_data:[],style:"",img_prods:[],imgSrc:"",show_img:"show_img",no_show_img:"no_show_img",
            new_color:"#008c46",quantity:1}
  },
  mounted(){
            if(this.$route.params.id!='undefined' && this.$route.params.id!=null){
                axios.get('http://localhost:3000/products').then(res => {this.products=res 
                        for(var i=0;i<this.products.data.length;i++){
                            if(this.products.data[i].slug==this.$route.params.id){
                                this.Products_found=true
                                this.prodcuct_data=this.products.data[i]
                                break
                            }
                        }
                        if(this.Products_found){
                            this.imgSrc=this.prodcuct_data.img[0].id
                            this.style="background: url('"+this.prodcuct_data.img[0].id+"')"
                        }
                        else console.log(' 0 products found')
                })
                //this.get_cookie() ; $nuxt.$emit('cart_clicked')
                }
                else window.location.href='/shop'
                
                
                
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
          var quantity = parseInt(document.getElementById(id).value)
          if(store.state.cart.length == 0){
                var arr=id+","+quantity+","+price
                store.commit('fill_cart_array',arr)
            }
            else{
                var found = false;
                for (var i = 0; i < store.state.cart.length && !found; i++) {
                    var str = store.state.cart[i].split(',')
                    if (str[0] == id) {
                        found = true;
                        var arr=id+","+quantity+","+price
                        store.commit('delete_cart_array',i)
                        store.commit('fill_cart_array',arr)
                        break;/**/
                    }
                }
                if(!found){
                    var arr=id+","+quantity+","+price
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
      update_quantity(val){
          this.quantity = parseInt(document.getElementById(val).value)
          if(this.quantity == 1){
                document.getElementById('minus').classList.remove("bg_gray")
                document.getElementById('minus').classList.remove("bg_green")
                document.getElementById('minus').classList.add("bg_gray")
          }
          else{
                document.getElementById('minus').classList.remove("bg_gray")
                document.getElementById('minus').classList.remove("bg_green")
                document.getElementById('minus').classList.add("bg_green")
          }
      },
        quantity_plus(val) {
        this.quantity = parseInt(document.getElementById(val).value) + 1
        document.getElementById('minus').classList.remove("bg_gray")
        document.getElementById('minus').classList.remove("bg_green")
        document.getElementById('minus').classList.add("bg_green")
    },  
    quantity_minus(val) {
      this.quantity = parseInt(document.getElementById(val).value) - 1
      if(this.quantity == 0){
          document.getElementById('minus').classList.remove("bg_gray")
          document.getElementById('minus').classList.remove("bg_green")
          document.getElementById('minus').classList.add("bg_gray")
          this.quantity = 1 ;
      }
      if(this.quantity == 1){
          document.getElementById('minus').classList.remove("bg_gray")
          document.getElementById('minus').classList.remove("bg_green")
          document.getElementById('minus').classList.add("bg_gray")
      }
    },  
      set_bg_color(){
          this.new_color = "white"
          document.getElementById('add_to_shopping_list').classList.remove("bg_green")
          document.getElementById('add_to_shopping_list').classList.remove("bg_none")
          document.getElementById('add_to_shopping_list').classList.add("bg_green")

          document.getElementById('wishlist_svg').classList.remove("bg_green")
          document.getElementById('wishlist_svg').classList.remove("bg_body_color")
          document.getElementById('wishlist_svg').classList.remove("bg_none")
          document.getElementById('wishlist_svg').classList.add("bg_green")

          document.getElementById('addCarte').classList.remove("bg_green")
          document.getElementById('addCarte').classList.remove("bg_none")
          document.getElementById('addCarte').classList.add("bg_green")
      },
      set_bg_color_none(){
          this.new_color = "#008c46"
          document.getElementById('add_to_shopping_list').classList.remove("bg_green")
          document.getElementById('add_to_shopping_list').classList.remove("bg_none")
          document.getElementById('add_to_shopping_list').classList.add("bg_none")

          document.getElementById('wishlist_svg').classList.remove("bg_green")
          document.getElementById('wishlist_svg').classList.remove("bg_none")
          document.getElementById('wishlist_svg').classList.add("bg_none")

          document.getElementById('addCarte').classList.remove("bg_green")
          document.getElementById('addCarte').classList.remove("bg_none")
          document.getElementById('addCarte').classList.add("bg_none")
      },
      show_img_zoom(){
          document.getElementById('show_img_zoom_in').classList.remove("show_img")
          document.getElementById('zoom-img').classList.remove("no_show_img")
          document.getElementById('show_img_zoom_in').classList.add("no_show_img")
          document.getElementById('zoom-img').classList.add("show_img")/**/
      },
      mouseMove(e) { 
          const image = document.querySelector('.image1');

            //image.addEventListener('mousemove', function (e) {
            let width = image.offsetWidth;
            let height = image.offsetHeight;
            let mouseX = e.offsetX;
            let mouseY = e.offsetY;
            
            let bgPosX = (mouseX / width * 100);
            let bgPosY = (mouseY / height * 100);            
            image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
            image.style.backgroundSize="175%"
            //});
            //document.getElementById('zoom-img').classList.add('backgroundSize')
            
      /*this.zoomed = true
      const image = document.querySelector('.myImg')
      let width = image.offsetWidth
      let height = image.offsetHeight
      let mouseX = e.offsetX
      let mouseY = e.offsetY
      let bgPosX = (mouseX / width) * 100
      let bgPosY = (mouseY / height) * 100
      this.backgroundPosition = `${bgPosX}% ${bgPosY}%`*/
    },
    mouseLeave() {  
        const image = document.querySelector('.image1');
        image.style.backgroundPosition = "center";

        document.getElementById('show_img_zoom_in').classList.remove("no_show_img")
        document.getElementById('zoom-img').classList.remove("show_img")
        document.getElementById('show_img_zoom_in').classList.add("show_img")
        document.getElementById('zoom-img').classList.add("no_show_img")
    },
      getData(){
          axios.get('http://localhost:3000/products').then(res => {this.products=res 
                for(var i=0;i<this.products.data.length;i++){
                    if(this.products.data[i].slug==this.$route.params.id){
                        this.Products_found=true
                        break
                    }
                }
          })
      },
      description_click(){
          document.getElementById('description').classList.remove("active")
          document.getElementById('reviews').classList.remove("active")
          document.getElementById('description').classList.add("active")

          document.getElementById('p_description').classList.remove("show")
          document.getElementById('p_description').classList.remove("no_show")
          document.getElementById('p_reviews').classList.remove("show")
          document.getElementById('p_reviews').classList.remove("no_show")
          document.getElementById('p_description').classList.add("show")
          document.getElementById('p_reviews').classList.add("no_show")
      },
      reviews_click(){
          document.getElementById('description').classList.remove("active")
          document.getElementById('reviews').classList.remove("active")
          document.getElementById('reviews').classList.add("active")

          document.getElementById('p_description').classList.remove("show")
          document.getElementById('p_description').classList.remove("no_show")
          document.getElementById('p_reviews').classList.remove("show")
          document.getElementById('p_reviews').classList.remove("no_show")
          document.getElementById('p_reviews').classList.add("show")
          document.getElementById('p_description').classList.add("no_show")
      },
      img_click(img){
          this.img_src=img
          document.getElementById('zoom-img').style.background="url('"+img+"')"
          this.imgSrc=img
          this.style="background: url('"+img+"')"
      },
      fct(){ }
  }
}
</script>

<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
*{
    font-family: system-ui;
}
.user_name{
    margin-left: 10px;
}
.a-profile-avatar{
    display: flex;
    background-color: white;
}
.a-profile-avatar img{
    width: 30px;
}
#p_description,#p_reviews{
    padding: 0 0 0 10px;
    color: #5c5858;
}
.nav-menu{
    margin-bottom: 15px;
    margin-top: 30px;
    border-bottom: 2px solid #e8e8e8;
}
#p_reviews{
    width: 75%;
    background-color: #f4f4f4;
    padding: 0;
}

.element-container{
    padding: 8px;
    cursor: pointer;
    color: #9e8f81;
}
.active{
    color: black;
    border-bottom: 4px solid #008c46;
    font-weight: 700;
}
.nav-elements ul{
    list-style: none;
    display: flex;
    width: 100%;
    border-bottom: 2px solid #eaeaea;
}
.nav-elements ul li {
    text-decoration: none;
    list-style: none;
    position: relative;
    overflow: hidden;
}
#zoom-img {
    //width: 100%;height: 400px;background-position: center;background-size: cover;background-repeat: no-repeat;
}
.product_details{
    padding: 3px 0px 30px 0px;
    background-color: #f4f4f4;
}
.product_images{

}
.img1{
    display: inline-block;
    width: 61px;
    height: 61px;
    box-shadow: 0 0 1px #c5c4c4;
    cursor: pointer;
    margin-right: 2px;
}
.img1 img,.img2 img,.img3 img{
    //display: inline;
    width: 100%;
    height: 100%;
}
.image_content{
    width: 100%;
    height: 400px;
}
.image_content img{
    width: 100%;
    height: 100%;
    //-o-object-fit: contain;
    //object-fit: contain;
}
h3{
    color: #252525;
    font-weight: 300;
    margin-bottom: 4px;
    font-size: 30px;
}
.stars img{
    width: 17px;
}
.stars{
    text-align: center;
    padding: 0px 0px;
    padding-left: -21px;
    margin: -17px 4px;
    margin-left: 10px;
    margin-bottom: 0;
    display: inline-block;
    background: none;
}
.reviews{
    padding: 0 6px;
    font-size: 13px;
    color: #333;
}
input[type=number] {
    border: none;
    background-color: #efefef;
    outline: none;
    font-size: 18px;
    width: 60%;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
    -webkit-appearance: none;
    border: 1px solid #cccccc;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.addToCarte input{
    width: 100%;
    padding: 17px 0;
    font-size: 17px;
    cursor: pointer;
}
.addToCarte{
    margin: 5px 0;
    border-radius: 3%;
}
.lazy{
    cursor: pointer;
    height: auto;
    position: absolute;
    background: none;
    padding: 20px 0 0px 0px;
    margin-left: 17px;
}
.add_to_wishlist_and_social_media_icons svg{
    width: 19px;
    height: 24px;
    //padding: 2px;
    color: rgba(66,65,65,.76078);
    transition: .3s ease-in-out;
}
.add_to_wishlist_and_social_media_icons svg:hover{
    color: white;
    background-color: #008c46;
}
.add_to_wishlist_and_social_media_icons{
    margin: 10px 0;
}
.add-wishlist {
    margin-top: 0;
    cursor: pointer;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -.015em;
    border: 1px solid hsla(0,0%,50.2%,.4902);
    padding: 5px;
    border-radius: 9px;
    transition: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline;
    padding: 10px 50px;
    width: 100%;
    display: inline-block;
    text-align: center;
    margin-bottom: 5px;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
}
.social_media {
    width: 50%;
    display: inline;
}
.ico{
    margin: 0;
    padding: 0;
    display: inline;
    width: 100%;
    float: none;
    display: inline-block;
    margin-top: -5px;
    align-items: center;
    text-align: center;
    padding-top: 10px;
}
.price{
        margin-top: 5px;
        width: 40%;
}
.whatsap img,.pinterest img{
    padding: 4px;
    padding-top: 6px;
    padding-right: 8px;
    padding-left: 8px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: #fff;
    transition: all, 0.3s;
    box-shadow: 0 0 1px rgb(0 0 0 / 50%);
    cursor: pointer;
    color: #d9d1d1;
    font-size: 22px;
    padding-bottom: 5px;
}
.whatsap img:hover,.pinterest img:hover{
   /* background-color: #C13584;
    color: white;*/
    animation: ro 1s linear /*infinite*/;
}
.twitter img,.facebook img,.instagram img,.whatsap img,.pinterest img{
    padding: 4px;
    padding-top: 8px;
    padding-right: 8px;
    padding-left: 8px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: #fff;
    transition: all,.3s;
    box-shadow: 0 0 1px rgb(0 0 0 / 50%);
    cursor: pointer;
    color: #d9d1d1;
    font-size: 22px;
    padding-bottom: 5px;
}
.twitter img:hover{
    /*background-color: #1DA1F2;
    color: white;*/
    animation: ro 1s linear /*infinite*/;
}
.facebook img:hover{
    /*background-color: #4267B2;
    color: white;*/
    animation: ro 1s linear /*infinite*/;
}
.instagram img:hover{
   /* background-color: #C13584;
    color: white;*/
    animation: ro 1s linear /*infinite*/;
}
.whatsap img:hover{
    animation: ro 1s linear /*infinite*/;
}
.pinterest img:hover{
    animation: ro 1s linear /*infinite*/;
}
@keyframes ro {
    0%{transform: rotate(0);}
    100%{transform: rotate(360deg);}
}
.ico{
    /*padding: 5px 0px;
    padding-left: -21px;
    margin: -8px 5px;
    margin-left: 8px;
    height: 47px;*/
}
.ico .facebook,.ico .twitter,.instagram,.ico .whatsap,.ico .pinterest{
    display: inline-block;
    //float: right;
}
.facebook img{
    color: #4267B2;
    padding-right: 10px;
}
.twitter img{
    color: #1DA1F2;
}
.instagram img{
    color: #C13584;
}
.whatsap img{
    color: #39fa99;
}
.image_content img,.img1,.img2,.img3{
    border: 1px solid #dad3d3;
}
.add-wishlist:hover{
    margin-top: 0;
    transform: translateY(-6px);
    box-shadow: 0 10px 7px -2px rgb(0 0 0 / 10%);
}
.addToCarte:hover{
    margin-top: 4px;
    //transform: translateY(-2px);
    box-shadow: 0 10px 7px -2px rgb(0 0 0 / 10%);
}
.show,.show_img{
    display: block;
}
.no_show,.no_show_img{
    display: none;
}
#p_reviews .stars{
    margin: 6px 0 6px 0px;
    background-color: white;
}
.comments,#p_reviews .stars img,.a-profile-avatar span{
    background-color: white;
}
.review{
    padding: 15px 10px 15px 10px;
    border-top: 1px solid #d3cece;
    box-shadow: 0 5px 9px #e3e3e3;
    margin-left: 9px;
    margin-bottom: 10px;
}
.image-wrap {
 max-width: 640px;
 margin: 50px auto;
}

.image1{/**/
 width: 100%;
 height: 400px;
 //padding-top: calc(100% / (16/9));
 //background-image: url('https://storeno.b-cdn.net/stores/6-2021/1623766053188.jpeg');
 background-size: 175%;
 background-position: center;
 background-repeat: no-repeat;
}
.image1:hover{
    background-size: 175%;
}
.show_img_zoom_in{
    background-size: cover;
    height: 100%;
}
.prices_div{
    padding: 0;
}
.compare_price{
    color: #808080;
    text-decoration: line-through;
    -webkit-text-decoration-color: red;
    text-decoration-color: red;
        margin-left: 10px;
}
.price_div{
    font-size: 20px;
}
.flex input{
    //background-color: #008c46;
    //color: #ffffff;
    border: none;
    padding: 13px 66px 13px 0px;
    font-weight: 600;
    /* width: 80%; */
    cursor: pointer;
}

.flexy {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: start;
    padding: 50px 0 21px 0px;
}
.minus,.plus{
    background: #008c46;
    color: white;
    padding: 6px 10px;
    font-size: 18px;
    margin-top: 5px;
    margin-right: 0px;
    cursor: pointer;
}
.plus{
    font-size: 15px;
    padding: 8px 10px;
}
.full_width{
    display: contents;
}
.add_to_shopping_list svg{
    width: 20px;
    background: none;
}
.add_to_shopping_list{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    background: none;
    border: 1px solid #008c46;
}
.flex{
    display: flex;
    align-items: center;
    justify-content: end;
    text-align: center;
}
.wishlist_svg{
    padding: 10px;
    background: #008c46;
    padding-left: 60px;
    //border-top: 1px solid #008c46;
}
.addCarte{
    //border: 1px solid #008c46;
    background-color: #008c46;
    color: white;
    padding: 10px 66px 10px 0px;
}
.bg_gray{
    background: #cccccc;
    cursor: default;
}
.bg_green{
    background: #008c46;
    color: white;
}
.bg_body_color{
    background: #f4f4f4;
}
.flex .addCarte{
    /*background: #f4f4f4;
    color: #008c46;*/
}
.shoose_variants .addCarte{
    padding: 13px 40px;
    background: #008c46;
    color: white;
}
.bg_none{
    background: none;
    color: #008c46;
}
.shoose_variants:hover{
    position: relative;
    //margin-top: -10px;
    transform: translateY(-3px);
    box-shadow: 0 10px 7px -2px rgb(0 0 0 / 10%);
    cursor: pointer;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
@media (max-width: 821px){
    .product_details{
        padding-top: 100px;
    }
}/**/
@media (max-width: 530px){
    .image_content,#zoom-img{
        height: 300px;
    }
}/**/
@media (max-width: 430px){
    .flexy{
        display: block;
    }
    .full_width{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .minus,.plus{
        display: inline-block;
    }
    .price{
        display: inline-block;
        width: 100%;
    }
}/**/
@media (max-width: 1030px){
    .flex{     
        display: flex;
    }
    .add_to_shopping_list{
        margin-right: 2px;
    }
    .shoose_variants{
        background: #008c46;
        //width: 100%;
        margin: 5px 0;
    }
    .wishlist_svg{
        padding-left: 10px;
    }
    .add_to_shopping_list input{
        padding-right: 30px;
    }
}/**/
@media (max-width: 428px){
    .flex{
        display: block;
    }
}/**/
@media (max-width: 272px){
    .flex{
        display: inline-block;
    }
}/**/
</style>
