<template>
  <div class="cart">
    <div class="container">
      <div>
        <div
          v-for="(cart, index) in products_in_cart.length"
          :key="index"
          class="node_card"
        >
          <div class="shop_cart_contianer">
            <div class="shoping__cart__item">
              <nuxt-link
                :to="('/products/' + products_in_cart[index].slug) | slug"
                ><img
                  loading="lazy"
                  width="101"
                  height="100"
                  :src="products_in_cart[index].img[0].id"
              /></nuxt-link>
              <div class="product_side">
                <h5>
                  <nuxt-link
                    :to="('/products/' + products_in_cart[index].slug) | slug"
                    >{{ products_in_cart[index].nom | lowerCase }}</nuxt-link
                  >
                </h5>
                <div style="background-color: white">
                  <span dir="auto" class="shoping__cart__price product--price"
                    >{{ products_in_cart[index].price }} dh</span
                  >
                </div>
              </div>
            </div>
            <div class="shopping_cart_pricing">
              <div class="shoping__cart__quantity">
                <span class="quantity_text">Quantity</span>
                <div class="pro-qty">
                  <span
                    @click="quantity_moins(products_in_cart[index].id)"
                    class="dec qtybtn"
                    >-</span
                  >
                  <div class="quantity--value h-f">
                    <label
                      :for="products_in_cart[index].id"
                      dir="auto"
                      class="h-f d-f ai-c"
                    >
                      <input
                        @select="update_total_price(products_in_cart[index].id)"
                        @mouseup="
                          update_total_price(products_in_cart[index].id)
                        "
                        @mouseover="
                          update_total_price(products_in_cart[index].id)
                        "
                        @mouseout="
                          update_total_price(products_in_cart[index].id)
                        "
                        @mousemove="
                          update_total_price(products_in_cart[index].id)
                        "
                        @mouseleave="
                          update_total_price(products_in_cart[index].id)
                        "
                        @mousedown="
                          update_total_price(products_in_cart[index].id)
                        "
                        @mouseenter="
                          update_total_price(products_in_cart[index].id)
                        "
                        @keyup="update_total_price(products_in_cart[index].id)"
                        @keydown="
                          update_total_price(products_in_cart[index].id)
                        "
                        @focus="update_total_price(products_in_cart[index].id)"
                        @change="update_total_price(products_in_cart[index].id)"
                        @keypress="
                          update_total_price(products_in_cart[index].id)
                        "
                        min="1"
                        v-model="products_in_cart[index].quantity"
                        type="number"
                        :id="products_in_cart[index].id"
                        name="quantity"
                        class="lg-col-12 ta-c"
                      />
                    </label>
                  </div>
                  <span
                    @click="quantity_plus(products_in_cart[index].id)"
                    class="inc qtybtn"
                    >+</span
                  >
                </div>
              </div>
              
              <span
                @click="remove_in_cart(products_in_cart[index].id)"
                class="icon_close"
              >
                <svg
                  width="20"
                  height="20"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                  class="svg-inline--fa fa-times fa-w-11 fa-3x"
                >
                  <path
                    fill="#c1c1c1"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="product_total product--price">
                <span class="total_text">Total</span>
                <span dir="auto" class="shoping__cart__price_total"
                  >{{ products_in_cart[index].total_price }} dh</span
                >
              </div>
          </div>
        </div>

        <div class="products_total">
          <div
            v-if="products_in_cart.length != 0"
            class="total_cont product--price"
          >
            <span class="total_title">Total:</span>
            <span dir="auto" class="total__price">{{ total_pr }} dh</span>
          </div>
        </div>
        <div class="shoping__cart__btns">
          <div class="ctn">
            <nuxt-link v-if="products_in_cart.length != 0" to="/shop" class="primary-btn cart-btn cart-btn-left"
              >CONTINUE SHOPPING</nuxt-link
            >
          </div>
          <div  class="ctn">
            <nuxt-link
              v-if="products_in_cart.length != 0"
              to="/shop"
              class="primary-btn cart-btn cart-btn-right"
              ><span class="icon_loading"></span>PROCEED TO CHECKOUT</nuxt-link
            >
          </div>
        </div>
      </div>
      <!---->
      <div v-if="products_in_cart.length == 0" class="shop_cart">
        <div class="empty_cart_div">
          <img
            loading="lazy"
            src="https://themes.storeino.com/hicham/img/cart_empty.c98984a.png"
            alt=""
            srcset=""
          />
          <h2>Your cart is empty</h2>
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
      <!---->
    </div>
  </div>
