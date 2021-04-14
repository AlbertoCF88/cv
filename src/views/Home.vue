<template>
<div>
  <v-row no-gutters class="d-flex justify-center mt-5">
    <v-container class="contenedor">
      <v-row>
        <v-col order-md="2" order="1" class="d-flex justify-center">
          <v-container class="padding">
            <comTarjeta></comTarjeta> 
          </v-container>
        </v-col>
        <v-col order-md="1" order="2" class="d-flex justify-center"> 
          <v-container class="padding">
            <comBarraV></comBarraV> 
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  
    
      <comTitulo></comTitulo> 

  </v-row>
</div>
</template>

<style scoped>
.padding{
  padding: 0px;
}
  .contenedor{
    max-width: 900px;
  }
</style>



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

