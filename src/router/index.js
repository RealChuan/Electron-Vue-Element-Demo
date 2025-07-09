// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import { getMenuItems } from '../utils/routeHelper'

const routes = [
    { path: '/', redirect: '/HelloWorld' },
    { path: '/HelloWorld', component: HelloWorld },
    ...getMenuItems().map(item => ({
        path: item.index,
        component: item.component
    }))
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router