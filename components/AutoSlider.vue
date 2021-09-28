<template>
<div class="slideShow">
    <div class="container">
        <div class="slider">
                    <div class="slide active">
                        <img :src="require('~/assets/slidetest/'+images_Slide[0].src)" alt=""><!--<img :src="require('~/assets/slidetest/'+image[0].src)">-->
                        <div class="info">
                        <Intro v-if="images_Slide[0].intro.length!=0" :class="images_Slide[0].intro[0].place" :title="images_Slide[0].intro[0].title" :paragraphe="images_Slide[0].intro[0].paragraphe"/>
                        </div>
                    </div>
                    <div class="slide" v-for="(img,index) in images_Slide.length-1" :key="index">
                        <img :src="require('~/assets/slidetest/'+images_Slide[index+1].src)" alt="">
                        <div class="info">
                        <Intro v-if="images_Slide[index+1].intro.length!=0" :class="images_Slide[index+1].intro[0].place" :title="images_Slide[index+1].intro[0].title" :paragraphe="images_Slide[index+1].intro[0].paragraphe"/>
                        </div>
                    </div>
                    <div class="navigation">
                        <i @click="prev()" class="fas fa-chevron-left prev-btn"></i>
                        <i @click="next()" class="fas fa-chevron-right next-btn"></i>
                    </div>
                    <div class="navigation-visibility">
                          <div @click="slide(0)" class="slide-icon active"></div>
                          <div @click="slide(index+1)" class="slide-icon" v-for="(img,index) in images_Slide.length-1" :key="index"></div>
                    </div>
            </div>
    </div>
</div>
</template>

