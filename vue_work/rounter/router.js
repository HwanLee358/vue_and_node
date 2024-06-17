const {createRouter, createWebHashHistory} = VueRouter

import HomeView from './view/HomeView.js'
import AboutView from './view/AboutView.js'
import UserView from './view/UserView.js'
import UserProfile from './view/UserProfile.js'
import Userposts from './view/Userposts.js'

const routes = [
  { path: '/', component: HomeView },
  { path: '/index', redirect : "/"},
  { path: '/about', component: AboutView },
  { path: '/user/:id', 
    name: 'user', 
    component: UserView,
    props: true,
    children: [
        {path: 'userProfile', component: UserProfile},
        {path: 'userPost', component: Userposts}
    ] },
//   { path: '/userInfo', component: UserView },
    { path: '/userInfo', redirect: to => {return {name: 'user', params: {id: to.query.id}} } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router;