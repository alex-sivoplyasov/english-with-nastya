import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
console.log('test')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/students',
    name: 'Students',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../views/Students.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach( (to, from, next) => {
  console.log('to', to.path)
  console.log('from', from.path)
  // console.log('next', next)
  next()
})

export default router
