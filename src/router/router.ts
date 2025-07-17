import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/robot',
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/bg',
    component: () => import('@/views/background/index.vue'),
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
