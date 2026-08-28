<template>
	<span class="c">
		<div class="caution">
			<p>{{ $t("vinyl.caution") }}</p>
		</div>
	</span>
	<span class="c">
		<div class="picker no-mobile">
			<button
				v-for="item in allCases"
				:key="item"
				:class="selFilter == item ? 'selected' : ''"
				@click="filter(item)">
				{{ $t(`vinyl.filters.${item}`) }}
			</button>
		</div>
		<div class="picker no-pc">
			<select v-model="selFilter" @change="filter(selFilter)">
				<option v-for="item in allCases" :key="item" :value="item">
					{{ $t(`vinyl.filters.${item}`) }}
				</option>
			</select>
		</div>
	</span>
	<span class="c">
		<template v-if="owned.length > 0">
			<h1>{{ $t("vinyl.owned") }}</h1>
			<div class="list" v-if="owned">
				<VinylRow v-for="vinyl in owned" :key="vinyl.name" :vinyl="vinyl" />
			</div>
		</template>
		<template v-if="wishes.length > 0">
			<h1>{{ $t("vinyl.wishlist") }}</h1>
			<div class="list" v-if="wishes">
				<VinylRow v-for="vinyl in wishes" :key="vinyl.name" :vinyl="vinyl" />
			</div>
		</template>
	</span>
	<span class="c">
		<div class="caution">
			<p v-html="$t('vinyl.credits')"></p>
		</div>
	</span>
</template>

<script setup lang="ts">
import VinylRow from "~/components/VinylRow.vue";

type VinylFilter =
	| "all"
	| "owned"
	| "wish"
	| "color"
	| "black"
	| "available";

const allCases: VinylFilter[] = [
	"all",
	"owned",
	"wish",
	"available",
	"color",
	"black",
];

const { t } = useI18n();

const { data } = await useAsyncData("vinyl", () => $fetch("/api/vinyl"));

const defOwned = (data.value as any).owned;
const defWishes = (data.value as any).wish;

var owned = ref((data.value as any).owned);
var wishes = ref((data.value as any).wish);
var selFilter = ref<VinylFilter>("all");

useSeoMeta({
	title: () => t("vinyl.meta.title"),
	ogTitle: () => t("vinyl.meta.title"),
	twitterTitle: () => t("vinyl.meta.title"),
	description: () => t("vinyl.meta.description"),
	ogDescription: () => t("vinyl.meta.description"),
	twitterDescription: () => t("vinyl.meta.description"),
});

function filter(type: VinylFilter) {
	selFilter.value = type;

	if (type === "all") {
		owned.value = defOwned;
		wishes.value = defWishes;
		return;
	} else if (type === "owned") {
		owned.value = defOwned;
		wishes.value = [];
		return;
	} else if (type === "wish") {
		owned.value = [];
		wishes.value = defWishes;
		return;
	} else if (type === "color") {
		owned.value = defOwned.filter(
			(v: any) => (v.discColor || "").toLowerCase() !== "black"
		);
		wishes.value = [];
		return;
	} else if (type === "black") {
		owned.value = defOwned.filter(
			(v: any) => (v.discColor || "").toLowerCase() === "black"
		);
		wishes.value = [];
		return;
	} else if (type == "available") {
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

@media screen and (max-width: 1000px) {
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
