import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from, next)=>{
  $('html,body').animate({scrollTop: 0}, 1000)
  next()
})

export default router
