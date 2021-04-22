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

            <v-card-title 
            class="pt-1 d-flex justify-center">
                {{item.nombre}}
            </v-card-title> 

            <v-container fluid v-if="item.salir">
                <v-img height="300" contain
                :src="item.frontImg">
                    <div class="altura d-flex justify-space-between align-center">
                        <ul>
                              
                            <div class="cajaIcon">
                                <v-icon v-for="color in item.colorLista" :key="color.id"  :color="color">
                                     mdi-square-rounded  
                                </v-icon>
                            </div>
                        
                               <div class="cajaLista">
                            <li v-for="li in item.lista" :key="li.id" >
                                {{li}}
                            </li>
                             </div>
                        </ul>

                        <ul>
                           <div class="cajaIcon">
                                <v-icon v-for="color2 in item.colorLista2" :key="color2.id"  :color="color2">
                                     mdi-square-rounded  
                                </v-icon>
                            </div>
                        
                               <div class="cajaLista">
                            <li v-for="li2 in item.lista2" :key="li2.id" >
                                {{li2}}
                            </li>
                             </div>
                        </ul>
                    </div>
                </v-img>
            </v-container>
            
            <v-card-subtitle 
            class="salto d-flex justify-center mx-sm-11"
            :class="item.colorTexto">
                {{item.des}} 
            </v-card-subtitle>

            <v-card-subtitle 
            class="d-flex justify-center"
            :class="item.colorTexto">
                {{item.duracion}} 
            </v-card-subtitle>
            
           <div class="d-sm-flex justify-space-between">
                <p :class="item.colorAcre">
                    Expedido el año: {{item.año}}
                </p>
                <p class="d-flex justify-sm-end"
                :class="item.colorAcre">
                    Acreditado: {{item.acre}}
                </p>
            </div>
        </v-card-text>       
    </v-card>
</v-container>
</template>

<style scoped>
.altura{
   height: 300px;
}
.cajaIcon{
    display: grid;
}
.v-icon.v-icon {
    font-size: 31px !important;
    line-height: 1.4 !important;
}
.cajaLista{
    display: grid;
    padding-left: 10px;
}
ul {
    list-style: none;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}
li{
    line-height: 3rem;
}
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
            frontImg: require('@/assets/frontSin.png'),
            colorImg:'pixel',
            colorCard:'pixelCard',
            colorTexto:'textBlanco',
            colorAcre:'colorAcreditado',
            nombre: 'Front End Developer',
            des:'HTML5, CSS3, Web Responsive, SASS, Bootstrap, Vuetify,\nGIT,PWA, Jquery, Javascript avanzado, ECMAScript, Angular, React, Vue, Vue Cli, Angular conNodeJS. \n (Siguen agregando más contenido).',
            duracion:'Más de 120h',
            acre:'Pixelpro y Microsoft',
            año:'2021',
            salir:true,
            lista:['Version Control','Package managers','JS Frameworks','JS Preprocessors','Back-End'],
            lista2:['Core','Image Manipulations','UI Frameworks','Responsible Web design','CSS Preprocessors'],
            colorLista:['red','blue','black','red','blue'],
            colorLista2:['red','blue','black','red','blue']
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