import Vue from 'vue'
import App from './app/Main.vue'
import router from './router'
import store from './vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
