<template>
<div>
<v-container mt-5 class="posicion">
  <v-card class="mx-auto Zcard" max-width="300" hover 
  @mouseover="hover=true; hover2=true"
  @mouseleave="hover=false; hover2=false">

    <v-avatar class="d-flex justify-center"
    height="auto" width="auto" tile>
      <v-img src="@/assets/albertoPng.png"></v-img>
    </v-avatar>
    
    <div class="d-flex justify-space-between altura">
      <div  id="trianguloIz" class="trianguloIz"></div>
      <div id="trianguloDe" class="trianguloDe"></div>
    </div>

    <v-card-title class="d-flex justify-center font-weight-black
      text-sm-h6 text-subtitle-1">
      Alberto Carrasco Fernández
    </v-card-title>

    <v-card-subtitle class="d-flex justify-center color1--text 
    font-weight-black text-sm-subtitle-1 text-subtitle-2 ">
      Front-End Developer 
    </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="revelar = true"
      color="orange lighten-2" text>
        Saber mas
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
      v-click-outside="clickFuera"
      @click="revelar=false"
      v-if="revelar"
      class="transition-fast-in-fast-out v-card--reveal"
      style="height: 100%;">

        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
              Origin
          </p>
            <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
              text
              color="teal accent-4"
              @click="revelar = false">
              Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>

    <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }" >
        <v-btn v-bind="attrs" v-on="on" color="color3"
        fab dark x-small absolute bottom  right elevation="0"
        @click="loading = !loading">
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

  <v-container fluid 
  :class="{'marcoColor2Entrada':hover2,'marcoColor2Salida':!hover2}"
  class="color1"> 
  </v-container>
   
  <v-container fluid 
  :class="{'marcoColor1Entrada':hover,'marcoColor1Salida':!hover}"
  class="color1os"> 
  </v-container>

</v-container>
</div>
</template>

<style scoped>
.posicion{
  position: relative;
}
.Zcard{
  z-index: 1;
  position: absolute;
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
  right: -12px;
}
.v-btn--fab.v-size--x-small {
  height: 25px;
  width: 25px;
}
.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom {
  bottom: -9px;
}
/*fin boton stop */
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
/*marcos card */
  /*marco 1 verde oscuro*/
  .marcoColor1Entrada{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    width: 300px;
    animation: marcoAnimaEntrada 0.5s ease 0.3s forwards; 
  }
  @keyframes marcoAnimaEntrada { 
    0%{            
        opacity: 0;
        left: 0px;
        top: 0px;
      }  
    100%{
        left: -4px;
        top: -4px;
        opacity:1;
      }
  } 
  .marcoColor1Salida{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    width: 300px;
    animation:  marcoAnimaSalida 1s ease forwards; 
  }
  @keyframes marcoAnimaSalida {
    0%{            
        opacity: 1;
        left: -4px;
        top: -4px;
      }  
    100%{
          left: 12px;
          top: 12px;
          opacity:0;
      }
  } 
  /*marco 2 verde claro*/
  .marcoColor2Entrada{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    width: 300px;
    animation: marcoAnimaEntrada2 0.5s ease 0.8s   forwards; 
  }
  @keyframes marcoAnimaEntrada2 { 
    0%{            
        opacity: 0;
        left: 0px;
        top: 0px;
      }  
    100%{
          left: -16px;
          top: -16px;
          opacity:1;
      }
  } 
  .marcoColor2Salida{
    z-index: 0;
    display: flex;
    height: 449px;
    position: absolute;
    width: 300px;
    animation:  marcoAnimaSalida2 2s ease  forwards; 
  }
  @keyframes marcoAnimaSalida2 {
    0%{            
        opacity: 1;
        left: -4px;
        top: -4px;
      }  
    100%{
          left: 12px;
          top: 12px;
          opacity:0;
      }
  } 
/*fin marcos card */
</style>

<script>
  export default {
    name: 'comTarjeta',
    data:() => ({
      loading: true,
      revelar:false,
      active: false,
      hover: false,
      hover2: false,
    }),
    methods: {
      clickFuera () {
        this. revelar = false
      },
    },

  }//export default
 

</script>