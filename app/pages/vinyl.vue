<template>
    <span class="c">
        <div class="caution">
            <p>Click/Tap on any album's name to listen to it on Spotify®, Apple Music®, or any other music streaming platform.</p>
        </div>
    </span>
    <div class="list" v-if="data.owned">
        <h1>Owned Vinyl</h1>
        <VinylRow v-for="vinyl in data.owned" :vinyl="vinyl" />
    </div>
    <div class="list" v-if="data.wish">
        <h1>Wish List</h1>
        <VinylRow v-for="vinyl in data.wish" :vinyl="vinyl" />
    </div>
</template>

<script setup lang="ts">
import VinylRow from '~/components/VinylRow.vue';

const { data } = await useAsyncData(
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
.caution {
    padding: 1em 1.2em;
    background: #ffffff10;
    border-radius: 100px;
    font-variation-settings: "wdth" 80;
    margin: 1em 0;
}

.list, .c {
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
</style>