</template>

<script>
import store from '../store/store.js'
import axios from 'axios'
export default {
  data() {
    return { products: [], products_in_cart: [], total_pr: 0 }
  },
  methods: {
    remove_in_cart(id) {
      //alert(store.state.cart.length)
      ///////////////remove in store/////////////////////
      for (var i = 0; i < store.state.cart.length; i++) {
        var str = store.state.cart[i].split(',')
        if (str[0] == id) {
          store.commit('delete_cart_array', i)
        }
      }
      ///////////////remove in data propertie/////////////////////
      for (var i = 0; i < this.products_in_cart.length; i++) {
        if (this.products_in_cart[i].id == id) {
          this.products_in_cart.splice(i, 1)
        }
      }
      ///////////////update cookie/////////////////////////////
      var phr = ''
      for (var i = 0; i < this.products_in_cart.length; i++) {
        phr +=
          this.products_in_cart[i].id +
          ',' +
          this.products_in_cart[i].quantity +
          ',' +
          this.products_in_cart[i].price +
          '&'
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
      if (this.products_in_cart.length == 0) {
        var now = new Date()
        now.setMonth(now.getMonth() + 24)
        document.cookie =
          'STOREINO-CART=' + 'null' + ';Expires=' + now.toUTCString() + ';'
      }
      ///////////////update total__price/////////
      this.total_pr = 0
      var summe_totale_price = 0
      for (var i = 0; i < this.products_in_cart.length; i++) {
        summe_totale_price += parseFloat(this.products_in_cart[i].total_price)
      }
      this.total_pr = summe_totale_price.toFixed(2)
      $nuxt.$emit('cart_clicked')
    },
    update_total_price(id) {
      var nbr = parseInt(document.getElementById(id).value)
      document.getElementById(id).value = nbr
      ////////calc total_price/////////////
      for (var i = 0; i < this.products_in_cart.length; i++) {
        if (this.products_in_cart[i].id == id) {
          this.products_in_cart[i].quantity = nbr
          this.products_in_cart[i].total_price = (
            nbr * this.products_in_cart[i].price
          ).toFixed(2)
          break
        }
      }
      //////////////update cookie//////////////
      var phr = ''
      for (var i = 0; i < this.products_in_cart.length; i++) {
        phr +=
          this.products_in_cart[i].id +
          ',' +
          this.products_in_cart[i].quantity +
          ',' +
          this.products_in_cart[i].price +
          '&'
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
      ///////////////update total__price/////////
      this.total_pr = 0
      var summe_totale_price = 0
      for (var i = 0; i < this.products_in_cart.length; i++) {
        summe_totale_price += parseFloat(this.products_in_cart[i].total_price)
      }
      this.total_pr = summe_totale_price.toFixed(2)
      ///////////////update store/////////
      store.commit('clear_cart_array')
      for (var i = 0; i < this.products_in_cart.length; i++) {
        store.commit(
          'fill_cart_array',
          this.products_in_cart[i].id +
            ',' +
            this.products_in_cart[i].quantity +
            ',' +
            this.products_in_cart[i].price
        )
      }
    },
    get_cookie() {
        /**/ var name = "STOREINO-WISHLIST" + "=";
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
      axios.get('http://localhost:3000/products').then((res) => {
        this.products = res
        for (var i = 0; i < this.products.data.length; i++) {
          for (var k = 0; k < store.state.cart.length; k++) {
            var split = store.state.cart[k].split(',')
            if (split[0] == this.products.data[i].id) {
              this.products_in_cart.push({
                id: this.products.data[i].id,
                nom: this.products.data[i].nom,
                slug: this.products.data[i].slug,
                img: this.products.data[i].img,
                description: this.products.data[i].description,
                categorie_id: this.products.data[i].categorie_id,
                price: this.products.data[i].price,
                compare_price: this.products.data[i].compare_price,
                reviews: this.products.data[i].reviews,
                comments: this.products.data[i].comments,
                quantity: split[1],
                total_price: (
                  parseInt(split[1]) * parseFloat(this.products.data[i].price)
                ).toFixed(2),
              })
              break
            }
          }
        }
        this.total_pr = 0
        var summe_totale_price = 0
        for (var i = 0; i < this.products_in_cart.length; i++) {
          summe_totale_price += parseFloat(this.products_in_cart[i].total_price)
        }
        this.total_pr = summe_totale_price.toFixed(2)
      })
    },
    quantity_plus(val) {
      var nbr = parseInt(document.getElementById(val).value) + 1
      ////////calc total_price/////////////
      for (var i = 0; i < this.products_in_cart.length; i++) {
        if (this.products_in_cart[i].id == val) {
          this.products_in_cart[i].quantity =
            parseInt(this.products_in_cart[i].quantity) + 1
          this.products_in_cart[i].total_price = (
            nbr * parseFloat(this.products_in_cart[i].price)
          ).toFixed(2)
          break
        }
      }
      /////////update store/////////////////
      for (var i = 0; i < store.state.cart.length; i++) {
        var str = store.state.cart[i].split(',')
        if (str[0] == val) {
          store.commit('delete_cart_array', i)
          var arr = str[0] + ',' + nbr + ',' + str[2]
          store.commit('fill_cart_array', arr)
          break
        }
      }
      //////////////update cookie//////////////
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
      } /**/
      ///////////////update total__price/////////
      this.total_pr = 0
      var summe_totale_price = 0
      for (var i = 0; i < this.products_in_cart.length; i++) {
        summe_totale_price += parseFloat(this.products_in_cart[i].total_price)
      }
      this.total_pr = summe_totale_price.toFixed(2)
    },
    quantity_moins(val) {
      var nbr = parseInt(document.getElementById(val).value) - 1
      ////////////////////
      for (var i = 0; i < this.products_in_cart.length; i++) {
        if (this.products_in_cart[i].id == val) {
          if (nbr > 1) {
            this.products_in_cart[i].quantity =
              parseInt(this.products_in_cart[i].quantity) - 1
            this.products_in_cart[i].total_price = (
              nbr * parseFloat(this.products_in_cart[i].price)
            ).toFixed(2)
          } else {
            this.products_in_cart[i].quantity = 1
            this.products_in_cart[i].total_price = parseFloat(
              this.products_in_cart[i].price
            ).toFixed(2)
          }
          break
        }
      }
      /////////update store/////////////////
      if (nbr > 1) {
        for (var i = 0; i < store.state.cart.length; i++) {
          var str = store.state.cart[i].split(',')
          if (str[0] == val) {
            store.commit('delete_cart_array', i)
            var arr = str[0] + ',' + nbr + ',' + str[2]
            store.commit('fill_cart_array', arr)
            break
          }
        }
      } else if (nbr == 1) {
        for (var i = 0; i < store.state.cart.length; i++) {
          var str = store.state.cart[i].split(',')
          if (str[0] == val) {
            store.commit('delete_cart_array', i)
            var arr = str[0] + ',1,' + str[2]
            store.commit('fill_cart_array', arr)
            break
          }
        }
      }
      //////////////update cookie//////////////
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
      ///////////////update total__price/////////
      this.total_pr = 0
      var summe_totale_price = 0
      for (var i = 0; i < this.products_in_cart.length; i++) {
        summe_totale_price += parseFloat(this.products_in_cart[i].total_price)
      }
      this.total_pr = summe_totale_price.toFixed(2)
    },
  },
  mounted() {
    this.get_cookie()
    $nuxt.$emit('cart_clicked')
  },
  async fetch() {
  },
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');

.product_side a {
  text-transform: capitalize;
}
.cart {
  background-color: #f4f4f4;
  padding: 20px 0;
}
.node_card {
  //border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 15px;
  background-color: #f4f4f4;
  border-top: 1px solid #d3cece;
  box-shadow: 0 4px 9px #e3e3e3;
}
.shop_cart_contianer {
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  padding: 6px;
  justify-content: space-between;
}
.shoping__cart__item {
  display: flex;
  white-space: nowrap;
}
.shopping_cart_pricing {
  display: flex;
  align-items: center;
}
.shoping__cart__quantity {
  padding-left: 80px;
  padding-right: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.icon_close {
  margin-left: 36px;
  font-size: 24px;
  fill: #b2b2b2;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.pro-qty {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  height: 50px;
  display: inline-block;
  position: relative;
  text-align: center;
  background: #f5f5f5;
  margin: 12px 0;
}
.pro-qty .qtybtn {
  width: 35px;
  font-size: 16px;
  padding: 11px;
  color: #6f6f6f;
  cursor: pointer;
  display: inline-block;
}
.quantity--value > label {
  width: 100%;
  padding: 14px 0;
  box-sizing: border-box;
}
.pro-qty input {
  height: 100%;
  width: 100%;
  font-size: 16px;
  color: #6f6f6f;
  border: none;
  background: #f5f5f5;
  outline: none;
  box-sizing: border-box;
}
.shoping__cart__price,
.shoping__cart__price_total {
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
  padding-bottom: 20px;
  width: 110px;
}
.products_total {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}
.total_cont {
  padding: 0 8px;
}
.total_title {
  color: #1c1c1c;
}
.total__price,
.total_title {
  font-size: 18px;
  font-weight: 700;
}
.total__price,
.total_title {
  font-size: 18px;
  font-weight: 700;
}
.total__price {
  color: #d22;
}
.shoping__cart__btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.primary-btn.cart-btn {
  padding: 14px 30px 12px;
  text-decoration: none;
  font-weight: 700;
  margin: 0 14px;
  text-align: center;
  margin-right: 0;
  margin-left: 0;
}
.cart-btn-left {
  color: #6f6f6f;
  background: #f5f5f5;
  border-radius: 3px;
  opacity: 0.9;
}
.cart-btn-right {
  color: #fff;
  background: var(--primary-color);
  border-radius: 3px;
  opacity: 0.9;
}
.shop_cart_contianer,
.shopping_cart_pricing,
a,
.product_side,
.shoping__cart__price,
.shoping__cart__quantity,
h5,
.quantity_text,
.product_total,
.total_text,
.shoping__cart__price_total,
.icon_close,
.icon_close svg {
  background-color: white;
}
input[type='number'] {
  border: none;
  outline: none;
  font-size: 18px;
  width: 60%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  -webkit-appearance: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.product_side a {
  color: rgb(37, 37, 37);
}
.shop_cart_contianer,
.shoping__cart__price,
.shoping__cart__price_total {
  color: #978d8d;
}
.cart-btn-left {
  background-color: #fefafa;
}
.cart-btn-right {
  border: 1px solid #008c46;
  background-color: #008c46;
  color: white;
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
    padding: 14px 30px 12px;
    text-decoration: none;
    font-weight: 700;
    margin: 0 14px;
    text-align: center;
    margin-right: 0;
    margin-left: 0;
}
.log a{
    background: none;
    color: white;
}
.shoping__cart__price_total,.shoping__cart__price{
  color: black;
}
.product_side h5 a{
  color: #978d8d;
}

@media (max-width: 821px) {
  .cart {
    padding-top: 100px;
  }
}
@media (max-width: 450px) {
  .shoping__cart__quantity {
    padding: 0 10px 0 0;
  }
}
@media only screen and (min-width: 1200px){
.shoping__cart__item {
    width: 630px;
    background: white;
}
}
@media only screen and (min-width: 992px){
.shoping__cart__item {
    width: 430px;background: white;
}}
@media only screen and (min-width: 768px){
.shoping__cart__item {
    width: 230px;background: white;
}}
@media only screen and (min-width: 598px){
.shoping__cart__item {
    //width: 301px;
    background: white;
}}
@media (max-width: 782px){
.shoping__cart__item,.shopping_cart_pricing,.product_total{
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: white;
  }
}
.shoping__cart__price_total{
  padding-bottom: 0;
}
@media (max-width: 614px){
.shoping__cart__btns .primary-btn{
    width: 60%;
    margin: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 0.7em;
  }
}
@media (max-width: 400px){
.shoping__cart__btns .primary-btn{
    width: 100%;
  }
}
.product_total{
  padding: 0 20px;
}
.product_side h5{
  font-size: 1.1em;
}
.product_side h5 a{
  color: black;
}
.shoping__cart__price{
  color: #978d8d;
}
.shoping__cart__btns .ctn{
  display: contents;
}
</style>
