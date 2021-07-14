import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
//import Home from '../views/Answers.vue'

/* Views */
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Test from '@/views/Test.vue'
import Answer from '@/views/Answers.vue'
import AddAnswer from '@/views/AddAnswer.vue'
import PerfilAlumno from '@/views/PerfilAlumno.vue'

Vue.use(VueRouter)

const routes = [
  /*-- Aquí le decimos que cualquier ruta mal escrita o que no esté aquí la redirija a Login --*/
  {
    path: '*',
    redirect: '/login'
  },
  
  {
    path: '/',
    redirect: '/login'
    // name: 'Home',
    // component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
  ,
  /*--  --*/
  {
    path: '/answer',
    name: 'Answer',
    component: Answer,
    meta: {
      authenticated: true
    }
  }
  ,
  {
    path: '/addanswer',
    name: 'AddAnswer',
    component: AddAnswer
  }
  ,
  {
    path: '/perfilalumno',
    name: 'PerfilAlumno',
    component: PerfilAlumno
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

 /*-- Aquí estamos protegiendo las rutas con guards de vue, checando si está autorizado y si ya tenemos el usuario logueado --*/
router.beforeEach((to, from, next) => {
  // Esto regresa verdadero o falso
  /*let user = firebase.auth().currentUser;
  console.log("Usuario: ", user.email);*/
  // En esta parte con "matched" y "some" estrellamos cada record de las rutas preguntando si alguna necesita autenticación
  /*let authorization = to.matched.some(record => record.meta.authenticated);

  if (authorization && !user) {
    next('login');
  } else if (!authorization && user) {
    next('answer');
  } else {
    next();
  }*/



  // Segunda prueba de route guarding
  if (to.matched.some(rec => rec.meta.authenticated)) {
    const user = firebase.auth().currentUser;
    // check auth state of user
    user ? next() : next('Login') // user not signed in, route to login
  } else {
    next();  // la ruta no requiere auth
  }
})

export default router
