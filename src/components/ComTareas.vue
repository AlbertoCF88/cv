<template>

<v-container mt-8>
    <v-row class="mb-7">
        <!--Creador de tareas-->
        <v-col cols="12"  md="6" order-md="2">
            <v-card outlined shaped dark color="deep-purple lighten-2" class="sticky">
                <v-card-title>
                    Añadir tarea:
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="agregar()">
                        <v-row>
                            <v-col>
                        <v-text-field v-model="tituloTarea"
                        counter="18" filled color="deep-purple" label="Titulo tarea:" type="text">
                        </v-text-field>

                            </v-col>
                        </v-row>
                        <v-textarea v-model="texto" auto-grow filled color="deep-purple"
                        label="Descripción tarea:"  rows="2">
                        </v-textarea>
                        <v-btn  type="submit" block 
                        color="deep-purple accent-4" class="mb-1">
                            Agregar tarea
                        </v-btn>
                    </v-form>
                    <v-btn  block  class="mb-1" 
                    @click="ordenar= !ordenar;on = !on"
                    :class="{'ordenarDe':on, 'ordenar': !on}">
                        Ordenar
                            <span v-if="on" class="pl-2">Deshabilitado</span>
                            <span v-else class="pl-2">Habilitado</span>
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>
        <!--Post-it-->
        <v-col cols="12"  md="6" order-md="1" class="mb-13 pr-10">
            <Draggable  ghost-class="moving-card" tag="ul" class="w-full max-w-md"
            :list="listaTareas" :animation="200" :disabled="ordenar">    
                <v-card  class="mb-5 amarillo" hover  
                v-for="(item, index) in listaTareas" :key="index"
                :class="{'rojo':item.importante, 'amarillo': !item.importante, 'hechoCSS':item.hecho}">
                    <v-tooltip top >
                        <template v-slot:activator="{ on, attrs }" >
                            <div v-bind="attrs" v-on="on">
                                <v-container class="d-flex justify-space-between" >
                                    <v-chip class="ma-4 text-uppercase" color="pink" label text-color="white">
                                        <v-btn icon color="black" @click="item.hecho=!item.hecho" class="mr-2">
                                            <v-icon small color="light-green accent-3">mdi-check-bold</v-icon>
                                        </v-btn>
                                        <div class="mr-2">{{index +1}}.</div>
                                        <v-text-field v-model="item.titulo" :disabled="item.textarea"
                                        class="input" dark
                                        counter="18" filled color="deep-purple" type="text">
                                        </v-text-field>
                                    </v-chip>
                                    <v-tooltip bottom >
                                        <template v-slot:activator="{ on, attrs }" >
                                            <v-btn v-bind="attrs" fab color="transparent" v-on="on" elevation="0"
                                            :class="{'amarillo':item.importante, 'rojo': !item.importante}"
                                            @click="item.importante =!item.importante;guardarImpor(index)">
                                                <v-icon large > mdi-exclamation </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>¿Importante?</span>
                                    </v-tooltip>
                                </v-container>
                                <v-card-text >
                                    <v-textarea v-model="item.desc" :disabled="item.textarea" 
                                    :class="{'altura':item.altura}" rows="2" auto-grow hint="Recuerde guardar" class="font-weight-black" color="deep-purple accent-4">
                                    </v-textarea>
                                </v-card-text>
                                <v-card-actions>
                                    <v-row>
                                        <v-col>
                                            <v-btn text color="deep-purple accent-4" @click="item.textarea=false; item.altura=false">
                                                Editar
                                            </v-btn>
                                        </v-col>
                                            <v-col>
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn  v-bind="attrs" v-on="on" :disabled="item.textarea"
                                                        text color="green darken-4" 
                                                        @click="item.textarea=true;guardarImpor(index);item.altura=false" >
                                                            Guardar
                                                        </v-btn>
                                                    </template>
                                                    <span>Modificará la fecha</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col>
                                                <v-btn text color="red darken-4" @click="item.altura = !item.altura">
                                                    Altura
                                                </v-btn>
                                            </v-col>
                                            <v-col class="d-flex justify-end pr-3">
                                                <v-btn icon color="black" @click="eliminar(index)">
                                                    <v-icon large > mdi-delete </v-icon>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                    <v-card-subtitle class="d-flex justify-space-between" >
                                        {{item.fecha}} 
                                            <div>{{index +1}}/{{listaTareas.length}}</div>
                                                <div> 
                                                    <v-icon class="mr-2" small> mdi-clock </v-icon>
                                                        {{item.hora}}:{{item.minuto}}:{{item.segundo}}
                                                </div>
                                    </v-card-subtitle>
                                </div>
                            </template>
                            <span>Muevelo para cambiar el orden</span>
                        </v-tooltip>
                    </v-card>
                </Draggable>
            </v-col>
        </v-row>

    <!--mensaje temporal top le quitas ek top y por defecto sale abajo--->
    <v-snackbar v-model="snackbar"  top rounded="pill" >
        {{ mensaje }}
        <template v-slot:action="{ attrs }">
            <v-btn  v-bind="attrs" 
            icon color="pink"  @click="snackbar = false">
                <v-icon> mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
    <!--Fin mensaje temporal--->

