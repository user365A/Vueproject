<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Add Product</h2>
          <form @submit.prevent="createProduct">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Name"
                v-model="name"
              />
            </div>
            <div class="form-group">
            Chọn file để upload:
            <input
                type="text"
                class="form-control mb-2"
                placeholder="Image"
                v-model="image"
              />
              
            </div>
            <div class="form-group">
                <textarea  class="form-control mb-2"
                placeholder="description"
                v-model="description"
                cols="30" rows="10">
                     
                </textarea>
            </div>
             <div class="form-group">
               
              <input
                type="number"
                class="form-control mb-2"
                placeholder="Price"
                v-model="price"
              />
            </div>
            <button class="btn btn-primary">Create Product</button>
          </form>
          <hr>
          
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import {productsColRef} from "../firebase/index.js";
import { addDoc } from "firebase/firestore";
// import {ref} from "vue";
export default {
  data() {
    return {
            name: null,
            image: null,
            description: null,
            price: 0,
            variants: []

    };
  },
  methods: {
    async createProduct() {
      console.log("Creating Product");
      const addedDoc = await addDoc(productsColRef, this.$data);
      alert("Product created successfully!");
      console.log(addedDoc);
      this.$router.push("/"); 
    },
    createVariant(){
        this.variants.push(this.variant)
    }
  },
  computed:{
    variant(){
      return {
        'color':this.variant.color,
        'image':this.variant.image,
        'quantity':this.variant.quantity,
      }
    }
  }
  // setup() {
  //   const file=ref(null);
  //   const errfile=ref(null);
  //   function onChangeFile(event){
  //   const selected=event.target.files[0];
  //   const typeFile=["image/png","image/jpg"];
  //   if(selected && typeFile.includes(selected.type))
  //   {
  //     file.value=selected;
  //     this.image=file.value;
  //     console.log(file.value);
  //     errfile.value="";
  //   }
  //   else{
  //     file.value=null;
  //     this.image=file.value;
  //     errfile.value="Please select a file type png or jpg.";
  //   }
  // }
  // return{
  //   onChangeFile,
  //   file,
  //   errfile
  // }
  // },
  
};
</script>

<style>
</style>