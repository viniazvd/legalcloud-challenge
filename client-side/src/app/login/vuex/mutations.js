import * as types from './mutations-types'

export default {
  [types.setEmail] (state, user) {
    state.user = user
    localStorage.setItem('email', user)
  },
  [types.setToken] (state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  [types.removeStorage] (state) {
    state.user = null
    state.token = null
    localStorage.removeItem('email')
    localStorage.removeItem('token')
  }
}
