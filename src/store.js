import Vue from 'vue'
import Vuex, { mapActions, mapState } from 'vuex'
import API from '@/api.js'
import Worker from './metrics.worker.js'

Vue.use(Vuex)

let state =  {
  influencers: [],
  popular: [{},{},{},{}]
}

let actions = {
  async load_influencers({commit}, page = 0 ) {
    let res = await API.get('/v0/influencers', { page })

    return new Promise((resolve, reject) => {
      try {
        const worker = new Worker()

        worker.onmessage = msg => {
          commit('set_influencers', msg.data)
          resolve(msg)
          worker.terminate()
        }

        worker.onerror = error => {
          reject(error)
          worker.terminate()
        }

        worker.postMessage(res.data)
      }
      catch(error) {
        reject(error)
      }
    })

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