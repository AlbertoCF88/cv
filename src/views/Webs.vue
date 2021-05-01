<template >
<div class="fondo">
    <v-container>
        <h1>Otras webs</h1>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card id="div1" 
                elevation="0" color="dragon"
                dark
                width="100%" max-height="272px">
                    <v-container class="pr-16">
                        <v-row>
                            <v-col cols="12" md="3" lg="2"  class="" >
                                <v-list-item three-line>
                                    <v-list-item-avatar tile size="80">
                                        <v-img
                                        src="../assets/supervivencia1.png">
                                        </v-img>
                                    </v-list-item-avatar>
                                </v-list-item>
                            </v-col >
                            <v-col cols="12" md="9" lg="10" >
                                <v-list-item three-line>
                                    <v-list-item-content class="d-flex justify-star">
                                        <v-list-item-title class="headline mb-1">
                                            Universo Dragon
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            Pagina web de ayuda al juego de mesa:<br>"Dragon ball Super, La Supervivencia del Universo"
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-card-text>
                            Web realizada Con JS-Frameworks Vue CDN, librerias: animate.css, UI-framework: Bootstrap
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined rounded text
                            role=link href="http://appdbs.deysol.com/UniversoDragon/app.html" 
                            target="_blank">
                            visitar
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card id="div2" 
                elevation="0" color="dragon"
                dark
                width="100%" max-height="272px">
                    <v-container class="paddingL">
                        <v-row>
                            <v-col cols="12" md="3" lg="2"  class="" >
                                <v-list-item three-line>
                                    <v-list-item-avatar tile size="80">
                                        <v-img
                                        src="../assets/supervivencia2.png">
                                        </v-img>
                                    </v-list-item-avatar>
                                </v-list-item>
                            </v-col >
                            <v-col cols="12" md="9" lg="10" >
                                <v-list-item three-line>
                                    <v-list-item-content class="d-flex justify-star">
                                        <v-list-item-title class="headline mb-1">
                                            Universo Dragon
                                        </v-list-item-title>
                                        <v-list-item>
                                            <div class="google"></div>
                                                Google Play
                                        </v-list-item>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-card-text>
                            Conversion en web App, puedes visualizar la ficha de Play Store en el siguiente enlace
                        </v-card-text>
                        <v-card-actions>
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
        <v-card color="transparent" elevation="0">
            <v-img contain
            src="../assets/gitazul.png">
                <v-container>
                    <v-row class="d-flex justify-center">
                        <v-col cols="4" >
                            <v-card-title>
                                No dispongo de más contenido por el momento pero puedes   visualizar repositorios en el siguinte enlace en el portal de Github 
                            </v-card-title>
                        </v-col>
                        <v-col l cols="12" class="d-flex justify-center">
                            <v-card-actions>
                                <v-btn>
                                    enlace
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

.google{
 background: url(../assets/play.png);
    background-repeat: no-repeat;
    width: 30px;
    height: 24px;
}
.fondo{
    background-color: #ff646429;
    width: 100%;
    height: 100%;
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
        padding-left: 85px !important;
    }


    
/*fin goku */
.v-list-item__subtitle {
    display: grid !important;
}
.v-list-item__title, .v-list-item__subtitle {
    white-space: unset !important;
}


</style>