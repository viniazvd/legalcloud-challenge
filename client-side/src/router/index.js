import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import beforeEach from './beforeEach'

Vue.use(VueRouter)

const router = new VueRouter({ routes, linkActiveClass: 'active', mode: 'history' })

router.beforeEach(beforeEach)

export default router
