<template>
  <div id="app">
    <div id="nav" v-show="false">
      <router-link to="/">Pesquisar Veiculo</router-link> |
      <router-link to="/CompoSecundario">Infracoes Cometidas</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
const axios = require("axios");
export default{
  mounted(){
    axios.get("http://localhost:8080/multas.json").then(infracoesPlaca => this.$store.state.placas = infracoesPlaca.data)
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>