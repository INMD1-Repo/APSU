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
