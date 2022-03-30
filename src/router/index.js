import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home,
  },
  {
    path: '/table',
    name: 'TableView',
    component: () => import('../components/TableView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
