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
            import(/* webpackChunkName: "vendor" */ "./../views/Vendor.vue"),
    },
    {
        path: "/training",
        name: "Training",
        component: () =>
            import(
                /* webpackChunkName: "training" */ "./../views/Training.vue"
            ),
    },
    {
        path: "/add-training",
        name: "addTraining",
        component: () =>
            import(
                /* webpackChunkName: "addTraining" */ "./../views/AddTraining.vue"
            ),
    },
    {
        path: "/evaluasi-pelatihan",
        name: "evaluasiPelatihan",
        component: () =>
            import(
                /* webpackChunkName: "evaluasi" */ "./../views/EvaluasiPelatihan.vue"
            ),
    },
    {
        path: "/pelaksanaan-pelatihan",
        name: "pelaksanaanPelatihan",
        component: () =>
            import(
                /* webpackChunkName: "pelaksanaan" */ "./../views/PelaksanaanPelatihan.vue"
            ),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "./../views/Login.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
