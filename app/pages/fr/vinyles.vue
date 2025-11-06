<template>
	<span class="c">
		<div class="caution">
			<p
				>Cliquez/Touchez le nom d'un album pour l'écouter sur Spotify®, Apple
				Music®, ou toute autre plateforme de streaming musical.</p
			>
		</div>
	</span>
	<span class="c">
		<div class="picker small">
			<button
				v-for="item in VinylFilter.allCases"
				:key="item"
				:class="selFilter == item ? 'selected' : ''"
				@click="filter(item)">
				{{ item }}
			</button>
		</div>
	</span>
	<span class="c">
		<template v-if="owned.length > 0">
			<h1>💿 Vinyles possédés</h1>
			<div class="list" v-if="owned">
				<VinylRow v-for="vinyl in owned" :vinyl="vinyl" />
			</div>
		</template>
		<template v-if="wishes.length > 0">
			<h1>✨ Liste de souhaits</h1>
			<div class="list" v-if="wishes">
				<VinylRow v-for="vinyl in wishes" :vinyl="vinyl" />
			</div>
		</template>
	</span>
</template>

<script setup lang="ts">
import VinylRow from "~/components/VinylRow.vue";

enum VinylFilter {
	all = "Tous",
	owned = "Possédés",
	wish = "Souhaités",
	color = "Disques colorés",
	black = "Disques noirs",
	available = "Disponible",
}

const { data } = await useAsyncData("vinyl", () => $fetch("/api/vinyl"));

const defOwned = (data.value as any).owned;
const defWishes = (data.value as any).wish;

var owned = ref((data.value as any).owned);
var wishes = ref((data.value as any).wish);
var selFilter = ref(VinylFilter.all);

useSeoMeta({
	title: "Collection de vinyles de Nathan",
	ogTitle: "Collection de vinyles de Nathan",
	twitterTitle: "Collection de vinyles de Nathan",
	description:
		"Vinyles que je possède, et vinyles que je veux... Vraiment beaucoup.",
	ogDescription:
		"Vinyles que je possède, et vinyles que je veux... Vraiment beaucoup.",
	twitterDescription:
		"Vinyles que je possède, et vinyles que je veux... Vraiment beaucoup.",
});

function filter(type: VinylFilter) {
	selFilter.value = type;

	if (type === VinylFilter.all) {
		owned.value = defOwned;
		wishes.value = defWishes;
		return;
	} else if (type === VinylFilter.owned) {
		owned.value = defOwned;
		wishes.value = [];
		return;
	} else if (type === VinylFilter.wish) {
		owned.value = [];
		wishes.value = defWishes;
		return;
	} else if (type === VinylFilter.color) {
		owned.value = defOwned.filter(
			(v: any) => (v.discColor || "").toLowerCase() !== "black"
		);
		wishes.value = [];
		return;
	} else if (type === VinylFilter.black) {
		owned.value = defOwned.filter(
			(v: any) => (v.discColor || "").toLowerCase() === "black"
		);
		wishes.value = [];
		return;
	} else if (type == VinylFilter.available) {
		owned.value = defOwned.filter(
			(v: any) =>
				Object.keys((v.available as object) ?? {}).length > 0 && v.discogs
		);
		wishes.value = defWishes.filter(
			(v: any) =>
				Object.keys((v.available as object) ?? {}).length > 0 && v.discogs
		);
	}
}

namespace VinylFilter {
	export const allCases: VinylFilter[] = [
		VinylFilter.all,
		VinylFilter.owned,
		VinylFilter.wish,
		VinylFilter.available,
		VinylFilter.color,
		VinylFilter.black,
	];
}
</script>

<style scoped>
h1 {
	font-size: 2.9em;
	margin: 1em 0;
	width: 70%;
	text-align: left;
}

.c {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
}

.caution {
	padding: 1em 1.2em;
	background: #ffffff10;
	border-radius: 100px;
	font-variation-settings: "wdth" 80;
	margin: 1em 30px;
}

.list {
	display: grid;
	grid-template-columns: repeat(2, 700px);
	gap: 20px;
	grid-auto-rows: 300px;
}

@media screen and (max-width: 1630px) {
	h1 {
		width: 90%;
	}

	.caution {
		border-radius: 30px;
	}

	.list {
		display: flex;
		flex-direction: column;
		width: 90%;
	}
}
</style>
