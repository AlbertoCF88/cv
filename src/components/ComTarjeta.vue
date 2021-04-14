<template>
<div>
<v-container mb-2 class="posicion ancho d-flex justify-center">

  <v-card class="Zcard"  hover 
  @mouseover="hover=true; hover2=true"
  @mouseleave="hover=false; hover2=false">

    <v-avatar class="d-flex justify-center"
    height="auto" width="auto" tile>
      <v-img src="@/assets/albertoPng.png"></v-img>
    </v-avatar>
    
    <div class="d-flex justify-space-between altura">
      <div id="trianguloIz" class="trianguloIz"></div>
      <div id="trianguloDe" class="trianguloDe"></div>
    </div>

    <v-card-title class="d-flex justify-center font-weight-black
      text-sm-h6 text-subtitle-1">
      <p>Alberto Carrasco Fernández</p> 
    </v-card-title>

    <v-card-subtitle class="d-flex justify-center color1--text 
    font-weight-black text-sm-subtitle-1 text-subtitle-2 ">
      Front-End Developer 
    </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="revelar = true"
      color="color4" text block >
        Saber mas
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card color="color1os"
      v-click-outside="clickFuera"
      @click="revelar=false"
      v-if="revelar"
      class="transition-fast-in-fast-out v-card--reveal overflow-y-auto"
      style="height: 100%;">

        <v-card-text class="pb-0">
          <p class="display-1 biografia">
             Biografía
          </p>
          <p class="texto">
            Hola,
            <br>
            Soy una persona tranquila, paciente, amable e imaginativo.
            <br>
            En los tiempos que vivimos me ha hecho retomar el mundo de la porgramación al que me gustaba por su creatividad.
            <br>
            Si te interesa contrartar a una persona creativa, responsable, madura y nueva en esto pero con muchas ganas de trabajar no dude en contacar conmigo: 
            <a href="mailto: alcafefront@gmail.com" target="_blank">alcafefront@gmail.com</a>
             <br>
             <br>
             <br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure placeat magni at eius incidunt voluptatibus, maiores libero quibusdam odio totam adipisci cupiditate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptas maiores nulla quidem! Ex maxime molestiae ratione veritatis id rem amet reprehenderit.
          </p>
        </v-card-text>

        <v-card-actions>

          <v-btn text block color="color4" 
          @click="revelar = false">
            Cerrar
          </v-btn>
          
        </v-card-actions>
  
      </v-card>
    </v-expand-transition>

    <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }" >
        <v-btn v-bind="attrs" v-on="on" color="color3"
        fab dark x-small absolute bottom  right elevation="0"
        @click="CambioLoading()">
          <v-icon> mdi-alert-octagon-outline </v-icon>
        </v-btn>
      </template>
      <span>¿Te moleta la barra?</span>
    </v-tooltip>

    <v-progress-linear
    :indeterminate="loading"
    bottom color="color1">
    </v-progress-linear> 
  </v-card>

        <v-container 
        :class="{'marcoColor2Entrada':hover2,'marcoColor2Salida':!hover2}"
        class="color1 anchoHover"> 
        </v-container>
    
        <v-container 
        :class="{'marcoColor1Entrada':hover,'marcoColor1Salida':!hover}"
        class="color1os anchoHover "> 
        </v-container>
        
</v-container>
</div>
</template>

<style scoped>
.biografia{
  color:#43b883;
}
.texto{
  color:#d9d9d9;
}
.v-sheet.v-card {
  border-radius: 0px; 
}
.ancho{
  max-width: 340px;
}
.posicion{
  position: relative;
}
.Zcard{
  z-index: 1;
  position: relative;
}
/*triangulos avatar */
.trianguloIz {
  width: 0;
  height: 0;
  border-bottom: 100px solid #fff;
  border-right: 100px solid transparent;
  display: flex;
  position: relative;
  bottom: 100px;    
}
.trianguloDe {
  width: 0;
  height: 0;
  border-bottom: 100px solid #fff;
  border-left: 100px solid transparent;
  display: flex;
  position: relative;
  bottom: 100px;
}
.altura{
  height: 0;
}
/*Fin triangulos avatar */
/*boton stop */
.v-btn--absolute.v-btn--right, .v-btn--fixed.v-btn--right {
  right: -16px;
}
.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom {
  bottom: -13px;
}
/*fin boton stop */
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
/*marcos card */
.anchoHover{
  max-width: 315px;
}
  /*marco 1 verde oscuro*/
  .marcoColor1Entrada{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    animation: marcoAnimaEntrada 0.5s ease 0.3s forwards; 
  }
  @keyframes marcoAnimaEntrada { 
    0%{            
        opacity: 0;
        left: 0px;
        top: 0px;
      }  
    100%{
        left: -7px;
        top: -4px;
        opacity:1;
      }
  } 
  .marcoColor1Salida{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    animation:  marcoAnimaSalida 1.5s ease forwards; 
  }
  @keyframes marcoAnimaSalida {
    0%{            
        opacity: 1;
        left: -12px;
        top: -4px;
      }  
    100%{
        left: 25px;
        top: 50px;
        opacity:0;
      }
  } 
  /*marco 2 verde claro*/
  .marcoColor2Entrada{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    animation: marcoAnimaEntrada2 0.5s ease 0.8s forwards; 
  }
  @keyframes marcoAnimaEntrada2 { 
    0%{            
        opacity: 0;
        left: 0px;
        top: 0px;
      }  
    100%{
          opacity:1;
          left: -23px;
          top: -16px;
      }
  } 
  .marcoColor2Salida{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    animation:  marcoAnimaSalida2 1.5s ease  forwards; 
  }
  @keyframes marcoAnimaSalida2 {
    0%{            
        opacity: 1;
        left: -23px;
        top: -16px;
      }  
    100%{
          opacity:0;
          left: 35px;
          top: 50px;
      }
  } 
