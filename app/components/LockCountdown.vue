<template>
    <div class="countdown" :aria-date="props.time?.toUTCString()" v-if="props.time > new Date()">
        <Countdown
            :time="props.time.getTime() - Date.now()"
            v-slot="{ days, hours, minutes, seconds }"
        >
            <span v-if="days > 0">{{ days }} days,</span>
            <span v-if="hours > 0">{{ hours }} hours,</span>
            <span v-if="minutes > 0">{{ minutes }} minutes,</span>
            <span v-if="seconds > 0">{{ seconds }} seconds</span>
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
    font-weight: 700;
    user-select: none;
    pointer-events: none;
    text-align: center;
}

.countdown > div {
    display: flex;
    flex-direction: row;
    gap: 0.4em;
}

@media screen and (max-width: 1000px) {
    .countdown {
        font-size: 2.6em;
    }

    .countdown > div {
        flex-direction: column;
    }
}
</style>