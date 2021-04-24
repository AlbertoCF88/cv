<template>
    <div>
        <v-container>
            <h1  class="color2--text d-flex justify-center text-center titulo my-6">Galeria De Fotos Dinámica</h1>
        </v-container>

        <v-sheet class="mx-auto d-flex justify-center" elevation="8" >
      <v-slide-group  class="pa-4" show-arrows center-active>
        <v-slide-item  v-for="(item,index) in cuadros" :key="index"
        v-slot="{ active, toggle }">
              <v-hover v-slot="{ hover }" >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
          height="100"
          width="200"
            @click="toggle"
            :to="{name:'arte', params: {page: item.id}}"
          >
          
             
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
      
 
     
    
        <comCuadro :cuadros="cuadros"/>

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
import comCuadro from "@/components/Cuadros/ComCuadros.vue"

export default {
    components:{
       comCuadro
    },
    data(){
        return{
        

    cuadros:[
        {
            id:'dialluvioso',
            titulo:'Dia Lluvioso',
            foto: require('@/assets/cuadros/diaLluvioso/3.png'),
        },
         {
            id:'retratoana',
            titulo:'Retrato Ana',
            foto: require('@/assets/cuadros/ana/4.png'),
        },
         {
            id:'lageisha',
            titulo:'La Geisha',
            foto: require('@/assets/cuadros/laGeisha/2.png'),
        },
         {
            id:'torrepaterna',
            titulo:'Torre Paterna',
            foto: require('@/assets/cuadros/torrePaterna/3.png'),
        },
         {
            id:'libros',
            titulo:'Libros',
            foto: require('@/assets/cuadros/libros/1.png'),
        },
         {
            id:'cesta',
            titulo:'Cesta',
            foto: require('@/assets/cuadros/cesta/1.png'),
         }
    ],

        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
                this.$router.go(1)
            }
        }
     
    }
</script>
