<template>
<v-container mb-2 class="posicion ancho d-flex justify-center">

  <v-card class="Zcard" hover 
  @mouseover="hover=true; hover2=true"
  @mouseleave="hover=false; hover2=false">

    <v-avatar class="d-flex justify-center"
    height="auto" width="auto" tile>
      <v-img alt="Foto Alberto Carrasco" src="@/assets/albertoPng.png">
        <!--cargando-->
        <template v-slot:placeholder>
          <comcargando class="color1os" circulo="color1" circuloAltura="70"></comcargando>
        </template>
        <!--cargando-->
      </v-img>
    </v-avatar>
    
    <div class="d-flex justify-space-between altura">
      <div id="trianguloIz" class="trianguloIz"></div>
      <div id="trianguloDe" class="trianguloDe"></div>
    </div>

    <v-card-title class="d-flex justify-center font-weight-black
    text-sm-h6 text-subtitle-1">
      <strong>Alberto Carrasco Fernández</strong> 
    </v-card-title>

    <v-card-subtitle class="d-flex justify-center color1--text 
    font-weight-black text-sm-subtitle-1 text-subtitle-2 ">
      <strong>Front-End Developer</strong> 
    </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="revelar = true; edad()"
      color="color4" text block >
        Saber más
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
          <p class="display-1 color1--text text-center">
            SOBRE MÍ
          </p>
          <p class="texto text-justify mx-6">
            ¡Hola!
            <br>
            Me llamo Alberto y tengo {{edadActual}} años.
            <br>
            Soy paciente, resolutivo, creativo y responsable. 
            <br><br>
            En mi tiempo libre me gusta cultivar plantas, la pintura y programar. La programación es un campo que me apasiona ya que puedo poner en práctica mis habilidades creativas. 
            <br>  <br>
            Puedes descubrir alguno de mis proyectos en esta página web. Echa un vistazo a mis pinturas 
            <v-btn icon fab x-small title="Arte"
            :to="{name: 'Arte'}">
              <v-icon color="ico2">mdi-lead-pencil</v-icon>
            </v-btn>
            y a mis páginas webs
            <v-btn icon fab x-small title="Otras Webs"
            :to="{name: 'Webs'}">
            <v-icon color="ico3">mdi-remote-desktop</v-icon>
            </v-btn>
            <br><br>
            No dude en ponerse en contacto conmigo:
            <br>
            Correo: <a href="mailto:alcafefront@gmail.com" target="_blank">alcafefront@gmail.com</a> 
            <br>
            Móvil: <a href="tel:635507429" target="_blank">635507429</a>
            <br>
             <br><br>
             Esta web ha sido creada con Vue CLI, separado por componentes, (Vue Router, Vuetify, adaptado para todos los dispositivos, progressive Web App y Visual Studio Code como editor de código). <br>
             Puedes visualizar el código en mi cuenta de Github <a href="https://github.com/AlbertoCF88" target="_blank">AlbertoCF88</a>
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn text block color="ico4" 
          @click="revelar = false">
            Cerrar
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-expand-transition>

    <div class="pie"></div>
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
</template>

<style scoped>
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
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.pie{
    width: 100%;
    height: 5px;
    background: #43b883;
}
/*marcos card */
.anchoHover{
  max-width: 315px;
}
  /*marco 1 verde oscuro*/
  .marcoColor1Entrada{
    z-index: 0;
    display: flex;
    height: 95%;
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
    height: 95%;
    position: absolute;
    animation:  marcoAnimaSalida 1.5s ease forwards; 
  }
  @keyframes marcoAnimaSalida {
    0%{            
        opacity: 1;
        left:  -7px;
        top: -4px;
      }  
    100%{
        left: 25px;
        top: 25px;
        opacity:0;
      }
  } 
  /*marco 2 verde claro*/
  .marcoColor2Entrada{
    z-index: 0;
    display: flex;
    height: 95%;
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
    height: 95%;
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
          top: 35px;
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
/*------------------------------@media (max-width:961px) ------movil-------------------- */
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
import comcargando from "@/components/ComCargando.vue"
export default {
  name: 'comTarjeta',
  components: {
    comcargando
  },

  data:() => ({
    revelar:false,
    hover: false,
    hover2: false,
    edadActual:'',
  }),
  methods: {
    clickFuera () {
      this. revelar = false
    },
    edad(){
      let fechanacimiento = new Date('03/06/1988');
      let hoy = new Date();
      this.edadActual = hoy.getFullYear() - fechanacimiento.getFullYear();

      return this.edadActual
    },
  },//methods
}//export default
</script>