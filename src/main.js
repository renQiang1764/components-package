import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import RenComp from 'ren-ui-09-25'
import 'ren-ui-09-25/ren-ui.css'
Vue.use(RenComp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
