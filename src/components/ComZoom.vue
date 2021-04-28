<template>
  <v-row justify="center" >
    <v-dialog 
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card color="black">
        <v-toolbar
          dark
          color="color2"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cerrar</v-toolbar-title>
   
               </v-toolbar>
 <div  v-for="(item,index) in cuadros" :key="index"> 
    <div v-if="$route.params.page==item.id"> 

 <v-carousel width="100%" height="100%" 
  v-for="img in item.galeria" :key="img.id"
    class="justify-center"
      :show-arrows="false"
      delimiter-icon="mdi-checkbox-blank-circle-outline"
    
      
   >
        <v-carousel-item v-for="lienzo in img.imagenes" :key="lienzo.id"
   contain 
       reverse-transition="fade-transition"
      transition="fade-transition"
       :src="lienzo" >  
         
        </v-carousel-item>
      </v-carousel>

</div>
</div>
   
  
       
      </v-card>
    </v-dialog>
  </v-row>
</template>



<style scoped>
.v-image__image, .v-image__placeholder {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
}
</style>

<script>
import comcargando from "@/components/ComCargando.vue"

export default {
  name: 'comCuadro',
   components:{
       comcargando, 
    },
 props:{
    cuadros: {
      type: Array,
    }
    },
     data: ()=> ({
  
        dialog: false,
      
      
    }),//data

 }//export default
 </script>