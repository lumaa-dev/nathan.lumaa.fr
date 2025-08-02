<template>
    <div class="error">
        <h1>Error {{ props.error?.statusCode ?? -1 }}</h1>
        <p>{{ props.error?.statusMessage }}</p>

        <motion.a href="/"
            :initial="{ scale: 1.0, boxShadow: '0 0 0px #fff', zIndex: 1 }"
            :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
            :whileHover="{ scale: 1.3, boxShadow: '0 0 15px #fff', zIndex: 999 }" 
        >Return home</motion.a>
    </div>
</template>

<style scoped>
.error {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 99999999;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.error h1 {
    font-size: 6vw;
}

.error p {
    font-size: 2vw;
}

.error a {
    margin: 30px 0;
    color: #000;
    background: #c5c5c5;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 100px;
}

@media screen and (max-width: 1000px) {
    .error h1 {
        font-size: 12vw;
    }

    .error p {
        font-size: 4vw;
    }   
}
</style>

<script setup lang="ts">
import { motion } from 'motion-v';
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>