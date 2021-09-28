<template>
  <div class="container">
      <div class="SubHeader">
            <div class="logo">
                <nuxt-link to="/"><img src="https://storeno.b-cdn.net/stores/6-2021/1623862832159.png?height=50" alt=""></nuxt-link>
            </div>
            <div class="menu">
                <div>
                    <b-navbar toggleable="lg" type="light" variant="faded">
                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item href="#">Fruits</b-nav-item>
                            <b-nav-item href="#">Vegetables</b-nav-item>
                            <b-nav-item href="#">Dried fruits Nurts</b-nav-item>
                            <b-nav-item href="#">Oils and Spices</b-nav-item>
                            <b-nav-item href="#">Honey</b-nav-item>
                            <b-nav-item href="#">Fishes</b-nav-item>
                        </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                    </div>
            </div>
            <div class="icons">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <span class="wishListe">3</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                <span class="carte">5</span>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.SubHeader{
    background-color: white;
}
.bg-light {
    background-color: white ;
}
.icons svg{
    width: 22px;
    margin-top: 12px;
    margin-left: 10px;
}
.icons,.menu,.logo{
    display: inline-block;
}
.logo{
    margin-right: 20%;
}
.icons{
    float: right;
}
.menu li a {
    color: #1c1c1c;
    font-size: 14px;
    font-weight: 640;
}
.navbar-light .navbar-nav .nav-link {
    color: black;
}
.wishListe,.carte{
    background-color: rgb(92 150 252);
    color: white;
    //padding: 0px 2px;
    //border-radius: 80px;
    margin-left: -8px;
    //font-size: .8em;


    border-radius: 50%;
    color: #fff;
    padding: 4px;
    padding-top: 2px;
    font-size: 10px;
    //margin-left: -13px;
    height: 16px;
    width: 16px;
    //right: 0;
    //top: 0;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    background-color: rgb(92 150 252);
    padding-left: 7px;
    padding-right: 7px;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@media screen and (max-width: 991px) {
  .logo img{
    position: absolute;
    top: 50px;
    left: 39%;
    }
    .navbar{
    position: absolute;
    top: 50px;
    left: 5px;
    z-index: 1;
    }
}
@media (max-width: 1199px){
 .container {
    max-width: 100%;
}   
}
</style>
