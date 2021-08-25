import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

import event from "./modules/event";
import volunteer from "./modules/volunteer";
import gallery from "./modules/gallery";
import contact from "./modules/contact";
import firebase, {auth} from "../configs/firebase";
import {CustomResponse} from "../utils/globalObjects";

import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'faswas',
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })],
  state: {
    signedIn: false,
    user: {
      id: '', data: {}
    }
  },
  getters: {
    isSignedIn: (state)=>{
      firebase.auth().onAuthStateChanged(user=>{
        state.signedIn = !!user
      })
      return state.signedIn
    }
  },
  mutations: {
    setUser: (state, payload) => state.user = payload
  },
  actions: {
    async login({commit}, {email, password}){
      const response = new CustomResponse();
      try{
        const credential = await auth().signInWithEmailAndPassword(email, password);
        commit('setUser', {id: credential.user.uid, data: {}})
      }catch (e){
        response.set_status(false, e)
      }
      return Promise.resolve(response)
    },
    async logout({commit}){
      commit('contact/reset', null, {root: true});
      commit('event/reset', null, {root: true});
      commit('gallery/reset', null, {root: true});
      commit('volunteer/reset', null, {root: true});
      try{
        await firebase.auth().signOut()
      }catch (e){
        console.log(e)
      }
      return router.push({name: 'Home'})
    }
  },
  modules: {
    event,
    volunteer,
    gallery,
    contact
  }
})
