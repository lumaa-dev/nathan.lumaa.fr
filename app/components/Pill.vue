<template>
    <div class="pill">
        <img :src="src" draggable="false" />
        <span>
            <slot />
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    src: String
})
</script>

<style scoped>
.pill {
    display: flex;
    background: #ffffff30;
    border-radius: 200px;
    padding: 2em;
    margin: 0 2em;
    gap: 40px;
    align-items: center;
}

.pill img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.pill span {
    font-size: 1.45em;
}

@media screen and (max-width: 1000px) {
    .pill {
        border-radius: 60px;
        padding: 2em 1em;
        margin: 0 0.6em;
        gap: 20px;
    }

    .pill img {
        width: 100px;
        height: 100px;
    }

    .pill span {
        font-size: 1.0em;
    }
}

@media screen and (max-width: 500px) {
    .pill {
        flex-direction: column;
    }
}
</style>