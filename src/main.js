import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import toastRegistry from './components/toast/index'

Vue.config.productionTip = false
// toastRegistry()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
