import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/routes.js'
import App from './App.vue'
import './style/index.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.mount('#app')
