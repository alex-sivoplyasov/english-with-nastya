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
    path: '/students',
    name: 'Students',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../views/Students.vue')
  },
  {
    path: '/create-student',
    name: 'CreateStudent',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../components/StudentsCreate.vue')
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
