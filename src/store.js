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
  async register({dispatch}, {email, password}) {
    const data = { email, password }
    let res = await API.post('/v0/accounts', data )
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
  sort_influencers({state, commit}, type) {
    let cmp =
      type == 'default' ? (a,b) => {
        return b.relevance * 6 + b.engagement * 2 + b.reach + b.activity
             -(a.relevance * 6 + a.engagement * 2 + a.reach + a.activity)
      }:
      type == 'relevance' ? (a,b) => {
        return b.relevance - a.relevance
      }:
      type == 'engagement' ? (a,b) => {
        return b.engagement - a.engagement
      }:
      type == 'activity' ? (a,b) => {
        return b.activity - a.activity
      }:
      type == 'profit' ? (a,b) => {
        return b.profit - a.profit
      }:
      type == 'profit/cost' ? (a,b) => {
        return b.profit/b.cost - a.profit/a.cost
      }:
      type == 'followers' ? (a,b) => {
        return b.followers - a.followers
      }:
      type == 'posts' ? (a,b) => {
        return b.posts - a.posts
      }:
      type == 'following' ? (a,b) => {
        return b.following - a.following
      }:() => 0

      // deepclone
      let new_influencers = JSON.parse(JSON.stringify(state.influencers))

      new_influencers.sort(cmp)
      commit('set_influencers', new_influencers)

  }

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
