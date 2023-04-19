<template>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../assets/images/logo.jpg" width="50" alt="">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link class="nav-link text-warning" to="/">Home</router-link></li>
          <li><router-link class="nav-link text-white" to="/about">About</router-link></li>
          <li><router-link class="nav-link text-white" to="/login">Login/Register</router-link></li>
          <li><a href="./lienhe" class="nav-link px-2 text-white">Contact</a></li>
          <li><router-link class="nav-link text-white" to="/add">AddProducts</router-link></li>
          <button class="btn btn-primary" @click="$store.dispatch('logout')">Logout</button>
          
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" @input="onChangeMethod($event)" class="form-control form-control-dark" placeholder="Search..." >
        </form>

        <div class="text-end">
          <div class="cart ">
                        <router-link to="/shopping-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
                            <span> {{ cart.length }}</span>
                        </router-link>
                    </div>
        </div>
      </div>
    </div>
</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'Header_Page',
      setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
    computed: {
        ...mapGetters(['searchValue', 'cart']),
    },
    methods: {
        ...mapActions(['changesFilterValue']),
        onChangeMethod(event) {
            console.log(event.target.value)
            this.changesFilterValue(event.target.value)
        },
    },
}
</script>

<style scope>
.header {
    background-color: #767373;
}

.item-header {
    padding: 10px 0px;
}

.cart svg {
    color: white;
    margin-top: 10px;
}

.cart span {
    color: white;
    margin-bottom: 10px;
}
</style>
