<template>
<div>
  <v-footer fixed padless>
    <v-card flat tile width="100%" class="primary text-center">
      <v-card-text>
        <v-btn link class="mx-4" icon
        href="https://www.facebook.com/" target="_blank">
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
        </v-btn>

        <v-btn link class="mx-4" icon
        href="https://twitter.com/login?lang=es" target="_blank">
          <v-icon size="24px">
            mdi-twitter
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>


<style scoped>
@media (max-width:959px) { 
  .v-footer--fixed {
    position: absolute;
}
}/*fin media*/
</style>

<script>
  export default {
  name: 'ComFooter',
  }
</script>