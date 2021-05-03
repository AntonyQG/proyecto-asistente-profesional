<template>
  <v-app>
    <NavBar/>
    <router-view />
  </v-app>
</template>

<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>
<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from 'firebase';
import 'firebase/auth';
// import 'firebase/auth';
import NavBar from './components/NavBar';
export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const route = useRoute();
    onBeforeMount (() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == '/login' || route.path == '/signup') {
          router.replace('/');
        }
      });
    });
  },
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>
