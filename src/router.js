import Router from 'vue-router'
import Influencers from './components/influencers'
import InfluencerForm from './components/influencers/edit'

const routes = [
    {path: '/influencers', component:Influencers},
    {path: '/influencers/edit', component:InfluencerForm}
]

export default new Router({routes})