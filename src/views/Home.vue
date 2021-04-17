<template>
<div>
  <v-row no-gutters class="d-flex justify-center mt-5">

    
        <v-col order-md="2" order="1"  cols="12" md="6" >
         <v-container  class=" d-flex justify-center  justify-md-start">
            <comTarjeta></comTarjeta> 
        </v-container>
        </v-col>
        <v-col order-md="1" order="2" cols="12" md="6"   > 
          <v-container class=" d-flex justify-center  justify-md-end">
            <comBarraV></comBarraV> 
      </v-container>
        </v-col>

    <v-col cols="12" order="3">
      <comTitulo></comTitulo> 

    </v-col>
  
  
    

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

