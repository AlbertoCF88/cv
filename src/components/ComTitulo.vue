<template>
<v-container>

<v-row >
  <v-col >
    <v-item-group  
    v-model="ventana"
    mandatory>
      <v-row >
        <v-col  class="d-flex justify-center" v-for="item in items" :key="item.id">
          <v-item v-slot="{ active, toggle }">
            <v-btn color="color1os" text
            :input-value="active"
            @click="toggle">
              {{item.titulo}}
            </v-btn>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-col>

  <v-col cols="12">
    <v-window v-model="ventana"
    class="elevation-1" vertical>
      <v-window-item v-for="item in items" :key="item.id">
        <v-card flat>
          <v-card-text>
            <v-container class="titulo title" :class="item.color"> 
              {{item.titulo}}
            </v-container>
            <v-avatar :class="item.color" class="avatarTamaño">
            <v-icon dark size="40"> {{item.icono}} </v-icon>
            </v-avatar>

            <v-row class="d-flex justify-center">
              <v-col cols="12"  >
                <v-card class="mx-auto mt-2"
                v-for="(titulo, index) in item.cert" :key="index.titulo">
              
                  <v-img height="50" contain
                   v-for="(imge, index) in item.img" :key="index"
                  :src="index.imge" >
                  <span v-if="item.id">{{item.id}}</span>
                  </v-img>
             
                  <v-card-title > {{titulo}} </v-card-title> 
                  <span    v-for="(des, index) in item.des" :key="index">{{des.length}} </span>     
                </v-card>
              </v-col>
            </v-row>          
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-col>

  <v-col >
    <v-item-group  
    v-model="ventana"
    mandatory>
      <v-row >
        <v-col  class="d-flex justify-center" v-for="item in items" :key="item.id">
          <v-item v-slot="{ active, toggle }">
            <v-btn color="color1os" icon 
            :input-value="active"
            @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-col>
</v-row>

</v-container>
</template>

<style scoped>
.v-avatar {
  display: block;
  bottom: 60px;
  right: 13px;
}
.avatarTamaño{
  height: 75px !important;
  min-width: 75px !important;
  width: 75px !important;
}
.titulo{
  padding-left: 4rem;
  height: 3rem;
  color: white;
}
</style>


<script>
export default {
    name: 'comTitulo',

    data: () => ({
 
      ventana: 0,
      items: [
        { titulo: 'Certificados' ,
          icono: 'mdi-file-certificate-outline',
          color:'color1os',
          /* para extraer una imagen desde una array */
          img: [
            require('@/assets/pixel.png'),
            require('@/assets/pixel.png'),
            require('@/assets/ford.png'),
            require('@/assets/cisco.png'),
            ],
          cert:[
            'Front End Developer',
            'Curso CSS3',
            'Curso KRC4 programación (Robot KUKA)',
            'Curso CCNA 1 Networking basiscs'
            ],
          des:[
            'HTML5, CSS3, Javascript avanzado, ECMAScript, Angular, React, Vue, Angular con NodeJS, (Siguen agregando más material)',
            'Principios fundamentales de uso y aplicación de CSS3',
            'Programación con Robots Kuka',
            'Construir redes LAN simples, realizar configuraciones básicas para routers y switches e implementar esquemas de direccionamiento IP.'
            ],
          duracion:[
             'Más de 120h',
             '20h',
             '40h',
             '70h',
          ],
          acre:[
            'Pixelpro y Microsfot',
            'Pixelpro y Microsfot',
            'Ford Motor Company',
            'CISCO y La Salle'
          ],
          año:[
            '2021',
            '2020',
            '2014',
            '2009',
          ],
        },
        /*Titulaciones------------ */
        { 
          titulo: 'Titulaciones' ,
          icono: 'mdi-certificate-outline',
          color:'color2',
          cert:['a','b'],
          des:['desc a',
          'desc b'],
        },
        /*Experiencia------------ */
        { 
          titulo: 'Experiencia' ,
          icono: 'mdi-ballot-outline ',
          color:'color4',
          cert:['a','b'],
          des:['desc a',
          'desc b'],
        },
       
      ],

    }),

}
</script>