/*fin marcos card */
/*------------------------------@media ------------------------------------------------------ */
@media (max-width:240px) {
  /*triangulos*/
  .trianguloIz {
    border-bottom: 100px solid rgba(255, 255, 255, 0);  
  }
  .trianguloDe {
    border-bottom: 100px solid rgba(255, 255, 255, 0);
  }
  /*Fin triangulos*/
 }
@media (max-width:336px) { 
   /*texto */
  .v-application .text-subtitle-2 {
    font-size: 0.8rem !important;
  }
 /*Fin texto */
  .v-application .text-subtitle-1 {
    font-size: 4vw !important;
  }
    /*triangulos*/
  .trianguloIz {
    border-right: 65px solid transparent;  
  }
  .trianguloDe {
    border-left: 65px solid transparent;
  }
  /*Fin triangulos*/
} /*fin media 295px */
/*------------------------------@media (max-width:961px) ------------------------------------------------------ */
@media (max-width:959px) { 
  .anchoHover{
    height: 102%;
  }
  /*marcos card */
 .marcoColor1Entrada{
  width: 50%;
  z-index: 0;
  display: flex;
  position: absolute;
  animation: marcoAnimaEntrada 0.5s ease  forwards; 
  }
  @keyframes marcoAnimaEntrada { 
    0%{            
        opacity: 0;
        top: 0px;
      }  
    100%{
        top: -4px;
        opacity:1;
      }
  } 
  .marcoColor1Salida{
    z-index: 0;
    display: flex;
    width: 50%;
    top: -4px;
    position: absolute;
    animation:  marcoAnimaSalida 0.5s ease 1s forwards; 
  }
  @keyframes marcoAnimaSalida {
     0%{            
        opacity: 1;
        height: 102%;
      }  
    100%{
        opacity:0;
        height: 0%;
        top: 0px;
      }
  } 
  /*marco 2 verde claro*/
  .marcoColor2Entrada{
    width: 50%;
    z-index: 0;
    display: flex;
    position: absolute;
    top: -4px;
    animation: marcoAnimaEntrada2 0.5s ease 0.8s   forwards; 
  }
  @keyframes marcoAnimaEntrada2 { 
    0%{            
        opacity: 0;
      }  
    100%{
        width: 100%;
        top: -4px;
        opacity:1;
      }
  } 
  .marcoColor2Salida{
    z-index: 0;
    display: flex;
    top: -4px;
    position: absolute;
    animation:  marcoAnimaSalida2 2s ease  forwards; 
  }
  @keyframes marcoAnimaSalida2 {
    0%{            
        opacity: 1;
        width: 100%;
      }  
    100%{
          opacity:0;
          width:0%;
      }
  } 
}/* Fin max-width:959px---------------------------- */
/*barra cerrar */
::-webkit-scrollbar {
 width: 8px;
 height: 8px;
}
::-webkit-scrollbar-thumb {
 background: #43b883;
 border-radius: 10px;
 box-shadow: inset 0px 7px 11px #e8e8e8;
}
::-webkit-scrollbar-thumb:hover{
 background: #228759;
}
::-webkit-scrollbar-track{
 background: #787878;
 border-radius: 6px;
 box-shadow: inset 7px 10px 12px #f0f0f0;
}
/*Fin barra cerrar */
</style>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: 'comTarjeta',
  components: {
  },
  props:[],
  data:() => ({
    revelar:false,
    hover: false,
    hover2: false,
  }),
  computed:{
    ...mapState(['loading'])
  },
    methods: {
       ...mapMutations(['CambioLoading']),
      clickFuera () {
      this. revelar = false
      },
    },
}//export default
</script>