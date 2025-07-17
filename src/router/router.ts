import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/logo',
    component: () => import('@/views/logo.vue'),
  },
  {
    path: '/robot',
    component: () => import('@/views/robot.vue'),
  },
]

const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(),
    routes,
})

export default router;
