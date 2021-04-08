<template>
   <h1> hola {{usa}} {{user}}, como estas? </h1> 
</template>

<script>
export default {
  name:'comP',
  props:['user'],
  data(){
      return{
          usa:'pepe',
      }
  } 
   
}
</script>
