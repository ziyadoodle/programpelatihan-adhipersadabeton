import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "./../views/Dashboard.vue"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/vendor",
        name: "Vendor",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "./../views/Vendor.vue"),
    },
    {
        path: "/training",
        name: "Training",
        component: () => import("./../views/Training.vue"),
    },
    {
        path: "/add-training",
        name: "addTraining",
        component: () => import("./../views/AddTraining.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
