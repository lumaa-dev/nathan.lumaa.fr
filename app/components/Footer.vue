<template>
	<footer>
		<div class="footer">
			<div class="row">
				<p class="title">Nathan</p>
				<a v-for="url in links" :key="url.route" :href="localePath(url.route)">
					{{ url.label ? $t(url.label) : url.title }}
				</a>
				<span class="inline">
					<img src="/assets/hero.svg" draggable="false" />
					© Nathan 2025-{{ new Date().getFullYear() }}
				</span>
			</div>
			<div class="row">
				<p class="title">Lumaa</p>
				<a :href="url.link" v-for="url in lumaa" :key="url.link">
					<span class="inline" v-if="url.icon">
						<img :src="url.icon" />
						{{ url.label ? $t(url.label) : url.title }}
					</span>
					<p v-else>{{ url.label ? $t(url.label) : url.title }}</p>
				</a>
			</div>
			<div class="row">
				<p class="title">{{ $t("footer.socials") }}</p>
				<a :href="url.link" v-for="url in socials" :key="url.link">
					{{ url.title }}
				</a>
			</div>
			<div class="row">
				<p class="title">{{ $t("footer.build") }}</p>
				<a
					:href="`https://github.com/lumaa-dev/nathan.lumaa.fr/tree/${APP_COMMIT}`"
					>{{ $t("footer.version", { commit: APP_COMMIT }) }}</a
				>
				<a href="https://nuxt.com/">
					<span class="inline">
						<img src="/assets/nuxt.svg" />
						{{ $t("footer.nuxt") }}
					</span>
				</a>
			</div>
		</div>
		<div class="langs picker dark">
			<a
				v-for="l in locales"
				:key="l.code"
				:href="switchLocalePath(l.code) || '/'"
				:class="locale === l.code ? 'selected' : ''">
				{{ l.name }}
			</a>
		</div>
	</footer>
</template>

<style scoped>
footer {
	background: linear-gradient(to top, #ffffff30, transparent);
	padding: 100px 15vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
}

.footer {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.row {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.row .title {
	font-size: 1.6em;
	font-weight: 700;
}

.row img {
	width: 1.1em;
	height: 1.1em;
}

.row span.inline {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;
}

p,
a {
	color: #fff;
	text-decoration: none;
	transition: font-weight 0.4s ease-out;
}

a:hover {
	text-decoration: underline;
}

@media screen and (max-width: 1000px) {
	.footer {
		flex-direction: column;
		gap: 70px;
	}
}
</style>

<script setup>
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const links = [
	{ label: "nav.home", route: "index" },
	{ label: "nav.vinyl", route: "vinyl" },
	{ label: "nav.insights", route: "insights" },
	{ label: null, title: "Remap 2025", route: "remap" },
];

const lumaa = [
	{
		label: "footer.about",
		link: "https://lumaa.fr/",
	},
	{
		label: "footer.apps",
		link: "https://apps.lumaa.fr/",
	},
	{
		title: "Cider Collective",
		icon: "/assets/cc.svg",
		link: "https://cider.sh/about",
	},
];

const socials = [
	{
		title: "\u{1d54f} (Twitter)",
		link: "https://x.com/lumaa_dev",
	},
	{
		title: "YouTube",
		link: "https://youtube.com/@nthn_dev",
	},
	{
		title: "Mastodon",
		link: "https://techhub.social/@lumaa",
	},
	{
		title: "Bluesky",
		link: "https://bsky.app/profile/lumaa.fr",
	},
];
</script>
