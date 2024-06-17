import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NetedView from '../views/NetedComponent.vue'
import EmpFormview from '../views/EmpForm.vue'


const routes = [
  {
    path: '/empForm', 
    component: EmpFormview
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/emp',
    name: 'emp',
    component: () => import(/* webpackChunkName: "emp", webparkPrefetch: true */"../views/Empview.vue")
  },
  {
    path: '/nested',
    component: NetedView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
