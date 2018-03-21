import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTask: {finished: false, name: ""},
    tasks: [
      {finished: false, name: "Buy milk 2L"},
      {finished: false, name: "Call to Alice"},
      {finished: false, name: "Return book"},
    ]
  },
  mutations: {
    add: function(state){
      state.tasks.unshift(state.newTask);
      state.newTask = {finished: false, name: ""}
    },
    //おそらくdelも必要
    del: function(state){
      state.tasks = state.tasks.filter(function(v){return !v.finished})
    }
  }
})
