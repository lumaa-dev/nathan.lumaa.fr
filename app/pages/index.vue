<template>
	<div class="paged">
		<div class="presentation bg">
			<span class="pill">
				<div class="badge active"></div>
				{{ $t("home.status") }}</span
			>
			<span class="name">
				<img src="/assets/hero.svg" draggable="false" />
				<p class="word">Nathan</p>
			</span>
			<p v-html="$t('home.intro')"></p>
		</div>
		<span class="indicator">&#8595;</span>
	</div>
	<div class="leftright" id="whois">
		<span>
			<p class="big">{{ $t("home.whois.title") }}</p>
			<motion.p
				:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
				:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
				}">
				<span v-html="$t('home.whois.body')" />
			</motion.p>
		</span>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/0/02/Angers_OSM_01.png"
			:alt="$t('home.whois.mapAlt')"
			draggable="false" />
	</div>
	<div class="txt" id="projects">
		<p class="big">{{ $t("home.projects.title") }}</p>
		<div class="grid">
			<motion.a
				v-for="project in projects"
				:key="project.key"
				:href="project.href"
				class="nostyle"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
					delay: project.delay,
				}">
				<ProjectBox
					:name="project.name"
					:description="$t(`home.projects.${project.key}`)"
					:img="project.img" />
			</motion.a>
		</div>
	</div>
	<div class="txt bg" id="schools">
		<p class="big">{{ $t("home.schools.title") }}</p>
		<p style="text-align: center">{{ $t("home.schools.subtitle") }}</p>
		<span class="schools">
			<Timeline name="Lycée privé Saint-Benoît" date="2022-2023">
				{{ $t("home.schools.benoit") }}
			</Timeline>
			<Timeline name="Lycée Chevrollier" date="2023-2026">
				Sciences et Technologies de l'Industrie et du Développement Durable (Système d'Information et Numérique) 
			</Timeline>
			<Timeline name="Université d'Angers" date="2026-2029" :completion="0.0">
				Génie Électrique et Informatique Industrielle
			</Timeline>
		</span>
	</div>
	<div class="txt" id="interests">
		<p class="big">{{ $t("home.interests.title") }}</p>
		<p class="badge">{{ $t("home.interests.coding") }}</p>
		<motion.p
			:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
			:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
			:transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }">
			<span v-html="$t('home.interests.codingBody')" />
		</motion.p>
		<p class="badge" style="margin-top: 3em">{{ $t("home.interests.music") }}</p>
		<motion.p
			:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
			:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
			:transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }">
			<span v-html="$t('home.interests.musicBody', { vinylPath })" />
		</motion.p>
		<p class="badge" style="margin-top: 3em">{{
			$t("home.interests.editing")
		}}</p>
		<motion.p
			:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
			:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
			:transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }">
			<span v-html="$t('home.interests.editingBody')" />
		</motion.p>
	</div>
	<div class="txt" id="vinyl">
		<p class="big">{{ $t("home.vinyl.title") }}</p>
		<div class="vgrid">
			<template v-for="(v, i) in vinyl.owned" :key="v.name">
				<motion.a
					class="vinyl nostyle"
					:href="v.discogs"
					:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0.0 }"
					:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1.0 }"
					:transition="{
						type: 'spring',
						stiffness: 567,
						damping: 132,
						mass: 3.4,
						delay: i * 0.3,
					}">
					<span>
						<img
							:src="v.img.startsWith('http') ? v.img : `/assets/vinyl/${v.img}`"
							:alt="$t('home.vinyl.cover', { name: v.name })"
							draggable="false" />
						<span>
							<p class="name">{{ v.name }}</p>
							<p class="alt">
								{{ v.artist }}<br />{{
									new Date(v.ownDate).toLocaleDateString(locale)
								}}
							</p>
						</span>
					</span>
				</motion.a>
			</template>
		</div>
		<motion.a
			class="pill"
			:href="vinylPath"
			:initial="{ scale: 1.0, boxShadow: '0 0 0px #fff', zIndex: 1 }"
			:transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
			:whileHover="{ scale: 1.3, boxShadow: '0 0 15px #fff', zIndex: 999 }"
			>{{ $t("home.vinyl.all") }}</motion.a
		>
	</div>
	<div class="txt" id="contact">
		<p class="big">{{ $t("home.contact.title") }}</p>
		<div class="platforms">
			<a href="https://discordapp.com/users/474231265059405845">
				<span class="discord">
					<img src="/assets/discord.svg" />
					@lumaa_dev
				</span>
			</a>
			<a href="https://x.com/lumaa_dev">
				<span class="x">
					<img src="/assets/x_twitter.svg" />
					@lumaa_dev
				</span>
			</a>
			<a href="mailto:lumaa@lumaa.fr">
				<span class="email">
					<img src="/assets/envelope.svg" />
					lumaa@lumaa.fr
				</span>
			</a>
		</div>
	</div>
