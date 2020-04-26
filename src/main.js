import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
firebase.initializeApp({
  apiKey: "AIzaSyD2dLgyNJYoJykGpQo1fZntsCJv934AoJk",
  authDomain: "kt-homework.firebaseapp.com",
  databaseURL: "https://kt-homework.firebaseio.com",
  projectId: "kt-homework",
  storageBucket: "kt-homework.appspot.com",
  messagingSenderId: "474849699714",
  appId: "1:474849699714:web:f2d04a1a912a24e891119b"
})

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')