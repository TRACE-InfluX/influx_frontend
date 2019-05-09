import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store'

Vue.config.productionTip = false
//setting router and route paths to use for the app instance
Vue.use(VueRouter)

//render new app instance
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
