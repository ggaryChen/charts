<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
button{
  height: 30px;
  width: 80px;
  font-size: 18px;
  color: #fff;
  background: #777;
  border: none;
  -webkit-appearance: none;
  outline:none;
}
</style>
