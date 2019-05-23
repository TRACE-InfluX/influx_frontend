import Vue from 'vue'
import Vuex, { mapActions, mapState } from 'vuex'
import API from '@/api.js'

Vue.use(Vuex)

let state =  {
  influencers: [],
  user: {},
  // popular: [{preview:[]},{preview:[]},{preview:[]},{preview:[]}]
}

let actions = {
  async load_influencers({commit}, query, sort_by = { relevance: -6, engagement: -2,  reach: -1, activity: -1 }) {
    try {
      const params = { query, sort_by }
      let res = await API.get('/v0/influencers', { params })
      let influencers = res.data
      commit('set_influencers', influencers)
    }
    catch (error) {
      if (error.message.includes('404')) {
        commit('set_influencers', [])
      }
    }
  },
  async login({dispatch}, {email, password}) {
    const data = { email, password }
    let res = await API.post('/v0/auth', data )
    localStorage.setItem('bearertoken',res.data.token)
    API.defaults.headers.common['Authorization'] = `Bearer ${localStorage.bearertoken}`
    await dispatch('get_user')
  },
  async logout({commit}) {
    localStorage.removeItem('bearertoken')
    commit('set_user', {})
  },
  async get_user({commit}) {
    let res = await API.get('/v0/accounts/me')
    commit('set_user', res.data)
  },
  // async load_popular({commit}) {
  //   let res = await API.get('/v0/influencers/popular')
  //   commit('set_popular', res.data)
  // }
}

let mutations = {
  set_influencers(state, influencers) {
    state.influencers = influencers
  },
  set_user(state, user) {
    state.user = user
  },
  // set_popular(state, popular) {
  //   state.popular = popular
  // }
}

export default new Vuex.Store({ state, mutations, actions })

let ACTIONS = mapActions(Object.keys(actions))
let STATE   = mapState(Object.keys(state))
export { ACTIONS, STATE }