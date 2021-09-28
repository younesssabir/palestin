<template>
<div>
            <!--Top menu--><div class="TopMenu">
                <div class="mt-2 py-3 container">
                        <ul>
                            <li v-for="(categ,index) in parentsCategories.data" :key="index+'kkhdfd'">
                                <nuxt-link v-if="parentsCategories.data[index].subCategories.length!=0" :to="'/collections/'+parentsCategories.data[index].slug | slug"><span @click="goto_Collections(parentsCategories.data[index].slug)">{{parentsCategories.data[index].nom | lowerCase}}</span></nuxt-link>
                                <nuxt-link v-else :to="'/shop/'+parentsCategories.data[index].slug | slug"><span @click="empty_checkboxes(parentsCategories.data[index].slug)">{{parentsCategories.data[index].nom | lowerCase}}</span></nuxt-link>
                            </li>
                            <!---->
                        </ul>
                </div>
            </div><!--Top menu-->
            <!--Menu Toogle-->
            <div @click="show_Menu" class="btn_tooggle">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </div>
            <div :class="show_Menu_Toogle">
                <div class="Menu_Toogle">
                    <div>
                            <ul>
                                <li v-for="(categ,index) in parentsCategories.data" :key="index+'kkiu'">
                                    <nuxt-link v-if="parentsCategories.data[index].subCategories.length!=0" :to="'/collections/'+parentsCategories.data[index].slug | slug"><span @click="goto_Collections(parentsCategories.data[index].slug)">{{parentsCategories.data[index].nom | lowerCase}}</span></nuxt-link>
                                    <nuxt-link v-else :to="'/shop/'+parentsCategories.data[index].slug | slug"><span @click="empty_checkboxes(parentsCategories.data[index].slug)">{{parentsCategories.data[index].nom | lowerCase}}</span></nuxt-link>
                                </li>
                                <!---->
                            </ul>
                    </div>
                </div>
            </div><!--Menu Toogle-->
            <div class="division">
                <div class="sidebar">
                    <div class="new_side_bar">
                        <div v-for="(categ,index) in parentsCategories.data" :key="index+'aze'">
                            <div class="flex">
                                <input @click="fill_selected_categories_array(parentsCategories.data[index].id)" :name="parentsCategories.data[index].id" :id="parentsCategories.data[index].id" type="checkbox">
                                <label :for="parentsCategories.data[index].id" class="categorie_1">
                                    <svg viewBox="0 0 100 100">
                                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                    </svg>
                                    <span class="categ">{{parentsCategories.data[index].nom | lowerCase}}
                                    </span>
                                </label>
                                <label class="lbl_btn">
                                    <div class="show" v-if="parentsCategories.data[index].subCategories.length>0">
                                        <svg @click="down_click(parentsCategories.data[index].id,1)" :id="'down'+parentsCategories.data[index].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                        <svg @click="up_click(parentsCategories.data[index].id,1)" :id="'up'+parentsCategories.data[index].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                    </div>
                                </label>
                            </div>
                            <div :id="'sub_categorie_1'+parentsCategories.data[index].id" class="no_sh">
                                <div v-for="(categ,index1) in parentsCategories.data[index].subCategories.length" :key="index1+'asze'">
                                    <div class="flex">
                                        <input @click="fill_selected_categories_array(parentsCategories.data[index].subCategories[index1].id)" :name="parentsCategories.data[index].subCategories[index1].id" :id="parentsCategories.data[index].subCategories[index1].id" type="checkbox">
                                        <label :for="parentsCategories.data[index].subCategories[index1].id" class="categorie_2">
                                            <svg viewBox="0 0 100 100">
                                                <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                            </svg>
                                            <span class="categ">{{parentsCategories.data[index].subCategories[index1].nom | lowerCase}}</span>
                                        </label>
                                        <label class="lbl_btn">
                                            <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories.length>0">
                                                <svg @click="down_click(parentsCategories.data[index].subCategories[index1].id,2)" :id="'down'+parentsCategories.data[index].subCategories[index1].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                <svg @click="up_click(parentsCategories.data[index].subCategories[index1].id,2)" :id="'up'+parentsCategories.data[index].subCategories[index1].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                            </div>
                                        </label>
                                    </div>
                                    <div :id="'sub_categorie_2'+parentsCategories.data[index].subCategories[index1].id" class="no_sh">
                                        <div v-for="(categ,index2) in parentsCategories.data[index].subCategories[index1].subCategories.length" :key="index2+'azsde'">
                                            <div class="flex">
                                                <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].id" :id="parentsCategories.data[index].subCategories[index1].subCategories[index2].id" type="checkbox">
                                                <label :for="parentsCategories.data[index].subCategories[index1].subCategories[index2].id" class="categorie_3">
                                                    <svg viewBox="0 0 100 100">
                                                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                    </svg>
                                                    <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].nom | lowerCase}}</span>
                                                </label>
                                                <label class="lbl_btn">
                                                    <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories.length>0">
                                                        <svg @click="down_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].id,3)" :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                        <svg @click="up_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].id,3)" :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                    </div>
                                                </label>
                                            </div>
                                            <div :id="'sub_categorie_3'+parentsCategories.data[index].subCategories[index1].subCategories[index2].id" class="no_sh">
                                                <div v-for="(categ,index3) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories.length" :key="index3+'azezdz'">
                                                    <div class="flex">
                                                        <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" :id="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" type="checkbox">
                                                        <label :for="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" class="categorie_4">
                                                            <svg viewBox="0 0 100 100">
                                                                <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                                <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                            </svg>
                                                            <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].nom | lowerCase}}</span>
                                                        </label>
                                                        <label class="lbl_btn">
                                                            <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories.length>0">
                                                                <svg @click="down_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id,4)" :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                                <svg @click="up_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id,4)" :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div :id="'sub_categorie_4'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].id" class="no_sh">
                                                        <div v-for="(categ,index4) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories.length" :key="index4+'apoze'">
                                                            <div class="flex">
                                                                <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" :id="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" type="checkbox">
                                                                <label :for="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" class="categorie_5">
                                                                    <svg viewBox="0 0 100 100">
                                                                        <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                                        <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                                    </svg>
                                                                    <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].nom | lowerCase}}</span>
                                                                </label>
                                                                <label class="lbl_btn">
                                                                    <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories.length>0">
                                                                        <svg @click="down_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id,5)" :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                                        <svg @click="up_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id,5)" :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div :id="'sub_categorie_5'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].id" class="no_sh">
                                                                <div v-for="(categ,index5) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories.length" :key="index5+'azoozse'">
                                                                    <div class="flex">
                                                                        <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" :id="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" type="checkbox">
                                                                        <label :for="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" class="categorie_6">
                                                                            <svg viewBox="0 0 100 100">
                                                                                <path class="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                                                                                <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                                                                            </svg>
                                                                            <span class="categ">{{parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].nom | lowerCase}}</span>
                                                                        </label>
                                                                        <label class="lbl_btn">
                                                                            <div class="show" v-if="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories.length>0">
                                                                                <svg @click="down_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id,6)" :id="'down'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                                                <svg @click="up_click(parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id,6)" :id="'up'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 no_act" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#e3e3e3" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div :id="'sub_categorie_6'+parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].id" class="no_sh">
                                                                        <div v-for="(categ,index6) in parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories.length" :key="index6+'azlske'">
                                                                            <input :name="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].id" :id="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].id" type="checkbox">
                                                                            <label :for="parentsCategories.data[index].subCategories[index1].subCategories[index2].subCategories[index3].subCategories[index4].subCategories[index5].subCategories[index6].id" class="categorie_7">
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
            </div>
            <!---------------------------------------------->
           
            <!---------------------------------------------->
        <div class="div_right"><params :test123="test123" :is_categ="is_categ" :get_param_product="get_param_product" :get_collections="get_collections" :get_products="get_products" :goTo="goTo" :collections_params="collections_params" :products_params="products_params" /></div>
                
