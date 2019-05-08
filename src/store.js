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

function average_weight(influencers) {

  let accumulator = (pool, next) => {
    for(let key of Object.keys(next.weights)) {
      pool[key] = next.weights[key] + (pool[key] || 0)
    }
    return pool
  }

  let avg = influencers.reduce(accumulator,{})

  for (let key of Object.keys(avg)) {
    avg[key] = (avg[key] - 1) / influencers.length
  }

  return avg
}

function normalize(average_weights, influencers) {

  for(let influencer of influencers) {

    let new_weights = {}

    for(let key of Object.keys(influencer.weights)) {
      let avg = average_weights[key]
      if (avg) {
        new_weights[key] = (influencer.weights[key] - avg) / (avg + 1)
        if (key[0] == '#') {
          new_weights[key] *= 2
        }
      }
    }
    influencer.weights = new_weights
  }

  return influencers

}

function calculate_relevance(influencers) {
  let account_weights = influencers.find(i => i.username == '@serotoninplus').weights

  for(let influencer of influencers) {
    let union = {...account_weights, ...influencer.weights}
    let square_sum = 0
    for(let key of Object.keys(union)) {
      let distance = (account_weights[key] || 0) - (influencer.weights[key] || 0)
      square_sum += distance * distance
    }
    influencer.relevance = Math.sqrt(square_sum)
  }

  return influencers
}

let state =  {
  influencers: [],
  popular: [{},{},{},{}]
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

let mutations = {
  set_influencers(state, influencers) {
    let decoded = decode_weights(influencers)
    let average_weights = average_weight(decoded)
    let normalized = normalize(average_weights, decoded)
    let processed_influencers = calculate_relevance(normalized)
    processed_influencers.sort((a,b) => b.relevance - a.relevance)
    state.influencers = processed_influencers
  },
  set_popular(state, popular) {
    state.popular = decode_weights(popular)
  }
}

export default new Vuex.Store({ state, mutations, actions })

let ACTIONS = mapActions(Object.keys(actions))
let STATE   = mapState(Object.keys(state))
export { ACTIONS, STATE }