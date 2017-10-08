import { routes as dashboard } from './dashboard'
import { routes as auth } from './auth'
import { routes as home } from './home'
import { routes as about } from './about'

export default [
  ...auth,
  ...dashboard,
  ...home,
  ...about
]
