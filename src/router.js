import Router from 'vue-router'
import Influencer from './components/influencers/influencer'
import Influencers from './components/influencers'
import InfluencerForm from './components/influencers/edit'
import Accounts from './components/accounts/accountindex'
import Account from './components/accounts/account'
import AccountForm from './components/accounts/accountedit'

const routes = [
    { path: '/influencers/:id', component: Influencer },
    { path: '/influencers', component: Influencers },
    { path: '/accounts/accountindex', component: Accounts },
    { path: '/accounts/account/:id', component: Account },
    { path: '/accounts/:id/accountedit', component: AccountForm},
    { path: '/influencers/:id/edit', component: InfluencerForm }
]

export default new Router({routes})
