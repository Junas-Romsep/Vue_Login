import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAdsAwx8FRBSLe9-NLTYHpwy_It5Ui8V2Y",
  authDomain: "vue-login-b05a1.firebaseapp.com",
  projectId: "vue-login-b05a1",
  storageBucket: "vue-login-b05a1.appspot.com",
  messagingSenderId: "229612663371",
  appId: "1:229612663371:web:f92249227be3c3346493ce",
  measurementId: "G-D09ZSZB771"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
