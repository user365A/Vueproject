import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/Home_Page.vue'
import ShoppingCart from '../components/Shopping_Cart.vue'
import DetailProduct from '../components/Detailproduct_Page.vue'
import Login from '../components/Login_Page.vue'
import Add from '../components/Admin_AddProduct.vue'
import EditProduct from '../components/Admin_EditProduct.vue';
import ListProduct from '../components/List_Product.vue'
import createVariants from '../components/Create_Variants.vue'
 import { auth } from '@/firebase'
// tạo mảng chứa những đường link
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home,
        meta: {
            requiresAuth: true
          }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About_Page'),
        meta: {
            requiresAuth: true
          }
    },
    {
        path: '/shopping-cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
        meta: {
            requiresAuth: true
          }
    },
    {
        path: '/detail-product/:id',
        name: 'DetailProduct',
        component: DetailProduct,
        meta: {
            requiresAuth: true
          }
    },
    {
      path: '/add',
      name: 'add',
      component: Add ,
      meta: {
          requiresAuth: true
        }
  },
    {
        path: '/login',
        name: 'Login',
        component: Login ,
    },
    {
      path: "/products/:productId",
      name: "editproduct",
      component: EditProduct ,
    },
    {
      path: "/createVariants/:productId",
      name: "createVariants",
      component: createVariants ,
    },
    {
      path: "/products",
      name: "listproduct",
      component: ListProduct,
    },
]
// tạo đối tượng router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
      next('/')
      return;
    }
  
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login')
      return;
    }
  
    next();
  })
export default router