import Router from 'vue-router'
import Influencer from './components/influencers/influencer'
import Influencers from './components/influencers'
import InfluencerForm from './components/influencers/edit'
import Accounts from './components/Accounts'
import Account from './components/Account'
const routes = [
    { path: '/influencers/:id', component: Influencer },
    { path: '/influencers', component: Influencers },
    { path: '/accounts/:id', component: Account },
    { path: '/accounts', component: Accounts },
    { path: '/influencers/:id/edit', component: InfluencerForm }
]

export default new Router({routes})
