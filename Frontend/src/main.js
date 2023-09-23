import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/sotrage';
/*CSS 삽입*/
import './assets/css/sytle.css'
import './registerServiceWorker'

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// 필요할 경우 쿠키 만료기간 세팅
Vue.use(require('vue-cookies'))
Vue.$cookies.config("7d");