<template>
<v-app>
  <v-app-bar app dark height="56" >
    <v-bottom-navigation 
    v-model="value"
    :background-color="color"
    dark shift app>
      <v-slide-group multiple show-arrows>
        <v-slide-item>
          <v-btn :to="{ path: '/'}">
            <span class="font-weight-bold">Inicio</span>
            <v-icon color="#2A7352">mdi-account</v-icon>
          </v-btn>
        </v-slide-item>

        <v-slide-item>
          <v-btn :to="{name: 'Arte'}">
            <span class="font-weight-bold">Arte</span>
            <v-icon color="#2E2A73">mdi-lead-pencil</v-icon>
          </v-btn>
        </v-slide-item>

        <v-slide-item>
          <v-btn :to="{name: 'Webs'}">
            <span class="font-weight-bold">Otras Webs</span>
            <v-icon color="#732A4B" >mdi-remote-desktop</v-icon>
          </v-btn>
        </v-slide-item>

        <v-slide-item>
          <v-btn :to="{name: 'Post-it'}">
            <span class="font-weight-bold">Post-it</span>
            <v-icon color="#70732A">mdi-note-text</v-icon>
          </v-btn>
        </v-slide-item>

      </v-slide-group>
    </v-bottom-navigation>
  </v-app-bar>

    <v-main>
      <v-container fluid mb-16>
        <router-view> </router-view>
      </v-container>
    </v-main>
<comGracias></comGracias>

  <comFooter
    :color="color"
    :value="value"
  ></comFooter>

  </v-app>
</template>

<style>
.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content > *:not(.v-icon) {
    top:100% !important;
}
@media (max-width:959px) { 
  .v-footer--fixed {
    position: absolute;
}
}/*fin media*/
</style>


<script>
import comFooter from '@/components/ComFooter.vue';
import comGracias from '@/components/ComGracias.vue';
export default {
  name: 'App',
  components: {
   comFooter,comGracias
  },
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'color1'
          case 1: return 'color2'
          case 2: return 'color3'
          case 3: return 'color4'
          default: return 'color1'
        }
      },
    },
  

};
</script>
