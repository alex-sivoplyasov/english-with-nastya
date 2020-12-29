import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Test from "./components/Test";

// import VCalendar from 'v-calendar'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'




createApp(App)
  .use(store)
  .use(router)
  .component('Test', Test)
  .mount('#app')
