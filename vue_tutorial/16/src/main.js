import Vue from 'vue'
import App from './App.vue'
import Store from './store/index'

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App)
})

window.addEventListener('hashchange', (event) => {
  updateCurrentHash()
})
updateCurrentHash()
function updateCurrentHash () {
  Store.commit('setCurrentHash', window.location.href)
}
