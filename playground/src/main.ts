import { createApp } from 'vue'
import vueUI from 'vue-component'

import router from './router'

import App from './App.vue'

import './assets/sass/index.scss'

const app = createApp(App)
app.use(vueUI).use(router)

app.mount('#app')
