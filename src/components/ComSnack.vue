<template>
    
<v-snackbar v-model="snackbar"  top rounded="pill" >
        {{ mensaje }}
        <template v-slot:action="{ attrs }">
            <v-btn  v-bind="attrs" 
            icon color="pink"  @click="snackbar = false">
                <v-icon> mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>