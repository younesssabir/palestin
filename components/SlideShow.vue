<template>
  <div class="Slider">
    <!--<h1 @click="fct">{{images_Slide[0].id}}</h1><img :src="images_Slide[0].src" alt="">-->
      <div class="container">
          <div class="slidershow middles container">
              <div class="hideRight">

                <div class="slides">
                    <input @click="r_Checked(img.id)" v-for="(img,index) in images_Slide" :key="index" type="radio" name="r" :id="'r'+images_Slide[index].id">
                    <!---->                   
                    <div class="slide s1">
                        <div :id="'img'+images_Slide[0].id" :class="is_active+' is_active'">
                            <img :src="images_Slide[0].src" alt="">
<Intro v-if="images_Slide[0].intro.length!=0" :class="images_Slide[0].intro[0].place" :text="images_Slide[0].intro[0].text"/>
                        </div>
                    </div>
                    <div v-for="(img,index) in images_Slide.length-1" :key="index" class="slide">
                            <div :id="'img'+images_Slide[index+1].id" :class="is_active">
                                <img :src="images_Slide[index+1].src" alt="">
<Intro v-if="images_Slide[index+1].intro.length!=0" :class="images_Slide[index+1].intro[0].place" :text="images_Slide[index+1].intro[0].text"/>
                            </div>
                    </div>
                </div>
                <span @click="befor_click" class="before">
                    <svg fill="white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                </span>
                <span @click="next_click" class="next">
                    <svg fill="white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                </span>
                <div class="navigation">
                        <label v-for="(img,index) in images_Slide" :key="index" :for="'r'+img.id" class="bar"></label>
                </div>
                <!---->
              </div>
            </div>
      </div>
      <div class="phone">        
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-volume" class="svg-inline--fa fa-phone-volume fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path class="color_phone" fill="currentColor" d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg>
      </div>
      <div class="Fixedcarte">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="color_Fixed_Cart" fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>      </div>
      </div>
