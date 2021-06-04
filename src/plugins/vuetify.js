import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          color1:'#43b883',
          color1os:'#33495e',
          color2:'#4943B8',
          color3:'#b84343',
          color4:'#717515',

          //icon navegacio
          ico1:'#00ff4d',  
          ico2:'#008eff',  
          ico3:'#ff5245',  
          ico4:'#fbff00',  

          dragon:'#ff6600',
          //angular , vue, react
          angular:'#c30030',
          vue:'#33495e'
        },
      },
    },
  })