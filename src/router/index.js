import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Answers.vue'

/* Views */
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import Test from '@/views/Test.vue'
import Answer from '@/views/Answers.vue'
import AddAnswer from '@/views/AddAnswer.vue'
import PerfilAlumno from '@/views/PerfilAlumno.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/answer',
    name: 'Answer',
    component: Answer
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

export default router
