import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login_page from '../views/Login_page.vue'
import main_page  from '../views/common/mainView.vue'
import gps from '../views/common/mobile_force.vue'
import a_gps from '../views/common/battalion_gps.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: login_page
  },
  {
    path: '/user/main',
    name: 'main',
    component: main_page
  },
  {
    path: '/user/mobile_force',
    name: 'gps',
    component: gps
  },
  {
    path: '/user/a_gps',
    component: a_gps
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
