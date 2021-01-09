import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Главная'
    },
    component: Home
  },
  {
    path: '/students',
    name: 'Students',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Список студентов'
    },
    component: () => import( '../views/Students.vue')
  },
  {
    path: '/statistic',
    name: 'Statistic',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Статистика'
    },
    component: () => import( '../views/Statistic.vue')
  },
  {
    path: '/students/:id',
    name: 'Student',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Просмотр студента'
    },
    component: () => import( '../components/Student.vue')
  },
  {
    path: '/create-student',
    name: 'CreateStudent',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Добавить студента'
    },
    component: () => import( '../components/StudentsCreate.vue')
  },
  {
    path: '/edit-student/:id',
    name: 'EditStudent',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Изменить студента'
    },
    component: () => import( '../components/StudentsEdit.vue')
  },
  {
    path: '/lessons',
    name: 'Lessons',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Список уроков'
    },
    component: () => import( '../views/Lessons.vue')
  },
  {
    path: '/create-lesson',
    name: 'CreateLesson',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Создать урок'
    },
    component: () => import( '../components/LessonsCreate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach( (to, from, next) => {
  // this.$store.dispatch('setTitle', to.meta.title)
  // console.log('store router', store)
  store.dispatch('setTitle', to.meta.title)
  next()
})

export default router