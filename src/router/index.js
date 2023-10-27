import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/add-product',
    name: 'add-products',
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/AddProduct.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
