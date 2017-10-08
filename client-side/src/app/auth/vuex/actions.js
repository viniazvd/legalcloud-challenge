import * as types from './mutations-types'
import { autenticacao } from '../services'
// import http from '../../../http'

export const attemptLogin = (context, payload) => {
  return autenticacao(payload.email, payload.senha)
    .then(res => res.data)
    .then(data => {
      context.commit(types.setToken, data.token)
      context.commit(types.setEmail, data.email)
    })
}

export const attemptLogout = (context) => {
  context.commit(types.setEmail, '')
  context.commit(types.removeStorage, '')
  // return http.get('logout')
}

export const hasToken = (context, payload) => {
  context.commit(types.setToken, payload)
}
