const routes = [
    { path: '/',                name: 'home',       component: () => import("@/views/Tasks") },
    { path: '/new',             name: 'task-new',   component: () => import("@/views/New") },
    { path: '/task/:taskId',    name: 'task-view',  component: () => import("@/views/Task") },
    { path: '/:notFound(.*)',   name: 'error',      component: () => import("@/components/TheErrorPage")}
]

export default routes
