<template>
    <div class="timeline">
        <div class="l row">
            <span class="time" :style="!finished ? 'background: #ffffff30' : 'background: var(--brand)'">
                {{ date }}
            </span>
            <div class="bar" :style="!finished ? 'background: #ffffff30' : 'background: var(--brand)'"></div>
        </div>
        <div class="r row">
            <p class="title">{{ name }}</p>
            <slot />
        </div>
    </div>
</template>

<style scoped>
.timeline {
    display: flex;
    gap: 20px;
}

.timeline .row {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.timeline .l {
    align-items: center;
    position: relative;
}

.timeline .time {
    width: 7em;
    display: inline-block;
    color: #fff;
    padding: 0.3em 0.7em;
    border-radius: 100px;
    text-align: center;
}

.timeline .bar {
    width: 3px;
    border-radius: 100px;
    flex: 1;
}

.timeline .r {
    margin-top: 0.3em;
    width: 100%;
    gap: 7px;
}

.title {
    font-weight: 700;
}

@media screen and (max-width: 1000px) {
    .timeline .time {
        width: 7em;
        font-size: 0.8em;
        margin-top: 0.2em
    }
}
</style>

<script setup>
const props = defineProps({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        required: false,
        default: true
    }
})
</script>