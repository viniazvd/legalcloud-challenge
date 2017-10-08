<template>

  <div>

    <form novalidate @submit.stop.prevent="submit">
      <md-input-container :class="{'md-input-invalid': errors.has('email')}">
        <md-icon>email</md-icon>
        <label for="email">Email</label>

        <md-input v-model="user.email" data-vv-name="email" type="email" maxlength="45" v-validate name="email" data-vv-rules="required|email"></md-input>
        <span class="md-error">{{errors.first('email')}}</span>
      </md-input-container>

      <md-input-container :class="{'md-input-invalid': errors.has('password')}">
        <md-icon>lock</md-icon>
        <label for="password">Password</label>

        <md-input v-model="user.senha" data-vv-name="password" maxlength="45" type="password" v-validate name="password" data-vv-rules="required|min:5"></md-input>
        <span class="md-error">{{errors.first('password')}}</span>
      </md-input-container>

      <md-button class="md-raised md-primary btnFullSize" :disabled="!isValid" @click="doLogin">Sign Up</md-button>
    </form>

    <sweet-modal icon="success" ref="modalSucess" @close="redirectPage">
      Logado com sucesso! <i class="glyphicon glyphicon-ok"></i>
    </sweet-modal>
    <sweet-modal icon="warning" ref="modalFail">
      Usuário inválido ou inexistente. Tente novamente. <i class="glyphicon glyphicon-repeat"></i>
    </sweet-modal>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {

  name: 'formLogin',

  components: { SweetModal, SweetModalTab },

  data () {
    return {
      user: {
        email: '',
        senha: ''
      }
    }
  },

  methods: {
    ...mapActions(['attemptLogin']),

    doLogin () {
      const user = this.user
      this.attemptLogin({...user})
        .then(() => {
          this.user.email = ''
          this.user.senha = ''
          this.$refs.modalSucess.open()
        })
        .catch(() => {
          console.log('Dados inválidos. Falha ao autenticar!')
          this.$refs.modalFail.open()
        })
    },

    redirectPage () {
      this.$router.push('/home')
    }
  },

  computed: {
    isValid () {
      // console.log()
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.senha) && !this.errors.has('password') && !this.errors.has('email')
    }
  }
}
</script>

<style scoped>
.configPosition {
  padding-top: 50px;
  text-align: center;
}

h1, h3 { font-weight: 300; }

h1 { color: #4a89dc; }

form {
	width: 450px;
	margin: 2em auto;
	padding: 2em 2em 2em 2em;
	border: 1px solid #ebebeb;
	box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;
}

.btnFullSize {
  width: 100%;
}
</style>
