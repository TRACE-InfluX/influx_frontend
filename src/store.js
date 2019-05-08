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
  popular: [{},{},{},{}],
  weight_average: {}
}

let actions = {
  async load_influencers({commit}, page = 0 ) {
    let res = await API.get('/v0/influencers', { page })
    commit('set_influencers', res.data)
    commit('generate_weight_average')
    commit('normalize_weights')
  },
  async load_popular({commit}) {
    let res = await API.get('/v0/influencers/popular')
    commit('set_popular', res.data)
  }
}

let mutations = {
  set_influencers(state, influencers) {
    state.influencers = decode_weights(influencers)
  },
  set_popular(state, popular) {
    state.popular = decode_weights(popular)
  },
  generate_weight_average(state) {

    let accumulator = (pool, next) => {
      for(let key of Object.keys(next.weights)) {
        pool[key] = next.weights[key] + (pool[key] || 0)
      }
      return pool
    }

    let avg = state.influencers.reduce(accumulator,{})

    for (let key of Object.keys(avg)) {
      avg[key] = (avg[key] - 1) / state.influencers.length
    }
    state.weight_average = avg
  },
  normalize_weights(state) {

    let new_influencers = JSON.parse(JSON.stringify(state.influencers))

    for(let influencer of new_influencers) {

      let new_weights = {}

      for(let key of Object.keys(influencer.weights)) {
        let avg = state.weight_average[key]
        if (avg) {
          new_weights[key] = (influencer.weights[key] - avg) / (avg + 1)
          if (key[0] == '#') {
            new_weights[key] *= 5
          }
        }
      }
      influencer.weights = new_weights
    }
    state.influencers = new_influencers
  }
}

export default new Vuex.Store({ state, mutations, actions })

let ACTIONS = mapActions(Object.keys(actions))
let STATE   = mapState(Object.keys(state))
export { ACTIONS, STATE }