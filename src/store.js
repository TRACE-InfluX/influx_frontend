import Vue from 'vue'
import Vuex, { mapActions, mapState } from 'vuex'
import API from '@/api.js'

Vue.use(Vuex)

function decode_weights(influencers) {
  for(let influencer of influencers) {
    influencer.weights = JSON.parse(atob(influencer.weights.slice(2,-1)))
  }
  return influencers
}

let state =  {
  influencers: [],
  popular: [{},{},{},{}]
}

let mutations = {
  set_influencers(state, influencers) {
    state.influencers = decode_weights(influencers)
  },
  set_popular(state, popular) {
    state.popular = decode_weights(popular)
  }
}

let actions = {
  async load_influencers({commit}, page = 0 ) {
    let res = await API.get('/v0/influencers', { page })
    commit('set_influencers', res.data)
  },
  async load_popular({commit}) {
    let res = await API.get('/v0/influencers/popular')
    commit('set_popular', res.data)
  }
}

export default new Vuex.Store({ state, mutations, actions })

let ACTIONS = mapActions(Object.keys(actions))
let STATE   = mapState(Object.keys(state))
export { ACTIONS, STATE }