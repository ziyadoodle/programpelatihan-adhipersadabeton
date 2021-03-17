<template>
    <div id="nav">
        <app-spinner></app-spinner>
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
            <app-sidebar></app-sidebar>

            <!-- header -->
            <div class="flex flex-col flex-1 w-full">
                <app-header></app-header>
                <router-view />
                <div
                    class="animate__animated animate__fadeInUpBig animate__slow"
                >
                    <p class="text-xs font-semibold text-gray-500 ml-5 my-3">
                        2020 © Digitalisasi Pelatihan PT Adhi Persada Beton
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import spinner from "@/components/spinner.vue"
import header from "@/components/header.vue"
import sidebar from "@/components/sidebar.vue"

export default {
    components: {
        "app-spinner": spinner,
        "app-header": header,
        "app-sidebar": sidebar,
    },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

aside {
    margin: 0;
}

header {
    margin: 0;
}

::-webkit-scrollbar {
    width: 5px;
    height: 6px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #e02424;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #666;
}

.h-screen {
    background: url("./assets/double-bubble-outline.png");
}
</style>
