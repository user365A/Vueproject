<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h3>Variants</h3>
          <form @submit.prevent="updateProduct">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Color"
                v-model="variant.color"
              />
            </div>
            <div class="form-group">
            <input
                type="text"
                class="form-control mb-2"
                placeholder="Image"
                v-model="variant.image"
              />
              
            </div>
            <div class="form-group">
                <input
                type="text"
                class="form-control mb-2"
                placeholder="Quantity"
                v-model="variant.quantity"
              />
            </div>
             
            <button class="btn btn-primary">Create Variant</button>
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
        variant:{
            "color":null,
            "image":null,
            "quantity":0,
        },
      productId: null,
      docRef: null,
      productInfo: {
        name: null,
        image: null,
        description: null,
        price:null,
        variants:[],
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
      this.productInfo.variants=Data.variants;
      this.productInfo.variants.push(this.variant);
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