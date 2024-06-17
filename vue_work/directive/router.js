const {createRouter, createWebHashHistory} = VueRouter

import dataBainding from './dataBainding.js';
import fors from './for.js';
import ifs from './if.js';
import events from './event.js';
import posts from './posts.js';
import todos from './todo.js';

const routes = [
    {path: '/for', component: fors},
    {path: '/event', component: events},
    {path: '/post', component: posts},
    {path: '/dataBa', component: dataBainding},
    {path: '/todo', component: todos}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  })
  
  export default router;