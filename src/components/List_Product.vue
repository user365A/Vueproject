<template>
  <div class="">
    <h2 style="color: red;">Products</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li
              v-for="item in products"
              :key="item.id"
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ item.name }}
              <span class="badge badge-primary badge-pill">
                <router-link
                  :to="{ path: `/products/${item.id}` }"
                  class="btn btn-primary m-3"
                  >Edit</router-link
                >
                <router-link
                  :to="{ path: `/createVariants/${item.id}` }"
                  class="btn btn-primary "
                  >Create Variants</router-link>
                <a href="#" class="btn btn-danger m-3" @click="deleteProduct(item.id)"
                  >Delete</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {productsColRef} from "../firebase/index.js";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "List_Product",
  components: {},
  data() {
    return {
      products: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchProduct() {
      let productSnapShot = await getDocs(productsColRef);
      let products = [];
      productSnapShot.forEach((pro) => {
        let productData = pro.data();
        productData.id = pro.id;
        products.push(productData);
      });
      console.log(products);
      this.products = products;
    },
    async deleteProduct(productId) {
      let productRef = doc(productsColRef, productId);
      await deleteDoc(productRef);
      alert("Product deleted successully!");
      this.$router.go();
    },
  },

  created() {
    this.fetchProduct();
  },
};
</script>