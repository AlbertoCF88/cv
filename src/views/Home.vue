<template>
<v-container>
  <v-row no-gutters class="d-flex justify-center mt-5">
<v-col>
    <v-row id="conte" class="encuadre">
        <v-col order-md="2" order="1"  cols="12" md="6" >
         <v-container  >
            <comTarjeta></comTarjeta> 
        </v-container>
        </v-col>
        <v-col order-md="1" order="2" cols="12" md="6"   > 
          <v-container >
            <comBarraV class="d-flex justify-center"></comBarraV>
      </v-container>
        </v-col>
    </v-row>
</v-col>
    <v-col cols="12" order="3">
     <v-container>
      <comTitulo></comTitulo>
</v-container>
    </v-col>
  
  
    

  </v-row>
</v-container>
</template>

<style scoped>
@media (min-width:1912px) {
  .encuadre{
    margin-left: 20%;
    margin-right: 20%;
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

