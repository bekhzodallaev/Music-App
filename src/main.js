import './assets/base.css'
import './assets/main.css'
import 'nprogress/nprogress.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue'
import router from './router'
import VeeValidationPlugin from './includes/validation'
import { auth } from './includes/firebase'
import Icon from './directives/icon.js'
import i18n from './includes/i18n'
import GlobalComponents from './includes/_globals.js'
import progressBar from './includes/progress-bar'

registerSW({ immediate: true })
progressBar(router)
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(GlobalComponents)
    app.use(createPinia())
    app.use(router)
    app.use(VeeValidationPlugin)
    app.directive('icon', Icon)
    app.use(i18n)
    app.mount('#app')
  }
})
