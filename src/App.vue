<template>
  <div>
        <Header :cart="cart" />
        <!-- <HomePage /> -->
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header_Page.vue';
import Footer from './components/Footer_Page.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
        return {
            cart: 1,
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
