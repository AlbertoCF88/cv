<template >
<div class="fondo">

    <v-container>
        <h1 class="d-flex justify-center align-center color3--text mt-6">
            Otras Webs
        </h1>
    </v-container>

<!--Webs--->    
    <v-container class="pt-10 contGoku"
    v-for="item in webs" :key="item.id">
        <v-img  width="100%" height="50px"
        :src="item.marco" alt="marco decoracion">
        </v-img>

        <v-card  tile :color="item.color" dark
        width="100%">
            
            <v-container>
                <v-list-item three-line>
                    <v-row>
                        <v-col cols="12" sm="9">
                            <v-list-item-content>
                                <v-list-item-title class="text-h5 mb-3">
                                    {{item.titulo}}
                                </v-list-item-title>
                                <v-list-item-subtitle class="mb-4">
                                     {{item.subtitulo}}
                                </v-list-item-subtitle>
                                <v-list-item-content>
                                    {{item.texto}}
                                </v-list-item-content>
                            </v-list-item-content>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex justify-center">
                            <v-list-item-avatar tile size="140">
                                <v-img alt="Logo Angular"
                                :src="item.icono">
                                </v-img>
                            </v-list-item-avatar>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-row>
                    <v-col cols="12" class="d-flex justify-center justify-sm-start ">
                        <v-card-actions>
                            <v-btn outlined rounded text 
                            :title="item.link"
                            rel="noreferrer" :href="item.link" 
                            target="_blank">
                            <span v-if="!item.proximamente">visitar</span>  
                            <span v-if="item.proximamente">En construcción</span> 
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-img  width="100%" height="50px" 
        style="transform: rotate(180deg);"
        :src="item.marco" alt="marco decoracion">
        </v-img>
    </v-container>

<!--Goku-->
    <v-container class="pt-10 contGoku">
        <v-row>
            <v-col cols="12" md="6">
                <v-card id="div1" 
                class="d-flex align-center"
                elevation="0" color="dragon" dark tile
                width="100%" height="300">
                    <v-container class="pr-md-16">
                        <v-row>
                            <v-col cols="12" md="3" lg="2">
                                <v-list-item three-line 
                                class="d-flex justify-center justify-md-start">
                                    <v-list-item-avatar tile color="white"
                                    height="auto" width="300" size="80">
                                        <v-img alt="Logo Universo Dragon"
                                        src="../assets/supervivencia1.webp">
                                        </v-img>
                                    </v-list-item-avatar>
                                </v-list-item>
                            </v-col>
                            <v-col cols="12" md="9" lg="10">
                                <v-list-item three-line>
                                    <v-list-item-content 
                                    class="d-flex justify-star text-center text-md-start ml-5">
                                        <v-list-item-title class="headline mb-1">
                                            Universo Dragon
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            Pagina web de ayuda al juego de mesa:
                                            <br>"Dragon ball Super, La Supervivencia del Universo".
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-card-text
                        class="d-flex justify-center text-center 
                        justify-md-start text-md-start">
                            <p>Web realizada Con <span class="color1--text vueDragon">Vue</span> CDN, Bootstrap y es progressive Web App.</p>   
                        </v-card-text>
                        <v-card-actions
                        class="d-flex justify-center justify-md-start ">
                            <v-btn outlined rounded text title="http://appdbs.deysol.com/UniversoDragon/app.html"
                            rel="noreferrer" href="http://appdbs.deysol.com/UniversoDragon/app.html" 
                            target="_blank">
                            visitar
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
                <div class="movil1"></div>
            </v-col>

            <v-col cols="12" md="6">
                <div class="movil2"></div>
                <v-card id="div2"
                class="d-flex align-center"
                elevation="0" color="dragon" dark tile
                width="100%" height="300">
                    <v-container class="paddingL">
                        <v-row>
                            <v-col cols="12" md="3" lg="2">
                                <v-list-item three-line 
                                class="d-flex justify-center justify-md-start">
                                    <v-list-item-avatar tile color="white"
                                    height="auto" width="300" size="80">
                                        <v-img alt="Logo Universo Dragon en Google Play"
                                        src="../assets/supervivencia2.webp">
                                        </v-img>
                                    </v-list-item-avatar>
                                </v-list-item>
                            </v-col>
                            <v-col cols="12" md="9" lg="10">
                                <v-list-item three-line>
                                    <v-list-item-content 
                                    class="d-flex justify-star text-center text-md-start ml-5">
                                        <v-list-item-title class="headline mb-1">
                                            Universo Dragon
                                        </v-list-item-title>
                                        <v-list-item    
                                        class="d-flex justify-center justify-md-start pl-0">
                                            <div class="google"></div>
                                                Google Play
                                        </v-list-item>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-card-text 
                        class="d-flex justify-center text-center 
                        justify-md-start text-md-start">
                            Conversión App, puedes visualizar la ficha de Play Store en el siguiente enlace.
                        </v-card-text>
                        <v-card-actions
                        class="d-flex justify-center justify-md-start ">
                            <v-btn outlined rounded text title="https://play.google.com/store/apps/details?id=com.wUniversoDragon_13367844"
                            rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.wUniversoDragon_13367844" 
                            target="_blank">
                            visitar
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>   