</template>

<script setup>
import { motion } from "motion-v";
import { computed, onMounted } from "vue";
import { VinylSelector } from "~~/server/utils/vinyl.ts";

import Timeline from "~/components/Timeline.vue";
import ProjectBox from "~/components/ProjectBox.vue";

const { t, locale } = useI18n();
const localePath = useLocalePath();
const vinylPath = computed(() => localePath("vinyl"));

const projects = [
	{
		key: "amber",
		name: "Amber",
		href: "https://apps.lumaa.fr/app/amber",
		img: "/assets/projects/amber.png",
		delay: 0.9,
	},
	{
		key: "remote",
		name: "Cider Remote",
		href: "https://cider.sh/remote",
		img: "https://cider.sh/og-remote.png",
		delay: 0.3,
	},
	{
		key: "swiftseerr",
		name: "Swiftseerr",
		href: "https://apps.lumaa.fr/app/swiftseerr",
		img: "/assets/projects/swiftseerr.png",
		delay: 1.2,
	},
	{
		key: "fraca",
		name: "Fraca",
		href: "https://d.lumaa.fr/fraca",
		img: "/assets/projects/fraca.jpg",
		delay: 0.6,
	},
];

const { data: vinyl } = await useAsyncData("vinyl", () =>
	$fetch(`/api/vinyl?filter=${VinylSelector.owned}&limit=4&hideFuture=true`)
);

onMounted(() => {
	const word = document.querySelector(".word");
	const parentElm = word.parentElement;
	const chars = word.innerText.split("");

	const div = document.createElement("div");
	div.classList.add("split");
	div.setAttribute("split-word", word.innerText);

	for (let i = 0; i < chars.length; i++) {
		const char = chars[i];

		let elm = document.createElement("span");
		elm.classList.add("char");
		elm.style.display = "inline-block";
		elm.style.transition =
			"transform ease-out 0.6s, filter ease-out 0.4s, opacity ease-out 0.4s";
		elm.style.transform = "translate(200px)";
		elm.style.filter = "blur(15px)";
		elm.style.opacity = 0;
		elm.innerText = char;

		setTimeout(() => {
			elm.style.transform = `translate(0px)`;
			elm.style.filter = "blur(0)";
			elm.style.opacity = 1;
		}, 0.2 * 1000 * (i + 1));

		div.appendChild(elm);
	}

	parentElm.replaceChild(div, word);
});

useSeoMeta({
	title: () => t("home.meta.title"),
	ogTitle: () => t("home.meta.title"),
	twitterTitle: () => t("home.meta.title"),
	description: () => t("home.meta.description"),
	ogDescription: () => t("home.meta.description"),
	twitterDescription: () => t("home.meta.description"),
});
</script>

<style scoped>
/* anchors inside translated strings are injected with v-html, so they need :deep() */
:deep(a) {
	color: var(--brand);
	text-decoration: none;
}

:deep(a:hover) {
	text-decoration: underline;
}

a.pill {
	color: #000;
	background: #c5c5c5;
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;
}

.paged {
	display: block;
	height: 90vh;
}

.paged .indicator {
	display: inline-block;
	position: absolute;
	bottom: 120px;
	left: calc(50vw - 28px / 2);
	text-align: center;
	width: 28px;
	font-size: 24px;
	font-weight: 400;
	color: #ffffff40;
	background: #00000040;
	border-radius: 50%;
	box-shadow: 0 0 15px #00000070;
	animation: arrowJump 0.8s ease-in-out infinite alternate;
	pointer-events: none;
	user-select: none;
	z-index: 10;
}

.presentation {
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 80%;
	display: flex;
	flex-direction: column;
	gap: 70px;
	align-items: center;
	justify-content: center;
	z-index: 10;
	overflow: hidden hidden !important;
	background: #ff000050;
	backdrop-filter: blur(0.7em);
	border-radius: 40px;
	font-size: 1.5em;
}

