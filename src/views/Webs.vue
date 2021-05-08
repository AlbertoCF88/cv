<template >
<div class="fondo">
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
                                        <v-img
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
                            Web realizada Con Vue CDN, Bootstrap y es progressive Web App.
                        </v-card-text>
                        <v-card-actions
                        class="d-flex justify-center justify-md-start ">
                            <v-btn outlined rounded text
                            role=link href="http://appdbs.deysol.com/UniversoDragon/app.html" 
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
                                        <v-img
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
                            <v-btn outlined rounded text
                            role=link href="https://play.google.com/store/apps/details?id=com.wUniversoDragon_13367844" 
                            target="_blank">
                            visitar
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>   

    <div class="d-flex justify-center">    
        <v-card class="altura" 
        color="transparent" elevation="0" >
            <v-img class="altura align-center"
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
                                <v-btn outlined rounded text dark
                                role=link href="https://github.com/AlbertoCF88" 
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

</style>