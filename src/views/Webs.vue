<template >
<div class="fondo">
    <v-container>
        <h1>Otras webs</h1>
    </v-container>
<v-container>
<v-row >

<v-col cols="12" md="6">
    
         <v-card id="div1"
      elevation="0"
        width="100%"
     height-md="279"
     
      >
      <v-container class="pr-16">
                <v-row>
                    <v-col cols="12" md="3" lg="2"  class="" >
                    <v-list-item three-line>

                            <v-list-item-avatar
                    tile
                        size="80">
                    
                        <v-img src="../assets/supervivencia1.png"></v-img>
                    </v-list-item-avatar>
                        </v-list-item>
                    </v-col >

                    <v-col cols="12" md="9" lg="10" >
                            <v-list-item three-line>
            <v-list-item-content class="d-flex justify-star">
                    
                        <v-list-item-title class="headline mb-1">
                        Universo Dragon
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Pagina web de ayuda al juego de mesa: <br>  "Dragon ball Super, La Supervivencia del Universo"
                            </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
        </v-col>
         
         </v-row>
     
      
   
                <v-card-text>
                Pagina realizada Con JS-Frameworks Vue CDN, librerias: animate.css, UI-framework: Bootstrap
                </v-card-text>
                    <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        text
                    >
                    ir a
                    </v-btn>
                    </v-card-actions>
    </v-container>
    </v-card>
</v-col>

        <v-col cols="12" md="6">
         
            <v-card id="div2"
      elevation="0"
        width="100%"
      
      >
         <v-container  class="paddingL">
                <v-row>
                    <v-col cols="12" md="3" lg="2"  class="" >
                    <v-list-item three-line>

                            <v-list-item-avatar
                    tile
                        size="80">
                    
                        <v-img src="../assets/supervivencia1.png"></v-img>
                    </v-list-item-avatar>
                        </v-list-item>
                    </v-col >

                    <v-col cols="12" md="9" lg="10" >
                            <v-list-item three-line>
            <v-list-item-content class="d-flex justify-star">
                    
                        <v-list-item-title class="headline mb-1">
                        Universo Dragon
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Pagina web de ayuda al juego de mesa: <br>  "Dragon ball Super, La Supervivencia del Universo"
                            </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
        </v-col>
         
         </v-row>
     
      
   
                <v-card-text>
                Pagina realizada Con JS-Frameworks Vue CDN, librerias: animate.css, UI-framework: Bootstrap
                </v-card-text>
                    <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        text
                    >
                    ir a
                    </v-btn>
                    </v-card-actions>
   </v-container>
    </v-card>

    </v-col>

</v-row>
 </v-container>   
    <!-- <v-img  height="200"  class="construccion"
                contain
    src="@/assets/construccion.jpg"
    >
        
        </v-img>    -->
</div>
</template>

<style scoped>
.fondo{
    background-color: #ff646429;
}
/*contenido goku */
   
    #div1::after{
        content: '';
        position: absolute;
        top: 0px;
        width: 0px;
        height: 100%;
        right: 0px;
        border-top: 100px solid #ffe6e6;
        border-left: 74px solid #ff6347;
        border-bottom: 100px solid #ffe6e6;
    }
   
    
    #div2::before{
        content: '';
        position: absolute;
        top: 0px;
        width: 0px;
       height: 100%;
        right: 0px;
        left: 0px;
        border-top: 100px solid #ffe6e6;
        border-right: 74px solid #4ffc76;
        border-bottom: 100px solid #ffe6e6;
    }
    .paddingL{
        padding-left: 85px !important;
    }


    
/*fin goku */
.v-list-item__subtitle {
    display: grid !important;
}
.v-list-item__title, .v-list-item__subtitle {
    white-space: unset !important;
}
.construccion{
    background-color: black;
}
@media (max-width:336px) { 

}
</style>