<script>
import Intro from './Intro.vue'
export default {
  components:{
    Intro
  },
  data() {
    return {slide_index:0,images_Slide:[{'id':'1','src':'1.jpg',intro:[{'title':'This is intro 1','place':'top_left','paragraphe':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]}
                                      ,{'id':'2','src':'2.jpg',intro:[{'title':'This is intro 2','place':'top_reight','paragraphe':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]}
                                      ,{'id':'3','src':'3.jpg',intro:[{'title':'This is intro 3','place':'buttom_reight','paragraphe':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]}
                                      ,{'id':'4','src':'4.jpg',intro:[{'title':'This is intro 4','place':'buttom_left','paragraphe':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]}
                                      ,{'id':'5','src':'5.jpg',intro:[{'title':'This is intro 5','place':'center_middle','paragraphe':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}]}]}
  },
  mounted(){ /**/this.auto_Play()},
  methods: {
    next(){
        if(this.slide_index>=0 && this.slide_index<this.images_Slide.length){
            this.slide_index++;this.slide(this.slide_index)
        }
        if(this.slide_index==this.images_Slide.length /*&& images !=0*/){
            this.slide_index=0;this.slide(this.slide_index)
        }
    },
    prev(){
            if(this.slide_index>=0){this.slide_index--;this.slide(this.slide_index)} 
            if(this.slide_index<0 /*&& images !=0*/){
                this.slide_index=this.images_Slide.length-1;this.slide(this.slide_index)
            }
    },
    auto_Play(){
        //image slider autoplay
        const slider = document.querySelector(".slider");
        const slides = document.querySelectorAll(".slide");
        const slideIcons = document.querySelectorAll(".slide-icon");
        const numberOfSlides = slides.length;
        var slideNumber = 0;
        var playSlider;
        var repeater = () => {
           playSlider = setInterval(function(){
            slides.forEach((slide) => {
              slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
              slideIcon.classList.remove("active");
            });
    
            slideNumber++;
    
            if(slideNumber > (numberOfSlides - 1)){
              slideNumber = 0;
            }
    
            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
          }, 3000);
        }
        repeater();
    
        //stop the image slider autoplay on mouseover
        slider.addEventListener("mouseover", () => {
          clearInterval(playSlider);
        });
    
        //start the image slider autoplay again on mouseout
        slider.addEventListener("mouseout", () => {
          repeater();
        });/**/
    },
    slide(val){
        //alert('slide')
        const slides = document.querySelectorAll(".slide");
        const slideIcons = document.querySelectorAll(".slide-icon");
        for(var i=0;i<slides.length;i++){
            slides[i].classList.remove("active");
        }
        for(var i=0;i<slideIcons.length;i++){
            slideIcons[i].classList.remove("active");
        }
        for(var i=0;i<slides.length;i++){
            if(val==i){ slides[i].classList.add("active");this.slide_index=i}
        }
        for(var i=0;i<slideIcons.length;i++){
            if(val==i){ slideIcons[i].classList.add("active");}
        }
    }
  }
}
</script>
<style>
@import url('../assets/mini_framework.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
.slideShow{
    background-color: #f4f4f4;
}
.slider{
  position: relative;
  background: #f4f4f4;
  width: 100%;
  height: 500px;
  /*min-height: 170px;*/
  padding: 20px 0px;
  overflow: hidden;
  border-radius: 10px;
}

.slider .slide{
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: circle(0% at 0 50%);
}

.slider .slide.active{
  clip-path: circle(150% at 0 50%);/**/
  transition: 2s;
}

.slider .slide img{
  /*position: absolute;*/
  width: 100%;
  height: 100%;
  /*object-fit: cover;*/
}

.slider .slide .info .top_left{
  position: absolute;
  color: rgb(5, 5, 5);
  background: rgba(255, 255, 255, 0.3);
  width: 75%;
  border-radius: 5px;
  box-shadow: 0 5px 25px rgb(1 1 1 / 5%);
  margin-top: 50px;
  margin-left: 50px;
  padding: 20px;
  top: 0;
}
.slider .slide .info .top_reight{
    position: absolute;
    color: rgb(10, 10, 10);
    background: rgba(255, 255, 255, 0.3);
    width: 75%;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgb(1 1 1 / 5%);
    margin-top: 50px;
    margin-right: 50px;
    padding: 20px;
    text-align: right;
    top: 0;
    right: 0;
}
.slider .slide .info .buttom_left{
    position: absolute;
    color: rgb(12, 12, 12);
    background: rgba(255, 255, 255, 0.3);
    width: 75%;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgb(1 1 1 / 5%);
    /* margin-top: 50px; */
    margin-left: 50px;
    padding: 20px;
    bottom: 86px;
}
.slider .slide .info .buttom_reight{
    right: 0;
    position: absolute;
    color: rgb(12, 12, 12);
    background: rgba(255, 255, 255, 0.3);
    width: 75%;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgb(1 1 1 / 5%);
    /* margin-top: 50px; */
    margin-right: 50px;
    padding: 20px;
    bottom: 86px;
    text-align: right;
}
.slider .slide .info .center_middle{
    position: absolute;
    color: rgb(10, 10, 10);
    background: rgba(255, 255, 255, 0.3);
    width: 75%;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgb(1 1 1 / 5%);
    /* margin-top: 50px; */
    /* margin-left: 50px; */
    padding: 20px;
    top: 34%;
    right: 12%;
    /* align-items: center; */
    text-align: center;
}
.slider .slide .info h2{
  font-size: 2em;
  font-weight: 800;
}

.slider .slide .info p{
  font-size: 1em;
  font-weight: 400;
}

.navigation{
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slider:hover .navigation{
  opacity: 1;
}

.prev-btn, .next-btn{
  z-index: 999;
  font-size: 2em;
  color: #222;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  cursor: pointer;
}

.prev-btn{
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.next-btn{
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.navigation-visibility{
  z-index: 999;
  display: flex;
  justify-content: center;
}

.navigation-visibility .slide-icon{
  z-index: 999;
  background: rgba(255, 255, 255, 0.5);
  width: 20px;
  height: 10px;
  transform: translateY(-50px);
  margin: 0 6px;
  border-radius: 2px;
  box-shadow: 0 5px 25px rgb(1 1 1 / 20%);
  cursor: pointer;
}

.navigation-visibility .slide-icon.active{
  background: #4285F4;
}
.info h2, .info p{
    background: transparent;
}
  /*/////////////////////////////////////////////////////////////////////////////////////////////////   
  @media (max-width: 900px){
  .slider{
    width: 100%;
  }

  .slider .slide .info{
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px){
  .slider .slide .info h2{
    font-size: 1.8em;
    line-height: 40px;
  }

  .slider .slide .info p{
    font-size: 0.9em;
  }
}*/ 
@media (max-width: 821px){
.slider{
    height: 350px;
}
.navigation{
  height: 340px;
}
.slideShow{
  padding-top: 100px;
}
}
</style>
