<template>
<div>
<v-container>
  <v-row  no-gutters class="d-flex justify-center">
    <v-col>
      <comTarjeta></comTarjeta> 
    </v-col>
  </v-row>

  <v-container >
    <comTitulo></comTitulo> 
  </v-container>

</v-container>
</div>
</template>

<script>
import comTarjeta from '@/components/ComTarjeta.vue';
import comTitulo from '@/components/ComTitulo.vue';

export default {
  name: 'Home',
  components: {
   comTarjeta, comTitulo
  },
    data:() => ({
        
        }),  
}

</script>

