<template>
  <div class="componente1">
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "../components/Main.vue"

export default {
  name: 'CompoPrincipal',
  components: {
    Main
  }
}
</script>