import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false
//setting router and route paths to use for the app instance
Vue.use(VueRouter)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
});

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal-quick', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 500,
});

//render new app instance
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
