import Router from 'vue-router'
import Home from './components/home'
import Influencer from './components/influencers/influencer'
import Influencers from './components/influencers/influencerindex'
import InfluencerForm from './components/influencers/influenceredit'
import Accounts from './components/accounts/accountindex'
import Account from './components/accounts/account'
import AccountForm from './components/accounts/accountedit'
import Register from "./components/Register"
import Login from "./components/Login";

//frontend Routes for our pages
const routes = [
    { path: '/', component: Home},
    { path: '/register', component: Register},
    { path: '/login', component: Login },
    { path: '/influencers/influencerindex', component: Influencers },
    { path: '/influencers/:id', component: Influencer },
    { path: '/influencers/:id/influenceredit', component: InfluencerForm },
    { path: '/accounts/accountindex', component: Accounts },
    { path: '/accounts/account/:id', component: Account },
    { path: '/accounts/:id/accountedit', component: AccountForm}
]

export default new Router({routes})
