<template>
    <div class="container">
        <div class="row box-product">  
            <Product_Page
                v-for="product in filterProducts"
                :key="product.id"
                :product="product"
                class="col-4"
            />
        </div>
        <button class="btn btn-warning m-2" @click="first()">Đầu</button>
        <button class="btn btn-success m-2" @click="back()">-</button>
        <button class="btn btn-success m-2" @click="next()">+</button>
        <button class="btn btn-warning m-2" @click="last()">Cuối</button>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
import Product_Page from './Product_Page.vue'
// import {productsColRef} from "../firebase/index.js";
// import { getDocs } from "firebase/firestore";
export default {
    name: 'HomePage',
    
    components: {
    Product_Page
    },
    data() {
        return {
            min:0,
            max:6,
            tmp:0
            }
    },
    methods: {
        logger() {
            console.log('logger', typeof this.searchValue)
        },
        first(){
           this.min=0;
           this.max=6;
        },
        last(){
            if(this.products.length % 6 ==0)
            {
               this.min=this.products.length-6;
            }
            else{
            this.min=parseInt(this.products.length/6)*6;
            }
            this.max=this.products.length;
        },
        back(){
            this.tmp=this.min;
            if(this.tmp-6>=0){
                this.min-=6;
                this.max-=6;
            }
            if(this.tmp-6<0){
                this.max=6;
                this.min=this.max-6;
            }
            console.log(this.min);
           console.log(this.max);
        },
        next(){
           this.tmp=this.max;
           if(this.tmp+6<this.products.length){
               this.min+=6;
               this.max+=6;
           }
           if(this.tmp+6>=this.products.length){
               this.max=this.products.length;
               this.min=this.products.length-6;
           }
           console.log(this.min);
           console.log(this.max);
        },
    },
    // created() {
    // this.loadData();
    // },
    computed: {
        
        ...mapGetters(['products', 'searchValue']),
        // ...mapActions(['getProductsAPI']),
        // ...mapState(['productsAPI']),
        filterProducts() {    
            // this.getProductsAPI;
            
            if (!this.searchValue) {
                return this.products.slice(this.min,this.max);
            } else {
                const filterName = this.products.filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(this.searchValue.toLowerCase())
                )
                if (filterName.length == 0) {
                    return this.products.filter(
                        item => item.price == this.searchValue
                    )
                } else {
                    return filterName
                }
            }
        },
    },
}
</script>

<style>
.box-product {
    margin: 30px 0px;
}
</style>
