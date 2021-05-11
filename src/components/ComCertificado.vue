<template>
<v-container>

    <v-card shaped class="mx-auto mb-8" max-width="800"
    v-for="item in certificados" :key="item.id">

        <v-img alt="logoEmpresa" height="50" contain 
        :class="item.colorImg" :src="item.img">
        </v-img>

        <v-card-text 
        :class="item.colorCard"
        class="pt-1">

            <v-card-title 
            class="salto mt-1 d-flex justify-center text-center">
                {{item.nombre}}
            </v-card-title> 
   
            <v-container fluid v-if="item.salir">
                <!--móvil-->   
                <comLeye class="ocularLeyenda justify-center mt-0 mb-4"
                :certificados="certificados">
                </comLeye>
                <!--Pc-->   
                <v-img alt="front-end-spectrum" height="300" contain
                :src="item.frontImg">
                
                    <div  class="desaparece altura d-flex justify-space-between align-center">
                        <div class="d-flex"> 
                            <div class="cajaIcon">
                                <v-icon 
                                v-for="color in certificados[0].colorLista" 
                                :key="color.id"  
                                :color="color">
                                    mdi-square-rounded  
                                </v-icon>
                            </div>
                            <ul class="cajaLista text-subtitle-2">
                                <li 
                                v-for="li in certificados[0].lista"
                                :key="li.id" >
                                    {{li}}
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex">
                            <div class="cajaIcon">
                                <v-icon 
                                v-for="color2 in certificados[0].colorLista2" 
                                :key="color2.id"  
                                :color="color2">
                                    mdi-square-rounded  
                                </v-icon>
                            </div>
                            <ul class="cajaLista text-subtitle-2">
                                <li 
                                v-for="li2 in certificados[0].lista2" 
                                :key="li2.id">
                                    {{li2}}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!--cargando-->
                    <template v-slot:placeholder>
                        <comcargando circulo="color1" circuloAltura="70"></comcargando>
                    </template>
                    <!--cargando-->
                </v-img>
            </v-container>
            
            <v-card-subtitle 
            class="salto d-flex justify-center mx-sm-11 mt-2 text-justify"
            :class="item.color">
                {{item.des}} 
            </v-card-subtitle>

            <v-card-subtitle 
            class="d-flex justify-center"
            :class="item.color">
                {{item.duracion}} 
            </v-card-subtitle>
            
           <div class="d-sm-flex justify-space-between añoAcreditacion">
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
@media (max-width:840px) {
    .desaparece{
        opacity: 0;
    }
   .ocularLeyenda{
       display: block !important;
    }
}
.ocularLeyenda{
       display: none;
    }
.altura{
   height: 300px;
}
.cajaIcon{
    display: grid;
}
.v-card__title {
    font-size: 1.5rem;
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
    flex-wrap: initial;
    padding: 0;
}
li{
    line-height: 3rem;
    color: black;
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
    font-family: 'Zen Dots', cursive;
}
.añoAcreditacion{
    font-weight: bold;
    margin: 0px 12px;
    line-height:1rem;
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
}
</style>


<script>
import comLeye from '@/components/ComLeyenda.vue';
import comcargando from "@/components/ComCargando.vue"
export default {
    name: 'comCert',
    components:{
        comLeye, comcargando
    },
    data: () => ({
 
    certificados:[
        {
            img: require('@/assets/pixel.webp'),
            frontImg: require('@/assets/frontSin.webp'),
            colorImg:'pixel',
            colorCard:'pixelCard',
            color:'textBlanco',
            colorAcre:'colorAcreditado',
            nombre: 'Front End Developer',
            des:'HTML5, HTML5-semántico (SEO y accesibilidad), Tipografía, CSS3, Web Responsive, SASS, Bootstrap, Git, PWA, Jquery, Javascript avanzado, Javascript orientado a Objetos, ECMAScript, Angular, React, Vue, Vue Cli, Angular conNodeJS.\n \nAdemás de ampliar por mi cuenta contenido como: Gimp, Vuetify y mejorar las tecnologías aprendidas.',
            duracion:'Más de 120h',
            acre:'Pixelpro y Microsoft',
            año:'2021',
            salir:true,
            lista:['Core','Image Manipulations','UI Frameworks','Responsible Web design','CSS Preprocessors'],
            lista2:['Version Control','Package managers','JS Frameworks','JS Preprocessors','Back-End'],
            colorLista:['#737ec8','#448aff','#c5cae9','#009688','#b1dfdb'],
            colorLista2:['#607d8b','#e64a19','#ff9800','#d32f2f','#e38ad7']
        },
        {
            img: require('@/assets/pixel.webp'),
            colorImg:'pixel',
            colorCard:'pixelCard',
            color:'textBlanco',
            colorAcre:'colorAcreditado',
            nombre: 'CSS3',
            des:'Principios fundamentales de uso y aplicación de CSS3.',
            duracion:'20h',
            acre:'Pixelpro y Microsoft',
            año:'2020',
        },
        {
            img: require('@/assets/ford.webp'),
            colorImg:'ford',
            colorCard:'fordCard',
            color:'textBlanco',
            colorAcre:'colorAcreditadoFord',
            nombre: 'KRC4 programación \n (Robot KUKA)',
            des: 'Descripción del Sistema KUKA KRC4, Seguridades, Operación, Puesta en servicio,Administración de programa, Principios de la programación de movimientos.',
            duracion:'40h',
            acre:'Ford Motor Company',
            año: '2014',
        },
        {
            img: require('@/assets/cisco.webp'),
            colorImg:'cisco',
            colorCard:'ciscoCard',
            color:'textBlanco',
            colorAcre:'colorAcreditadoCisco',
            nombre: 'CCNA 1 Networking basiscs',
            des: 'Construir redes LAN simples, realizar configuraciones básicas para routers y switches e implementar esquemas de direccionamiento IP.',
            duracion:'70h',
            acre:'Cisco y La Salle',
            año: '2009',
        }
    ],//certificados
    }),//data
}
</script>