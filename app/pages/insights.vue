<template>
	<span class="intro">
		<h1>Project Insights</h1>
		<p
			>Discover my creative process through screenshots. Select a project below
			and scroll downwards to see</p
		>
	</span>
	<span class="c">
		<div class="picker">
			<button
				v-for="item in projects"
				:key="item._src"
				:class="{ selected: selectedProject === item._src }"
				@click="select(item)">
				{{ item.name }}
			</button>
		</div>
	</span>
	<div class="project">
		<template v-if="!projects.map((p) => p._src).includes(selectedProject)">
			<span class="c missing" style="margin: 2em 0">
				<svg
					width="50"
					height="50"
					viewBox="0 0 209 209"
					fill="#ffffff30"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M209 104.5C209 162.214 162.214 209 104.5 209C46.7862 209 0 162.214 0 104.5C0 46.7862 46.7862 0 104.5 0C162.214 0 209 46.7862 209 104.5ZM16.2808 104.5C16.2808 153.222 55.7779 192.719 104.5 192.719C153.222 192.719 192.719 153.222 192.719 104.5C192.719 55.7779 153.222 16.2808 104.5 16.2808C55.7779 16.2808 16.2808 55.7779 16.2808 104.5Z" />
					<rect
						x="145.497"
						y="51.4975"
						width="17.6812"
						height="132.936"
						rx="8.84061"
						transform="rotate(45 145.497 51.4975)" />
				</svg>
				<p class="title">Select a project</p>
			</span>
		</template>
		<template v-if="projects.map((p) => p._src).includes(selectedProject)">
			<h1>{{
				projects.filter((p) => p._src == selectedProject)[0]?.name ??
				"See the insights..."
			}}</h1>
			<div class="scroll">
				<div
					class="txt-img"
					v-for="screenshot in projects.filter(
						(p) => p._src == selectedProject
					)[0]?.screenshots ?? []">
					<img
						:src="`/assets/insights/${selectedProject}/${screenshot.img}`"
						v-if="screenshot.img.endsWith('png')"
						draggable="false" />
					<video
						autoplay
						loop
						muted
						playsinline
						v-if="!screenshot.img.endsWith('png')">
						<source
							:src="`/assets/insights/${selectedProject}/${screenshot.img}`" />
					</video>
					<span class="txt">
						<p class="title">{{ screenshot.title }}</p>
						<p>{{ screenshot.description }}</p>
					</span>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { animate, scroll } from "motion-v";

const selectedProject = ref("");
const projects = [
	{
		name: "Cider Remote",
		_src: "remote",
		screenshots: [
			{
				img: "del_queue.mp4",
				title: "Queue Management",
				description:
					"(May 15th, 2025) For Remote v3.0.0, major overhauls were made to queues like moving and deleting songs off the queue",
			},
			{
				img: "lyrics.png",
				title: "Side-to-side lyrics",
				description:
					"(October 15th, 2025) Added side-to-side lyrics, also known as Duo Lyrics in Remote. With an early design of the Library Browser button",
			},
			{
				img: "anim_lib.png",
				title: "Animated Library",
				description:
					"(October 17th, 2025) Added animated covers in the Library Browser",
			},
			{
				img: "anim_player_v1.png",
				title: "Animated Player v1",
				description:
					"(October 17th, 2025) An early design of the look an feel of animated album covers in the media player",
			},
			{
				img: "anim_player_vFinal.mov",
				title: "Animated Player",
				description:
					'(October 17th, 2025) 15 hours later the "v1", the design has been polished to make it the best',
			},
		],
	},
	{
		name: "Fraca",
		_src: "fraca",
		screenshots: [
			{
				img: "di_early.mp4",
				title: "Dynamic Island",
				description:
					"(April 11th, 2024) The earliest media I have of Fraca, showing a different name, no icon, and the early design of the Dynamic Island under iOS 17",
			},
			{
				img: "frosted_money.png",
				title: "iOS 18 release",
				description:
					"(September 20th, 2024) Fraca releases with full Toronto-only money conversions and tax calculator, as well as the old exchange rate graph, which goes out of its bounds",
			},
			{
				img: "liquid_money.png",
				title: "Liquid Glass",
				description:
					"(September 14th, 2025) Liquid Glass revamps Fraca's design, and allows new feature to live with a stunning look. Fixes to the graph were made in between",
			},
		],
	},
];

onMounted(() => {
	if (window.innerWidth >= 1000 && selectedProject.value !== "") {
		makeScroll();
	}
});

function select(project: any) {
	selectedProject.value = project["_src"];
	if (window.innerWidth >= 1000) {
		setTimeout(() => {
			makeScroll();
		}, 10);
	}
}

function makeScroll() {
	let project = document.querySelector(".project");
	let selection = projects.filter((p) => p._src == selectedProject.value)[0];

	const screenCount: number = selection?.screenshots.length ?? 0;

	let min = `calc(${4 * -screenCount}00px + ${10 * -screenCount}vw)`;
	let max = `calc(${4 * screenCount}00px + ${10 * screenCount}vw)`;

	scroll(
		animate(".project .scroll", {
			transform: [`translateX(${max})`, `translateX(${min})`],
		}),
		{ target: project ? project : undefined }
	);
}
</script>

<style scoped>
.intro {
	width: 70%;
	padding: 30px 20%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: left;
	text-align: left;
}

.intro > p {
	font-weight: 300;
	font-size: 1.3em;
}

.c {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
}

.missing {
	padding: 2em;
	height: 40vh;
	background: #00000050;
	text-align: center;
	color: #ffffff30;
}

.project:not(.project:has(.missing)) {
	padding: 5em;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 300vh;
}

.project .title {
	font-size: 1.7em;
	font-weight: 700;
	text-align: center;
}

.project .scroll {
	display: flex;
	flex-direction: row;
	gap: 15vw;
	position: sticky;
	top: 0;
	left: 0;
	min-width: 100vw;
}

.project .txt-img {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 90vh;
	background: #00000050;
	border-radius: 20px;
	margin: 7vh 0;
}

.project .txt-img .txt {
	padding: 0.6em 1.2em;
	text-align: left;
}

.project .txt-img img,
.project .txt-img video {
	object-fit: contain;
	height: 70vh;
}

@media screen and (max-width: 1000px) {
	.intro {
		width: 80vw;
		padding: 30px;
	}
	.project:not(.project:has(.missing)) {
		height: unset;
	}

	.project .txt-img {
		margin: 1em 0;
		border-radius: 0;
		width: unset;
	}

	.project .scroll {
		position: initial;
		flex-direction: column;
		align-items: center;
		gap: 1vh;
	}
}
</style>
