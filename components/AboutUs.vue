<template>
  <div class="AboutUs">
      <div class="container">
            
            <div class="d-f fw-w">
                <div class="lg-col-6 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column">
                    <div class="info">
                        <h3>Who We Are</h3>
                        <h4>Experience BayWa - for agriculture.</h4>
                        <p>Whether you are a livestock farmer or a farmer, a contractor or a forester: In the BayWa portal you will find a wide range of animal feed, seeds and crop protection - conventional or ecological - for agriculture. In addition, you will receive detailed information about our diverse advisory services, services, events and topics as well as about us, your BayWa.</p>
                        <h6>Discover our diversity - digitally and on site</h6>
                    </div>
                </div>
                <div class="lg-col-6 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column">
                    <div class="image">

                    </div>
                </div>
            </div>
      </div>
       <div class="phone">        
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-volume" class="svg-inline--fa fa-phone-volume fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path class="color_phone" fill="currentColor" d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg>
      </div>
      <div class="Fixedcarte">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="color_Fixed_Cart" fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
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
@import url('../assets/mini_framework.css');
.AboutUs{
    background-color: #f4f4f4;
    padding-top: 36px;
    padding-bottom: 27px;
}
.image{
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 300px;
    border-radius: 3%;
    background-image: url(https://subitis-solutions.com/wp-content/uploads/2021/02/who-we-are.png);
    background-color: transparent;
    border: none;
}
h3{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    color: #7d6e6e;
    display: inline-block;
}
h4{
    font-size: 18px;
    line-height: 32px;
    font-weight: 300;
    padding: 0px 6px;
}
p{
    font-size: 15px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
}
h6{
    font-size: 22px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    cursor: pointer;
}
h6:hover{
    color: #008c46;
}
.phone{
    background-color: #008c46;
    position: absolute;
    width: 48px;
    padding: 3px 9px;
    right: 6px;
    position: fixed;
    top: 250px;
    cursor: pointer;
}
.phone:hover,.Fixedcarte:hover{
  //background-color: white;
}

.phone:hover .color_phone,.Fixedcarte:hover .color_Fixed_Cart{
  //color: #008c46;
}
.color_phone,.color_Fixed_Cart{
  color: white;
}
.Fixedcarte{
    background-color: #008c46;
    position: absolute;
    width: 48px;
    padding: 3px 9px;
    right: 6px;
    position: fixed;
    top: 309px;
    cursor: pointer;
}
svg{
    background: #008c46;
}
.phone:hover,.Fixedcarte:hover .phone svg{
  //background: white;
}
</style>
