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

        <md-input v-model="user.password" data-vv-name="password" maxlength="45" type="password" v-validate name="password" data-vv-rules="required|min:5"></md-input>
        <span class="md-error">{{errors.first('password')}}</span>
      </md-input-container>

      <div>
        <label class="md-radio">
          <radio-button name="options" label="MYSQL" :value="dbSelected" @change="changeValue" checked/>
        </label>

        <label class="md-radio">
          <radio-button name="options" label="MONGODB" :value="dbSelected" @change="changeValue"/>
        </label>

        <p class="result"><i>Connected with database:</i> <strong>{{dbSelected}}</strong></p>
      </div>

      <button class="btn btn-success btnconfigSize" :disabled="!isValid" @click="doLogin">SignIn</button>
      <button class="btn btn-danger btnconfigSize" :disabled="!isValid" @click="signUp">SignUp</button>
      <button class="btn btn-primary btnconfigSize" @click="checkUsers">CheckUsers</button>
    </form>

    <input type="checkbox" class="material_checkbox" v-model="showListUsers">
    <label for="6"><strong>check users list</strong></label>
    <pre v-if="showListUsers" class="configPre">{{ listUsers }}</pre>
    
    <sweet-modal icon="success" ref="modalSucessAddNewUser">
      Usuário criado com sucesso no banco {{ this.dbSelected }}! <i class="glyphicon glyphicon-ok"></i>
    </sweet-modal>
    <sweet-modal icon="warning" ref="modalFailAddNewUser">
      Falha ao criar um novo usuário. Tente novamente. <i class="glyphicon glyphicon-repeat"></i>
    </sweet-modal>

    <sweet-modal icon="success" ref="modalSucessLogin" @close="redirectPageSignIn">
      Logado com sucesso! <i class="glyphicon glyphicon-ok"></i>
    </sweet-modal>
    <sweet-modal icon="warning" ref="modalFailLogin">
      Usuário inválido ou inexistente. Tente novamente. <i class="glyphicon glyphicon-repeat"></i>
    </sweet-modal>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import RadioButton from '../Radio-button'

export default {

  name: 'formLogin',

  components: { SweetModal, SweetModalTab, RadioButton },

  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      dbSelected: 'MYSQL',
      listUsers: '',
      showListUsers: false
    }
  },

  methods: {
    ...mapActions(['attemptLogin', 'attemptCreateUser', 'attemptCheckUsers']),

    doLogin () {
      const user = this.user
      const db = this.dbSelected
      this.attemptLogin({...user, db})
        .then(() => {
          this.user.email = ''
          this.user.password = ''
          this.$refs.modalSucessLogin.open()
        })
        .catch(() => {
          console.log('Dados inválidos. Falha ao autenticar!')
          this.$refs.modalFailLogin.open()
        })
    },

    signUp () {
      const user = this.user
      const db = this.dbSelected
      this.attemptCreateUser({...user, db})
        .then(() => {
          this.user.email = ''
          this.user.password = ''
          // console.log(Array.isArray(this.errors.items))
          this.$refs.modalSucessAddNewUser.open()
        })
        .catch(() => {
          console.log('Falha ao criar um novo usuário!')
          this.$refs.modalFailAddNewUser.open()
        })
    },

    checkUsers () {
      const db = this.dbSelected
      this.attemptCheckUsers({ db })
        .then((users) => {
          this.listUsers = users.map(x => x.email).join('\n')
        })
        .catch(() => {
          console.log('Falha ao exibir lista de usuários!')
        })
    },

    redirectPageSignIn () {
      this.$router.push('/home')
    },

    changeValue: function(newValue) {
      this.dbSelected = newValue
    }
  },

  computed: {
    isValid () {
      // console.log()
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password) && !this.errors.has('password') && !this.errors.has('email')
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

.btnconfigSize {
  width: 28%;
}

label.radio {
  margin-right: 20px;
}

.result {
  border-top: 1px solid #DDD;
  padding-top: 15px;
}

.configPre {
  padding: 10px;
  width: 100%;
  height: 100%;
}

@import url(https://fonts.googleapis.com/css?family=RobotoDraft:500);
.material_block {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  margin: 50px;
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
}

.material_checkbox {
  position: relative;
  margin: 25px;
}

.material_checkbox:focus {
  outline-color: #fff;
}

.material_checkbox:before {
  border: 2px solid #ccc;
  content: "";
  cursor: pointer;
  display: block;
  height: 15px;
  position: absolute;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  width: 15px;
  z-index: 1;
}

.material_checkbox:checked:before {
  border-top-style: none;
  border-right-style: none;
  height: 10px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.material_checkbox:after {
  background: #fff;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 0;
  width: 15px;
  z-index: 0;
}
</style>
