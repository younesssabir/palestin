import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {prodArray: [],cpt:0,prod_params:[],get_products:[],get_collections:[],cart:[],wishlist:[]},
    mutations: {
        fill_array(state,val){
            state.prod_params.push(val)
        },
        fill_get_products_array(state,val){
            state.get_products.push(val)
        },
        /*get_products_array(){
            return 'state.get_products.length'
        },*/
        clear_get_products_array(state){
            state.get_products=[]
        },
        fill_get_collections_array(state,val){
            state.get_collections.push(val)
        },
        clear_get_collections_array(state){
            state.get_collections=[]
        },
        //////cart
        fill_cart_array(state,val){
            state.cart.push(val)
        },
        clear_cart_array(state){
            state.cart=[]
        },
        delete_cart_array(state,index){
            state.cart.splice(index, 1)
        },
        //////wishlist
        fill_wishlist_array(state,val){
            state.wishlist.push(val)
        },
        clear_wishlist_array(state){
            state.wishlist=[]
        },
        delete_wishlist_array(state,index){
            state.wishlist.splice(index, 1)
        }
        
    },
    /*getters:{
        get_products(state){
            var arr=state.get_products
            return { arr }
        }
    }*/
});
export default store;