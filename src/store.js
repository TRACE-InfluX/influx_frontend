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
    // let t0 = performance.now()
    let res = await API.get('/v0/influencers', { page })
    let worker = new Worker()
    let cache = localStorage.getItem('sort_cache') || null
    let influencers = res.data
    let data = await worker.process(influencers, cache)
    
    localStorage.setItem('sort_cache', data.cache)
    commit('set_influencers', data.influencers)

    // let t1 = performance.now()
    // console.log("Finished loading after " + (t1 - t0) / 1000 + " seconds.")
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