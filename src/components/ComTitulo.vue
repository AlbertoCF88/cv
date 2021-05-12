<template>
<v-container>

    <v-card class="mx-auto mb-8" max-width="800"
    v-for="item in titulos" :key="item.id" >
        <v-img height="50" alt="logo España y comunidad Valenciana" contain class="fondoRey"
        src="@/assets/rey.webp">
        </v-img>
        <v-card-text class="pt-1 borde">
            <v-card-title class="salto titulo d-flex justify-center tituloMovil text-center">
                {{item.nombre}}
            </v-card-title> 
        
            <v-card-subtitle class="d-flex justify-center mt-1 text-subtitle-2 text-md-subtitle-1">
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
@media (max-width:600px) {
    .tituloMovil {
        font-size:1rem;
    }
}
/*salto + \n en el objeto*/
.salto{
    white-space: pre-line;
}
.v-card{
    border-radius: 24px 24px 0 0;
}
.v-card__title {
    word-break: break-word;
    color: #71a9d9;
    font-family: 'Noticia Text', serif;
    line-height: 1.5rem !important;
}
.text-subtitle-1 ,.text-subtitle-2 {
    font-weight: 800;
}
.text-caption {
    font-weight: 800;
    color:#DAA520 !important;
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
 
    titulos:[
        {
            nombre: 'F.P. Superior\nInstalaciones Electrotécnicas',
            acre:'CIPFP Faitanar, Quart de Poblet',
            año:'(2010 - 2012)',
        },
        {
            nombre: 'F.P. Superior\nSistemas de Telecomunicación e Informáticos',
            acre:'Centro Privado Escuela Profesional La Salle, Paterna',
            año:'(2007 - 2009)',
        },
        {
            nombre: 'F.P. Medio\nEquipos Electrónicos de Consumo',
            acre:'Centro Privado Escuela Profesional La Salle, Paterna',
            año:'(2005 - 2007)',
        },
    ],//titulos
    }),//data
}
</script>