<template>
<div>
  
<v-row >
   <v-col cols ="12"  v-for="item in items" :key="item.id">
    <v-item-group  class="d-flex justify-center"
    v-model="ventana"
      mandatory>
        <v-item 
        v-slot="{ active, toggle }">
          <v-btn text color="color1os"
            :input-value="active"
            @click="toggle">
              <v-icon>{{item.titulo}}</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-col>

    <v-col cols="12">
      <v-window v-model="ventana"
      class="elevation-1" vertical>
        <v-window-item v-for="item in items" :key="item.id">
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4"
                ></v-avatar>
                <strong class="title">Title {{item.titulo}}</strong>
                <v-spacer></v-spacer>
              </v-row>
                      <v-row class="d-flex justify-center">
                        <v-col cols="12"  >
                              <v-card class="mx-auto mt-2"
                              v-for="(titulo, index) in item.cert" :key="index"
                                      
                                      
                                        >

                                  <v-img
                                  height="50"
                                  contain
                                  src="@/assets/pixel.png"
                                ></v-img>
                                  <v-card-title>{{titulo}}</v-card-title>
                                                          
                                        
                              </v-card>
                        </v-col>
                      </v-row>
                      
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>


  </v-row>
</div>
</template>

<style scoped>

</style>


<script>
export default {
    name: 'comTitulo',

    data: () => ({
 
      ventana: 0,
      items: [
        { titulo: 'Certificados' ,
          cert:['front','Curso CSS3'],
          des:['(400h), acreditado por Pixelpro (año 2020). Estudiando actualmente',
          '(20h), acreditado por Microsoft (año 2020).'],
          
        
        },
        { 
          titulo: 'Titulaciones' ,
          cert:['a','b'],
          des:['desc a',
          'desc b'],
        },
        { 
          titulo: 'Click Me3'
        },
        { 
          titulo: 'Click Me 2'

        },
      ],

    }),

}
</script>