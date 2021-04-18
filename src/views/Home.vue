<template>
<v-container>
<v-row no-gutters class="d-flex justify-center mt-5">
  <v-col>
    <v-row class="encuadre">
      <v-col order-md="2" order="1"  cols="12" md="6" >
        <comTarjeta class="d-flex justify-center"></comTarjeta> 
      </v-col>
      <v-col order-md="1" order="2" cols="12" md="6"   > 
        <comBarraV class="d-flex justify-center"></comBarraV>
      </v-col>
    </v-row>
  </v-col>

  <v-col cols="12">
  
    <comTitulo></comTitulo>
 
  </v-col>
  
  
    

</v-row>
</v-container>
</template>

<style scoped>
@media (min-width:959px) {
  .encuadre{
     margin-left: 2.3%;
  }
}
/* @media (min-width:1911px) {
  .encuadre{
    margin-left: 2%;
  }
} */
@media (min-width:1912px) {
  .encuadre{
    margin-left: 20%;
    margin-right: 18.2%;
  }
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

