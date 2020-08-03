import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Aboutme from '../views/Aboutme.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav
  },
  {
    path: '/aboutme',
    name: 'Aboutme',
    component: Aboutme
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
