<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="color1"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Leyenda
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline color1 d-flex justify-center"  >
          Leyenda
        </v-card-title>
        <!--un if dentro de un for...--->
        <v-card-text  
        v-for="item in certificados" :key="item.id" 
        v-if="item.salir"
        class="d-flex justify-space-between align-center overflow-y-auto">
    
        <ul > 
            <div class="cajaIcon">
                <v-icon 
                v-for="color in item.colorLista" 
                :key="color.id"  
                :color="color">
                     mdi-square-rounded  
                </v-icon>
            </div>
            <div class="cajaLista text-subtitle-2">
                <li 
                v-for="li in item.lista" 
                :key="li.id" >
                    {{li}}
                </li>
            </div>
        </ul>

        <ul>
            <div class="cajaIcon">
                <v-icon 
                v-for="color2 in item.colorLista2" 
                :key="color2.id"  
                :color="color2">
                    mdi-square-rounded  
                </v-icon>
            </div>

            <div class="cajaLista text-subtitle-2">
                <li 
                v-for="li2 in item.lista2" 
                :key="li2.id">
                    {{li2}}
                </li>
            </div>
        </ul>
      
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="color1os"
            text
            @click="dialog = false">
                Cerrar
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.theme--light.v-card {
    background-color: #ffffff96;
}
.headline {
    color: white;
}

.v-application .text-subtitle-2 {
    font-weight: none;
    color: black;
    text-shadow: 0 0 0px black;
}
.v-card-text{
    background: #dcdcdca8 !important;
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
    width: 168px;
}
ul {
    list-style: none;
    display: flex;
    align-content: center;
    flex-wrap: initial;
}
li{
    line-height: 3rem;
}
</style>


<script>

export default {
    name: 'comLeye',
    props:[
        
            'certificados'
    ],
    data: () => ({
        dialog:false,
    })
   
}
</script>