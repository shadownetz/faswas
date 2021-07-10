import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import headNav from "./components/headNav";
import footNav from "./components/footNav";

Vue.config.productionTip = false

Vue.component('headNav', headNav);
Vue.component('footNav', footNav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
