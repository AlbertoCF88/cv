<template>
<v-app>
  <v-app-bar app dark height="56">
    <v-bottom-navigation 
    v-model="value"
    :background-color="color"
    dark shift app>
      <v-slide-group  show-arrows  center-active>
        <v-slide-item  v-slot="{toggle}">
          <v-btn title="Página de inicio" :to="{ path: '/'}" @click="toggle">
            <span class="font-weight-bold">Inicio</span>
            <v-icon color="ico1">mdi-account</v-icon>
          </v-btn>
        </v-slide-item>

        <v-slide-item  v-slot="{toggle}">
          <v-btn title="Arte" :to="{name: 'Arte'}" @click="toggle">
            <span class="font-weight-bold">Arte</span>
            <v-icon color="ico2">mdi-lead-pencil</v-icon>
          </v-btn>
        </v-slide-item>

        <v-slide-item  v-slot="{toggle}">
          <v-btn title="Otras Webs" :to="{name: 'Webs'}" @click="toggle">
            <span class="font-weight-bold">Webs</span>
            <v-icon color="ico3" >mdi-remote-desktop</v-icon>
          </v-btn>
        </v-slide-item>

      </v-slide-group>
    </v-bottom-navigation>
  </v-app-bar>

  <v-main>
    <router-view> </router-view>
  </v-main>

  <comGracias></comGracias>

  <comFooter
    :color="color"
    :value="value"
  ></comFooter>

</v-app>
</template>

<style>
/*main se quede pegando al footer abajo */
.v-main {
  padding: 52px 0px  !important;
}
.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content > *:not(.v-icon) {
  top: 19px !important;
  font-size: 19px;
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
    },//computed
};
</script>
