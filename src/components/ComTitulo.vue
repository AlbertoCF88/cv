<template>
<v-container>
    <v-card shaped class="mx-auto mt-2" max-width="800"
    v-for="item in titulos" :key="item.id" >
        <v-img height="50" contain class="fondoRey"
        src="@/assets/rey2.png">
        </v-img>
        <v-card-text class="pt-1 borde ">
            <v-row >
                <v-col cols="12" sm="8" class="pb-0">
                    <v-card-title class="pt-1 pl-1">
                        {{item.nombre}}
                    </v-card-title> 
                </v-col>
                <v-col cols="12" sm="4" 
                class="d-flex justify-sm-end pb-0 pt-0">
                    <v-card-title class="horas pt-0   pt-sm-4">
                        {{item.duracion}}
                    </v-card-title> 
                </v-col>
            </v-row>

            <v-card-subtitle class="mr-sm-16 salto"
            :class="item.colorTexto">
                {{item.des}} 
            </v-card-subtitle>
            <v-card-subtitle 
            :class="item.colorTexto">
                Expedido el año: {{item.año}}
            </v-card-subtitle>
           
            <p class="d-flex justify-end"
            :class="item.colorAcre">
                Acreditado: {{item.acre}}
            </p>
        </v-card-text>       
    </v-card>
</v-container>
</template>


<style scoped>
.borde {
    border:	#DAA520 10px double;
    background: #eeefe8;
}
.fondoRey{
    background: #eeefe8;
    border: solid #a6a89a 1px;
}
</style>
<script>
export default {
    name: 'comTitu',

    data: () => ({
 
    ventana: 0,
    titulos:[
        {
            colorImg:'pixel',
            colorCard:'pixelCard',
            colorTexto:'textBlanco',
            colorAcre:'colorAcredirado',
            nombre: 'Front End Developer',
            des:'HTML5, CSS3, Web Responsive, SASS, GIT, PWA, Bootstrap, Vuetify, Jquery, Javascript avanzado, ECMAScript, Angular, React, Vue, Vue Cli, Angular conNodeJS. \n (Siguen agregando más contenido).',
            duracion:'Más de 120h',
            acre:'Pixelpro y Microsoft',
            año:'2021',
        },
       
    ],//titulos
    }),//data
}
</script>