<!--Gato-->
    <div class="d-flex justify-center">    
        <v-card class="altura" 
        color="transparent" elevation="0" >
            <v-img alt="fondo logotipo de Github"
            class="altura align-center"
            src="../assets/gitazul.webp">
                <v-container>
                    <v-row class="d-flex justify-center text-center">
                        <v-col cols="8" sm="4" md="5" lg="4" 
                        class="pt-16">
                            <v-card-title 
                            class="d-flex justify-center text-caption text-md-subtitle-2  text-lg-subtitle-1">
                                No dispongo de más contenido por el momento pero puedes visualizar repositorios en el siguiente enlace en el portal de Github 
                            </v-card-title>
                        </v-col>
                        <v-col cols="12" 
                        class="d-flex justify-center">
                            <v-card-actions>
                                <v-btn outlined rounded text dark title="https://github.com/AlbertoCF88"
                                rel="noreferrer" href="https://github.com/AlbertoCF88" 
                                target="_blank">
                                    visitar
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
      </v-card>
    </div>


</div>
</template>


<style scoped>
.fondo{
    background-color: #ff646429;
    width: 100%;
    height: 100%;
}
.contGoku{
    width: 80%;
}
/*contenido goku */
    #div1::after{
        content: '';
        position: absolute;
        top: 0px;
        width: 0px;
        height: 100%;
        right: 0px;
        border-top: 100px solid #ffe6e6;
        border-left: 74px solid #ff6600;
        border-bottom: 100px solid #ffe6e6;
    }
    #div2::before{
        content: '';
        position: absolute;
        top: 0px;
        width: 0px;
        height: 100%;
        right: 0px;
        left: 0px;
        border-top: 100px solid #ffe6e6;
        border-right: 74px solid #ff6600;
        border-bottom: 100px solid #ffe6e6;
    }
    .paddingL{
        padding-left: 85px ;
    }
