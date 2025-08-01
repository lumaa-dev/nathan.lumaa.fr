<template>
    <div class="countdown" :aria-date="props.time?.toUTCString()" v-if="props.time > new Date()">
        <Countdown
            :time="props.time.getTime() - Date.now()"
            v-slot="{ days, hours, minutes, seconds }"
        >
            {{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds
        </Countdown>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    time: {
        type: Date,
        required: true
    }
})
</script>

<style scoped>
.countdown {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 9999999;
    background: #1e1e1e;
    font-size: 2em;
    user-select: none;
    pointer-events: none;
    text-align: center;
}

@media screen and (max-width: 1000px) {
    .countdown {
        font-size: 1.7em;
    }
}
</style>