<template>
<div id="cv"     Target>
<div class="separador"></div>

<v-container class="pa-0">

  <v-row>
    <v-col >
      <v-item-group  
      v-model="ventana"
      mandatory>
        <v-row >
          <v-col class="d-flex justify-center" 
          v-for="item in titulos" :key="item.id">
            <v-item v-slot="{ active, toggle }">
              <v-btn :color="item.color" outlined
              :disabled="loading"
              :input-value="active"
              @click="toggle(); loader = 'loading'">
                {{item.titulo}}
                <v-icon :loading="loading" :disabled="loading" right>
                  {{item.icono}}
                </v-icon>
              </v-btn>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-col>

    <v-col cols="12" class="mb-5">
      <v-window v-model="ventana" touchless class="fondo">
        <v-window-item v-for="item in titulos" :key="item.id" >
          <v-card flat class="mb-3 transparente">
            <v-card-text  class="pa-0">
              <v-container class="titulo title text-truncate" :class="item.color"> 
                {{item.titulo}}
              </v-container>
              <v-avatar :class="item.color" class="avatarTamaño">
              <v-icon dark size="40"> {{item.icono}} </v-icon>
              </v-avatar>

              <v-row class="d-flex justify-center">
                <v-col cols="12" >

                  <div v-if="ventana==0">   
                  <comCert></comCert>
                  </div>
                  
                  <div v-if="ventana==1">   
                  <comTitu></comTitu>
                  </div>

                  <div v-if="ventana==2">   
                  <comExp></comExp>
                  </div>

                </v-col>
              </v-row>          
            </v-card-text>

            <div  class="d-flex justify-center mt-n10">
              <v-btn role=link @click="$vuetify.goTo('#cv')" color="color1os" >
                <v-icon color="color1" large >mdi-clipboard-arrow-up</v-icon>
              </v-btn>
            </div>

          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>

      
</v-container>
</div>
</template>

<style scoped>
.separador{
  width: 100%;
  height: 77px;
}
/*boton con icono cargando */
.theme--light.v-icon.v-icon.v-icon--disabled {
    color: rgba(255, 5, 5, 0.568) !important; 
    animation: cargando 1s ease  backwards; 
}
  @keyframes cargando { 
   100% {
    transform: rotate(360deg);
  }
  } 
/*Fin boton con icono cargando */
/*WEb .svg https://bgjar.com/ */
.fondo{
    background: url(../assets/Rect.svg) fixed;
    background-size: cover;      
}
.transparente{
  background: transparent !important;
} 
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
.v-progress-circular {
   color:blue;
   background:blue;
  }
</style>


<script>
import comCert from '@/components/ComCertificado.vue';
import comTitu from '@/components/ComTitulo.vue';
import comExp from '@/components/ComExp.vue';
export default {
  name: 'comCv',
  components: {
  comCert, comTitu, comExp
  },
    data: () => ({
      
    loader: null,
    loading: false,
    ventana: 0,
    titulos:[
      {
      titulo: 'Certificados',
      color: 'color1os',
      icono: 'mdi-file-certificate-outline',
      },
      {
      titulo: 'Titulaciones',
      color: 'color2',
      icono: 'mdi-certificate-outline',
      },

      {
      titulo: 'Experiencia',
      icono: 'mdi-ballot-outline ',
      color:'color4',
      },
    ],

    }),//data
    watch: {
        loader () {
          const l = this.loader
          this[l] = !this[l]
          setTimeout(() => (this[l] = false), 1000)
          this.loader = null
        },
      },//watch
}
</script>