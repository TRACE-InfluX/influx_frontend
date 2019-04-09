import Router from 'vue-router'
import Influencers from './components/Influencers'
import Accounts from './components/Accounts'
const routes = [
    { path: '/influencers', component: Influencers },
    { path: '/accounts', component: Accounts}
]

export default new Router({routes})