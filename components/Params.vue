<template>
  <div class="params">
      <div v-if="products_params.length==0 && collections_params.length==0 && get_param_product[0]!='empty_products'">
          <!--<h3 class="categ_title">show all collection here</h3>-->
          <div class="d-f fw-w">
            <div class="lg-col-4 md-col-6 sm-col-6 sx-col-12 ssx-col-12 column" v-for="(img,index) in categories.data" :key="index+'lkjkj'">
                    <nuxt-link v-if="categories.data[index].subCategories.length!=0" :to="'/collections/'+categories.data[index].slug | slug"><img class="m-2 img" :src="categories.data[index].img" alt=""></nuxt-link>
                    <nuxt-link v-if="categories.data[index].subCategories.length!=0" :to="'/collections/'+categories.data[index].slug | slug"><div class="title">{{categories.data[index].nom }}</div></nuxt-link>
                    <nuxt-link v-if="categories.data[index].subCategories.length==0" :to="'/shop/'+categories.data[index].nom | slug"><img class="m-2 img" :src="categories.data[index].img" alt=""></nuxt-link>
                    <nuxt-link v-if="categories.data[index].subCategories.length==0" :to="'/shop/'+categories.data[index].nom | slug"><div class="title">{{categories.data[index].nom }}</div></nuxt-link>
                    
            </div>
        </div>
      </div>
      <div v-if="products_params.length==0 && collections_params.length!=0 && is_categ">
          <!--<h3 class="categ_title">show collection with params here {{$route.params.id}}</h3>-->
          <h3 class="categ_title">{{collections_params[0]}}</h3>
                <div v-for="(cat,index) in categories.data" :key="index+'lkmlkhh'">
                    <div v-if="categories.data[index].slug==collections_params[0]" class="d-f fw-w">
                        <div v-for="(cat,index2) in categories.data[index].subCategories" :key="index2+'sdfss'" class="lg-col-4 md-col-6 sm-col-12 sx-col-12 ssx-col-12 column">
                                <div v-for="(cat,index3) in categories.data" :key="index3+'qssqds'">
                                    <div v-if="categories.data[index].subCategories[index2].id==categories.data[index3].id">
                                            <nuxt-link :to="'/shop/'+categories.data[index3].nom | slug"><img class="m-2 img" :src="categories.data[index3].img" alt=""></nuxt-link>
                                            <nuxt-link :to="'/shop/'+categories.data[index3].nom | slug"><div class="title">{{categories.data[index3].nom}}</div></nuxt-link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
      </div>
      <div v-if="get_param_product.length!=0 && get_param_product[0]!='empty_products'">
          <!--<h3 class="categ_title">show products with specific categorie here {{$route.params.id}}</h3>-->
          <div class="filter__found">
                <div @click="show_mobile_side_bar()" class="filter-icon-e" id="show_mobile_side_bar"><svg id="Capa_1" enable-background="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg);"><g data-v-6290f084=""><path data-v-6290f084="" d="m90.5 0h-30v362h-30v90h30v60h30v-60h30v-90h-30zm0 422h-30v-30h30z"></path> <path data-v-6290f084="" d="m481.5 362h-30v-362h-30v362h-30v90h30v60h30v-60h30zm-30 60h-30v-30h30z"></path> <path data-v-6290f084="" d="m331.5 0h-30v222h-30v90h30v200h30v-200h30v-90h-30zm0 282h-30v-30h30z"></path> <path data-v-6290f084="" d="m210.5 0h-30v53.652h-30v90h30v368.348h30v-368.348h30v-90h-30zm0 113.652h-30v-30h30z"></path></g></svg></div>
                <div class="products_found"><span>{{get_param_product.length}}</span>Products found</div>
          </div>
          <div class="d-f fw-w">
                <div class="lg-col-4 md-col-6 sm-col-6 sx-col-12 ssx-col-12 column" v-for="(img,index1) in get_param_product.length" :key="index1+'sgsdsss'">
                        <div class="ico">
                            <div class="heart" @click="add_to_wishlist(get_param_product[index1].id)">
                                <i class="fa fa-heart"></i>
                            </div>
                            <div class="shopping" @click="add_to_cart(get_param_product[index1].id,get_param_product[index1].price)" :id="get_param_product[index1].id">
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                        </div>
                        <nuxt-link :to="'/products/'+get_param_product[index1].slug | slug"><img class="m-2 img" :src="get_param_product[index1].img" alt=""></nuxt-link>
                        <nuxt-link :to="'/products/'+get_param_product[index1].slug | slug"><div class="name">{{get_param_product[index1].nom}}</div></nuxt-link>
                        <div class="stars">
                                <img v-for="(img,index2) in get_param_product[index1].reviews" :key="index2+'lklllj'" src="../assets/svg/star.svg" alt="">
                                <img v-for="(review,index) in 5-get_param_product[index1].reviews" :key="index+'jjgggn'" src="../assets/svg/star_gray.svg" alt="">
                        </div>
                        <div class="prices">
                            <span class="compare_price">{{get_param_product[index1].compare_price}} dh</span>
                            <span class="price">{{get_param_product[index1].price}} dh</span>
                        </div>
                        <div class="addToCarte">
                            <input class="addCarte" type="button" value="Add To Carte">
                        </div>
                </div>
            </div>
      </div>
      <div v-if="get_param_product[0]=='empty_products'">
          <div class="filter__found">
                <span>0</span>Products found
          </div>
          <div class="No_Products_found">
                <span>No Products Found</span>
           </div>
      </div>
      <div v-if="products_params.length==0 && collections_params.length!=0 && !is_categ">
          <div class="filter__found">
                <span>0</span>Collections found
          </div>
          <div class="No_Products_found">
                <span>No Collections Found</span>
           </div>
      </div>
      <!-------------------------------------------mobile sidebar------------------------------------------->
        <div class="mobile_side_bar">
            <div class="new_side_bar" id="new_side_bar">
                <div v-for="(categ,index) in parentsCategories.data" :key="index+'aze'">
                    <div class="flex">
                        <input :id="'id'+parentsCategories.data[index].id" type="checkbox">
                        <label :for="'id'+parentsCategories.data[index].id" class="categorie_1">
                            <svg viewBox="0 0 100 100">
                                <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"></path>
                                <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "></polyline>
                            </svg>
                            <span class="categ">{{parentsCategories.data[index].nom | lowerCase}}
                            </span>
                        </label>
                        <label class="lbl_btn">
                            <div class="show" v-if="parentsCategories.data[index].subCategories.length>0">
                                <svg :id="'down'+parentsCategories.data[index].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                <svg :id="'up'+parentsCategories.data[index].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                            </div>
                        </label>
                    </div>
                    <div :id="'sub_categorie_1'+parentsCategories.data[index].id" class="no_sh">
                        <div v-for="(categ,index1) in parentsCategories.data[index].subCategories.length" :key="index1+'asze'">
                            <div class="flex">
                                <input :name="parentsCategories.data[index].subCategories[index1].id" :id="'id'+parentsCategories.data[index].subCategories[index1].id" type="checkbox">
                                <label :for="'id'+parentsCategories.data[index].subCategories[index1].id" class="categorie_2">
                                    <svg viewBox="0 0 100 100">
                                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                    </svg>
                                    <span class="categ">{{parentsCategories.data[index].subCategories[index1].nom | lowerCase}}</span>
                                </label>
                                <label class="lbl_btn">
                                    <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories.length>0">
                                        <svg :id="'down'+parentsCategories.data[index].subCategories[index1].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                        <svg :id="'up'+parentsCategories.data[index].subCategories[index1].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                    </div>
                                </label>
                            </div>
                            <div :id="'sub_categorie_2'+parentsCategories.data[index].subCategories[index1].id" class="no_sh">
                                <div v-for="(categ,index2) in parentsCategories.data[index].subCategories[index1].subCategories.length" :key="index2+'azsde'">
                                    <div class="flex">
                                        <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].id" :id="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" type="checkbox">
                                        <label :for="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" class="categorie_3">
                                            <svg viewBox="0 0 100 100">
                                                <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                            </svg>
                                            <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].nom | lowerCase}}</span>
                                        </label>
                                        <label class="lbl_btn">
                                            <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories.length>0">
                                                <svg :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                <svg :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                            </div>
                                        </label>
                                    </div>
                                    <div :id="'sub_categorie_3'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" class="no_sh">
                                        <div v-for="(categ,index3) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories.length" :key="index3+'azezdz'">
                                            <div class="flex">
                                                <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" :id="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" type="checkbox">
                                                <label :for="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" class="categorie_4">
                                                    <svg viewBox="0 0 100 100">
                                                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                    </svg>
                                                    <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].nom | lowerCase}}</span>
                                                </label>
                                                <label class="lbl_btn">
                                                    <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories.length>0">
                                                        <svg :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                        <svg :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                    </div>
                                                </label>
                                            </div>
                                            <div :id="'sub_categorie_4'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" class="no_sh">
                                                <div v-for="(categ,index4) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories.length" :key="index4+'apoze'">
                                                    <div class="flex">
                                                        <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" :id="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" type="checkbox">
                                                        <label :for="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" class="categorie_5">
                                                            <svg viewBox="0 0 100 100">
                                                                <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                                <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                            </svg>
                                                            <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].nom | lowerCase}}</span>
                                                        </label>
                                                        <label class="lbl_btn">
                                                            <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories.length>0">
                                                                <svg :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                                <svg :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div :id="'sub_categorie_5'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" class="no_sh">
                                                        <div v-for="(categ,index5) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories.length" :key="index5+'azoozse'">
                                                            <div class="flex">
                                                                <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" :id="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" type="checkbox">
                                                                <label :for="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" class="categorie_6">
                                                                    <svg viewBox="0 0 100 100">
                                                                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                                    </svg>
                                                                    <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].nom | lowerCase}}</span>
                                                                </label>
                                                                <label class="lbl_btn">
                                                                    <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories.length>0">
                                                                        <svg :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                                        <svg :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div :id="'sub_categorie_6'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" class="no_sh">
                                                                <div v-for="(categ,index6) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories.length" :key="index6+'azlske'">
                                                                    <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].id" :id="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].id" type="checkbox">
                                                                    <label :for="'id'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].id" class="categorie_7">
                                                                        <svg viewBox="0 0 100 100">
                                                                            <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                                            <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                                        </svg>
                                                                        <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].nom | lowerCase}}</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---->
  </div>
