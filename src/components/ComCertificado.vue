<template>
<v-container>
    <v-card shaped class="mx-auto mb-8" max-width="800"
    v-for="item in certificados" :key="item.id" >
        <v-img height="50" contain :class="item.colorImg"
        :src="item.img">
        </v-img>
        <v-card-text 
        :class="item.colorCard"
        class="pt-1">
            <v-row >
                <v-col cols="12" sm="8" class="pb-0">
                    <v-card-title class="pt-1 d-flex justify-center">
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
/*salto + \n en el objeto*/
.salto{
    white-space: pre-line;
}
.textBlanco{
    color: #f5f5f5d4 !important;
}

.horas{
    font-weight: 300 !important;
}
.v-card__title {
    word-break: break-word;
}
/*Pixel */
.pixel{
    background-color: #242524;
}
.pixelCard{
    background-color: #2a8cc8;
    color: whitesmoke !important;
}
.colorAcreditado{
    color: #00639e;
    font-weight: bold;
    margin: 0px 12px;
}
/*Ford */
.ford{
    background-color:#c7d9df;
}
.fordCard{
    background-color:#165191;
    color: whitesmoke !important;
}
.colorAcreditadoFord{
    color:#1f86f9;
    font-weight: bold;
    margin: 0px 12px;
}
/*Cisco */
.cisco{
    background-color:#024e72;
}
.ciscoCard{
    background-color:#05b5f0;
    color: whitesmoke !important;
}
.colorAcreditadoCisco{
    color:#00000055;
    font-weight: bold;
    margin: 0px 12px;
}

</style>


<script>
export default {
    name: 'comCert',

    data: () => ({
 
    certificados:[
        {
            img: require('@/assets/pixel.png'),
            colorImg:'pixel',
            colorCard:'pixelCard',
            colorTexto:'textBlanco',
            colorAcre:'colorAcreditado',
            nombre: 'Front End Developer',
            des:'HTML5, CSS3, Web Responsive, SASS, GIT, PWA, Bootstrap, Vuetify, Jquery, Javascript avanzado, ECMAScript, Angular, React, Vue, Vue Cli, Angular conNodeJS. \n (Siguen agregando más contenido).',
            duracion:'Más de 120h',
            acre:'Pixelpro y Microsoft',
            año:'2021',
        },
        {
            img: require('@/assets/pixel.png'),
            colorImg:'pixel',
            colorCard:'pixelCard',
            colorTexto:'textBlanco',
            colorAcre:'colorAcreditado',
            nombre: 'Curso CSS3',
            des:'Principios fundamentales de uso y aplicación de CSS3.',
            duracion:'20h',
            acre:'Pixelpro y Microsoft',
            año:'2020',
        },
        {
            img: require('@/assets/ford.png'),
            colorImg:'ford',
            colorCard:'fordCard',
            colorTexto:'textBlanco',
            colorAcre:'colorAcreditadoFord',
            nombre: 'Curso KRC4 programación (Robot KUKA)',
            des: 'Descripción del Sistema KUKA KRC4,  Seguridades,Operación, Puesta en servicio,Administración de programa, Principios de la programación de movimientos.',
            duracion:'40h',
            acre:'Ford Motor Company',
            año: '2014',
        },
        {
            img: require('@/assets/cisco.png'),
            colorImg:'cisco',
            colorCard:'ciscoCard',
            colorTexto:'textBlanco',
            colorAcre:'colorAcreditadoCisco',
            nombre: 'Curso CCNA 1 Networking basiscs',
            des: 'Construir redes LAN simples, realizar configuraciones básicas para routers y switches e implementar esquemas de direccionamiento IP.',
            duracion:'70h',
            acre:'Cisco y La Salle',
            año: '2009',
        }
    ],//certificados
    }),//data
}
</script>