import {createRouter,createWebHistory} from 'vue-router'
import routes from "@/router/routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router
