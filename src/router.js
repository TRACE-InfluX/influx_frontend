import Router from 'vue-router'
import Influencers from './components/Influencers'

const routes = [
    {path: '/influencers', component:Influencers}
]

export default new Router({routes})