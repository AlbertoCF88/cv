<template>
<div>
  <h1>Torre Paterna </h1>

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
  name: 'comTorre',

  data: () => ({
    fotos:[
      require('@/assets/cuadros/torrePaterna/1.png'),
      require('@/assets/cuadros/torrePaterna/2.png'),
      require('@/assets/cuadros/torrePaterna/3.png'),
    ],

    }),//data
  
}
</script>