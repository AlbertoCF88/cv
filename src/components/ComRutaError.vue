<template>
<div class="fondo">
    <v-container class="black">
      <v-card>
        <v-img alt="gato durmiendo encima teclado" contain 
        src="../assets/gatopc.webp">
             <v-card-title class="d-flex justify-center text-center 
             color2--text font-weight-black 
             text-md-h1 text-h4 text-sm-h3">
                 Ruta no encontrada
             </v-card-title>
        </v-img>
        </v-card>
    </v-container>
</div>
</template>


<style scoped>
.fondo{
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.v-card__title {
    word-break: break-word;
}
</style>


<script>
export default {
   name: 'comError',
    data:()=>({
    }),//data
 }//export default
</script>