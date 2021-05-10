<template>
<div class="text-center">

    <v-snackbar 
    v-model="snackbar"
    :timeout="timeout">
        <span class="color4--text">
            {{text}} 
            <v-icon small color="color4">
               mdi-exclamation 
            </v-icon>
            <v-icon color="color4">
               mdi-exclamation 
            </v-icon> 
            <v-icon large color="color4">
               mdi-exclamation 
            </v-icon>   
        </span> 
        <template v-slot:action="{ attrs }">
            <v-btn aria-label="aspa cerrar" color="color3" icon v-bind="attrs"
            @click="snackbar = false">
                <v-icon >
                    mdi-close-outline
                </v-icon>
            </v-btn>
        </template>
    </v-snackbar>

</div>
</template>

<script>
  export default {
    name: 'comGracias',
    data: () => ({
      snackbar: true,
      text: '¡ Gracias por visitar mi WEB',
      timeout: 4000,
    }),
  }
</script>