/*fin goku */
.v-list-item__subtitle {
    display: grid !important;
}
.v-list-item__title, .v-list-item__subtitle {
    white-space: unset !important;
}
.v-card__title {
    word-break: break-word;
    font-weight: 900;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
    margin-right: 0px;
}
.google{
 background: url(../assets/play.png);
    background-repeat: no-repeat;
    width: 30px;
    height: 24px;
}
.gato{
    padding-top: 150px;
}
@media (min-width:0px) and (max-width:408px)  {
    .movil1 ,.movil2{
        height: 53px;
        width: 100%;
        position: relative;
    }
    .movil1::after{
        content: '';
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        right: 0px;
        border-top: 53px solid #ff6600;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
    }
    .movil2::after{
        content: '';
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        right: 0px;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 53px solid #ff6600;
    }
    #div1, #div2{
        width: 100% !important;
        max-height:100% !important; 
        height: auto !important;
    }
    #div1::after{
        content: none !important ;
    }
    #div2::before{
        content: none !important ;
    }
    .paddingL{
        padding-left: 0px !important;
        padding: 12px !important;
    }
}
@media (min-width:409px) and (max-width:959px)  {
    .movil1 ,.movil2{
        height: 53px;
        width: 100%;
        position: relative;
    }
    .movil1::after{
        content: '';
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        right: 0px;
        border-top: 53px solid #ff6600;
        border-left: 150px solid transparent;
        border-right: 150px solid transparent;
    }
    .movil2::after{
        content: '';
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        right: 0px;
        border-left: 150px solid transparent;
        border-right: 150px solid transparent;
        border-bottom: 53px solid #ff6600;
    }
    #div1,#div2{
        width: 100% !important;
        max-height:100% !important; 
        height: auto !important;
    }
    #div1::after{
        content: none !important ;
    }
    #div2::before{
    content: none !important ;
    }
    .paddingL{
        padding-left: 0px !important;
        padding: 12px !important;
    }
}
@media (min-width:0px) and (max-width: 500px) {
    .altura{
       height: 300px;
    }
    .gato{
            padding-top: 50px;
    }
}
#a1{
    width: 100%;
    height: 250px;
}
#a1::before{
    content: '';
    position: relative;
    bottom: 81px;
    width: 100%;
    border-left: 1161px solid #b2ff0000;
    border-bottom: 60px solid #555555;
}
.vueDragon{
    text-shadow: 1px 1px 2px black;
    font-size: 20px;
}
</style>


<script>
export default {
  name: 'comWEbs',
  components: {
  },
    data: () => ({
   
        webs:[
             {
                titulo: 'MiniGameCell',
                subtitulo:'Minijuego',
                texto:'Web realizada con Ionic y Angular, multilenguaje (i18n)',
                color: 'ionicAngular',
                icono: require('@/assets/ionicAngular.png'),
                marco: require('@/assets/marcoIA.svg'),
                link: '',
                proximamente:true
            },
               {
                titulo: 'Tienda-Angular',
                subtitulo:'Tienda de compras online.',
                texto:'Web realizada con Angular, multilenguaje (i18n), cambio de divisa con llamada a la API Open Exchange Rates para obtener el valor de la moneda actual, Flickity para los movimientos del carousel, servicio para unir la lógica, imágenes en formato WebP para reducir el tamaño de la web, Bootstrap, PWA y adaptativa para todos los dispositivos.',
                color: 'angular',
                icono: require('@/assets/tienda-angular.png'),
                marco: require('@/assets/marcoA.svg'),
                link: 'http://tienda-angular.deysol.com/'
            },
            {
                titulo: 'Angular-material',
                subtitulo:'Esta web contiene un login para iniciar sesion y unos usuarios registrados que puedes eliminar, editar,agregar, ordenar o inspeccionar.',
                texto:'Web realizada con Angular, Material Design + Bootstrap para adaptarla a todos los dispositivos y PWA.',
                color: 'angular',
                icono: require('@/assets/angular.png'),
                marco:require('@/assets/marcoA.svg'),
                link: 'https://angular-material.deysol.com/'
            },
            {
                titulo: 'Post-it',
                subtitulo:'Editor de tareas.',
                texto:'Web realizada con Vue, Vuetify, adaptada a todos los dispositivos, localStorage para guardar las tareas y PWA.',
                color: 'vue',
                icono: require('@/assets/Vue.png'),
                marco:require('@/assets/marcoV.svg'),
                link: 'http://vuetify.deysol.com/'
            },
    
        ],
    }),//data
   
}
</script>