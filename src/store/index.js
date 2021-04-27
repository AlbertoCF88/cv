import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//de momento solo para datos bidireccionales
export default new Vuex.Store({
  state: {
     //componentes tarjeta y barraVertical
    loading: true,
    zoom: false,
  },
  mutations: {
    //componentes tarjeta y barraVertical
    CambioLoading(state){
      state.loading = !state.loading
    },
    CambioZoom(state){
      state.zoom = !state.zoom
    }
  },
  actions: {
  },
  modules: {
  }
})
