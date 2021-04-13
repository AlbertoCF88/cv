<template>
<div>
<v-container  class="d-flex justify-center">

    <v-card width="380" >
        <v-list two-line>
            <v-list-item >
                <v-list-item-icon>
                    <v-icon color="color1">
                        mdi-calendar-month
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>06/03/1988</v-list-item-title>
                    <v-list-item-subtitle>Fecha de nacimiento</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-list-item-icon>
                    <v-icon color="color1">
                        mdi-at
                    </v-icon>
            </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>albertocarrascofernandez@hotmail.com</v-list-item-title>
                    <v-list-item-subtitle>Correo electrónico</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-list-item-icon>
                    <v-icon color="color1">
                        mdi-phone
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>635507429</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-list-item-icon>
                    <v-icon color="color1">
                        mdi-github
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>AlbertoCF88</v-list-item-title>
                    <v-list-item-subtitle>Cuenta de: github.com</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item >
                <v-list-item-icon>
                    <v-icon color="color1">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Paterna, Valencia, España</v-list-item-title>
                    <v-list-item-subtitle>Dirección</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider class="alto" inset></v-divider>
         
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

</v-container>
</div>
</template>

<style scoped>
.alto{
    padding-bottom: 79px;
}
.v-list-item:hover{
    background: #43b8832d !important;
}
/*boton stop */
.v-btn--absolute.v-btn--right, .v-btn--fixed.v-btn--right {
  right: -16px;
}
.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom {
  bottom: -13px;
}
/*fin boton stop */
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