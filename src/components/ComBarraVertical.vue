<template>
<v-container>

    <v-card  width="380">
        <v-list two-line class="alto">
            <v-list-item >
                <v-row>
                    <v-col cols="12" sm="2" class="d-flex justify-center  justify-sm-start altura">
                        <v-list-item-icon >
                            <v-icon color="color1" >
                                mdi-calendar-month
                            </v-icon>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="12" sm="10" >
                        <v-list-item-content >
                            <v-list-item-title class="d-flex justify-center justify-sm-start">
                                06/03/1988
                            </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-center justify-sm-start">
                                Fecha de nacimiento
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>
                </v-row>
            </v-list-item>

            <v-divider   inset></v-divider>

            <v-list-item >
                <v-row>
                    <v-col cols="12" sm="2" class="d-flex justify-center  justify-sm-start altura">
                        <v-list-item-icon >
                            <v-btn icon elevation="4" 
                            role=link href="mailto: alcafefront@gmail.com" target="_blank">
                                <v-icon color="color1" >
                                    mdi-at
                                </v-icon>
                            </v-btn>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="12" sm="10" >
                        <v-list-item-content class="mb-2">
                            <v-list-item-title class="d-flex justify-center justify-sm-start">
                                alcafefront@gmail.com 
                            </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-center justify-sm-start">
                                Correo electrónico
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>
                </v-row>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-row>
                    <v-col cols="12" sm="2" class="d-flex justify-center  justify-sm-start altura">
                        <v-list-item-icon >
                            <v-btn icon elevation="4"
                            role=link href="tel:635507429" target="_blank">
                                <v-icon color="color1" >
                                    mdi-phone
                                </v-icon>
                            </v-btn>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="12" sm="10" >
                        <v-list-item-content >
                            <v-list-item-title class="d-flex justify-center justify-sm-start">
                                635507429 
                            </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-center justify-sm-start">
                                Móvil
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>
                </v-row>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-row>
                    <v-col cols="12" sm="2" class="d-flex justify-center  justify-sm-start altura">
                        <v-list-item-icon >
                            <v-btn icon elevation="4"
                            role=link href="https://github.com/AlbertoCF88" target="_blank">
                                <v-icon color="color1" >
                                    mdi-github
                                </v-icon>
                            </v-btn>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="12" sm="10" >
                        <v-list-item-content >
                            <v-list-item-title class="d-flex justify-center justify-sm-start">
                                AlbertoCF88
                            </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-center justify-sm-start">
                                Cuenta en github.com
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>
                </v-row>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-row>
                    <v-col cols="12" sm="2" class="d-flex justify-center  justify-sm-start altura">
                        <v-list-item-icon >
                            <v-btn icon elevation="4"
                            role=link href="https://www.google.es/maps/place/Paterna,+Valencia/@39.5029344,-0.451063,15z/data=!3m1!4b1!4m5!3m4!1s0xd60454892e32d6d:0xb45b9f3dbffa9227!8m2!3d39.5037093!4d-0.4431618?hl=es" target="_blank">
                                <v-icon color="color1" >
                                    mdi-map-marker
                                </v-icon>
                             </v-btn>
                        </v-list-item-icon>
                    </v-col>
                    <v-col cols="12" sm="10" >
                        <v-list-item-content>
                            <v-list-item-title class="d-flex justify-center justify-sm-start">
                                Paterna, Valencia, España
                             </v-list-item-title>
                            <v-list-item-subtitle class="d-flex justify-center justify-sm-start">
                                Dirección
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>
         
        <v-tooltip bottom >
            <template v-slot:activator="{ on, attrs }" >
                <v-btn v-bind="attrs" v-on="on" color="color3"
                fab dark x-small absolute bottom  right elevation="0"
                @click="CambioLoading()"
                class="botonLoad">
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

</v-container>
</template>

<style scoped>
.botonLoad:before{
  background-color: transparent !important;
}
.mdi-calendar-month::before {
    padding-top: 9px;
    padding-left: 8px;
}
.v-list-item__content {
    padding: 18px 0;
}
.alto{
    margin-top: 20px;
    margin-bottom: 19px;
}
/*boton stop */
.v-btn--absolute.v-btn--right, .v-btn--fixed.v-btn--right {
  right: -16px;
}
.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom {
  bottom: -13px;
}
/*------------------------------@media ---290--------------------------------------------------- */
@media (max-width:294px) {
   .v-list-item__title {
    font-size: 5vw;
    }
 }
/*----------FIn---@media (max-width:290px)------------------------*/
/*-------------@media (max-width:812px)------------------------*/
    @media (max-width:815px) { 
    .v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
        margin-left:0px;
    } 
    .v-divider--inset:not(.v-divider--vertical) {
        max-width: 100%;
    } 
    .altura{
        padding-bottom: 0px;
        height: 46px;
    }
    .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
     margin-right: 0px;
    }
 }
 /*----------FIn---@media (max-width:812px)------------------------*/
</style>


<script>
import {mapState, mapMutations} from "vuex";
export default {
    name: 'comBarraV',
    computed:{
       ...mapState(['loading'])
   },
   methods:{
       ...mapMutations(['CambioLoading'])
   }
}
</script>