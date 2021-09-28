<template>
  <div class="TopHeader">
      <div class="container">
            <div class="suportEmail">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                <span class="suport">info@moroccofresh.com</span>
            </div>
            <div class="account">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
            </div>
            <div class="languges">
                <select class="custom-select">
                        <option selected>English</option>
                        <option value="1">Spain</option>
                        <option value="2">Arabe</option>
                        <option value="3">Frensh</option>
                </select>
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
.TopHeader{
    padding-top: 5px;
    background-color: #f5f5f5;
    height: 48px;
}
.suportEmail svg{
    width: 14px;
}
.account svg{
    width: 18px;
    margin-left: 6px;
}
.suportEmail,.languges,.account{
    display: inline-block;
    padding-top: 5px;
}
.suportEmail{
    float: left;
}
.languges{
    float: right;
}
.account{
    float: right;
    border: 1px solid #d3d1d1;
    border-radius: 5px;
    padding: 4px;
    padding-right: 8px;
    padding-bottom: 8px;
    margin-left: 8px;
}

.suport,.languges select,svg{
    font-size: .8em;
    color: rgba(53,53,53,.63922);
}
.languges select{
    padding: 4px;
    border: none;
    background-color: #f5f5f5;
}
@media (max-width: 1199px){
 .container {
    max-width: 100%;
}   
}


</style>
