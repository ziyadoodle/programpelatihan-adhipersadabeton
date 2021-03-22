<template>
    <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0 animate__animated animate__fadeInLeft animate__slow"
    >
        <div class=" py-4 text-gray-500">
            <div class="flex justify-center ">
                <img
                    src="./../assets/logo-adhi-gray.png"
                    alt=""
                    class="w-40 mt-2"
                />
            </div>
            <ul class="mt-6">
                <li class="relative px-6 py-3">
                    <router-link
                        to="/"
                        class="inline-flex items-center w-full text-sm font-semibold hover:text-gray-800 "
                        exact
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span class="ml-4">Dashboard</span>
                    </router-link>
                </li>
                <li class="relative px-6 py-3">
                    <router-link
                        to="/vendor"
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span class="ml-4">Vendor</span>
                    </router-link>
                </li>
                <li class="relative px-6 py-3">
                    <router-link
                        to="/training"
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span class="ml-4">Training</span>
                    </router-link>
                </li>
                <li class="relative px-6 py-3">
                    <router-link
                        to="/evaluasi-pelatihan"
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span class="ml-4">Evaluasi Pelatihan</span>
                    </router-link>
                </li>
                <li class="relative px-6 py-3">
                    <router-link
                        to="/pelaksanaan-pelatihan"
                        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 stroke-2 stroke-current"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                x="2"
                                y="3"
                                width="20"
                                height="14"
                                rx="2"
                                ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span class="ml-4">Pelaksanaan Pelatihan</span>
                    </router-link>
                </li>
            </ul>
            <div class="border-b-2 border-red-500 mx-4 mt-2 rounded-md"></div>
            <ul class="mt-6">
                <li class="relative px-6 py-3">
                    <button
                        @click="toggle"
                        class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 focus:outline-none p-1 focus:ring-2 focus:ring-red-500"
                    >
                        <span class="inline-flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 stroke-2 stroke-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            <span class="ml-4">Pages</span>
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 stroke-2 stroke-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                    <div v-if="active" class="">
                        <div class="bg-gray-200 mt-2 rounded-md py-2">
                            <router-link
                                to="/login"
                                class="inline-flex items-center text-sm ml-4 font-semibold transition-colors duration-150 hover:text-gray-800"
                            >
                                <span class="px-2">Login</span>
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            isShowing: true,
            active: false,
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        },
    },
}
</script>

<style scoped>
.router-link-active {
    @apply text-gray-800;
    @apply bg-red-600;
    @apply text-white;
    @apply p-2;
    @apply rounded-lg;
    @apply transition;
    @apply duration-500;
}

/* v-bind:class="[isActive ? activeClass : '', errorClass]" */

/* .router-link-active span {
    @apply absolute;
    @apply inset-y-0;
    @apply left-0;
    @apply w-1;
    @apply bg-red-600;
    @apply rounded-tr-lg;
    @apply rounded-br-lg;
} */
</style>
