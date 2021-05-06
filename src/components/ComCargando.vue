 <template>
    <v-row
    class="fill-height ma-0"
    align="center"
    justify="center">
         <v-progress-circular
        indeterminate 
        :color="circulo"
        :size="circuloAltura">
        </v-progress-circular>
    </v-row>
</template>

<script>
export default {
   name: 'comCargando',
   components:{
    },
  props:['circulo','circuloAltura'],
    data:()=>({
    
    }),//data
 }//export default
</script>