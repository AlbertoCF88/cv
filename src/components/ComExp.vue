<template>
<v-container>

    <v-card class="mx-auto mb-8" max-width="800"
    v-for="item in exp" :key="item.id" >
        <v-img :alt="'logo'+ item.nombre" height="50" contain :class="item.colorImg"
        :src="item.img">
        </v-img>
        <v-card-text 
        :class="item.colorCard"
        class="pt-1">
            <v-card-title 
            class="salto text-sm-h4 d-flex justify-center text-center">
                {{item.nombre}}
            </v-card-title> 
        
            <v-card-subtitle 
            class="salto d-flex justify-center font-italic puesto text-center"
            :class="item.colorTexto">
                {{item.puesto}} 
            </v-card-subtitle>

            <v-card-subtitle 
            class="salto mx-md-16 text-sm-subtitle-1 d-flex justify-center text-justify"
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
/*pulsia*/
.pulsia{
    background-color:#dfcf26;
}
.pulsiaCard{
    background-color:#4b4c38;
    color: whitesmoke !important;
    border:#dfcf26 solid 5px;
}
.colorAñoPulsia{
    color:#8b8e4b;
    font-weight: bold;
    margin: 0px 12px;
}
/*viviendo cuento */
.cuento{
    background-color:#030303;
}
.cuentoCard{
    background-color:#e8e6df;
    color: black !important;
    border:#030303 solid 5px;
}
.colorAñoCuento{
    color:rgb(75, 75, 75);
    font-weight: bold;
    margin: 0px 12px;
}
/*hort */
.hort{
    background-color:#f17618;
}
.hortCard{
    background-color:#0eae58;
    color: whitesmoke !important;
    border:#f17618 solid 5px;
}
.colorAñoHort{
    color:#00ff76;
    font-weight: bold;
    margin: 0px 12px;
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
    border:#c7d9df solid 5px;
}
.colorAñoFord{
    color:#1f86f9;
    font-weight: bold;
    margin: 0px 12px;
}
/*paterna */
.paterna{
    background-color:#313131;
}
.paternaCard{
    background-color:#d0ab03;
    color: whitesmoke !important;
    border:#313131 solid 5px;
}
.colorAñoPaterna{
    color:#847010;
    font-weight: bold;
    margin: 0px 12px;
}
/*autrial */
.autrial{
    background-color:#ffffff;
}
.autrialCard{
    background-color:#2a6197;
    color: whitesmoke !important;
    border:#ffffff solid 5px;
}
.colorAñoAutrial{
    color:#3f94e7;
    font-weight: bold;
    margin: 0px 12px;
}
/*sigma */
.sigma{
    background-color:#ffffff;
}
.sigmaCard{
    background-color:#131212;
    color: whitesmoke !important;
    border:#ffffff solid 5px;
}
.colorAñoSigma{
    color:#8a6262;
    font-weight: bold;
    margin: 0px 12px;
}
/*inter */
.inter{
    background-color:#ffffff;
}
.interCard{
    background-color:#48912a;
    color: whitesmoke !important;
    border:#ffffff solid 5px;
}
.colorAñoInter{
    color:#61c437;
    font-weight: bold;
    margin: 0px 12px;
}
/*serrano */
.serrano{
    background-color:#ed1b2e;
}
.serranoCard{
    background-color: #f9a139;
    color: whitesmoke !important;
    border:#ed1b2e solid 5px;
}
.colorAñoSerrano{
    color:#d07407;
    font-weight: bold;
    margin: 0px 12px;
}
</style>


<script>
export default {
    name: 'comExp',

    data: () => ({
 
    exp:[
        {
            img: require('@/assets/pulsia.jpg'),
            colorImg:'pulsia',
            colorCard:'pulsiaCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoPulsia',
            nombre: 'Pulsia \n IT Solutions S.L.',
            puesto:'Técnico TI de la Universidad de Valencia',
            des:'Servicio integral de atención al usuario en soporte, administración y diseño de telecomunicaciones y sistemas informáticos.',
            año:'Puesto actual',
        },
        {
            img: require('@/assets/cuento.png'),
            colorImg:'cuento',
            colorCard:'cuentoCard',
            colorTexto:'',
            colorAño:'colorAñoCuento',
            nombre: 'Viviendo Cuento\n  Experiencias para empresas',
            puesto:'Programador Freelance',
            des:'Aplicación en C# para guardar facturas en una base de datos SQl\n(añadir, modificar, filtros de búsqueda e impreso resumen de la factura ) ',
            año:'Agosto de 2022 – agosto de 2022 (1 mes)',
        },
        {
            img: require('@/assets/hort.png'),
            colorImg:'hort',
            colorCard:'hortCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoHort',
            nombre: 'Hort Alba',
            puesto:'Técnico programador en prácticas',
            des:'Mejora de la web: https://www.naranjasalbagarces.com \n Tecnologías: PHP, SQL y Bootstrap.',
            año:'Abril de 2022 – abril de 2022 (1 mes)',
        },
        {
            img: require('@/assets/bino.webp'),
            colorImg:'bino',
            colorCard:'binoCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoBino',
            nombre: 'Binoovo\n Smart Industry',
            puesto:'Técnico electricista',
            des:'Fabricación de cuadros fotovoltaicos.',
            año:'Junio de 2019 – octubre de 2020 (1 año 5 meses)',
        },
        {
            img: require('@/assets/ford.webp'),
            colorImg:'ford',
            colorCard:'fordCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoFord',
            nombre:'Ford\nMotor Company',
            puesto:'Operario de línea y mantenimiento',
            des:'➤ (2013-2018): Planta de carrocerías como auxiliar de jefe de equipo, controlando el proceso informático, mecánico y robótico.\n➤ (2018-2019): Planta de montaje (acabado final del vehículo) usando pistolas eléctricas de apriete.',
            año:'Junio de 2013 - junio de 2019 (6 años 1 mes)',
        },
        {
            img: require('@/assets/paterna.webp'),
            colorImg:'paterna',
            colorCard:'paternaCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoPaterna',
            nombre:'Ayuntamiento Paterna',
            puesto:'Técnico electricista\n(La Dipu te beca)',
            des:'Instalar, reparar y mantener las estructuras eléctricas de los edificios de la propiedad del ayuntamiento, además de instalaciones en exteriores de alumbrado en las vías urbanas.',
            año:'Junio de 2012 - agosto de 2012 (3meses)',
        },
        {
            img: require('@/assets/autrial.webp'),
            colorImg:'autrial',
            colorCard:'autrialCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoAutrial',
            nombre:'Autrial \n WEG Group',
            puesto:'Técnico electricista en prácticas',
            des:'Fabricación de cuadros eléctricos de BT: mecanizado, cableado, programación y realización de esquemas eléctricos.',
            año:'Marzo de 2012 - mayo de 2012 (3 meses)',
        },
        {
            img: require('@/assets/sigma.webp'),
            colorImg:'sigma',
            colorCard:'sigmaCard',
            colorTexto:'textBlanco',
            colorAño:'colorAñoSigma',
            nombre:'Sigma Inspección',
            puesto:'Técnico de telecomunicación en prácticas',
            des:'Inspecciones acústicas y redacción de informes.',
            año:'Marzo de 2009 - mayo de 2009 (3 meses)',
        },
        {
            img: require('@/assets/inter.webp'),
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
            img: require('@/assets/serrano.webp'),
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