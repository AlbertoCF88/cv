<template>
    <v-card class="mx-auto" max-width="344">
       <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange lighten-2"
          text
        >
          Explore
        </v-btn>
   </v-card-actions>
  
  
     
  
    </v-card>
</template>

<script>
  export default {
    name: 'comTarjeta',

    data: () => ({
      
    }),
  }