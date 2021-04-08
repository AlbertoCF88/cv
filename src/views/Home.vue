<template>
<div>
<comTarjeta ></comTarjeta> 



</div>
</template>


<script>
import comTarjeta from '@/components/ComTarjeta.vue';

export default {
  name: 'Home',
  components: {
   comTarjeta
  },
//   data: () => ({
//     loading: false,
// Texto:'hola,'
//   }),

//   watch: {
//     loading (val) {
//       if (!val) return

//       setTimeout(() => (this.loading = false), 3000)
//     },
//   },
}

</script>

