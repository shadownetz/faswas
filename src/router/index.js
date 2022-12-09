import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import firebase from "../configs/firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/feedasoulwinasoul',
    name: 'FASWASPage',
    component: ()=>import("../views/Home")
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import("../views/elldanin/About")
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
    path: '/contact-us',
    name: 'ContactUs',
    component: ()=>import("../views/elldanin/Contact")
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
      },
      {
        path: '/dash-volunteers',
        name: 'DashVolunteers',
        component: ()=> import("../views/dashboard/Volunteers"),
      },
      {
        path: '/dash-galleries',
        name: 'DashGalleries',
        component: ()=> import("../views/dashboard/Galleries"),
      },
      {
        path: '/dash-contacts',
        name: 'DashContacts',
        component: ()=> import("../views/dashboard/Contacts"),
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
