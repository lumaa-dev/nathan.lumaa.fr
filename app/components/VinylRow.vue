<template>
    <div class="vinyl">
        <span class="general">
            <img :src="`/assets/vinyl/${vinyl.img}`" draggable="false" />
            <div class="section">
                <div class="txt">
                    <motion.a :href="vinyl.stream" class="name inline"
                    :initial="{ fontVariationSettings: '\'wdth\' 100' }"
                    :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
                    :whileHover="{ fontVariationSettings: '\'wdth\' 144' }"
                    >{{ vinyl.name }}</motion.a>
                    <p class="artist">{{ vinyl.artist }}</p>
                    <p class="badge" v-if="vinyl.badge" :class="vinyl.badge.color">{{ vinyl.badge.text }}</p>
                    <p class="date" v-if="!!(vinyl.ownDate ?? vinyl.wishDate)">{{ new Date(vinyl.ownDate ?? vinyl.wishDate).toLocaleDateString("fr") }}</p>
                </div>
            </div>
        </span>
        <span class="h">
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
        </span>
    </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';

interface Vinyl {
    name: string
    artist: string
    img: string
    stream: string
    wishDate?: string
    ownDate?: string
    discogs?: string
    available?: {
        official?: string
        fnac?: string
        amazon?: string
    }
    badge?: {
        text: string
        color: string
    }
}

defineProps<{
    vinyl: Vinyl
}>()
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
    padding: 0.5em 1.2em;
    border-radius: 100px;
    background: var(--brand);
}

a.inline {
    background: #00000000 !important;
    color: inherit;
    padding: 0;
    border-radius: 0;
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

.vinyl > .h {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
}

.vinyl > .h > span, .vinyl span.general {
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
    overflow-wrap: break-word;
}

.vinyl .badge {
    font-weight: 300;
    width: fit-content;
    padding: 0.3em 0.7em;
    margin: 0.5em 0;
    border-radius: 100px;
    border: 1px solid #ffffff50;
}

.vinyl .badge.red {
    background: #de4545;
    border: 1px solid #f87e7e80;
}

.vinyl .badge.pink {
    background: #da6fd1;
    border: 1px solid #f0b7eb80;
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

    .vinyl > .h {
        flex-direction: column;
        justify-content: start;
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