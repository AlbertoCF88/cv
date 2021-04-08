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
          color3:'#B84378',
          color4:'#B3B843',
        },
      },
    },
  })