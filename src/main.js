import { createApp } from 'vue'
import { Quasar, LoadingBar } from 'quasar'
import iconSet from 'quasar/icon-set/fontawesome-v5'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'
import 'quasar/src/css/index.sass'
import './css/app.scss'
import App from './App.vue'
import router from './router'
createApp(App).use(Quasar, {
  iconSet,
  plugins: { LoadingBar },
  config: {
    dark: true,
    brand: {
      primary: '#405258', secondary: '#63797f', accent: '#8fa6ad',
      dark: '#2c3130', positive: '#7ca982', negative: '#a62639',
      info: '#33658a', warning: '#f3a712'
    }
  }
}).use(router).mount('#q-app')
