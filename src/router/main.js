import { createRouter, createWebHistory } from 'vue-router'


let routess=[]

   routess = [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/SettingView.vue')
    }, {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },

    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/SettingView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      props: true,
      
    }
  ]





const routes=routess;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