</v-container>

</template>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 70px;
}
.input{
    padding-top: 1.9rem !important;
}
.theme--dark.v-input--is-disabled input {
    color: rgb(255 255 255);
}
.amarillo{
    background-color:#ffff8d;
    color:#ffff8d;
}
.rojo{
    background-color: #FF8A80;
      color:#FF8A80;
}
.v-application ul, .v-application ol {
    padding-left: 0;
}
.altura{
    height: 100px;
    overflow: hidden;
}
.hechoCSS{
    background:url(../assets/check.png);
    background-color:chartreuse;
    background-size: cover;
    background-position:center;
} 
.ordenar{
    background-color:#FB8C00  !important;
}
.ordenarDe{
    background-color: #84848400 !important;
    color: rgb(0 0 0 / 32%) !important;
}

</style>

<script>
import Draggable from 'vuedraggable'
export default {
    name: 'comTareas',
    components: {
        Draggable,
    },
    data(){
        return{
        ordenar:false,
        on:false,
        tituloTarea:'',
        texto:'',
        snackbar:false,
        mensaje:'',
        importante:false,
            listaTareas:[
                {
                    fecha:new Date().toLocaleDateString()   ,
                    hora:new Date().getHours() ,
                    minuto: new Date().getMinutes(),
                    segundo:new Date().getSeconds(),
                    titulo:'Titulo prueba 1',
                    desc: 'Escribe aqui lo que quieres recordar 1',
                    textarea:true,
                    importante:false,
                    altura:false,
                    hecho:false,
                },
                {
                    fecha:new Date().toLocaleDateString()   ,
                    hora:new Date().getHours() ,
                    minuto: new Date().getMinutes(),
                    segundo:new Date().getSeconds(),
                    titulo:'Titulo prueba 2',
                    desc: 'Escribe aqui lo que quieres recordar 2',
                    textarea:true,
                    importante:false,
                    altura:false,
                    hecho:false,
                },
            ]
        }
    },
    methods:{
        agregar: function(){
            if(this.tituloTarea === ''){
               this.snackbar =true;
               this.mensaje ="No se puede agregar una tarea sin título"
               console.log('vacio')
            }else if(this.texto === ''){
                this.snackbar =true;
                this.mensaje ="No se puede agregar una tarea vacia"
            }
            else{
                this.listaTareas.push({
                    fecha:new Date().toLocaleDateString()   ,
                    hora:new Date().getHours() ,
                    minuto: new Date().getMinutes(),
                    segundo:new Date().getSeconds(),
                    titulo:this.tituloTarea,
                    desc: this.texto,
                    textarea:true,
                    importante:false,
                    altura:false,
                    hecho:false,
                })
                this.snackbar =true;
                this.mensaje ="Tarea agregada correctamente"
            }
            this.tituloTarea='';
            this.texto='';
            this.guardarLocal()
        },
        eliminar:function(index){
            this.listaTareas.splice(index, 1);
            this.guardarLocal();
       },
       guardar:function(index){
           this.listaTareas[index].fecha = new Date().toLocaleDateString();
           this.listaTareas[index].hora = new Date().getHours();
           this.listaTareas[index].minuto = new Date().getMinutes();
           this.listaTareas[index].segundo = new Date().getSeconds();
           this.guardarLocal()
       },
       guardarImpor(index){
            this.guardarLocal()
       },
       guardarLocal:function(){
             //setItem guardar , y get recuperar
            localStorage.setItem('lista', JSON.stringify(this.listaTareas))
       }

    },
    created:function(){
        let datosDB = JSON.parse(localStorage.getItem('lista'));
       if(datosDB === null){
        this.listaTareas =[ {
                    fecha:new Date().toLocaleDateString()   ,
                    hora:new Date().getHours() ,
                    minuto: new Date().getMinutes(),
                    segundo:new Date().getSeconds(),
                    titulo:'Titulo prueba 1',
                    desc: 'Escribe aqui lo que quieres recordar 1',
                    textarea:true,
                    importante:false,
                    altura:false,
                    hecho:false,
                },
                {
                    fecha:new Date().toLocaleDateString()   ,
                    hora:new Date().getHours() ,
                    minuto: new Date().getMinutes(),
                    segundo:new Date().getSeconds(),
                    titulo:'Titulo prueba 2',
                    desc: 'Escribe aqui lo que quieres recordar 2',
                    textarea:true,
                    importante:false,
                    altura:false,
                    hecho:false,
                },
            ];
       }else{
            this.listaTareas = datosDB;
       }
    }

}
</script>
