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
    path: '/statistic',
    name: 'Statistic',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../views/Statistic.vue')
  },
  {
    path: '/students/:id',
    name: 'Student',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../components/Student.vue')
  },
  {
    path: '/create-student',
    name: 'CreateStudent',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../components/StudentsCreate.vue')
  },
  // {
  //   path: '/create-student',
  //   name: 'CreateStudent',
  //   meta: {
  //     layout: 'main',
  //     auth: true
  //   },
  //   component: () => import( '../components/StudentsCreate.vue')
  // },
  {
    path: '/lessons',
    name: 'Lessons',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../views/Lessons.vue')
  },
  {
    path: '/create-lesson',
    name: 'CreateLesson',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import( '../components/LessonsCreate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach( (to, from, next) => {
  next()
})

export default router
