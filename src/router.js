import Router from 'vue-router'
import Influencers from './components/Influencers'
import Accounts from './components/Accounts'
import Account from './components/Account'
const routes = [
    { path: '/influencers', component: Influencers },
    { path: '/accounts/:id', component: Account },
    { path: '/accounts', component: Accounts }
]

export default new Router({routes})