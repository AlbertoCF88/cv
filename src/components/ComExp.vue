<template>
<v-container>
    <v-card class="mx-auto mb-8" max-width="800"
    v-for="item in exp" :key="item.id" >
        <v-img height="50" contain :class="item.colorImg"
        :src="item.img">
        </v-img>
        <v-card-text 
        :class="item.colorCard"
        class="pt-1">
            <v-card-title 
            class="text-sm-h4 d-flex justify-center">
                {{item.nombre}}
            </v-card-title> 
        
            <v-card-subtitle 
            class="d-flex justify-center font-italic puesto"
            :class="item.colorTexto">
                {{item.puesto}} 
            </v-card-subtitle>

            <v-card-subtitle 
            class="salto mx-md-16 text-sm-subtitle-1"
            :class="item.colorTexto">
                {{item.des}}
            </v-card-subtitle>
           
            <p class="d-flex justify-end"
            :class="item.colorAño">
                {{item.año}}
            </p>
        </v-card-text>       
    </v-card>
</v-container>
</template>

<style scoped>
/*salto + \n en el objeto*/
.puesto{
    font-weight: 600;
}
.salto{
    white-space: pre-line;
}
.textBlanco{
    color: #f5f5f5d4 !important;
}
.v-card__title {
    word-break: break-word;
    letter-spacing: 0.08em;
}
/*bino */
.bino{
    background-color:#0030c0;
}
.binoCard{
    background-color:#cd253a;
    color: whitesmoke !important;
    border:#0030c0 solid 5px;
}
.colorAñoBino{
    color:#ff6073;
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
.colorAñoFord{
    color:#1f86f9;
    font-weight: bold;
    margin: 0px 12px;
}
/*paterna */
/*autrial */
/*sigma */
/*inter */
/*serrano */


</style>


<script>
export default {
    name: 'comExp',

    data: () => ({
 
    exp:[
        {
            img: require('@/assets/bino.png'),
            colorImg:'bino',
            colorCard:'binoCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoBino',
            nombre: 'Binoovo Smart Industry',
            puesto:'Técnico electricista',
            des:'Fabricación de cuadros fotovoltaicos.',
            año:'Junio de 2019 – octubre de 2020 (1 año 5 meses)',
        },
        {
            img: require('@/assets/ford.png'),
            colorImg:'ford',
            colorCard:'fordCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoFord',
            nombre:'Ford Motor Company',
            puesto:'Operario de línea y mantenimiento',
            des:'➤ (2013-2018): Planta de carrocerías como auxiliar de jefe de equipo, controlando el proceso informático, mecánico y robótico.\n➤ (2018-2019): Planta de montaje (acabado final del vehículo) usando pistolas eléctricas de apriete.',
            año:'Junio de 2013 - junio de 2019 (6 años 1 mes)',
        },
        {
            img: require('@/assets/paterna.png'),
            colorImg:'paterna',
            colorCard:'paternaCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoPaterna',
            nombre:'Ayuntamiento Paterna',
            puesto:'Técnico electricista (La Dipu te beca)',
            des:'Instalar, reparar y mantener las estructuras eléctricas de los edificios de la propiedad del ayuntamiento, además de instalaciones en exteriores de alumbrado en las vías urbanas.',
            año:'Junio de 2012 - agosto de 2012 (3meses)',
        },
        {
            img: require('@/assets/autrial.jpg'),
            colorImg:'autrial',
            colorCard:'autrialCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoAutrial',
            nombre:'Autrial - WEG Group',
            puesto:'Técnico electricista en prácticas',
            des:'Fabricación de cuadros eléctricos de BT: mecanizado, cableado, programación y realización de esquemas eléctricos.',
            año:'Marzo de 2012 - mayo de 2012 (3 meses)',
        },
        {
            img: require('@/assets/sigma.jpg'),
            colorImg:'autrial',
            colorCard:'autrialCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoSigma',
            nombre:'Sigma Inspección organismo de control autorizado',
            puesto:'Técnico de telecomunicación en prácticas',
            des:'Inspecciones acústicas y redacción de informes.',
            año:'Marzo de 2009 - mayo de 2009 (3 meses)',
        },
        {
            img: require('@/assets/inter.png'),
            colorImg:'inter',
            colorCard:'interCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoInter',
            nombre:'Intertronic',
            puesto:'Técnico electrónico en prácticas',
            des:'Fabricación de inductivos (soldadura electrónica y encapsulado).',
            año:'Marzo de 2007 - mayo de 2007 (3 meses) ',
        },
        {
            img: require('@/assets/serrano.png'),
            colorImg:'serrano',
            colorCard:'serranoCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoSerrano',
            nombre:'Cárnicas Serrano',
            puesto:'Operario de línea',
            des:'Envasado y mantenimiento de máquinas.',
            año:'Junio de 2006 - julio de 2006 (2 meses)',
        },
       
    ],//Exp
    }),//data
}
</script>