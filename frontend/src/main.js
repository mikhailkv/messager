import Vue from 'vue'
import App from './App.vue'
import router from './tools/router.js';
import Vuex from 'vuex';

Vue.config.productionTip = false

new Vue({
  router,
  Vuex,
  render: h => h(App),
}).$mount('#app')
