<template>
<div id="tamaño" class="tamaño">

<div id="foto" class="foto">
<v-img
            :src="$route.params.fotografia" spect-ratio="2" 
            class="black " contain>
           </v-img> 

 </div>  

</div>
</template>

<style scoped>

.tamaño{
      z-index: 200;
    position: fixed;
    top: 0%;
    /* left: 5%; */
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    background: black;
  
}
.foto{
   width: 100%;
}  

</style>


<script>

import comcargando from "@/components/ComCargando.vue"

export default {
  name: 'comDiapositiva',
   components:{
       comcargando, 
    },
 props:{
   
    },
    data:()=>({
     cuadros:[
          {
            zoom:false,
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
            zoom:false,
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
            zoom:false,
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
            zoom:false,
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
            zoom:false,
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
            zoom:false,
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
            zoom:false,
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