<template>
<div>
<v-container mt-4>
<v-row  class="d-flex justify-center">
  <v-col  cols="12"
      
        md="6"
       > 
    <comBarraV @loading="loading =$event"></comBarraV>
  </v-col>
  <v-col   cols="12"
     
        md="6"
         >
    <comTarjeta @loading="loading =$event"  class="d-flex justify-start" ></comTarjeta> 
  </v-col>
  <v-col  cols="12"
   
      >
    <comTitulo  ></comTitulo> 
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
    data:() => ({
          loading: true,
        }),
        
       
}

</script>

