<template>
  <div id="app">
    <form-test>
      
    </form-test>
    <grammar />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/FormTest.vue'
import Grammar from './components/Grammar.vue'

export default {
  name: 'app',
  methods: {
    
  },
  components: {
    HelloWorld,
    FormTest,
    Grammar
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
