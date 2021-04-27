<template>
    <div>
        <v-container>
            <h1  class="color2--text d-flex justify-center text-center titulo my-6">Galeria De Fotos Dinámica</h1>
        </v-container>

        <v-sheet class="mx-auto d-flex justify-center">
            <v-slide-group  class="pa-4" show-arrows center-active >
                <v-slide-item  v-for="(item,index) in cuadros" :key="index"
                v-slot="{  toggle }">
                    <v-hover v-slot="{ hover }" >
                        <v-card class="ma-4" height="100" color="black"
                        width="200" @click="toggle"
                        :to="{name:'arte', params: {page: item.id}}">
                            <v-img  aspect-ratio="2"
                            :src="item.foto">
                                <v-expand-transition>
                                    <div v-if="hover"
                                    class="d-flex transition-fast-in-fast-out color2 darken-2 
                                    v-card--reveal display-3 white--text"
                                    style="height: 100%;">
                                            Entrar
                                    </div>
                                </v-expand-transition>
                                <!--cargando-->
                                <template v-slot:placeholder>
                                  <comcargando></comcargando>
                                </template>
                                <!--cargando-->
                            </v-img>

                            <v-card-text class="py-8 botonEntrar text-capitalize  text-caption 
                            text-sm-subtitle-1 text-md-h6 text-lg-h4 text-xl-h3">
                                {{item.titulo}}
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>

        <comCuadro :cuadros="cuadros"></comCuadro> 

    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
.titulo{
    font-family: 'Train One', cursive;
}
.botonEntrar{
    height: 100% !important;
    width: 100% !important;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>

<script>
import comcargando from "@/components/ComCargando.vue"
import comCuadro from "@/components/ComCuadros.vue"


export default {
    name: 'Arte',
    components:{
       comcargando, comCuadro
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
