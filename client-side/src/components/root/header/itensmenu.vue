<template>
	<ul class="nav navbar-nav" v-if="isAuthenticated">
		<router-link :to="{ name: 'home' }" tag="li" exact><a class="white"><img src="http://www.legalcloud.com.br/wp-content/uploads/2016/04/logomaior-01.png" alt="Legalcloud"></a></router-link>
		<router-link :to="{ name: 'calculator' }" tag="li" exact><a class="white">Calculadora de Prazos</a></router-link>
		<router-link :to="{ name: 'about' }" tag="li" exact><a class="white">About</a></router-link>		
	</ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'itens-header',

  data () {
    return {
      allowAcess: false
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped>
.white {
  color: #fff !important;
}
.active {
  font-weight: bold !important;
}
</style>