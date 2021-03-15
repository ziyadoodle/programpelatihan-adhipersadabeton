<template>
    <div class="spin" v-if="start">
        <div class="ring">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["start"],
}
</script>

<style>
.spin {
    /* z-index: -10; */
    /* z-index: 9999; */
    @apply w-full;
    @apply h-full;
    /* @apply bg-white; */
    background-color: rgba(0, 0, 0, 0.1);
    @apply fixed;
}

.ring {
    @apply absolute;
    top: 50%;
    left: 50%;
    @apply m-auto;
    @apply h-full;
}

.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ripple div {
    position: absolute;
    @apply border-4;
    @apply border-red-500;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
