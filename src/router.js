import $ from '@/components'
import Router from 'vue-router'
//frontend Routes for our pages
const routes = [
    { path: '/', component: $['home-page']},
    { path: '/register', component: $['register-form']},
    { path: '/login', component: $['login-form'] },
    { path: '/influencers', component: $['influencer-index'] },
    { path: '/influencers/:id', component: $['influencer-view'] },
    { path: '/accounts', component: $['account-index'] },
    { path: '/accounts/:id', component: $['account-view'] },
    { path: '/accounts/:id/edit', component: $['account-edit']},
    { path: '/profile', component: $['profile']}

]

export default new Router({routes})
