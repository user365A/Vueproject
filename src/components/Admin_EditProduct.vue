<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit Product</h2>
          <form @submit.prevent="updateProduct">
                        <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Name"
                v-model="productInfo.name"
              />
            </div>
            <div class="form-group">
            Chọn file để upload:
            <input
                type="text"
                class="form-control mb-2"
                placeholder="Image"
                v-model="productInfo.image"
              />
            </div>
            <div class="form-group">
                <textarea  class="form-control mb-2"
                placeholder="description"
                v-model="productInfo.description"
                cols="30" rows="10">
                     
                </textarea>
            </div>
             <div class="form-group">
              <input
                type="number"
                class="form-control mb-2"
                placeholder="Price"
                v-model="productInfo.price"
              />
            </div>
            <button class="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {productsColRef} from "../firebase/index.js";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedProduct: {},
      productId: null,
      docRef: null,
      productInfo: {
        name: null,
        image: null,
        description: null,
        price:null,
        
      },
    };
  },

  methods: {
    async getProduct() {
      let productRef = doc(productsColRef, this.productId);
      this.docRef = productRef;
      let pro = await getDoc(this.docRef);
      let Data = pro.data();
      this.productInfo.name = Data.name;
      this.productInfo.image = Data.image;
      this.productInfo.description = Data.description;
      this.productInfo.price = Data.price;
      
    },
    async updateProduct() {
      
      await setDoc(this.docRef, this.productInfo);
      alert(
        `The product with ID of ${this.productId} has been updated successfully!`
      );
      this.$router.push("/products");
    },
  },

  created() {
    let productId = this.$route.params.productId;
    this.productId = productId;
    this.getProduct();
  },
};
</script>

<style>
</style>