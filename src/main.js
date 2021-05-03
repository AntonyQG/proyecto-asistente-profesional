import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase';
import 'firebase/auth';

// Configuración de Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyDGnJryJP3B14AWr0gip8MksVZznZn8g",
  authDomain: "test-proyecto-asistente.firebaseapp.com",
  projectId: "test-proyecto-asistente",
  storageBucket: "test-proyecto-asistente.appspot.com",
  messagingSenderId: "667221599836",
  appId: "1:667221599836:web:b0d87feb8718de9c65e899",
  measurementId: "G-K7P47DSPZ0"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
