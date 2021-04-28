<template>
<div >

    <v-container class="col-Zoom black">
        <v-img
        :src="$route.params.fotografia" spect-ratio="2" 
        class="imagen" contain>
            <template v-slot:placeholder>
                <comcargando></comcargando>
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
import comcargando from "@/components/ComCargando.vue"
export default {
  name: 'comDiapositiva',
   components:{
       comcargando, 
    },

    data:()=>({
     cuadros:[
          {
            id:'bosquesinfin',
            titulo:'Bosque Sin Fin',
            foto: require('@/assets/cuadros/bosque/1.png'),
            galeria: [
                        {
                        imagenes:[
                                require('@/assets/cuadros/bosque/1.png'),
                                ],
                        }                
                    ],
        },
        {
            id:'dialluvioso',
            titulo:'Dia Lluvioso',
            foto: require('@/assets/cuadros/diaLluvioso/3.png'),
            galeria: [
                        {
                       imagenes:[
                                require('@/assets/cuadros/diaLluvioso/1.png'),
                                require('@/assets/cuadros/diaLluvioso/2.png'),
                                require('@/assets/cuadros/diaLluvioso/3.png'),
                                ],
                        }                
                    ],
        },
         {
            id:'retratoana',
            titulo:'Retrato Ana',
            foto: require('@/assets/cuadros/ana/4.png'),
            galeria: [
                        {
                        imagenes:[
                                require('@/assets/cuadros/ana/1.png'),
                                require('@/assets/cuadros/ana/2.png'),
                                require('@/assets/cuadros/ana/3.png'),
                                require('@/assets/cuadros/ana/4.png'),
                                require('@/assets/cuadros/ana/5.png'),
                                ],
                        }                
                    ],
        },
         {
            id:'lageisha',
            titulo:'La Geisha',
            foto: require('@/assets/cuadros/laGeisha/2.png'),
            galeria: [
                        {
                        imagenes:[
                                require('@/assets/cuadros/laGeisha/1.png'),
                                require('@/assets/cuadros/laGeisha/2.png'),
                                ],
                        }                
                    ],
        },
         {
            id:'torrepaterna',
            titulo:'Torre Paterna',
            foto: require('@/assets/cuadros/torrePaterna/3.png'),
            galeria: [
                        {
                        imagenes:[
                                require('@/assets/cuadros/torrePaterna/1.png'),
                                require('@/assets/cuadros/torrePaterna/2.png'),
                                require('@/assets/cuadros/torrePaterna/3.png'),
                                ],
                        }                
                    ],
        },
         {
            id:'libros',
            titulo:'Libros',
            foto: require('@/assets/cuadros/libros/1.png'),
            galeria: [
                        {
                        imagenes:[
                                require('@/assets/cuadros/libros/1.png'),
                                ],
                        }                
                    ],
        },
         {
            id:'cesta',
            titulo:'Cesta',
            foto: require('@/assets/cuadros/cesta/1.png'),
            galeria: [
                        {
                        imagenes:[
                                require('@/assets/cuadros/cesta/1.png'),
                                ],
                        }                
                    ],
         }
        ],//cuadros
    }),//data
 }//export default
</script>