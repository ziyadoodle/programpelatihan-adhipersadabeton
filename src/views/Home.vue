<template>
    <app-dashboard></app-dashboard>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue"

export default {
    components: {
        "app-dashboard": Dashboard,
    },
}
</script>

<style scoped>
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
</style>
