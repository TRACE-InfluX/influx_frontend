import Router from 'vue-router'
import Influencers from './components/influencers'
import InfluencerForm from './components/influencers/edit'
import Accounts from './components/Accounts'
import Account from './components/Account'
const routes = [
    { path: '/influencers', component: Influencers },
    { path: '/accounts/:id', component: Account },
    { path: '/accounts', component: Accounts },
    { path: '/influencers/:id/edit', component: InfluencerForm }
]

export default new Router({routes})
