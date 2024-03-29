import Vue from 'vue'
import VueRouter from 'vue-router'
import login_page from '../views/Login_page.vue'
import main_page  from '../views/common/mainView.vue'
import gps from '../views/common/mobile_force.vue'
import food_main from '../views/common/food_main.vue'
import view_mouth from '../views/common/food/view_mouth.vue'
import application_status from '../views/common/force/Application_Status.vue'
import application_record from '../views/common/force/Application_record.vue'
import ramdom_code from '../views/common/food/ramdom_code.vue'
import Absentees_unit from '../views/common/food/executive/Absentees_unit.vue'
import setting_p from '../views/setting_page.vue'

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
    path: '/user/food_main',
    component: food_main
  },
  {
    path: '/user/view_mouth',
    component: view_mouth
  },
  {
    path: '/user/app_status',
    component: application_status
  },
  {
    path: '/user/app_record',
    component: application_record
  },
  {
    path: '/user/rm_code',
    component: ramdom_code
  },{
    path: '/user/Absentees_unit',
    component: Absentees_unit
  },
  {
    path: '/user/setting',
    component: setting_p
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
