<template>
<v-container>

  <v-row no-gutters class="d-flex justify-center mt-10">
    <v-col>
      <v-row class="encuadre">
        <v-col order-md="2" order="1"  cols="12" md="6">
          <comTarjeta class="d-flex justify-center"></comTarjeta> 
        </v-col>
        <v-col order-md="1" order="2" cols="12" md="6"> 
          <comBarraV class="d-flex justify-center"></comBarraV>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="pa-0">
      <comCv></comCv>
    </v-col>
  </v-row>

</v-container>
</template>

<style scoped>
@media (min-width:959px) {
  .encuadre{
    margin-left: 2%;
  }
}
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
import comCv from '@/components/ComCv.vue';

export default {
  name: 'Home',
  components: {
   comBarraV,comTarjeta, comCv
  },
    data:() => ({
        
        }),  
}

</script>

