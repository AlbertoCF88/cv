<template>
<div>
  <v-footer fixed padless>
    <v-card flat tile width="100%" class="text-center"
    v-model="value"
    :color="color">
      <v-card-actions class="d-flex justify-center">
        <v-btn link class="mx-4" icon color="black"
        role=link href="https://github.com/AlbertoCF88" target="_blank">
          <v-icon size="24px">
            mdi-github
          </v-icon>
        </v-btn>


<a href="/post-it">download pdf</a>


        <v-btn link class="mx-4" icon color="red"
        href="@/assets/cv.pdf" 
        :loading="loading" @click="loader = 'loading'"
        :disabled="loading">
          <v-icon size="24px">
            mdi-download
          </v-icon>
        </v-btn>

        <v-btn link class="mx-4" icon color="blue lighten-1"
        role=link href="mailto: albertocarrascofernandez@hotmail.com" target="_blank">
          <v-icon size="24px">
            mdi-at
          </v-icon>
        </v-btn>

        <v-btn link class="mx-4" icon color="black"
        role=link href="tel:635507429" target="_blank">
          <v-icon size="24px">
           mdi-phone
          </v-icon>
        </v-btn>
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
       methods:{ 
  openInNewTab:function(url){
  var win = window.open(url, '_blank');
  win.focus();
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