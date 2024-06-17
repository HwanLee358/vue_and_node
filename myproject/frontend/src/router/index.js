import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vuetify from '../views/VuetifyView.vue'

const routes = [
  {
    path: '/vuetify',
    name: 'vuetify',
    component: Vuetify
  },
  {
    path: '/composition',
    name: 'composition',
    component: () => import(/* webpackChunkName: "about" */ '../components/CompostionDataBinding.vue')
  },
  {
    path: '/compositionMouse',
    name: 'compositionMouse',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionMouse.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //눌렀을때 로딩함.
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue')
  },
  {
    path: '/customerForm',
    name: 'customerForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerForm.vue')
  },
  {
    path: '/boardList',
    name: 'boardList',
    component: () => import(/* webpackChunkName: "about" */ '../views/boardList.vue')
  },
  {
    path: '/boardForm',
    name: 'boardForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/boardForm.vue')
  },
  {
    path: '/loginForm',
    name: 'loginForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/loginForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
