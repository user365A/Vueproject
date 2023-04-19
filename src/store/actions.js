// import axios from 'axios';
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

const actions = {
  // getProductsAPI({ commit }){
  //       axios.get('http://192.168.44.105:3000/products')
  //       .then(response=>{
  //         commit('setProductsAPI',response.data)
  //       })
  //   },
    updateStatus({ commit }, data) {
        console.log('vào', data)
        commit('setStatus', 'Vuex action')
    },
    updateCart({ commit, getters }, data) {
        const { cart } = getters
        switch (data.action) {
            case 'ADD_TO_CART':
                var newData = {
                    ...data.value,
                    quantily: 1,
                }
                var isAdd = cart.find(item =>
                    item.id == data.value.id ? (item.quantily += 1) : ''
                )
                isAdd ? '' : cart.push(newData)
                commit('setCart', cart)
                break
            case 'PLUS_PRODUCT':
                console.log('vào PLUS_PRODUCT')
                cart.find(item =>
                    item.id == data.value ? (item.quantily += 1) : ''
                )
                commit('setCart', cart)
                break
            case 'MINUS_PRODUCT':
                console.log('vào MINUS_PRODUCT')
                cart.find(item => {
                    if (item.id == data.value) {
                        if (item.quantily > 1) {
                            item.quantily -= 1
                            commit('setCart', cart)
                        } else {
                            const newArr = cart.filter(
                                item => item.id !== data.value
                            )
                            commit('setCart', newArr)
                        }
                    }
                })
                break
            case 'DELETE_PRODUCT':
                cart.find(item => {
                    if (item.id == data.value) {
                        const newArr = cart.filter(
                            item => item.id !== data.value
                        )
                        commit('setCart', newArr)
                    }
                })
                break

            default:
                console.log('Action not allowed')
                break
        }
    },
    changesFilterValue({ commit }, data) {
        console.log('vào', data)
        commit('searchValue', data)
    },
    async login ({ commit }, details) {
        const { email, password } = details
  
        try {
          await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
          switch(error.code) {
            case 'auth/user-not-found':
              alert("User not found")
              break
            case 'auth/wrong-password':
              alert("Wrong password")
              break
            default:
              alert("Something went wrong")
          }
  
          return
        }
  
        commit('SET_USER', auth.currentUser)
  
        router.push('/')
      },
  
      async register ({ commit}, details) {
         const { email, password } = details
  
        try {
          await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
          switch(error.code) {
            case 'auth/email-already-in-use':
              alert("Email already in use")
              break
            case 'auth/invalid-email':
              alert("Invalid email")
              break
            case 'auth/operation-not-allowed':
              alert("Operation not allowed")
              break
            case 'auth/weak-password':
              alert("Weak password")
              break
            default:
              alert("Something went wrong")
          }
  
          return
        }
  
        commit('SET_USER', auth.currentUser)
  
        router.push('/')
      },
  
      async logout ({ commit }) {
        await signOut(auth)
  
        commit('CLEAR_USER')
  
        router.push('/login')
      },
  
      fetchUser ({ commit }) {
        auth.onAuthStateChanged(async user => {
          if (user === null) {
            commit('CLEAR_USER')
          } else {
            commit('SET_USER', user)
  
            if (router.isReady() && router.currentRoute.value.path === '/login') {
              router.push('/')
            }
          }
        })
      }

}

export default actions
