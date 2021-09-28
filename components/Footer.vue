<template>
<div class="Footer">
      <div class="container">
          <div class="shadowBox">
                <div class="ico">
                    <div class="facebook">
                        <!--<i class="fa fa-facebook"></i>-->
                        <img src="../assets/svg/facebook.svg" alt="" width="37" height="37">
                    </div>
                    <div class="twitter">
                        <!--<i class="fa fa-twitter"></i>-->
                        <img src="../assets/svg/twiter.svg" alt="" width="37" height="37">
                    </div>
                    <div class="instagram">
                        <!--<i class="fa fa-instagram"></i>-->
                        <img src="../assets/svg/instagram.svg" alt="" width="37" height="37">
                    </div>
                </div>
                <div class="coperight">
                    <h3>Copyright ©2021 All rights reserved</h3>
                </div>
          </div>
      </div>
</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
////////
.Footer{
    background-color: #f4f4f4;
    padding: 50px 0px 20px 0px;
    width: 100%;
    display: inline-block;
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
    padding: 5px 0px;
    padding-left: -21px;
    margin: -8px 5px;
    margin-left: 8px;
    height: 47px;
}
.ico .facebook,.ico .twitter,.instagram,.ico .whatsap,.ico .pinterest{
    display: inline-block;
    //float: right;
}
.coperight h3{
    font-size: 15px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
}
.ico,.coperight{
    align-items: center;
    text-align: center;
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
.shadowBox{
    padding-top: 26px;
    background-color: #f4f4f4;
    border-top: 1px solid #d3cece;
    box-shadow: 0 5px 9px #e3e3e3;
    margin-left: 9px;
}

</style>
