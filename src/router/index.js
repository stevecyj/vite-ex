import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
