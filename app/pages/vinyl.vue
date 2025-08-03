<template>
    <div class="list" v-if="data.owned">
        <h1>Owned Vinyl</h1>
        <template v-for="vinyl in data.owned">
            <div class="vinyl">
                <span class="general">
                    <img :src="`/assets/vinyl/${vinyl.img}`" draggable="false" class="compact" />
                    <div class="section">
                        <div class="txt">
                            <p class="name">{{ vinyl.name }}</p>
                            <p class="artist">{{ vinyl.artist }}</p>
                            <p class="date">{{ new Date(vinyl.ownDate).toLocaleDateString("fr") }}</p>
                        </div>
                    </div>
                </span>
                <span class="actions">
                    <motion.a v-if="vinyl.discogs" :href="vinyl.discogs" style="background: #121212;"
                    :initial="{ scale: 1.0, boxShadow: '0 0 0px #121212', zIndex: 1 }"
                    :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                    :whileHover="{ scale: 1.2, boxShadow: '0 0 15px #121212', zIndex: 999 }" 
                    >Discogs</motion.a>
                    <template v-if="vinyl.available">
                        <motion.a :href="vinyl.available.official" v-if="vinyl.available.official"
                        :initial="{ scale: 1.0, boxShadow: '0 0 0px var(--brand)', zIndex: 1 }"
                        :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                        :whileHover="{ scale: 1.2, boxShadow: '0 0 15px var(--brand)', zIndex: 999 }" 
                    >Official</motion.a>
                        <motion.a :href="vinyl.available.fnac" v-if="vinyl.available.fnac" style="background: #f5b027; color: #000;"
                        :initial="{ scale: 1.0, boxShadow: '0 0 0px #f5b027', zIndex: 1 }"
                        :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                        :whileHover="{ scale: 1.2, boxShadow: '0 0 15px #f5b027', zIndex: 999 }" 
                    >Fnac</motion.a>
                        <motion.a :href="vinyl.available.amazon" v-if="vinyl.available.amazon" style="background: #0578ff;"
                        :initial="{ scale: 1.0, boxShadow: '0 0 0px #0578ff', zIndex: 1 }"
                        :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                        :whileHover="{ scale: 1.2, boxShadow: '0 0 15px #0578ff', zIndex: 999 }" 
                    >Amazon</motion.a>
                    </template>
                </span>
            </div>
        </template>
    </div>
    <div class="list" v-if="data.wish">
        <h1>Wish List</h1>
        <template v-for="vinyl in data.wish">
            <div class="vinyl">
                <span class="general">
                    <img :src="`/assets/vinyl/${vinyl.img}`" draggable="false" />
                    <div class="section">
                        <div class="txt">
                            <p class="name">{{ vinyl.name }}</p>
                            <p class="artist">{{ vinyl.artist }}</p>
                            <p class="date">{{ new Date(vinyl.wishDate).toLocaleDateString("fr") }}</p>
                        </div>
                    </div>
                </span>
                <span class="actions">
                    <motion.a v-if="vinyl.discogs" :href="vinyl.discogs" style="background: #121212;"
                    :initial="{ scale: 1.0, boxShadow: '0 0 0px #121212', zIndex: 1 }"
                    :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                    :whileHover="{ scale: 1.2, boxShadow: '0 0 15px #121212', zIndex: 999 }" 
                    >Discogs</motion.a>
                    <template v-if="vinyl.available">
                        <motion.a :href="vinyl.available.official" v-if="vinyl.available.official"
                        :initial="{ scale: 1.0, boxShadow: '0 0 0px var(--brand)', zIndex: 1 }"
                        :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                        :whileHover="{ scale: 1.2, boxShadow: '0 0 15px var(--brand)', zIndex: 999 }" 
                    >Official</motion.a>
                        <motion.a :href="vinyl.available.fnac" v-if="vinyl.available.fnac" style="background: #f5b027; color: #000;"
                        :initial="{ scale: 1.0, boxShadow: '0 0 0px #f5b027', zIndex: 1 }"
                        :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                        :whileHover="{ scale: 1.2, boxShadow: '0 0 15px #f5b027', zIndex: 999 }" 
                    >Fnac</motion.a>
                        <motion.a :href="vinyl.available.amazon" v-if="vinyl.available.amazon" style="background: #0578ff;"
                        :initial="{ scale: 1.0, boxShadow: '0 0 0px #0578ff', zIndex: 1 }"
                        :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                        :whileHover="{ scale: 1.2, boxShadow: '0 0 15px #0578ff', zIndex: 999 }" 
                    >Amazon</motion.a>
                    </template>
                </span>
            </div>
        </template>
    </div>
    <span class="spark" v-if="pending || error">
        <p>Something's wrong</p>
    </span>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

const { data, pending, error } = await useAsyncData(
    'vinyl',
    () => $fetch('/api/vinyl')
);

useSeoMeta({
    title: "Nathan's Vinyl Collection",
    ogTitle: "Nathan's Vinyl Collection",
    twitterTitle: "Nathan's Vinyl Collection",
    description: "Vinyls I own, and vinyl I want... Deeply.",
    ogDescription: "Vinyls I own, and vinyl I want... Deeply.",
    twitterDescription: "Vinyls I own, and vinyl I want... Deeply."
})
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
    padding: 0.5em 1.2em;
    border-radius: 100px;
    background: var(--brand);
}

.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.list > h1 {
    font-size: 2.9em;
    margin: 1em 0;
}

.vinyl {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #ffffff10;
    width: 65vw;
    padding: 25px;
    border-radius: 25px;
}

.vinyl > span {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
    gap: 10px;
}

.vinyl img {
    width: 20vw;
    border-radius: 8px;
}

.vinyl img.compact {
    width: 200px;
}

.vinyl .section {
    padding: 1em 2em;
    max-width: calc(65vw - (25px * 2));
}

.vinyl .name {
    font-size: 1.9em;
    font-weight: 700;
    font-variation-settings: "slnt" 0, "wdth" 150;
    overflow-wrap: break-word;
}

.vinyl .date {
    color: hsla(0, 0%, 100%, 0.25);
    padding-top: 0.7em;
}

.actions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

@media screen and (max-width: 1100px) {
    .vinyl {
        width: 90vw;
    }

    .vinyl > span.general {
        flex-direction: column;
    }

    .vinyl img, .vinyl img.compact {
        width: 100%;
        height: unset;
    }

    .vinyl .section {
        padding: 1em 0;
        max-width: calc(90vw - (25px * 2));
    }

    .vinyl .name {
        font-size: 1.6em;
    }
}
</style>