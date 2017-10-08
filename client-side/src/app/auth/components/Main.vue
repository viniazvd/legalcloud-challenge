<template>
  <div class="container configPosition">
    <hgroup>
      <h1><img src="http://www.legalcloud.com.br/wp-content/uploads/2016/04/logomaior-01.png" alt="Legalcloud"></h1>
    </hgroup>
    <Login />
  </div>
</template>

<script>
import Login from './Forms/Login.vue'

export default {
  name: 'auth',

  components: { Login }
}
</script>

<style scoped>
.configPosition {
  padding-top: 50px;
  text-align: center;
}

h1, h3 { font-weight: 300; }

h1 { color: #4a89dc; }
</style>
