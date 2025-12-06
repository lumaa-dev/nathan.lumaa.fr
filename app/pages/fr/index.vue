<template>
	<div class="paged">
		<div class="presentation bg">
			<span class="pill">
				<div class="badge busy"></div>
				Occupé par les études</span
			>
			<span class="name">
				<img src="/assets/hero.svg" draggable="false" />
				<p class="word">Nathan</p>
			</span>
			<p>
				🇫🇷 Étudiant de 18 ans au
				<a href="#schools">Lycée Chevrollier</a> (Angers) en Terminale STI2D
				SIN, aussi développeur iOS et web indépendant passionné de musique et de
				<a href="#vinyl">vinyles</a>
			</p>
		</div>
		<span class="indicator">&#8595;</span>
	</div>
	<div class="cta bg">
		<span class="txt">
			<b>Remap 2025</b><br /><p
				>Revisitons les choses que j'ai accomplis cette année. (Seulement
				disponible en anglais)</p
			>
			<motion.a
				class="pill"
				href="/remap"
				:initial="{ scale: 1.0, boxShadow: '0 0 0px #fff', zIndex: 1 }"
				:transition="{
					default: { type: 'spring', duration: 0.85, bounce: 0.5 },
				}"
				:whileHover="{ scale: 1.3, boxShadow: '0 0 15px #fff', zIndex: 999 }"
				>Voir</motion.a
			>
		</span>
	</div>
	<div class="leftright" id="whois">
		<span>
			<p class="big">Qui suis-je ?</p>
			<motion.p
				:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
				:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
				}">
				Je suis <b>Nathan</b>, un développeur indépendant et amoureux de musique
				de 18 ans. Je suis français et j'habite à Angers. Je suis passionné par
				les logiciels Apple, la musique et la création de projets complets comme
				<a href="https://apps.apple.com/app/fraca/id6480592078">Fraca</a> ou
				<a href="https://apps.lumaa.fr/app/recordlink">Record Link</a>.
			</motion.p>
		</span>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/0/02/Angers_OSM_01.png"
			alt="Angers sur une carte"
			draggable="false" />
	</div>
	<div class="txt" id="projects">
		<p class="big">Projets préférés</p>
		<div class="grid">
			<motion.a
				href="https://cider.sh/remote"
				class="nostyle"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
					delay: 0.3,
				}">
				<ProjectBox
					name="Cider Remote"
					description="Contrôlez Cider à distance depuis votre iPhone ou iPad. Fait avec SwiftUI et Socket.IO"
					img="https://cider.sh/og-remote.png" />
			</motion.a>
			<motion.a
				href="https://d.lumaa.fr/fraca"
				class="nostyle"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
					delay: 0.6,
				}">
				<ProjectBox
					name="Fraca"
					description="L'application de conversion de toutes les unités françaises et canadiennes, sur tous les appareils Apple."
					img="/assets/projects/fraca.jpg" />
			</motion.a>
			<motion.a
				href="https://apps.lumaa.fr/app/bubble"
				class="nostyle"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
					delay: 0.9,
				}">
				<ProjectBox
					name="Bubble for Mastodon"
					description="Un client Mastodon natif iOS élégant, qui concentre les fonctionnalités principales de Mastodon à portée de main."
					img="/assets/projects/bubble_v2.png" />
			</motion.a>
			<motion.a
				href="https://apps.lumaa.fr/app/recordlink"
				class="nostyle"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="{
					type: 'spring',
					stiffness: 567,
					damping: 132,
					mass: 3.4,
					delay: 1.2,
				}">
				<ProjectBox
					name="Record Link"
					description="Une plateforme pour partager tout contenu musical sur toutes les plateformes de streaming, gratuitement."
					img="/assets/projects/rl.jpg" />
			</motion.a>
		</div>
	</div>
	<div class="txt bg" id="schools">
		<p class="big">Écoles</p>
		<span class="schools">
			<Timeline name="Lycée privé Saint-Benoît" date="2022-2023">
				Seconde Générale (Section européenne)
			</Timeline>
			<Timeline name="Lycée Chevrollier" date="2023-2026" :completion="0.7">
				Sciences et Technologies de l'Industrie et du Développement Durable
				(Système d'Information et Numérique)
			</Timeline>
			<Timeline name="Université d'Angers" date="2026-20??" :completion="0.0">
				<span
					style="
						filter: blur(10px);
						user-select: none !important;
						pointer-events: none !important;
					">
					Il n'y a rien à découvrir ici.
					<br />Juste le nom de l'école. <br />Et l'année d'entrée (j'espère)
				</span>
			</Timeline>
		</span>
	</div>
	<div class="txt" id="interests">
		<p class="big">Passions</p>
		<p class="badge">Programmation</p>
		<motion.p
			:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
			:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
			:transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }">
			En 2021, j'ai commencé à créer des bots Discord en JavaScript avec
			<a href="https://discord.js.org">discord.js</a>, puis j'ai réalisé
			quelques sites web en HTML, CSS et JavaScript natifs. Après les sites web,
			j'ai créé quelques mods
			<a href="https://fabricmc.net/">Minecraft Fabric</a> en Java et j'ai
			commencé à créer des applications iOS avec
			<a href="https://developer.apple.com/documentation/SwiftUI">SwiftUI</a> en
			2022. Je m'intéresse beaucoup au développement iOS et web... La plupart de
			ces projets sont disponibles sur
			<a href="https://github.com/lumaa-dev?tab=repositories"
				>mon profil GitHub</a
			>.
		</motion.p>
		<p class="badge" style="margin-top: 3em">Musique</p>
		<motion.p
			:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
			:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
			:transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }">
			Je compare souvent la musique à ma perfusion. J'écoute de nombreux genres
			musicaux différents depuis 2018, et dernièrement je me concentre surtout
			sur le rock, la musique alternative et un peu de rap américain.
			<br />
			<br />Aussi, récemment, j'ai commencé à acheter des vinyles d'albums tout
			en les listant sur
			<a href="https://discogs.com/user/nthnos/collection"
				>mon compte Discogs</a
			>
			et sur l'onglet <a href="/fr/vinyles">vinyles</a> de ce site qui inclut
			aussi ma liste de souhaits pour de futurs vinyles.
		</motion.p>
		<p class="badge" style="margin-top: 3em">Montage</p>
		<motion.p
			:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
			:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
			:transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }">
			Pour quelques-uns de mes projets, je produis des bande-annonces qui
			montrent les principales fonctionnalités ou les nouveautés de certains de
			mes projets. Je les monte avec Adobe After Effects et/ou Final Cut Pro,
			sur le rythme d'une musique sous copyright disponible dans
			<a href="https://music.apple.com/playlist/ad-aptable/pl.u-yZyVE3XIdW3rXm2"
				>cette playlist</a
			>.
			<br />
			<br />Elles finissent toujours sur
			<a href="https://youtube.com/@Lumaa_PRO">YouTube</a>, parfois sur
			<a href="https://x.com/lumaa_dev">&#120143; (Twitter)</a>, parfois elles
			finissent en tant que
			<a href="https://instagram.com/@lumaa_dev">Reels Instagram</a>. Mais elles
			sont toujours disponibles.
		</motion.p>
	</div>
	<div class="txt" id="vinyl">
		<p class="big">Derniers vinyles</p>
		<div class="vgrid">
			<template v-for="(v, i) in vinyl.owned" :key="v.name">
				<motion.a
					class="vinyl nostyle"
					:href="v.discogs"
					:initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
					:whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
					:transition="{
						type: 'spring',
						stiffness: 567,
						damping: 132,
						mass: 3.4,
						delay: i * 0.3,
					}">
					<span>
						<img
							:src="`/assets/vinyl/${v.img}`"
							:alt="'Pochette de ' + v.name"
							draggable="false" />
						<span>
							<p class="name">{{ v.name }}</p>
							<p class="alt">
								{{ v.artist }}<br />{{
									new Date(v.ownDate).toLocaleDateString("fr")
								}}
							</p>
						</span>
					</span>
				</motion.a>
			</template>
		</div>
		<motion.a
			class="pill"
			href="/fr/vinyles"
			:initial="{ scale: 1.0, boxShadow: '0 0 0px #fff', zIndex: 1 }"
			:transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
			:whileHover="{ scale: 1.3, boxShadow: '0 0 15px #fff', zIndex: 999 }"
			>Tous les vinyles</motion.a
		>
	</div>
	<div class="txt" id="contact">
		<p class="big">Contact</p>
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
import { onMounted } from "vue";
import { VinylSelector } from "~~/server/api/vinyl.get";

import Timeline from "~/components/Timeline.vue";
import ProjectBox from "~/components/ProjectBox.vue";

const { data: vinyl } = await useAsyncData("vinyl", () =>
	$fetch(`/api/vinyl?filter=${VinylSelector.owned}&limit=4`)
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
	title: "Je suis Nathan",
	ogTitle: "Je suis Nathan",
	twitterTitle: "Je suis Nathan",
	description:
		"Je suis Nathan, un développeur indépendant et amoureux de musique de 18 ans. Je suis français et j'habite à Angers. Je suis passionné par les logiciels Apple, la musique et la création de projets complets comme Fraca ou Record Link.",
	ogDescription:
		"Je suis Nathan, un développeur indépendant et amoureux de musique de 18 ans. Je suis français et j'habite à Angers. Je suis passionné par les logiciels Apple, la musique et la création de projets complets comme Fraca ou Record Link.",
	twitterDescription:
		"Je suis Nathan, un développeur indépendant et amoureux de musique de 18 ans. Je suis français et j'habite à Angers. Je suis passionné par les logiciels Apple, la musique et la création de projets complets comme Fraca ou Record Link.",
});
</script>

<style scoped>
a {
	color: var(--brand);
	text-decoration: none;
}

a:hover {
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
