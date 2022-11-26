import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

/*CSS 삽입*/
import './assets/css/sytle.css'

import './registerServiceWorker'


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
