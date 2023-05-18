import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'


let routess=[]

   routess = [
    {
      id:1,
      path: '/home',
      name: 'home',
      showname:'Anasayfa',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
      id:2,
      path: '/about',
      name: 'about',
      showname:'Hakkında',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/SettingView.vue')
    }, {
      id:3,
      path: '/',
      name: 'login',
      showname:'Giriş',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },

    {
      id:4,
      path: '/setting',
      name: 'setting',
      showname:'Ayarlar',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/SettingView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:5,
      path: '/rooms',
      name: 'rooms',
      showname:'Odalar ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/RoomsView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:6,
      path: '/addguest',
      name: 'addguest',
      showname:'Konuk Ekle ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/addGuestView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:7,
      path: '/fastaddguest',
      name: 'fastaddguest',
      showname:'Hızlı Konuk Ekle ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/FastAddGuestView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:8,
      path: '/guests',
      name: 'guests',
      showname:'Konuklar ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/GuestView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:9,
      path: '/guestdetail',
      name: 'guestdetail',
      showname:'Konuklar ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/GuestDetail.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:9,
      path: '/reports',
      name: 'reports',
      showname:'Raporlar ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/ReportsView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:9,
      path: '/lists',
      name: 'lists',
      showname:'Listeler ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/ListView.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },

    {
      id:9,
      path: '/listdetail',
      name: 'listdetail',
      showname:'Listeler ',
      component: () => import(/* webpackChunkName: "Setting" */ '../views/ListDetail.vue'),
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    }
  ]





const routes=routess;

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  routes
})

export default router
