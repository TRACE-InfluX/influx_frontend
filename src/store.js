import Vue from 'vue'
import Vuex, { mapActions, mapState } from 'vuex'
import API from '@/api.js'
import Worker from '!workerize-loader?inline!./worker.js'

Vue.use(Vuex)

let state =  {
  influencers: [],
  popular: [{},{},{},{}]
}

let actions = {
  async load_influencers({commit}, page = 0 ) {
    let res = await API.get('/v0/influencers', { page })
    
    const worker = new Worker()
    let influencers = await worker.process(res.data)
    
    commit('set_influencers', influencers)
  },
  async load_popular({commit}) {
    let res = await API.get('/v0/influencers/popular')
    commit('set_popular', res.data)
  }
}

let mutations = {
  set_influencers(state, influencers) {
    state.influencers = influencers
  },
  set_popular(state, popular) {
    state.popular = popular
  }
}

export default new Vuex.Store({ state, mutations, actions })

let ACTIONS = mapActions(Object.keys(actions))
let STATE   = mapState(Object.keys(state))
export { ACTIONS, STATE }