<template>
<div>


    <v-card class="mx-auto"
    max-width="375">
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

        <v-list-item>
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
  </v-card>


</div>
</template>

<style scoped>
.v-list-item:hover{
    background: #43b8832d !important;
}
</style>


<script>
export default {
    name: 'comBarraV',
   
}
</script>