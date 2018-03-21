import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hash: ""
  },
  mutations: {
    setCurrentHash: function(state){
      state.hash = window.location.hash;
    }
  }
})