.presentation > p {
	padding: 0 4em;
	text-align: center;
}

.presentation .pill {
	display: flex;
	flex-direction: row;
	gap: 0.5em;
	font-size: 0.8em;
}

.presentation .pill .badge {
	display: block;
	width: 1.2em;
	height: 1.2em;
	border-radius: 100px;
}

.presentation .pill .badge.active {
	background: #45de45;
	border: 1px solid #8cf87e80;
}

.presentation .pill .badge.busy {
	background: #de4545;
	border: 1px solid #f87e7e80;
}

.presentation .name {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 4vw;
	font-size: 6em;
	font-weight: 700;
}

.presentation .name > img {
	width: 200px;
	height: 200px;
}

.cta {
	padding: 2em 0;
}

.cta .txt {
	gap: 5px;
	text-align: center;
}

.cta .txt b {
	font-weight: 800;
	font-size: 72px;
}

.cta a,
.cta button {
	margin: 1em 0;
}

.leftright {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	padding: 1.5em 7em;
	gap: 15vw;
}

.leftright img {
	width: 15em;
	border-radius: 50%;
}

.txt.bg,
.presentation.bg,
.cta.bg {
	background: #50505050;
}

.txt {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.5em;
	margin: 3em 0;
	padding: 1.6em 6em;
	gap: 1em;
}

.txt.fontless {
	font-size: unset;
}

.txt .big,
.leftright .big {
	font-size: 4em;
	font-weight: 700;
}

.txt .badge,
:not(a).pill {
	font-size: 0.8em;
	font-weight: 700;
	text-align: center;
	border: #ffffff30 1px solid;
	padding: 0.3em 0.7em;
	width: fit-content;
	border-radius: 100px;
}

.grid {
	display: grid;
	grid-template-columns: repeat(2, 500px);
	gap: 20px;
	grid-auto-rows: 420px; /* nice */
}

.schools {
	width: 40%;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.vgrid {
	display: grid;
	grid-template-columns: repeat(2, 700px);
	gap: 20px;
}

.vinyl {
	width: 100%;
	background: #50505050;
	backdrop-filter: blur(0.7em);
	border: #ffffff15 solid 1px;
	border-radius: 20px;
	padding: 0.6em;
}

.vinyl > span {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;
}

.vinyl img {
	width: 10em;
	height: 10em;
	border-radius: calc(20px - 0.6em);
}

.vinyl .name {
	font-size: 1.4em;
	font-weight: 700;
}

.vinyl .alt {
	color: hsla(0, 0%, 100%, 0.25);
}

.platforms {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 20px;
	width: 100%;
}

.platforms img {
	width: 1.2em;
}

.platforms span {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.4em;
}

.platforms a {
	color: inherit;
	text-decoration: none !important;
}

@keyframes arrowJump {
	from {
		transform: translateY(0px);
	}

	to {
		transform: translateY(-30px);
	}
}

@media screen and (max-width: 1000px) {
	.presentation {
		top: 15%;
		flex-direction: column;
		gap: 35px;
	}

	.presentation > p {
		font-size: 0.7em;
		padding: 0 1em;
	}

	.presentation .name {
		font-size: 2.5em;
		flex-direction: column;
	}

	.presentation img {
		width: 170px;
		height: 170px;
	}

	.presentation .pill {
		font-size: 0.6em;
	}

	.paged .indicator {
		bottom: 0px;
	}

	.overview {
		display: none;
	}

	.cta {
		padding: 1em 0;
	}

	.cta .txt b {
		font-weight: 800;
		font-size: 42px;
	}

	.leftright {
		flex-direction: column;
		gap: 50px;
	}

	.leftright img {
		width: 350px;
	}

	.txt {
		padding: 1.6em 3em;
	}

	.txt,
	.leftright {
		padding: 0.75em 0.9em;
	}

	.txt .big,
	.leftright .big {
		font-size: 2.5em;
	}

	.schools {
		width: 100%;
		font-size: 0.7em;
	}

	.grid,
	.vgrid {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.vinyl .name {
		font-size: 1.15em;
	}

	.vinyl .alt {
		font-size: 0.7em;
	}

	.vinyl img {
		width: 5em;
		height: 5em;
	}
}
</style>
