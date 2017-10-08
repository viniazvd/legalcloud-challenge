import http from '../../http'

export const autenticacao = (email, senha) => {
  return http.post('http://localhost:3000/api/authenticate', { email, senha })
}

