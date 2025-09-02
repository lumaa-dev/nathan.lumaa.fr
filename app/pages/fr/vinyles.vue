<template>
    <span class="c">
        <div class="caution">
            <p>Cliquez/Touchez le nom d'un album pour l'écouter sur Spotify®, Apple Music®, ou toute autre plateforme de streaming musical.</p>
        </div>
    </span>
    <div class="list" v-if="data.owned">
        <h1>Vinyles possédés</h1>
        <VinylRow v-for="vinyl in data.owned" :vinyl="vinyl" />
    </div>
    <div class="list" v-if="data.wish">
        <h1>Liste de souhaits</h1>
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
    title: "Collection de vinyles de Nathan",
    ogTitle: "Collection de vinyles de Nathan",
    twitterTitle: "Collection de vinyles de Nathan",
    description: "Vinyles que je possède, et vinyles que je veux... Vraiment beaucoup.",
    ogDescription: "Vinyles que je possède, et vinyles que je veux... Vraiment beaucoup.",
    twitterDescription: "Vinyles que je possède, et vinyles que je veux... Vraiment beaucoup."
})
</script>

<style scoped>
.caution {
    padding: 1em 1.2em;
    background: #ffffff10;
    border-radius: 100px;
    font-variation-settings: "wdth" 80;
    margin: 1em 30px;
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