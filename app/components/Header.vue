<template>
	<motion.header
		:compact="isCompact"
		:initial="{
			filter: `blur(15px)`,
			translateY: -50,
			opacity: 0,
			width: 1000,
		}"
		:animate="{
			filter: `blur(0px)`,
			translateY: 0,
			opacity: 1,
			width: isCompact ? 100 : 1000,
		}"
		:transition="{
			filter: { duration: 0.8, delay: 0.2 },
			translateY: { duration: 0.8, delay: 0.2 },
			opacity: { duration: 0.8, delay: 0.2 },
			width: { type: 'spring', stiffness: 567, damping: 132, mass: 3.4 },
		}"
	>
		<span class="keeper">
			<motion.a class="img" :href="lang == 'fr' ? '/fr' : '/'">
				<motion.img
					src="/assets/hero.svg"
					draggable="false"
					:initial="{ filter: 'drop-shadow(0 0 0px #ffffff00)', zIndex: 1 }"
					:transition="{
						default: { type: 'spring', duration: 0.85, bounce: 0.5 },
					}"
					:whileHover="{
						filter: 'drop-shadow(0 0 7px #ffffff55)',
						zIndex: 999,
					}"
				/>
			</motion.a>
		</span>

		<span class="central">
			<motion.a
				v-for="link in links"
				:href="link.path"
				:key="link.path"
				:initial="{ scale: 1.0, boxShadow: '0 0 0px #fff', zIndex: 1 }"
				:transition="{
					default: { type: 'spring', duration: 0.85, bounce: 0.5 },
				}"
				:whileHover="{ scale: 1.3, boxShadow: '0 0 15px #fff', zIndex: 999 }"
			>
				{{ link.title[lang] }}
			</motion.a>
		</span>
	</motion.header>
</template>

<style scoped>
header {
	position: sticky;
	top: 1em;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	backdrop-filter: blur(0.7em);
	background: #50505050;
	border: #ffffff15 solid 1px;
	border-radius: 100px;
	height: 100px;
	max-width: calc(100vw - 2em);
	padding: 1em;
	margin: 0 1em 1em 1em;
	z-index: 99;
}

header > * {
	filter: blur(0);
	height: 50px;
	transition: opacity 0.4s ease-out, transform 0.4s ease-out,
		filter 0.4s ease-out;
	transition-delay: 0.2s;
}

header[compact="true"] > :not(.keeper) {
	opacity: 0;
	transform: translateX(-120px);
	filter: blur(15px);
	pointer-events: none;
	user-select: none;
}

header span {
	margin: 0 8px;
}

header img,
header a.img {
	height: 50px;
}

header span.central {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
}

header a.img {
	display: inline-block;
}

header a:not(a.img) {
	color: #000;
	background: #c5c5c5;
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 100px;
}
</style>

<script lang="ts" setup>
import { motion } from "motion-v";

const props = defineProps({
	isCompact: {
		type: Boolean,
		required: true,
	},
	lang: {
		type: String,
		required: true,
	},
});

const links = [
	{
		title: {
			en: "Vinyl",
			fr: "Vinyles"
		},
		path: props.lang == "fr" ? "/fr/vinyles" : "/vinyl",
	},
];
</script>