</template>
<script>
/*import Allproducts from '../components/Allproducts.vue'
import Categories from '../components/Categories.vue'*/
import store from "../store/store.js"
import axios from "axios"
export default {
    props:['get_products','get_collections','goTo','collections_params','products_params','get_param_product','is_categ'],
    components:{},
  data() {
    return {parentsCategories:[],categories:[],products:[],prods_length:0,val:0}
  },
  mounted(){this.getData() ; this.get_cookie() ; $nuxt.$emit('cart_clicked') }
  ,methods: { 
      fill_selected_categories_array(id){
            if(document.getElementById(id).checked){///////id_checked
                for (var i = 0; i < this.parentsCategories.data.length; i++){
                    if(this.parentsCategories.data[i].id == id){
                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].id,"nom":this.parentsCategories.data[i].nom})
                        document.getElementById(id).checked = true
                        if(this.parentsCategories.data[i].subCategories.length!=0){
                            for (var j = 0; j < this.parentsCategories.data[i].subCategories.length; j++){////////sub_categories_1
                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].id,"nom":this.parentsCategories.data[i].subCategories[j].nom})
                                document.getElementById(this.parentsCategories.data[i].subCategories[j].id).checked = true
                                if(this.parentsCategories.data[i].subCategories[j].subCategories.length!=0){
                                    for (var c = 0; c < this.parentsCategories.data[i].subCategories[j].subCategories.length; c++){////////sub_categories_2
                                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].nom})
                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].id).checked = true
                                        if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories.length!=0){
                                            for (var d = 0; d < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories.length; d++){////////sub_categories_3
                                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].nom})
                                                document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].id).checked = true
                                                if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories.length!=0){
                                                    for (var k = 0; k < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories.length; k++){////////sub_categories_4
                                                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].nom})
                                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].id).checked = true
                                                        if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories.length!=0){
                                                            for (var m = 0; m < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories.length; m++){////////sub_categories_5
                                                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].nom})
                                                                document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].id).checked = true
                                                                if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories.length!=0){
                                                                    for (var p = 0; p < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories.length; p++){////////sub_categories_6
                                                                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories[p].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories[p].nom})
                                                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories[p].id).checked = true
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }else{///////id_non_checked
                for (var i = 0; i < this.parentsCategories.data.length; i++){
                    if(this.parentsCategories.data[i].id == id){
                        for (var j = 0; j < this.selected_categories_array.length; j++){
                            if(this.selected_categories_array[j].id == id){
                                this.selected_categories_array.splice(j,1)
                                document.getElementById(this.selected_categories_array[j].id).checked = false
                            }
                        }
                        if(this.parentsCategories.data[i].subCategories.length!=0){
                            for (var j = 0; j < this.parentsCategories.data[i].subCategories.length; j++){
                                for (var c = 0; c < this.selected_categories_array.length; c++){
                                    if(this.selected_categories_array[c].id == this.parentsCategories.data[i].subCategories[j].id){
                                        this.selected_categories_array.splice(c,1)
                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].id).checked = false
                                    }
                                }
                                if(this.parentsCategories.data[i].subCategories[j].subCategories!=0){
                                    for (var c = 0; c < this.selected_categories_array.length; c++){
                                        if(this.selected_categories_array[c].id == this.parentsCategories.data[i].subCategories[j].subCategories.id){
                                            this.selected_categories_array.splice(c,1)
                                            document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories.id).checked = false
                                        }
                                    }
                                    for (var m = 0; m < this.parentsCategories.data[i].subCategories[j].subCategories.length; m++){
                                        if(this.parentsCategories.data[i].subCategories[j].subCategories[m].length!=0){ 
                                            for (var c = 0; c < this.selected_categories_array.length; c++){
                                                if(this.selected_categories_array[c].id == this.parentsCategories.data[i].subCategories[j].subCategories[m].id){
                                                    this.selected_categories_array.splice(c,1)
                                                    document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[m].id).checked = false
                                                }
                                            }
                                            for (var h = 0; h < this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories.length; h++){
                                                if(this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].length!=0){
                                                    for (var c = 0; c < this.selected_categories_array.length; c++){
                                                        if(this.selected_categories_array[c].id == this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].id){
                                                            this.selected_categories_array.splice(c,1)
                                                            document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].id).checked = false
                                                        }
                                                    }
                                                    for (var f = 0; f < this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories.length; f++){
                                                        if(this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories.length!=0){
                                                            for (var c = 0; c < this.selected_categories_array.length; c++){
                                                                if(this.selected_categories_array[c].id == this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories[f].id){
                                                                    this.selected_categories_array.splice(c,1)
                                                                    document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories[f].id).checked = false
                                                                }
                                                            }
                                                            for (var z = 0; z < this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories[f].subCategories.length; z++){
                                                                for (var c = 0; c < this.selected_categories_array.length; c++){
                                                                    if(this.selected_categories_array[c].id == this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories[f].subCategories[z].id){
                                                                        this.selected_categories_array.splice(c,1)
                                                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[m].subCategories[h].subCategories[f].subCategories[z].id).checked = false
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
      },
      down_click(id,cpt){
            ////////////////////////////show btn
            document.getElementById('down'+id).classList.remove("down")
            document.getElementById('up'+id).classList.remove("up")
            document.getElementById('down'+id).classList.remove("no_act")
            document.getElementById('up'+id).classList.remove("no_act")

            document.getElementById('down'+id).classList.add("no_act")
            document.getElementById('up'+id).classList.add("up")

            /////////////////////////show sub_categorie_1
            if(cpt == 1){
                document.getElementById('sub_categorie_1'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_1'+id).classList.remove("sh")
                document.getElementById('sub_categorie_1'+id).classList.add("sh")
            }
            /////////////////////////show sub_categorie_2
            if(cpt == 2){
                document.getElementById('sub_categorie_2'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_2'+id).classList.remove("sh")
                document.getElementById('sub_categorie_2'+id).classList.add("sh")
            }
            /////////////////////////show sub_categorie_3
            if(cpt == 3){
                document.getElementById('sub_categorie_3'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_3'+id).classList.remove("sh")
                document.getElementById('sub_categorie_3'+id).classList.add("sh")
            }
            /////////////////////////show sub_categorie_4
            if(cpt == 4){
                document.getElementById('sub_categorie_4'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_4'+id).classList.remove("sh")
                document.getElementById('sub_categorie_4'+id).classList.add("sh")
            }
            /////////////////////////show sub_categorie_5
            if(cpt == 5){
                document.getElementById('sub_categorie_5'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_5'+id).classList.remove("sh")
                document.getElementById('sub_categorie_5'+id).classList.add("sh")
            }
            /////////////////////////show sub_categorie_6
            if(cpt == 6){
                document.getElementById('sub_categorie_6'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_6'+id).classList.remove("sh")
                document.getElementById('sub_categorie_6'+id).classList.add("sh")
            }

    },
    up_click(id,cpt){
        /*alert(id)*/
            document.getElementById('down'+id).classList.remove("down")
            document.getElementById('up'+id).classList.remove("up")
            document.getElementById('down'+id).classList.remove("no_act")
            document.getElementById('up'+id).classList.remove("no_act")

            document.getElementById('up'+id).classList.add("no_act")
            document.getElementById('down'+id).classList.add("down")

            /////////////////////////show sub_categorie_1
            if(cpt == 1){
                document.getElementById('sub_categorie_1'+id).classList.remove("sh")
                document.getElementById('sub_categorie_1'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_1'+id).classList.add("no_sh")
            }

            /////////////////////////show sub_categorie_2
            if(cpt == 2){
                document.getElementById('sub_categorie_2'+id).classList.remove("sh")
                document.getElementById('sub_categorie_2'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_2'+id).classList.add("no_sh")
            }
            /////////////////////////show sub_categorie_3
            if(cpt == 3){
                document.getElementById('sub_categorie_3'+id).classList.remove("sh")
                document.getElementById('sub_categorie_3'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_3'+id).classList.add("no_sh")
            }
            /////////////////////////show sub_categorie_4
            if(cpt == 4){
                document.getElementById('sub_categorie_4'+id).classList.remove("sh")
                document.getElementById('sub_categorie_4'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_4'+id).classList.add("no_sh")
            }
            /////////////////////////show sub_categorie_5
            if(cpt == 5){
                document.getElementById('sub_categorie_5'+id).classList.remove("sh")
                document.getElementById('sub_categorie_5'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_5'+id).classList.add("no_sh")
            }
            /////////////////////////show sub_categorie_6
            if(cpt == 6){
                document.getElementById('sub_categorie_6'+id).classList.remove("sh")
                document.getElementById('sub_categorie_6'+id).classList.remove("no_sh")
                document.getElementById('sub_categorie_6'+id).classList.add("no_sh")
            }
    },
      show_mobile_side_bar(){
          var mb = document.getElementById('new_side_bar').classList.value
          if(mb == 'new_side_bar'){
              document.getElementById('new_side_bar').classList.remove('sd_mobile_show')
              document.getElementById('new_side_bar').classList.remove('sd_mobile_no_show')
              document.getElementById('new_side_bar').classList.remove('new_side_bar')
              document.getElementById('new_side_bar').classList.add('sd_mobile_show')
          }
          if(mb == 'sd_mobile_show'){
              document.getElementById('new_side_bar').classList.remove('sd_mobile_show')
              document.getElementById('new_side_bar').classList.remove('sd_mobile_no_show')
              document.getElementById('new_side_bar').classList.remove('new_side_bar')
              document.getElementById('new_side_bar').classList.add('sd_mobile_no_show')
          }
          if(mb == 'sd_mobile_no_show'){
              document.getElementById('new_side_bar').classList.remove('sd_mobile_show')
              document.getElementById('new_side_bar').classList.remove('sd_mobile_no_show')
              document.getElementById('new_side_bar').classList.remove('new_side_bar')
              document.getElementById('new_side_bar').classList.add('sd_mobile_show')
          }
      },
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
            if(store.state.cart.length == 0){
                var arr=id+",1,"+price
                store.commit('fill_cart_array',arr)
            }
            else{
                var found = false;
                for (var i = 0; i < store.state.cart.length && !found; i++) {
                    var str = store.state.cart[i].split(',')
                    if (str[0] == id) {
                        found = true;
                        var arr=id+",1,"+price
                        store.commit('delete_cart_array',i)
                        store.commit('fill_cart_array',arr)
                        break;
                    }
                }
                if(!found){
                    var arr=id+",1,"+price
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
      add_to_wishlist(id){
          if(store.state.wishlist.length == 0){
                store.commit('fill_wishlist_array',id)
            }
            else{
                var found = false;
                for (var i = 0; i < store.state.wishlist.length && !found; i++) {
                    if (store.state.wishlist[i] == id) {
                        found = true;
                        break;
                    }
                }
                if(!found){
                    store.commit('fill_wishlist_array',id)
                }
            }

            var phr = ""
            for (var i = 0; i < store.state.wishlist.length ; i++){
                phr+=store.state.wishlist[i]+"&"
            }
            if(phr.charAt(phr.length-1)=='&'){
                var edited_cookie = phr.slice(0, -1)
                var now = new Date()
                now.setMonth(now.getMonth()+24)
                document.cookie = "STOREINO-WISHLIST="+edited_cookie+";Expires="+now.toUTCString()+";"
            }
            this.get_cookie()
            $nuxt.$emit('cart_clicked')
      },
    getData(){
          axios.get('http://localhost:3000/parentsCategories').then(res => {this.parentsCategories=res})
          axios.get('http://localhost:3000/categories').then(res => {this.categories=res})
          axios.get('http://localhost:3000/products').then(res => {this.products=res ; this.prods_length=this.products.data.length /**/         
          })
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('../assets/mini_framework.css');
.products_found{
    /*margin: 0px 0 0 48px;*/
    padding: 6px 0;
}
.filter-icon-e{
    position: absolute;
    left: 36px;
    cursor: pointer;
    display: none;
}
.filter__found{
    font-size: 16px;
    color: #b2b2b2;
    padding-left: 4px;
    padding-top: 0;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.filter__found span{
    color: #1c1c1c;
    font-weight: 700;
    font-size: 1.2em;
    margin-right: 5px;
}
.No_Products_found span{
    font-size: 2rem;
    color: #b2b2b2;
    text-align: center;
    background: none;
}
.No_Products_found {
    justify-content: center;
    height: 300px;
    background-color: #f2f2f2;
    display: flex;
    height: 300px;
    align-items: center;
    box-shadow: 0 4px 20px #eae4e4;
}
.img{
    //padding-right: 13px;
    width: 100%;
    height: 160px;
    object-fit: contain;
    background: #f4f4f4;
    background: white;
    /* width: 94.7%; */
    margin: 0px 0 5px 0;
    padding: 0;
}
.Products{
    background-color: #f4f4f4;
}
.Products h3{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
}
.title{
    color: #1c1c1c;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 0 10px;
    background: #fff;
    /* display: block; */
    /* text-decoration: none; */
    /* text-align: center; */
    padding: 15px 0px;
    padding-left: -21px;
    /* margin: -6px 4px; */
    /* margin-left: 8px; */
    background-color: white;
    /* font-weight: 600; */
    /* font-style: normal; */
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 23px;
    text-align: center;
    margin: -6px 4px;
    margin-left: 8px;
    background: white;
    width: 100%;
    /* padding: 0; */
    margin: 0 0 0px 0;
}
.column{
    margin-bottom: 27px;
    padding-right:8px;
}
.column:hover{
    color: #008c46;
}
.categ_title{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    text-align: center;
    color: gray;
    letter-spacing: 2px;
    font-family: monospace;
    border: 1px dashed;
    box-shadow: 0 5px 9px #e3e3e3;
    margin-bottom: 5px;
    box-shadow: 0 5px 9px #e3e3e3;
}
/*top products style**********************************/
.prod{
    padding-right: 13px;
    width: 100%;
    height: 160px;
}
.TopProducts{
    background-color: #f4f4f4;
    padding-top: 21px;
}
.TopProducts h3{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    margin-bottom: 20px;
    color: #7d6e6e;
    text-align: center;
    color: gray;
    display: block;
    letter-spacing: 2px;
    font-family: monospace;
    border: 1px dashed;
    box-shadow: 0 5px 9px #e3e3e3;
    /* margin-bottom: 5px; */
    box-shadow: 0 5px 9px #e3e3e3;
}
.name{
    text-align: center;
    padding: 15px 0px;
    padding-left: -21px;
    margin: -8px 4px;
    margin-left: 8px;
    background-color: white;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 23px;
    color: #676767;
    margin-bottom: 5px;
    width: 100%;
    /* padding: 0; */
    margin: 0 0 0px 0;
}
.name:hover{
    color: #008c46;
    cursor: pointer;
}
.prices{
    text-align: center;
    padding: 5px 0px;
    padding-left: -21px;
    margin: -6px 4px;
    margin-left: 8px;
    background-color: white;
    /* font-weight: 600; */
    font-style: normal;
    font-size: 15px;
    /* line-height: 23px; */
    margin-bottom: 0;
    background: white;
    width: 100%;
    padding: 0;
    margin: 0 0 0px 0;
}
.compare_price{
    color: #808080;
    text-decoration: line-through;
    text-decoration-color: red;
}
.price{
    font-size: 20px;
    font-weight: 500;
}
.addCarte{
    background-color: #008c46;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-weight: 600;
    width: 80%;
    cursor: pointer;
}
.addToCarte{
    text-align: center;
    padding: 5px 0px;
    padding-left: -21px;
    margin: -6px 4px;
    margin-left: 8px;
    background-color: white;
    /* font-weight: 600; */
    font-style: normal;
    font-size: 15px;
    /* line-height: 23px; */
    margin-bottom: 0;
    background: white;
    width: 100%;
    padding: 0;
    margin: 0 0 0px 0;
    padding-bottom: 11px;
}
.stars img{
    width: 17px;
}
.stars{
    text-align: center;
    padding: 0px 0px;
    padding-left: -21px;
    //margin: -17px 4px;
    margin-left: 10px;
    background-color: white;
    margin: 0;
}
.shopping i,.heart i{
    padding: 4px;
    padding-top: 8px;
    padding-right: 10px;
    padding-left: 8px;
    /* margin: 0 11px; */
    margin-right: 5px;
    border-radius: 50%;
    background-color: #fff;
    transition: all,.3s;
    box-shadow: 0 0 1px rgb(0 0 0 / 50%);
    cursor: pointer;
    color: #d9d1d1;
    font-size: 22px;
    display: flex;
    padding: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 24px;
}
.heart i{
    font-size: 20px;
}
.shopping i{
    font-size: 18px;
}
.shopping i:hover,.heart i:hover{
    background-color: #008c46;
    color: white;
    animation: ro 1s linear /*infinite*/;
}
@keyframes ro {
    0%{transform: rotate(0);}
    100%{transform: rotate(360deg);}/**/
}
.ico{
    background-color: white;
    //padding: 5px 0px;
    padding-left: -21px;
    margin: -8px 5px;
    margin-left: 8px;
    height: 47px;
    margin: 0;
    padding-top: 4px;
    background: white;
    width: 100%;
    /* padding: 0; */
    margin: 0 0 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
}
.ico .heart,.ico .shopping{
    //display: inline-block;
    //float: right;
}
.column{
    margin-bottom: 30px;
}
.heart,.shopping,.stars img,.price,.compare_price{
    background-color: white;
}
.column:hover .name{
    color: #008c46;
}
.shopping{
    display: flex;
}
.heart{
    margin-right: 5px;
}
@media (max-width: 821px){
.products_found{
    margin: 0px 0 0 48px;
}
.filter-icon-e{
    display: block;
}
.filter__found{
    padding-top: 10px;
}
}
/**/.sd_mobile_show{
    display: block;
}
/**/.new_side_bar,.sd_mobile_no_show{
    display: none;
}
/////////////////////////////////////////side bar///////////////////////////////////////////
.mobile_side_bar .categ{
    text-transform: capitalize;
    font-size: 1.2em;
    color: #978686;
}
.mobile_side_bar input{
    width: 35px;
    float: left;
    font-weight: 56px;
    height: 23px;
}
.mobile_side_bar label{
    text-transform: uppercase;
    font-size: 0.8em;
}
.mobile_side_bar .sh{
    animation: load 1s forwards;
    //display: block;
}
.mobile_side_bar .img{
    padding-right: 13px;
    width: 100%;
    height: 160px;
}
.mobile_side_bar .title{
    color: #1c1c1c;
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px 0 10px;
    background: #fff;
    padding: 15px 0px;
    padding-left: -21px;
    background-color: white;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 23px;
    text-align: center;
    margin: -6px 4px;
    margin-left: 8px;
}
.mobile_side_bar .column{
    margin-bottom: 27px;
    cursor: pointer;
}
.mobile_side_bar .column:hover{
    color: #008c46;
}
.mobile_side_bar .categ_title{
    font-size: 30px;
    line-height: 32px;
    font-weight: 300;
    padding: 11px 6px;
    text-align: center;
    color: gray;
    letter-spacing: 2px;
    font-family: monospace;
    border: 1px dashed;
    box-shadow: 0 5px 9px #e3e3e3;
    margin-bottom: 5px;
    box-shadow: 0 5px 9px #e3e3e3;
}
@keyframes load{
    0%{ transform: translateX(25px) scale(1.1) }
    100%{ opacity: 1; transform: translateX(0px) scale(1) }
}

.inner {
  padding: 0.5em;
  border-radius: 0.3em;
  width: 200px;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.04), -7px -7px 5px rgba(255, 255, 255, 0.8);
  border: 2px solid #ebebeb;
}

input[type=checkbox] {
  display: none;
  pointer-events: none;
}
input[type=checkbox] + label {
  cursor: pointer;
  font-size: 0.8em;
  display: grid;
  grid-template-columns: auto 3fr;
}
input[type=checkbox] + label svg {
  width: 2em;
  stroke: #007ce2;
  stroke-width: 5;
  fill: white;
}
input[type=checkbox] + label svg .box {
  stroke-dasharray: 320;
  stroke-dashoffset: 0;
  fill: white !important;
}
input[type=checkbox] + label svg .check {
  stroke-dasharray: 70;
  stroke-dashoffset: 70;
  fill: none;
}
input[type=checkbox] + label span {
  padding-top: 0.3em;
  margin-left: 0.3em;
}
input[type=checkbox]:checked + label .box {
  stroke-dashoffset: 320;
  transition: stroke-dashoffset 0.3s linear;
}
input[type=checkbox]:checked + label .check {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.3s linear;
}

.reverse .box {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.3s linear;
}
.reverse .check {
  stroke-dashoffset: 70;
  transition: stroke-dashoffset 0.3s linear;
}
.mobile_side_bar .new_side_bar label,.mobile_side_bar .sd_mobile_show label{
    display: flex;
    list-style-type: none;
    padding: 12px 7px 7px 13px;
    margin-bottom: 4px;
    border-top: 1px solid #d2d3d8;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    box-shadow: 0 4px 0px #f2f1f1;
    width: 100%;
    overflow: hidden;
}
.mobile_side_bar .new_side_bar .show,.mobile_side_bar .sd_mobile_show .show{
    float: right;
    //width: 24px;
    cursor: pointer;
    margin: 0;
}
.new_side_bar .categorie_1, .new_side_bar .categorie_2, .new_side_bar .categorie_3, .new_side_bar .categorie_4, .new_side_bar .categorie_5, .new_side_bar .categorie_6, .new_side_bar .categorie_7{
    border-top: none;
}
/*.sd_mobile_show .categorie_1, .sd_mobile_show .categorie_2, .sd_mobile_show .categorie_3, .sd_mobile_show .categorie_4, .sd_mobile_show .categorie_5, .sd_mobile_show .categorie_6, .sd_mobile_show .categorie_7{
    border-top: none;
}*/
.new_side_bar .categorie_2,.sd_mobile_show .categorie_2{
    padding-left: 30px;
}
.new_side_bar .categorie_3,.sd_mobile_show .categorie_3{
    padding-left: 60px;
}
.new_side_bar .categorie_4,.sd_mobile_show .categorie_4{
    padding-left: 90px;
}
.new_side_bar .categorie_5,.sd_mobile_show .categorie_5{
    padding-left: 120px;
}
.new_side_bar .categorie_6,.sd_mobile_show .categorie_6{
    padding-left: 150px;
}
.new_side_bar .categorie_7,.sd_mobile_show .categorie_7{
    padding-left: 180px;
}
.new_side_bar .categorie_2,.new_side_bar .categorie_3,.new_side_bar .categorie_4,.new_side_bar .categorie_5,.new_side_bar .categorie_6,.new_side_bar .categorie_7{
    margin: 0;
}
/*.sd_mobile_show .categorie_2,.sd_mobile_show .categorie_3,.sd_mobile_show .categorie_4,.sd_mobile_show .categorie_5,.sd_mobile_show .categorie_6,.sd_mobile_show .categorie_7{
    margin: 0;
}*/
.mobile_side_bar .flex{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    //border-top: 1px solid #d2d3d8;
    border-top: 1px solid #e7eaf8;
}

.mobile_side_bar .new_side_bar .lbl_btn,.mobile_side_bar .sd_mobile_show .lbl_btn{
    padding: 12px 7px 7px 13px;
    margin-bottom: 4px;
    border-top: 1px solid #d2d3d8;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    box-shadow: 0 4px 0px #f2f1f1;
    display: contents;
}
.mobile_side_bar .new_side_bar .show svg,.mobile_side_bar .sd_mobile_show .show svg{
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
}
.mobile_side_bar .show .mobile_side_bar .no_act,.mobile_side_bar .no_sh{
    display: none;
}
.mobile_side_bar .show .mobile_side_bar .up,.mobile_side_bar .show .down{
    display: block;
}
.mobile_side_bar .sh{
    display: block;
}
.show .no_act,.no_sh{
    display: none;
}
.show .up,.show .down{
    display: block;
}
.sh{
    display: block;
}
.mobile_side_bar{
    position: fixed;
    top: 160px;
    left: 0;
    width: 370px;
}
@media (min-width: 821px){
    .mobile_side_bar{
        display: none;
    }
}
.flxy{
    //display: flex;
}
</style>
