import http from '../../http'

export const autenticacao = (email, password, db) => {
  if (db === 'MYSQL') {
    console.log('conectando com mysql')
    return http.post('http://localhost:4000/api-mysql/authenticate', { email, password })
  }

  console.log('conectando com mongodb')
  return http.post('http://localhost:3000/api-mongodb/authenticate', { email, password })
}

export const addnewuser = (email, password, db) => {
  if (db === 'MYSQL') {
    return http.post('http://localhost:4000/api-mysql/addnewuser', { email, password })
  }

  return http.post('http://localhost:3000/api-mongodb/addnewuser', { email, password })
}

export const checkusers = (db) => {
  if (db === 'MYSQL') {
    return http.get('http://localhost:4000/api-mysql/getusers')
  }

  return http.get('http://localhost:3000/api-mongodb/getusers')
}
