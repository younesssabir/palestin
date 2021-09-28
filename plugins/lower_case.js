import Vue from "vue";
import Sidebar from "~/components/Sidebar.vue";
Vue.component('Sidebar',Sidebar)
Vue.filter('lowerCase',(value)=>{
    var str=value.toString().toLowerCase();
    return str
}),
Vue.filter('slug',(value)=>{
    return value.split(' ').join('-');

})
