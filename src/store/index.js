import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//de momento solo para datos bidireccionales
export default new Vuex.Store({
  state: {
     //componentes tarjeta y barraVertical
    loading: true,
  },
  mutations: {
    //componentes tarjeta y barraVertical
    CambioLoading(state){
      state.loading = !state.loading
    }
  },
  actions: {
  },
  modules: {
  }
})
