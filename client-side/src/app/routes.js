import { routes as dashboard } from './dashboard'
import { routes as login } from './login'
import { routes as home } from './home'
import { routes as about } from './about'

export default [
  ...login,
  ...dashboard,
  ...home,
  ...about
]
