import store from '../vuex'

const isAuthRoute = route => route.path.indexOf('/login') !== -1
const currentUser = () => store.getters.currentUser

export default (to, from, next) => {
  if (!isAuthRoute(to) && !currentUser()) { // só acessa todos os menu qnd tiver logado
    next('/login')
  } else if (isAuthRoute(to) && currentUser()) { // dps que tiver logado, não pode acessar tela de login
    next('/home')
  } else {
    next()
  }
}