</div>
</template>
<script>
import axios from "axios"
import store from "../store/store.js"
import Params from "./Params.vue"
//import Menu from "./Menu.vue"
export default {
  props:['collections_params','products_params','get_param_product','is_categ'],
  components:{Params/*,Menu*/},
  data() {
    return {parentsCategories:[],categories:[],products:[],clicked:'nonclicked',productsArray:[],goTo:'/shop/',test123:'test123',show_Menu_Toogle:'noshow_Menu_Toogle'/*,get_param_product:[]*/
            ,Products_found:0,test:'test',get_products:[],get_collections:[],fill_prods_array:[],side_bar_collections:[],random_str:'',selected_categories_array:[]}
  },
  computed:{},
  mounted(){
      //this.random_str = this.random_string(10)
      this.getData()
      var href=window.location.href
      if(!href.includes('collections')){
          if(this.$route.params.id==null){
              this.goTo='/shop/'
          }else {
                    this.goTo='/shop/'
                    const array = this.goTo.split('+')
                    this.productsArray=[]
                    array.forEach(element => { this.productsArray.push(element.toLowerCase())});
                    
                    const val = this.productsArray[0].split('/')
                    this.productsArray.push(val[2].toLowerCase())
                    this.productsArray.splice(0,1)
          }
      }else this.goTo='/collections/'/**/

        //this.get_param_product.push('kakakakk')
      
  },
  methods: {
      check_if_exist_item(id){
          var tr = false
          for (var i = 0; i < this.selected_categories_array.length; i++){
              if(this.selected_categories_array[i].id == id){
                  tr = true ; break ;
              }
          }
          return tr
      },
      fill_selected_categories_array(id){
            if(document.getElementById(id).checked){///////id_checked
            ///////////main categorie////////////////
                for (var i = 0; i < this.parentsCategories.data.length; i++){
                    if(this.parentsCategories.data[i].id == id){
                        if(!this.check_if_exist_item(id))
                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].id,"nom":this.parentsCategories.data[i].nom})
                        document.getElementById(id).checked = true
                        if(this.parentsCategories.data[i].subCategories.length!=0){
                            for (var j = 0; j < this.parentsCategories.data[i].subCategories.length; j++){////////sub_categories_1
                                if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[j].id))
                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].id,"nom":this.parentsCategories.data[i].subCategories[j].nom})
                                document.getElementById(this.parentsCategories.data[i].subCategories[j].id).checked = true
                                if(this.parentsCategories.data[i].subCategories[j].subCategories.length!=0){
                                    for (var c = 0; c < this.parentsCategories.data[i].subCategories[j].subCategories.length; c++){////////sub_categories_2
                                        if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[j].subCategories[c].id))
                                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].nom})
                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].id).checked = true
                                        if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories.length!=0){
                                            for (var d = 0; d < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories.length; d++){////////sub_categories_3
                                                if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].id))
                                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].nom})
                                                document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].id).checked = true
                                                if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories.length!=0){
                                                    for (var k = 0; k < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories.length; k++){////////sub_categories_4
                                                        if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].id))
                                                        this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].nom})
                                                        document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].id).checked = true
                                                        if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories.length!=0){
                                                            for (var m = 0; m < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories.length; m++){////////sub_categories_5
                                                                if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].id))
                                                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].id,"nom":this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].nom})
                                                                document.getElementById(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].id).checked = true
                                                                if(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories.length!=0){
                                                                    for (var p = 0; p < this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories.length; p++){////////sub_categories_6
                                                                        if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[j].subCategories[c].subCategories[d].subCategories[k].subCategories[m].subCategories[p].id))
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
                }///////////////////
                ///////////categorie_1////////////////
                for (var i = 0; i < this.parentsCategories.data.length; i++){
                    for (var d = 0; d < this.parentsCategories.data[i].subCategories.length; d++){
                        if(this.parentsCategories.data[i].subCategories[d].id == id){
                            if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[d].id))
                            this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[d].id,"nom":this.parentsCategories.data[i].subCategories[d].nom})
                            document.getElementById(this.parentsCategories.data[i].subCategories[d].id).checked = true
                            for (var j = 0; j < this.parentsCategories.data[i].subCategories[d].subCategories.length; j++){
                                if(!this.check_if_exist_item(this.parentsCategories.data[i].subCategories[d].subCategories[j].id))
                                this.selected_categories_array.push({"id":this.parentsCategories.data[i].subCategories[d].subCategories[j].id,"nom":this.parentsCategories.data[i].subCategories[d].subCategories[j].nom})
                                document.getElementById(this.parentsCategories.data[i].subCategories[d].subCategories[j].id).checked = true
                            }
                        }
                    }
                }
                //////////////////////////////////////
            }else{///////id_non_checked
                var tr = false
                for (var i = 0; i < this.parentsCategories.data.length; i++){
                    if(this.parentsCategories.data[i].id == id && this.parentsCategories.data[i].subCategories.length == 0){
                        tr = true;break
                    }
                }
                if(!tr){
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
                /////////////////////////////////////////////
                for (var b = 0; b < this.selected_categories_array.length; b++){
                    if(this.selected_categories_array[b].id == id){
                        this.selected_categories_array.splice(b,1)
                    }
                }
                ////////////////////////////////////////////
                
            }
      },
       random_string(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
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
      show_Menu(){
          if(this.show_Menu_Toogle=='noshow_Menu_Toogle') {this.show_Menu_Toogle='show_Menu_Toogle'}
          else {this.show_Menu_Toogle='noshow_Menu_Toogle'}
      },
      fill_prods(){
          this.fill_prods_array=[]
          for (var i = 0; i < this.get_products.length; i++){
               for (var j = 0; j < this.categories.data.length; j++){
                   if(this.get_products[i]==this.categories.data[j].slug){
                       for (var k = 0; k < this.products.data.length; k++){
                           if(this.products.data[k].categorie_id==this.categories.data[j].id){
                               this.fill_prods_array.push(this.products.data[k].id,this.products.data[k].nom,this.products.data[k].slug,this.products.data[k].img[0].id,this.products.data[k].categorie_id,this.products.data[k].price,this.products.data[k].compare_price,this.products.data[k].reviews)
                           }
                       }
                   }
                }
          }
          alert(this.fill_prods_array[0].nom)
          //return this.fill_prods_array.length
      },
      goto_Collections(slug){
          this.goTo='/collections/'+slug
          this.get_collections=[]
          this.get_products=[]
          this.get_collections.push(slug)
         for (var i = 0; i < this.productsArray.length; i++){
              for (var j = 0; j < this.categories.data.length; j++){
                    if(this.categories.data[j].slug==this.productsArray[i]){
                        if(this.productsArray[i]!=''){
                            var input = document.getElementById(this.categories.data[j].id)
                            if(input.checked) input.checked=false
                        }
                    }
                }
          } /**/
          this.productsArray=[] 
           try{
              store.commit('clear_get_products_array')
              store.commit('clear_get_collections_array')
              //for(var i=0;i<this.get_collections.length;i++){
                  store.commit('fill_get_collections_array',slug)
                  this.get_collections.push(slug)
              //}
          }catch{}
          this.$props.collections_params=[]
          this.$props.products_params=[]
          this.$props.collections_params.push(store.state.get_collections[0])/**/
          this.get_collections=[]
          this.get_products=[]
          this.$props.get_param_product=[]
          this.get_collections.push(store.state.get_collections[0])
          this.$props.is_categ=true

          if(this.show_Menu_Toogle=='show_Menu_Toogle') this.show_Menu_Toogle='noshow_Menu_Toogle'
      },
      empty_checkboxes(slug){
            this.goTo='/shop/'+slug ; this.get_collections=[] ; this.get_products=[] 
            if(this.productsArray.length!=0){
                for (var i = 0; i < this.productsArray.length; i++){
                    for (var j = 0; j < this.categories.data.length; j++){
                          if(this.categories.data[j].slug==this.productsArray[i]){
                              if(this.productsArray[i]!=''){
                                  var input = document.getElementById(this.categories.data[j].id)
                                  if(input.checked) input.checked=false
                              }
                          }
                      }
                } 
            }
          this.productsArray=[]
          
          var res = this.goTo.replace('/shop/','');
          const myArr = res.split("+");
          this.get_products=[]
          if(myArr.length!=0){
              for (var i = 0; i < myArr.length; i++){
                  this.get_products.push(myArr[i])
              }
          }
          try{
              store.state.get_products=[]
              if(this.get_products.length!=0){
                  for(var i=0;i<this.get_products.length;i++){
                      store.commit('fill_get_products_array',this.get_products[i])
                  }
              }
          }catch{}
          store.commit('clear_get_collections_array')/**/
          this.$props.collections_params=[]
          this.$props.products_params=[]
          if(store.state.get_products.length!=0){
               for (var i = 0; i < store.state.get_products.length; i++){
                   this.$props.products_params.push(store.state.get_products[i])
               }
          }
          this.$props.get_param_product=[]
         this.fill_array()
          history.pushState({}, null, this.goTo)


          this.$props.get_param_product=[]
          this.$props.get_products=[]
          this.$props.products_params=[]
          for(var i=0;i<this.categories.data.length;i++){
              if(this.categories.data[i].slug==slug){
                  for(var k=0;k<this.products.data.length;k++){
                      if(this.categories.data[i].id==this.products.data[k].categorie_id){
                            this.$props.get_param_product.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                            this.$props.get_products.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                            this.$props.products_params.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                      }
                  }
              }
          }
          if(this.$props.get_param_product.length==0)this.$props.get_param_product.push('empty_products')
         if(this.show_Menu_Toogle=='show_Menu_Toogle'){
             this.show_Menu_Toogle='noshow_Menu_Toogle'
         }
      },
      check_if_empty(){
          var elements = document.getElementsByClassName('check_if_empty');
          for (var i = 0; i < elements.length; i++){
              if(elements.item(i).innerHTML==''){
                    elements.item(i).parentNode.removeChild(elements.item(i));
              }
          }
      },
      getData(){
          axios.get('http://localhost:3000/parentsCategories').then(res1 => {this.parentsCategories=res1
          axios.get('http://localhost:3000/categories').then(res => {this.categories=res
          //////////////////////////////////
          /*this.side_bar_collections = []
          for(var i=0;i<this.categories.data.length;i++){
              if(this.categories.data[i].subCategories.length == 0){
                  this.side_bar_collections.push({"id":this.categories.data[i].id,"nom":this.categories.data[i].nom})
              }
              else{
                  var arr = [] 
                  for(var j=0;j<this.categories.data.length;j++){
                      for(var c=0;c<this.categories.data[i].subCategories.length;c++){
                          if(this.categories.data[i].subCategories[c].id == this.categories.data[j].id){
                              //var x = j
                              arr.push({"id":this.categories.data[i].subCategories[c].id,"nom":this.categories.data[j].nom}) //; x++
                          }
                      }
                  }
                  this.side_bar_collections.push({"id":this.categories.data[i].id,"nom":this.categories.data[i].nom,arr})
              }
          }*/
          ///////////////////////////////////
          /*for(var i=0;i<this.categories.data.length;i++){
              if(this.categories.data[i].subCategories.length == 0){
                  this.side_bar_collections.push({"id":this.categories.data[i].id,"nom":this.categories.data[i].nom})
              }
              else {
                  //first collection//
                  var arr1 = [] 
                  for(var j=0;j<this.categories.data.length;j++){
                      for(var c=0;c<this.categories.data[i].subCategories.length;c++){
                          if(this.categories.data[i].subCategories[c].id == this.categories.data[j].id){
                              //var x = j
                              arr1.push({"id":this.categories.data[i].subCategories[c].id,"nom":this.categories.data[j].nom}) //; x++
                          }
                      }
                  }
                  //second collection//
                  var arr2 = []
                  for(var j=0;j<this.categories.data.length;j++){
                      if(this.categories.data[j].subCategories.length != 0 ){
                          for(var c=0;c<this.categories.data[j].subCategories.length;c++){
                              if(this.categories.data[j].subCategories[c].length!=0){
                                  for(var d=0;d<this.categories.data[j].subCategories[c].length;d++){
                                      if(this.categories.data[j].subCategories[c].subCategories[d].length){
                                          for(var e=0;e<this.categories.data.length;e++){
                                              if(this.categories.data[e].id == this.categories.data[j].subCategories[c].subCategories[d].id){
                                                  arr2.push({"id":this.categories.data[j].subCategories[c].subCategories[d].id,"nom":this.categories.data[e].nom})
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
            */
          //alert(this.categories.data.length)
          /*this.side_bar_collections = []
          for(var i=0;i<this.parentsCategories.data.length;i++){
              if(this.parentsCategories.data[i].subCategories.length!=0){
                  var arr = []
                  for(var j=0;j<this.categories.data.length;j++){
                      if(this.categories.data[j].id == this.parentsCategories.data[i].subCategories[i].id){
                          var x=j
                            for(var c=0;c<this.parentsCategories.data[i].subCategories.length;c++){
                                arr.push({"id":this.parentsCategories.data[i].subCategories[c].id,"nom":this.categories.data[x].nom}) ; x++
                            }
                      }
                  }
              }
              if(this.parentsCategories.data[i].subCategories.length!=0)
              this.side_bar_collections.push({"id":this.parentsCategories.data[i].id,"nom":this.parentsCategories.data[i].nom,"subCategories":arr})
              else this.side_bar_collections.push({"id":this.parentsCategories.data[i].id,"nom":this.parentsCategories.data[i].nom})
          }*/
          })
          })
          
          axios.get('http://localhost:3000/products').then(res => {this.products=res ; this.Products_found=this.products.data.length})
      },
      show(){
          /*if(this.clicked=='clicked') {this.clicked='nonclicked' }
          else {this.clicked='clicked' }*/
      },
      prodArray(nom,id){
          for(var i=0;i<this.productsArray.length;i++){
              if(this.productsArray[i]==''){
                  const index = this.productsArray.indexOf('');
                    if (index > -1) {
                    this.productsArray.splice(index, 1);
                    }
              }
          }

          const cb = document.getElementById(id);
          if(cb.checked){
              if(!this.productsArray.includes(nom)){
                  this.productsArray.push(nom.toLowerCase())
              }
          }
          else{
              const index = this.productsArray.indexOf(nom)
              this.productsArray.splice(index, 1)
          }
          if(this.productsArray.length==0){
              this.goTo='/shop/'
              store.state.prodArray=[]
              history.pushState({}, null, this.goTo)
          }
          else{
              var query=''
              this.productsArray.forEach(element => {
                  query+=element+'+'
              });
              const newQuery = query.slice(0, -1)
              this.goTo='/shop/'+newQuery
              history.pushState({}, null, this.goTo)
              /*store.state.prodArray=[]
              store.state.prodArray.push(newQuery)*/
          }
          var productsFoundCounter=0
          //alert(this.productsArray[0])
          for(var i=0;i<this.products.data.length;i++){
              for(var j=0;j<this.productsArray.length;j++){
                  if(this.products.data[i].categorie_slug==this.productsArray[j]){
                      productsFoundCounter++
                  }
               }
          }
          this.Products_found=productsFoundCounter
          if(this.productsArray.length==0) this.Products_found=this.products.data.length

          /**/
            let firstChar = this.goTo.charAt(6) 
            //alert(firstChar)
            if(firstChar=='+') {
                this.goTo=this.goTo.substr(7, this.goTo.length)
            }

          /*
          //alert(this.goTo)
          store.state.prod_params=[]
          store.state.prod_params.push(this.goTo)
          alert(store.state.prod_params)*/
          /*try{
              store.state.prod_params=[]
              store.commit('fill_array',this.goTo)
              //alert(store.state.prod_params)
          }catch{}*/
          
          var res = this.goTo.replace('/shop/','');
          const myArr = res.split("+");
          this.get_products=[]
          for (var i = 0; i < myArr.length; i++){
              this.get_products.push(myArr[i])
          }
            if(this.get_products[0]=='') { this.get_products=[] }
            this.get_collections=[]

            /** */
            try{
              store.state.get_products=[] 
              for(var i=0;i<this.get_products.length;i++){
                  store.commit('fill_get_products_array',this.get_products[i])
              }
          }catch{}
          if(this.get_products.length==0){
              store.commit('clear_get_products_array')
            }
             store.commit('clear_get_collections_array')

             this.$props.get_param_product=[]
             this.$props.products_params=[]
             this.$props.collections_params=[]
             if(store.state.get_products.length!=0){
                 for(var i=0;i<store.state.get_products.length;i++){
                     this.$props.products_params.push(store.state.get_products[i])
                 }
             }
             this.fill_array()
             if(this.$props.get_param_product.length==0){
                this.$props.get_param_product.push('empty_products')
             }

             if(this.$props.products_params==0){
                 this.$props.get_param_product=[]
                 for(var k=0;k<this.products.data.length;k++){
                                this.products_params.push(this.products.data[k].slug)
                                    this.$props.get_param_product.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                                    //store.commit('fill_get_products_array',this.products.data[k].slug)
                        }
             }
      },
      fill_array(){
          for(var i=0;i<this.categories.data.length;i++){
                    for(var j=0;j<this.$props.products_params.length;j++){
                        if(this.categories.data[i].slug==this.$props.products_params[j]){
                            for(var k=0;k<this.products.data.length;k++){
                                if(this.products.data[k].categorie_id==this.categories.data[i].id){
                                    this.$props.get_param_product.push({"id":this.products.data[k].id,"nom":this.products.data[k].nom,"slug":this.products.data[k].slug,"img":this.products.data[k].img[0].id,"categorie_id":this.products.data[k].categorie_id,"price":this.products.data[k].price,"compare_price":this.products.data[k].compare_price,"reviews":this.products.data[k].reviews})
                                }
                            }
                        }
                    }
                }
      }
  }
}
</script>
<style lang="scss" scoped>
.div_right{
    background-color: #f4f4f4;
    width: 67%;
    display: inline-block;
    margin: 0;
    padding: 0;
    float: right;
}
.categ{
    text-transform: capitalize;
    font-size: 1.2em;
    color: #978686;
}
.sidebar{
    margin: 0;
    width: 30%;
    display: inline-block;
}
.sidebar span{
    cursor: pointer;
}
ul li{
    list-style-type: none;
    padding: 12px 7px 7px 13px;
    margin-bottom: 4px;
    border-top: 1px solid #d2d3d8;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    box-shadow: 0 5px 9px #e3e3e3;
}
ul li a{
    text-decoration: none;
    color: black;
}
.show{
    float: right;
    width: 24px;
    cursor: pointer;
    margin-top: -6px;
}
.clicked{
    display: block;
    margin: 0;
}
.clicked>li{
    border-top: none;
}
.nonclicked{
    display: none;
}
.clicked li{
    display: flex;
    width: 100%;
}
.division{
    width: 30%;
    display: inline;
}
input{
    width: 35px;
    float: left;
    font-weight: 56px;
    height: 23px;
}
label{
    text-transform: uppercase;
    font-size: 0.8em;
}
@media (max-width: 1199px){
 .container {
    max-width: 100%;
}   
}
@media (max-width: 770px){
 .sidebar {
    display: none;
}   
}
li ul{
    animation: load 1s forwards;
    display: block;
}
.sh{
    animation: load 1s forwards;
    //display: block;
}
.img{
    padding-right: 13px;
    width: 100%;
    height: 160px;
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
}
.column{
    margin-bottom: 27px;
    cursor: pointer;
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
@keyframes load{
    0%{ transform: translateX(25px) scale(1.1) /*rotate(-30deg);*/}
    100%{ opacity: 1; transform: translateX(0px) scale(1) /*rotate(0);*/}
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
/////////////Menu Style////////////////////////
.TopMenu{
    background-color: #f4f4f4;
    border-bottom: 1px solid #d3cece;
    box-shadow: 0 7px 8px #e3e3e3;
    margin-bottom: 25px;
}
.TopMenu ul{
    list-style-type: none;
    white-space: nowrap;
}
.TopMenu li,.Menu_Toogle li{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    font-family: sans-serif;
    text-transform: capitalize;
    border: none;
    box-shadow: none;
}
.TopMenu li a{
    color: black;
}
.TopMenu ul li a:hover{
    background-color: #f6f6f6;
    color: #008c46;
}
///////////////////////Menu Toogle style/////////////////
.Menu_Toogle{
    background-color: #f4f4f4;
    border-bottom: 1px solid #d3cece;
    box-shadow: 0 7px 8px #e3e3e3;
    position: absolute;
    top: 64px;
}
.Menu_Toogle ul{
    list-style-type: none;
    white-space: nowrap;
}
.Menu_Toogle ul li{
    display: block;
    //padding-right: 20px;
    cursor: pointer;
    font-family: sans-serif;
    text-align: center;
    background-color: transparent;
    padding: 10px 0px;
}
.Menu_Toogle ul li:hover{
    background-color: #f6f6f6;
}
.show_Menu_Toogle,.Menu_Toogle,.Menu_Toogle ul{
    width: 100%;
}
.show_Menu_Toogle{
    background-color: #f4f4f4;
    position: absolute;
    top: 8px;
    width: 100%;
    //height: 300px;
    left: 6px;
    z-index: 1;
    display: block;
}
.noshow_Menu_Toogle{
    display: none;
}
.btn_tooggle svg{
    width: 28px;
    color: #008c46;
}
.btn_tooggle{
    display: none;
    position: absolute;
    left: 6px;
    top: 26px;
    cursor: pointer;
    z-index: 9999;
}
@media (min-width: 821px){
.Menu_Toogle{
    display: none;
}
}
@media (max-width: 821px){
.btn_tooggle,.show_Menu_Toogle{
    display: block;
}
.btn_tooggle{
    position: fixed;
    background: #fff;
}
}
.btn_tooggle svg{
    background: none;
}
.Menu_Toogle li{
    display: block;
    cursor: pointer;
    font-family: sans-serif;
    text-align: center;
    background-color: transparent;
    padding: 10px 0px;
        list-style-type: none;
    /* padding: 12px 7px 7px 13px; */
    /* margin-bottom: 4px; */
    border-top: 1px solid #d2d3d8;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    box-shadow: 0 5px 9px #e3e3e3;
    text-transform: capitalize;
}
.collections .btn_tooggle,.products .btn_tooggle{
    display: none;
}
.new_side_bar label{
    display: block;
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
.new_side_bar .show{
    float: right;
    //width: 24px;
    cursor: pointer;
    margin: 0;
}
.new_side_bar .categorie_1, .new_side_bar .categorie_2, .new_side_bar .categorie_3, .new_side_bar .categorie_4, .new_side_bar .categorie_5, .new_side_bar .categorie_6, .new_side_bar .categorie_7{
    border-top: none;
}
.new_side_bar .categorie_2{
    padding-left: 30px;
}
.new_side_bar .categorie_3{
    padding-left: 60px;
}
.new_side_bar .categorie_4{
    padding-left: 90px;
}
.new_side_bar .categorie_5{
    padding-left: 120px;
}
.new_side_bar .categorie_6{
    padding-left: 150px;
}
.new_side_bar .categorie_7{
    padding-left: 180px;
}
.new_side_bar .categorie_2,.new_side_bar .categorie_3,.new_side_bar .categorie_4,.new_side_bar .categorie_5,.new_side_bar .categorie_6,.new_side_bar .categorie_7{
    margin: 0;
}
.flex{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    //border-top: 1px solid #d2d3d8;
    border-top: 1px solid #e7eaf8;
}
.new_side_bar .lbl_btn{
    padding: 12px 7px 7px 13px;
    margin-bottom: 4px;
    border-top: 1px solid #d2d3d8;
    border-bottom: 1px solid #eeeeee;
    white-space: nowrap;
    box-shadow: 0 4px 0px #f2f1f1;
    display: contents;
}
.new_side_bar .show svg{
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
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

/////////////////////////////////////////////////////////////////////////////
@media (max-width: 821px){
.TopMenu,.division,.sidebar{
    display: none;
}
.div_right{
    width: 100%;
}
}
</style>
