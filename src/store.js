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

    for(let key in influencer.weights) {
      let avg = average_weights[key]
      if (avg) {
        new_weights[key] = (influencer.weights[key] - avg) / (avg + 1)
        if (key[0] == '#') {
          new_weights[key] *= 5
        }
      }
    }
    influencer.weights = new_weights
  }

  return influencers

}

function get_relevance(weights_a, weights_b) {
  let relevance = 0
  for(let key in weights_a) {
    if (weights_b[key]) {
      relevance += weights_a[key] + weights_b[key]
    }
  }
  return relevance
}

function calculate_relevance(influencers) {
  let account_weights = influencers.find(i => i.username == '@serotoninplus').weights

  for(let influencer of influencers) {
    influencer.relevance = get_relevance(account_weights, influencer.weights)
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
    influencers = decode_weights(influencers)
    let average_weights = average_weight(influencers)
    influencers = normalize(average_weights, influencers)
    influencers = calculate_relevance(influencers)
    influencers = influencers.map(i => {
      i.engagement = 100 * (influencers.length - influencers.indexOf(i)) / influencers.length
      return i
    })
    influencers.sort((a,b) => b.relevance - a.relevance)
    influencers = influencers.map(i => {
      i.relevance = 100 * (influencers.length - influencers.indexOf(i)) / influencers.length
      return i
    })
    influencers.sort((a,b) => b.activity - a.activity)
    influencers = influencers.map(i => {
      i.activity = 100 * (influencers.length - influencers.indexOf(i)) / influencers.length
      return i
    })
    influencers.sort((a,b) =>
      b.activity + b.engagement + b.relevance 
    - a.activity - a.engagement - a.relevance)

    state.influencers = influencers
  },
  set_popular(state, popular) {
    state.popular = decode_weights(popular)
  }
}

export default new Vuex.Store({ state, mutations, actions })

let ACTIONS = mapActions(Object.keys(actions))
let STATE   = mapState(Object.keys(state))
export { ACTIONS, STATE }