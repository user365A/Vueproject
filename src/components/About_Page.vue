<template>
  <div class="container p-3">
    <h1 style="color:red;">Informations</h1>
    
      <h3>Họ tên: {{info[0]}}</h3>
      <h3>MSSV: {{info[1]}}</h3>
      <h3>Lớp: {{info[2]}}</h3>
      <h3>Môn học: {{info[3]}}</h3>
   
  </div>
  
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "About_Page",
  computed: {
    ...mapGetters(["info"]),
    //=> this.status
  },
  methods: {
    ...mapMutations(["setStatus"]),
    //lấy hàm setStatus từ mutation của store  về component thành this
    //1. Cach lam thay đổi giá trị ko thông qua action
    // handleChange() {
    //     this.setStatus('Thay đổi dữ liệu của store')
    // },
    //2. Cach lam thay đổi giá trị  thông qua action
    ...mapActions(["updateStatus"]),
  },
};
</script>

<style></style>
