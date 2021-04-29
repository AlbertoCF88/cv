<template >
<div class="fondo">
    <v-container>
        <h1>Otras webs</h1>
    </v-container>

<div id="triangulo1" class="SeccionTriangulo">
 
</div>

<v-container class="goku1"> 
    <v-card
    color="transparent"
 
    max-width="344"
    outlined>
         <v-avatar
       fab
        size="80"
       >
        <v-img src="../assets/supervivencia1.png"></v-img>
      </v-avatar>

    <span>Universo Dragon</span>
    <p>Pagina web de ayuda al juego de mesa "Dragon ball Super: La Supervivencia del Universo"</p>
    </v-card>
</v-container>

<!-- file:///C:/Users/Alberto/Desktop/Programacion%20WEBs/UDEMY/kit%20muchas%20webs%20UDEMY/76%20Template%20html5%20responsive/html5up-solid-state/index.html# -->

 <v-img  height="200"  class="construccion"
              contain
 src="@/assets/construccion.jpg"
 >
     
     </v-img>   
</div>
</template>

<style scoped>
.fondo{
    background-color: #ff646429;
}
.construccion{
    background-color: black;
}
.SeccionTriangulo{
    width: 100%;
    height: 500px;
    border-left: 100vw solid #428bca;
    border-bottom: 500px solid #6e0961;; 
}
.goku1{
    position: relative;
    bottom: 474px;
    width: 90%;
}
</style>