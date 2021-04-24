<template>
<div>
  <h1>Tana</h1>

  <v-carousel  :show-arrows="false">
    <v-carousel-item
     v-for="item in fotos" :key="item"
      :src="item"
    ></v-carousel-item>
  </v-carousel>

  <v-container>
    <v-row class="mt-5 d-flex justify-center">
      <v-col v-for="item in fotos" :key="item"
      
      cols="3">
        <v-img :src="item"
        aspect-ratio="1">
        </v-img>
      </v-col>
    </v-row>
  </v-container>

</div>
</template>

<script>
export default {
  name: 'comAna',

  data: () => ({
    fotos:[
      require('@/assets/cuadros/ana/1.png'),
      require('@/assets/cuadros/ana/2.png'),
      require('@/assets/cuadros/ana/3.png'),
    ],

    }),//data
  
}
</script>