<template >
<comP :user="user"></comP>
</template>




<script>
import comP from '@/components/ComP.vue'

export default {
  name: 'Arte',
  components: {
  comP
  },
  data(){
      return{
          user:"alberto",
      }
  }
}
</script>