</template>
<script>
import Intro from './Intro.vue'
export default {
  components:{
    Intro
  },
  data() {
    return {top_left:'top_left',top_reight:'top_reight',buttom_reight:'buttom_reight',buttom_left:'buttom_left'
            ,center_middle:'center_middle',is_active:'no_active',index_slide:1,
            images_Slide:[{'id':'1','src':'https://i.pinimg.com/originals/d0/f1/60/d0f16011e54e40017ab6c548c0d2c2c5.jpg',intro:[{'text':'This is a simple Intro 1','place':'top_left'}]}
                          ,{'id':'2','src':'https://i.pinimg.com/originals/3f/17/c2/3f17c2ade341af2f0af4fb6f5af22702.jpg',intro:[{'text':'This is a simple Intro 2','place':'top_reight'}]}
                          ,{'id':'3','src':'https://i.pinimg.com/originals/75/2a/07/752a07c900196829e5fd81e80a57dded.jpg',intro:[{'text':'This is a simple Intro 3','place':'buttom_reight'}]}
                          ,{'id':'4','src':'https://miro.medium.com/max/2000/1*yAgqXjxVH2uWtr98PxMLtw.jpeg',intro:[{'text':'This is a simple Intro 4','place':'buttom_left'}]}
                          ,{'id':'5','src':'https://cdn.wallpapersafari.com/60/10/fAEud7.jpg',intro:[{'text':'This is a simple Intro 5','place':'center_middle'}]}]}
                          //,{'id':'6','src':'https://images.pexels.com/photos/2970497/pexels-photo-2970497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',intro:[{'text':'This is a simple Intro 4','place':'buttom_left'}]}
 },
  methods: {
    befor_click(){
      if(this.index_slide>1 && this.index_slide<=this.images_Slide.length){
          this.index_slide--
      }
      for(var i=1;i<=this.images_Slide.length;i++){
          if(this.index_slide==i){ document.getElementById('r'+i).checked=true ; this.r_Checked(); break}
      }
    },
    next_click(){
      if(this.index_slide>=1 && this.index_slide<5){
          this.index_slide++
      }
      for(var i=1;i<=this.images_Slide.length;i++){
          if(this.index_slide==i){ document.getElementById('r'+i).checked=true , this.r_Checked() }
      }
    },
    r_Checked(id){
      for(var i=0;i<this.images_Slide.length;i++){
          if(this.images_Slide[i].id==id){this.index_slide=i+1 ; break}
      }
        if(this.index_slide=='1'){
          document.getElementById('r1').checked=true
            for(var i=1;i<=this.images_Slide.length;i++){
                 document.getElementById('img'+i).className=''
            }
            for(var i=1;i<=this.images_Slide.length;i++){
                if(i==1) document.getElementById('img1').classList.add('is_active')
                else document.getElementById('img'+i).classList.add('no_active')
            } 
        }
        if(this.index_slide=='2'){
          document.getElementById('r2').checked=true
            for(var i=1;i<=this.images_Slide.length;i++){
                document.getElementById('img'+i).className=''
            }
            for(var i=1;i<=this.images_Slide.length;i++){
                if(i==2) document.getElementById('img2').classList.add('is_active')
                else document.getElementById('img'+i).classList.add('no_active')
            } 
        }
        if(this.index_slide=='3'){
          document.getElementById('r3').checked=true
            for(var i=1;i<=this.images_Slide.length;i++){
                document.getElementById('img'+i).className=''
            }
            for(var i=1;i<=this.images_Slide.length;i++){
                if(i==3) document.getElementById('img3').classList.add('is_active')
                else document.getElementById('img'+i).classList.add('no_active')
            } 
        }
        if(this.index_slide=='4'){
          document.getElementById('r4').checked=true
            for(var i=1;i<=this.images_Slide.length;i++){
                document.getElementById('img'+i).className=''
            }
            for(var i=1;i<=this.images_Slide.length;i++){
                if(i==4) document.getElementById('img4').classList.add('is_active')
                else document.getElementById('img'+i).classList.add('no_active')
            } 
        }
        if(this.index_slide=='5'){
          document.getElementById('r5').checked=true
            for(var i=1;i<=this.images_Slide.length;i++){
                document.getElementById('img'+i).className=''
            }
            for(var i=1;i<=this.images_Slide.length;i++){
                if(i==5) document.getElementById('img5').classList.add('is_active')
                else document.getElementById('img'+i).classList.add('no_active')
            } 
        }
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.is_active .top_left,.is_active .top_reight,.is_active .buttom_reight,.is_active .buttom_left,.is_active .center_middle{
  display: block;
}
.no_active .top_left,.no_active .top_reight,.no_active .buttom_reight,.no_active .buttom_left,.no_active .center_middle{
  display: none;
}
.is_active .top_left{
  display: block;
}
.next,.before{
  cursor: pointer;
  width: 28px;
  position: absolute;
  transform: translateX(-50%);
  display: flex;
}
.before{
  left: 8%;
  bottom: 43%;
}
.next{
    left: 92%;
    bottom: 43%;
}
.Slider{
    background-color: #f4f4f4;
    display: block;
    //width: 100%;
    height: 417px;
    position: relative;
    overflow: hidden;
    padding: 20px 0px;
    margin: 0;
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
  background-color: white;
}
.phone:hover .color_phone,.Fixedcarte:hover .color_Fixed_Cart{
  color: #008c46;
}
.color_phone,.color_Fixed_Cart{
  color: white;
}
.Fixedcarte{
    background-color: #008c46;
    position: absolute;
    width: 48px;
    padding: 7px 9px;
    right: 6px;
    position: fixed;
    top: 309px;
    cursor: pointer;
}
.slidershow{
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.middles{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.navigation{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.bar{
  width: 50px;
  height: 10px;
  border: 2px solid #fff;
  margin: 6px;
  cursor: pointer;
  transition: 0.4s;
}
.bar:hover{
  background: #fff;
}

input[name="r"]{
    position: absolute;
    visibility: hidden;
}

.slides{
  width: 500%;
  height: 100%;
  display: flex;
  overflow: hidden;
}

.slide{
  width: 20%;
  //width: 59%;
  transition: 0.6s;
}
.slide img{
  width: 100%;
  //width: 67%;
  height: 400px;
}
#r1:checked ~ .s1{
  margin-left: 0;
}
#r2:checked ~ .s1{
  margin-left: -20%;
}
#r3:checked ~ .s1{
  margin-left: -40%;
}
#r4:checked ~ .s1{
  margin-left: -60%;
}
#r5:checked ~ .s1{
  margin-left: -80%;
}
.hideRight{
    overflow: hidden;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@media (max-width: 1372px){

}
@media (max-width: 975px){

}

@media (max-width: 761px){
.Slider{
  height: 330px;
}
.slidershow{
  height: 300px;
}
}
@media (max-width: 667px){

}
@media (max-width: 663px){

}

</style>
