<template>
<div>

    <v-container class="col-Zoom black">
        <v-img
        :src="$route.params.fotografia" spect-ratio="2" 
        class="imagen" contain>
            <template v-slot:placeholder>
                <comcargando circulo="color2"></comcargando>
            </template>
            <v-row>
                <v-col>
                    <v-btn :to="{name:'arte'}"
                    outlined dark color="color2" small>
                        Salir
                    </v-btn>
                </v-col>
            </v-row>
           
            <div v-for="(item,index) in cuadros" :key="index"> 
                <div v-if="$route.params.page==item.id">
                    <v-row v-for="img in item.galeria" :key="img.id">
                        <v-col v-for="(lienzo,indice) in img.imagenes" :key="indice"
                        class="pl-7" cols="1" sm="12">
                            <v-btn :to="{name:'arte/:page', 
                            params:{page:item.id ,fotografia:lienzo}}"
                            text x-small dark fab color="color2">
                                {{indice+1}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </div> 
            </div>          
        </v-img>
    </v-container> 

</div>
</template>

<style scoped>
.imagen{
    position: fixed;
    top: 2.5%;
    left: 2.5%;
    width: 95%;
    height: 95%;
}
.col-Zoom{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    background: black;
    max-width: none;
}   
</style>

<script>
import cuadros from '/public/cuadros.json'
import comcargando from "@/components/ComCargando.vue"
export default {
  name: 'comDiapositiva',
   components:{
       comcargando, 
    },
    data:()=>({
   	cuadros: cuadros
    }),//data
 }//export default
</script>