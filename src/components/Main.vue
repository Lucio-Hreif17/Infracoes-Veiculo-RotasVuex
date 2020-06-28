<template>
  <div id="tela1">
    <div class="telaprin">
      <input type="text" placeholder="Informe a placa do veiculo" v-model="placa" />
      <button class="btplaca" @click="infrapage">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      placa: ""
    };
  },
  methods: {
    infrapage: function() {
        this.$store.state.multas = this.$store.state.placas.filter(plac => plac.PLACA == this.placa)
        this.$router.push("/componente2")
    }
  }
};
</script>

<style>
.telaprin {
  -webkit-font-smoothing: antialiased;
  height: 100px;
  width: 300px;
  margin-left: 550px;
  margin-top: 200px;
}
.btplaca {
  margin-left: 2px;
  background-color: green;
}
.label {
  margin-right: 5px;
}
</style>