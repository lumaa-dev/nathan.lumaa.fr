<template>
	<span class="perf-size">
		<div class="title">
			<motion.p
				class="year"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring(1.2, 0.4)"
				>Remap 2025</motion.p
			>
			<motion.p
				class="desc"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring(2.2, 0.6)"
				>Vinyl, projects and stats. All about Nathan this year.</motion.p
			>
			<span class="indicator">&#8595;</span>
		</div>
		<div class="theme">
			<a href="/insights" class="badge">Coding</a>
			<motion.div
				class="pill"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring()">
				<img :src="'/assets/cc.svg'" draggable="false" />
				<span class="txt">
					I joined <a href="https://cider.sh/about">Cider Collective</a>
					back in May 2025 to work on
					<a href="https://apps.lumaa.fr/app/remote">Cider Remote</a> as
					<i>Remote Team Lead</i>, almost changing the entire way the app looks.
					Users have expressed positive feelings towards recents updates.
				</span>
			</motion.div>
			<motion.div
				class="pill"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring()">
				<img :src="'/assets/cider.svg'" draggable="false" />
				<span class="txt">
					<a href="https://apps.lumaa.fr/app/remote">Cider Remote</a> released
					on the App Store on May 20th 2025, and received 5 updates. Adding the
					Library Browser, Apple Music lyrics, Horizontal Layout, Out-of-app
					actions, and so much more.
				</span>
			</motion.div>
			<motion.div
				class="pill"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring()">
				<img
					src="https://apps.lumaa.fr/assets/images/bubble/BubbleGlass_transparent.png"
					draggable="false" />
				<span class="txt">
					Liquid Glass released in September, and
					<a href="https://apps.lumaa.fr/app/bubble">Bubble</a> got the most of
					it: Refraction, reflection, fluidity and so much more, all of this
					amplified the reactivity of Bubble.
				</span>
			</motion.div>
			<motion.div
				class="pill"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring()">
				<img
					src="https://apps.lumaa.fr/assets/images/fraca/icon.png"
					draggable="false" />
				<span class="txt">
					In April 2025, <a href="https://apps.lumaa.fr/app/fraca">Fraca</a> has
					gotten its most accessible update ever, allowing French travelers to
					use Fraca, wherever they go in Canada. Exchange rates, Tax Calculator,
					new conversions...
				</span>
			</motion.div>
		</div>
		<div class="theme">
			<a href="/vinyl" class="badge">Music</a>
			<span class="enlarge">
				This year I got
				<motion.b
					:initial="{ translateY: -50, opacity: 0 }"
					:whileInView="{ translateY: 0, opacity: 1 }"
					:transition="spring(0.8)"
					>16</motion.b
				>
				new vinyl records
			</span>
			<span class="enlarge-x">
				But only
				<motion.b
					:initial="{ translateY: -50, opacity: 0 }"
					:whileInView="{ translateY: 0, opacity: 1 }"
					:transition="spring(1.8)"
					>1</motion.b
				>
				stood out this year.
			</span>
			<motion.span
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring(2.6)">
				<VinylRow :vinyl="vinylHeadliner" />
			</motion.span>
		</div>
		<div class="theme">
			<a href="#" class="badge">What's next?</a>
			<motion.div
				class="pill"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring()">
				<img :src="'/assets/music.svg'" draggable="false" />
				<span class="txt">
					<a href="https://ambre.type.link/">Ambre</a> and I have been working
					of a very secret project, related to music. All we can say, is that
					you have to listen to
					<a href="https://song.link/i/1836214555">booboo2</a>. Whenever you
					hear that, you'll know what I'm talking about.
				</span>
			</motion.div>
			<motion.div
				class="pill"
				:initial="{ translateY: -50, opacity: 0 }"
				:whileInView="{ translateY: 0, opacity: 1 }"
				:transition="spring()">
				<img
					src="https://lumaa.fr/img/icon_white.b1b408e5.svg"
					draggable="false" />
				<span class="txt">
					A major update to <a href="https://lumaa.fr/">lumaa.fr</a> is gonna be
					made in January-Februrary 2026, evolving the current design into
					something more fluid. Changes will be pushed to the GitHub repository.
				</span>
			</motion.div>
		</div>
		<p class="ender">Thank you, 2025.</p>
	</span>
	<span class="size-alert">
		<div class="title">
			<p class="year">Oops!</p>
			<p class="desc">You need a bigger screen to see the Nathan Remap 2025.</p>
		</div>
	</span>
</template>

<script setup>
import { motion } from "motion-v";
import VinylRow from "~/components/VinylRow.vue";

const vinylHeadliner = {
	name: "One Simple Trick",
	artist: "Lovejoy",
	img: "ost.png",
	ownDate: "2025-10-17T00:00:00.000Z",
	stream: "https://album.link/i/1834233309",
};

function spring(delay = 0.2, speed = 1) {
	return {
		type: "spring",
		stiffness: 567 * speed,
		damping: 132,
		mass: 3.4,
		delay,
	};
}
</script>

<style scoped>
p {
	font-size: 21px;
	font-weight: 400;
}

a {
	color: var(--brand);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.title {
	width: 100vw;
	height: 87vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
}

.title > .year {
	font-size: 92px;
	font-weight: 700;
}

.title .indicator {
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

.theme {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5em;
	margin: 1.5em 0;
}

.theme .badge {
	font-size: 1.2em;
	font-weight: 700;
	text-align: center;
	border: var(--brand) 2px solid;
	color: #fff;
	text-decoration: none;
	padding: 0.3em 0.7em;
	width: fit-content;
	border-radius: 100px;
}

.pill {
	display: flex;
	flex-direction: row;
	gap: 40px;
	background: #ffffff10;
	align-items: center;
	border-radius: 100vw;
	padding: 2em 3em;
	max-width: 55vw;
}

.pill .txt {
	justify-content: space-between;
	font-size: 21px;
	text-align: justify;
}

.pill img {
	width: 150px;
	aspect-ratio: 1 / 1;
	object-fit: fill;
}

.ender {
	text-align: center;
	font-weight: 900;
	font-size: 3em;
	margin: 4em 0 2em 0;
}

.enlarge {
	font-size: 28px;
}

.enlarge-x {
	font-size: 36px;
}

@keyframes arrowJump {
	from {
		transform: translateY(0px);
	}

	to {
		transform: translateY(-30px);
	}
}

.size-alert {
	display: none;
}

.perf-size {
	display: block;
}

@media screen and (max-width: 1630px) {
	.size-alert {
		display: block;
	}

	.perf-size {
		display: none;
	}

	.title > .desc {
		font-size: 18px;
		padding: 0 3em;
		text-align: justify;
	}
}
</style>
