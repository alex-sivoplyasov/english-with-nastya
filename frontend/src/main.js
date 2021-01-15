import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuelidate from 'vuelidate'
import {VuelidatePlugin} from '@vuelidate/core'

// Vue.use(Vuelidate)

// import VCalendar from 'v-calendar'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'


createApp(App)
  .use(store)
  .use(router)
  .use(VuelidatePlugin)
  // .use(VCalendar, {})
  .mount('#app')


// const app = createApp(App)
// app.use(store)
// app.use(router)
// app.use(VuelidatePlugin)
// app.mount('#app')