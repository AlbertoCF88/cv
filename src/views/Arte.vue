<template>
    <div class="tamaño">
        <v-container>
            <h1 class="color2--text d-flex justify-center text-center titulo my-6">
                Galeria De Fotos Dinámica
            </h1>
        </v-container>

        <v-sheet class="mx-auto d-flex justify-center black">
            <v-slide-group show-arrows center-active 
            :class="{'carrete1':mover,'carrete2': !mover}">
                <template v-slot:prev="{ on, attrs }">
                    <v-btn @click="mover=!mover"
                    v-bind="attrs" v-on="on"
                    color="black" tile>
                        <v-icon color="color2">
                            mdi-arrow-left-circle-outline
                        </v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-btn @click="mover=!mover"
                    v-bind="attrs" v-on="on"
                    color="black" tile>
                        <v-icon color="color2">
                            mdi-arrow-right-circle-outline
                        </v-icon>
                    </v-btn>
                </template>

                <v-slide-item v-for="(item,index) in cuadros" :key="index"
                v-slot="{ toggle }">
                    <v-hover v-slot="{ hover }">
                        <v-card class="ma-4" height="100" color="black"
                        width="200" @click="toggle"
                        :to="{name:'arte', params: {page: item.id}}">
                            <v-img aspect-ratio="2" class="sombra"
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
                                  <comcargando circulo="color2"></comcargando>
                                </template>
                                <!--cargando-->
                            </v-img>

                            <v-card-text class="py-8 botonEntrar text-capitalize text-caption 
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
.v-btn:not(.v-btn--round).v-size--default {
    height: 106px;
    min-width:0px !important;
    padding: 3px;
    width: 100%;
}
.carrete1{
    background: url(../assets/carrete.webp); 
    background-size: contain;
    background-position: center;
}
.carrete2{
    background: url(../assets/carrete.webp); 
    background-size: contain;
    background-position: none;
}
.sombra{
   box-shadow: 9px 1px 7px 2px #01010175, -9px 1px 8px 0px #00000070;
}
.tamaño{
    width: 100%;
    height: 100%;
    background-color: #f5f4ff;
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
/*json solo reconoce imagenes en carpeta public*/
import cuadros from '/public/cuadros.json'
import comcargando from "@/components/ComCargando.vue"
import comCuadro from "@/components/ComCuadros.vue"

export default {
    name: 'Arte',
    components:{
       comcargando, comCuadro
    },
    data:()=>({
        mover:true,
    	cuadros: cuadros
    }),//data
    
}//export default       
</script>
