import Vue from 'vue'
import VueRouter from 'vue-router'
import login_page from '../views/Login_page.vue'
import main_page  from '../views/common/mainView.vue'
import gps from '../views/common/mobile_force.vue'
import a_gps from '../views/common/battalion_gps.vue'
import food_main from '../views/common/food_main.vue'
import view_moth from '../views/common/food/view_mouth.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/user/food_main',
    component: food_main
  },
  {
    path: '/user/view_mouth',
    component: view_mouth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
