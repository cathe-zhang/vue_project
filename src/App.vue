<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <!-- <Cart /> -->
  </div>
</template>

<script>

import cellerchanModal from './../node_modules/cellerchan-modal/bundle.js';
import Cart from './components/Cart'

console.log(cellerchanModal)

export default {
  name: 'app',
  components: {
    // Cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
