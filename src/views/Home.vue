<template>
<div>
  <v-row no-gutters class="d-flex justify-center mt-5">
    <div id="altura">
      <v-row>
    <v-col order-md="2" order="1">
      <comTarjeta></comTarjeta> 
    </v-col>
     <v-col order-md="1" order="2"> 
      <comBarraV></comBarraV> 
    </v-col>

      </v-row>
    </div>
  </v-row>

  <v-container >
    <comTitulo></comTitulo> 
  </v-container>


</div>
</template>

<script>
import comBarraV from '@/components/ComBarraVertical.vue';
import comTarjeta from '@/components/ComTarjeta.vue';
import comTitulo from '@/components/ComTitulo.vue';

export default {
  name: 'Home',
  components: {
   comBarraV,comTarjeta, comTitulo
  },
    data:() => ({
        
        }),  
}

</script>

