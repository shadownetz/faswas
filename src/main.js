import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "./configs/firebase";

import headNav from "./components/headNav";
import footNav from "./components/footNav";
import DashHeadNav from "./components/dashboard/DashheadNav";

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.config.productionTip = false

Vue.component('headNav', headNav);
Vue.component('footNav', footNav);
Vue.component('DashHeadNav', DashHeadNav);

Vue.use(VueLoading)

let app;
firebase.auth().onAuthStateChanged(function(){
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
