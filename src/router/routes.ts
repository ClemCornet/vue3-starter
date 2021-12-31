import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'About' },
    component: About
  },
  {
    path: '/:path(.*)',
    component: NotFound
  }
]

export default routes
