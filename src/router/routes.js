const routes = [
    { path: '/',                name: 'home',       component: () => import("@/components/TaskList") },
    { path: '/new',             name: 'task-new',   component: () => import("@/components/TaskNew") },
    { path: '/task/:taskId',    name: 'task-view',  component: () => import("@/components/TaskView") },
    { path: '/:notFound(.*)',   name: 'error',      component: () => import("@/components/TheErrorPage")}
]

export default routes
