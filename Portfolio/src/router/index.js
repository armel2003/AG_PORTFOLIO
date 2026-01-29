import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
