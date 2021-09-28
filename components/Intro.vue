<template>
  <div :class="top_left">
      <h2>{{title}}</h2>
      <p>{{paragraphe}}</p>
  </div>
</template>

<script>
export default {
  props:['title','paragraphe','top_left','top_reight','buttom_reight','buttom_left','center_middle'],
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
@import url('../assets/mini_framework.css');
/*
.top_left h3,.top_reight h3,.buttom_left h3,.buttom_reight h3,.center_middle h3{
    font-weight: 300;
}
.top_left{
    color: white;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;
    left: 60%;
    top: 10%;
}
.top_reight{
    color: white;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    right: 0%;
    width: 20%;
    top: 10%;
}
.buttom_reight{
    color: white;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    left: 79%;
    width: 22%;
    top: 80%;
}
.buttom_left{
    color: white;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    left: 16%;
    width: 22%;
    top: 80%;
}
.center_middle{
    color: white;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    left: 51%;
    width: 20%;
    top: 47%;
}*/
</style>
