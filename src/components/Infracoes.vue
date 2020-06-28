<template>
  <div id="tela">
    <div v-for="(infracao, index) in filtro" :key="index">
         <p>DADOS DO VEÍCULO</p>
      <label>Placa:</label><br />
      <input id="input" type="text" :value="infracao.PLACA" /><br />
      <label>Data e hora:</label><br />
      <input id="input" type="text" :value="infracao.DADOS_INFRACAO.DATAHORA" /><br />
      <label>Localidade:</label><br />
      <input id="input" type="text" :value="infracao.LOCALIDADE" /><br />
      <label>Tipo:</label><br />
      <input id="input" type="text" :value="infracao.DADOS_INFRACAO.TIPO" /><br />
      <label>Valor:</label><br />
      <input id="input" type="text" :value="infracao.DADOS_INFRACAO.VALOR" /><br />
      <label v-if="infracao.DADOS_INFRACAO.TIPO == 'VELOCIDADE'" >Velocidade máxima: 
        {{infracao.DADOS_INFRACAO.VEL_MAXIMA}}</label><br />
    </div>
    <button @click="voltar">Nova consulta</button><br />
  </div>
</template>

<script>
export default {
  computed: {
    filtro: function() {
      return this.$store.state.multas;
    }
  },
  methods: {
    voltar: function() {
      this.$router.push({ name: "CompoPrincipal" });
    }
  }
};
</script>

<style>
.tela {
  -webkit-font-smoothing: antialiased;
  height: 200px;
  width: 450px;
  border: 1px black solid;
  border-radius: 10px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  margin-left: 940px;
}
span {
  margin-left: 10px;
}
.button {
  position: absolute;
  margin-left: 178px;
  margin-top: 20px;
}
p {
  text-align: center;
  color: white;
  
}
</style>