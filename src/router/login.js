import { createRouter, createWebHistory } from 'vue-router'


let routess=[]

   routess = [
    {
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
