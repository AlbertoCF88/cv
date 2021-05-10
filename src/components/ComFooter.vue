<template>
<div>

  <v-footer fixed padless>
    <v-card flat tile width="100%" class="text-center"
    v-model="value"
    :color="color">
    
      <v-card-actions class="d-flex justify-center">
        <v-slide-group show-arrows  center-active>

          <v-slide-item v-slot="{toggle}">
            <v-tooltip  top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn aria-label="icono teléfono" v-bind="attrs" v-on="on"
                link class="mx-4" icon color="ico4"
                href="tel:635507429" target="_blank" 
                @click="toggle">
                  <v-icon size="24px">
                    mdi-phone
                  </v-icon>
                </v-btn>
              </template>
              <span>Llamar por teléfono</span>
            </v-tooltip>
          </v-slide-item>

          <v-slide-item v-slot="{toggle}">
            <v-tooltip  top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn aria-label="icono descargar CV" v-bind="attrs" v-on="on"
                link class="mx-4" icon color="ico3"
                role="link" href="/files/cv.pdf" target="_blank"
                :loading="loading" 
                :disabled="loading"
                @click="loader = 'loading'; toggle()">
                  <v-icon size="24px">
                    mdi-download
                  </v-icon>
                </v-btn>
              </template>
              <span>Descargar Cv.pdf</span>
            </v-tooltip>
          </v-slide-item>

          <v-slide-item v-slot="{toggle}">
            <v-tooltip  top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn aria-label="icono Github" v-bind="attrs" v-on="on"
                link class="mx-4" icon color="ico2"
                href="https://github.com/AlbertoCF88" target="_blank" rel="noreferrer"
                @click="toggle">
                  <v-icon size="24px">
                    mdi-github
                  </v-icon>
                </v-btn>
              </template>
              <span>Ir a Github</span>
            </v-tooltip>
          </v-slide-item>

          <v-slide-item v-slot="{toggle}">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn aria-label="icono correo" v-bind="attrs" v-on="on"
                link class="mx-4" icon color="ico1"
                href="mailto: alcafefront@gmail.com" target="_blank" rel="noreferrer"
                @click="toggle">
                  <v-icon size="24px">
                    mdi-at
                  </v-icon>
                </v-btn>
              </template>
              <span>Escribir correo</span>
            </v-tooltip>
          </v-slide-item>

        </v-slide-group> 
      </v-card-actions>
    </v-card>
  </v-footer>
  
</div>
</template>


<style>
.v-progress-circular {
  color:red;
}
</style>

<script>
  export default {
  name: 'comFooter',
    props:[
      'color','value'
    ],
    data () {
      return {
        loader: null,
        loading: false,
      }
    },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 5000)
        this.loader = null
      },
    },
  }
</script>