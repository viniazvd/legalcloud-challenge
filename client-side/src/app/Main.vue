<template>
  <div id="app">
		<RootHeader></RootHeader>
		<div class="container">
			<router-view></router-view>
		</div>
    <RootFooter></RootFooter>
  </div>
</template>

<script>
import RootHeader from '../components/root/header/main.vue'
import RootFooter from '../components/root/footer/main.vue'

export default {
  name: 'App',
  components: { RootHeader, RootFooter }
}
</script>

<style src="../assets/sass/app.scss" lang="sass">

</style>
