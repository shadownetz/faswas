import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "../configs/firebase";

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
    component: () => import("../views/About")
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: ()=>import("../views/Gallery")
  },
  {
    path: '/events',
    name: 'Events',
    component: ()=>import("../views/Events")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ()=>import("../views/Contact")
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: ()=> import("../views/Volunteers")
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import("../views/Login")
  },
  {
    path: '/dashboard',
    component: ()=> import("../views/dashboard/Container"),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: ()=> import("../views/dashboard/Dashboard"),
      },
      {
        path: '/dash-events',
        name: 'DashEvents',
        component: ()=> import("../views/dashboard/Events"),
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.afterEach(()=>{
  $('html,body').animate({scrollTop: 0}, 1000)
})


router.beforeEach(async (to, from, next) => {
  let loggedUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !loggedUser) next({name: 'Login'});
  else next()
})

export default router
