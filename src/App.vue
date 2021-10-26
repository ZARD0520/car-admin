<template>
  <div id="nav">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  components:{
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
