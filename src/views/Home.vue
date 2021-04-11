<template>
<div>
<v-container fluid>
<v-row  class="d-flex justify-center">
  <v-col  >
    <comBarraV></comBarraV>
  </v-col>
  <v-col >
    <comTarjeta ></comTarjeta> 
  </v-col>
  <v-col >
    <comTitulo ></comTitulo> 
  </v-col>
</v-row>
</v-container>


</div>
</template>


<script>
import comTarjeta from '@/components/ComTarjeta.vue';
import comBarraV from '@/components/ComBarraVertical.vue';
import comTitulo from '@/components/ComTitulo.vue';
export default {
  name: 'Home',
  components: {
   comTarjeta, comBarraV, comTitulo
  },
//   data: () => ({
//     loading: false,
// Texto:'hola,'
//   }),

//   watch: {
//     loading (val) {
//       if (!val) return

//       setTimeout(() => (this.loading = false), 3000)
//     },
//   },
}

</script>

