import * as types from './mutations-types'
import { autenticacao, addnewuser, checkusers } from '../services'
// import http from '../../../http'

export const attemptLogin = (context, payload) => {
  const { email, password, db } = payload

  return autenticacao(email, password, db)
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

export const attemptCreateUser = (context, payload) => {
  const { email, password, db } = payload

  return addnewuser(email, password, db)
    .then(res => res.data)
}

export const attemptCheckUsers = (context, payload) => {
  const { db } = payload

  return checkusers(db)
    .then(res => res.data)
    .then(data => data.user.results)
}
