<template>
<div>
  <h1>{{$route.params.page}} </h1>



  <div  v-for="(item,index) in cuadros" :key="index"> 
    <div v-if="$route.params.page==item.id">
    <h1>{{item.titulo}}</h1>
    <v-carousel  :show-arrows="false">
      <v-carousel-item
      v-for="item in cuadros" :key="item.id"
      :src="item.foto"
      ></v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row class="mt-5 d-flex justify-center">
        <v-col v-for="item in cuadros" :key="item.id"
        
        cols="3">
          <v-img :src="item"
          aspect-ratio="1">
          </v-img>
        </v-col>
      </v-row>
    </v-container> 
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'comCuadro',
 props:{
    cuadros: {
      type: Array,
    
    },
 },
data:()=>({
 
})
      
  
}
</script>