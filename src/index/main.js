import Vue from 'vue'
import App from './App.vue'
import Cube from 'cube-ui'
import 'amfe-flexible'

import router from './router/router'

import '../assets/css/base.css'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
