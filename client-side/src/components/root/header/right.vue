<template>
	<div>
		<ul class="nav navbar-nav navbar-right">
			<router-link to="/login" tag="li" v-if="!isAuthenticated">	
				<a style="color: #fff;"><strong>Login</strong></a>
			</router-link>
			<li class="dropdown" :class="{ open: isOpenUser }" v-if="isAuthenticated">
				<a href="javascript:;" @click="toggleUserMenu" class="dropdown-toggle" style="color: #fff;"><i class="glyphicon glyphicon-user"></i> <strong>{{ currentUser }}</strong><span class="caret"></span></a>
				<ul class="dropdown-menu">
					<li><a href="javascript:;" @click="logout"><i class="glyphicon glyphicon-off"></i> <strong>Logout</strong></a></li>
				</ul>
			</li>
		</ul>

    <sweet-modal icon="info" ref="modalLogou" @close="redirectPage">
      Até breve! <i class="glyphicon glyphicon-flag"></i>
    </sweet-modal>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {

  name: 'right-header',

  components: { SweetModal, SweetModalTab },

  data () {
    return {
      isOpenUser: false
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'currentUser'])
  },

  methods: {
    ...mapActions(['attemptLogout', 'hasToken']),

    logout () {
      this.attemptLogout()
      this.isOpenUser = false
      this.$refs.modalLogou.open()
    },

    toggleUserMenu () {
      this.isOpenUser = !this.isOpenUser
    },

    redirectPage () {
      this.$router.push('/login')
    }
  },

  created () {
    const token = localStorage.getItem('token')
    if (token) this.hasToken(token)
  }
}
</script>