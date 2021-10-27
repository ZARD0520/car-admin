import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const todayPay = () => import('../views/Today-pay.vue')
const historyPay = () => import('../views/History-pay.vue')
const carStatus = () => import('../views/Car-status.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'today'
  },
  {
    path: '/today',
    name: 'Today',
    component: todayPay
  },
  {
    path: '/history',
    name: 'History',
    component: historyPay
  },
  {
    path: '/car',
    name: 'Car',
    component: carStatus
  }
    
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
