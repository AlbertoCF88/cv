<template>
<v-container>
    <v-card shaped class="mx-auto mt-2" max-width="800"
    v-for="item in titulos" :key="item.id" >
        <v-img height="50" contain class="fondoRey"
        src="@/assets/rey2.png">
        </v-img>
        <v-card-text class="pt-1 borde ">
            <v-card-title class="titulo d-flex justify-center">
                {{item.nombre}}
            </v-card-title> 
        
            <v-card-subtitle class="d-flex justify-center mt-1 text-subtitle-1">
                {{item.acre}} 
            </v-card-subtitle>

            <v-card-subtitle class="d-flex justify-end text-caption">
                Realizado el año: {{item.año}}
            </v-card-subtitle>
        </v-card-text>       
    </v-card>
</v-container>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
.titulo{
    font-family: 'Bree Serif', serif;
}
.v-card__title {
    word-break: break-word;
    color: #71a9d9;
}
.v-application .text-subtitle-1 {
    font-weight: 600;
}
.v-application .text-caption {
    font-weight: 800;
}
.borde {
    border:	#DAA520 10px double;
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
            nombre: 'F.P. Superior Instalaciones Electrotécnicas',
            acre:'CIPFP Faitanar, Quart de Poblet',
            año:'(2010 - 2012)',
        },
        {
            nombre: 'F.P. Superior, Sistemas de Telecomunicación e Informáticos',
            acre:'Centro Privado Escuela Profesional La Salle, Paterna',
            año:'(2007 - 2009)',
        },
        {
            nombre: 'F.P. Medio, Equipos Electrónicos de Consumo',
            acre:'Centro Privado Escuela Profesional La Salle, Paterna',
            año:'(2005 - 2007)',
        },
    ],//titulos
    }),//data
}
</script>