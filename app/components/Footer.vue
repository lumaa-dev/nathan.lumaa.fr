<template>
	<footer>
		<div class="footer">
			<div class="row">
				<p class="title">Nathan</p>
				<a :href="url.link[lang] ?? url.link" v-for="url in links" :key="url.link">
					{{ url.title[lang] ?? url.title }}
				</a>
				<span class="inline">
					<img src="/assets/hero.svg" draggable="false" />
					© Nathan 2025
				</span>
			</div>
			<div class="row">
				<p class="title">Lumaa</p>
				<a :href="url.link" v-for="url in lumaa" :key="url.link">
					<span class="inline" v-if="url.title == 'Cider Collective'">
						<img src="/assets/cc.svg" />
						{{ url.title[lang] ?? url.title }}
					</span>
					<p v-else>{{ url.title[lang] ?? url.title }}</p>
				</a>
			</div>
			<div class="row">
				<p class="title">{{ lang == "fr" ? "Réseaux" : "Socials" }}</p>
				<a :href="url.link" v-for="url in socials" :key="url.link">
					{{ url.title[lang] ?? url.title }}
				</a>
			</div>
			<div class="row">
				<p class="title">{{ lang == "fr" ? "Info" : "Build" }}</p>
				<a
					:href="`https://github.com/lumaa-dev/nathan.lumaa.fr/tree/${APP_COMMIT}`"
					>Version {{ APP_COMMIT }}</a
				>
				<a href="https://nuxt.com/">
					<span class="inline">
						<img src="/assets/nuxt.svg" />
						{{ lang == "fr" ? "Fait avec Nuxt" : "Built with Nuxt" }}
					</span>
				</a>
			</div>
		</div>
		<div class="langs">
			<a href="/" :class="lang == 'en' ? 'selected' : ''">English</a>
			<a href="/fr" :class="lang == 'fr' ? 'selected' : ''">Français</a>
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

.langs {
	background: #1e1e1e;
	display: flex;
	flex-direction: row;
	padding: 0.6em 1em;
	border-radius: 100px;
	gap: 0.6em;
}

.langs a {
	padding: 0.6em 1.2em;
	border-radius: 100px;
	text-decoration: none !important;
}

.langs a.selected {
	background: #505050ab;
}

.langs a:not(.selected):hover {
	background: #50505050;
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
const props = defineProps({
	lang: {
		type: String,
		default: "en",
		required: false,
	},
});

const links = [
	{
		title: {
			en: "Home",
			fr: "Accueil"
		},
		link: {
			en: "/",
			fr: "/fr"
		},
	},
	{
		title: {
			en: "Vinyl",
			fr: "Vinyles"
		},
		link: {
			en: "/vinyl",
			fr: "/fr/vinyles"	
		}
	},
];

const lumaa = [
	{
		title: {
			en: "About",
			fr: "À propos"
		},
		link: "https://lumaa.fr/",
	},
	{
		title: {
			en: "Apps",
			fr: "Applis"
		},
		link: "https://apps.lumaa.fr/",
	},
	{
		title: "Cider Collective",
		link: "https://cider.sh/about",
	},
];

const socials = [
	{
		title: "\u{1d54f} (Twitter)",
		link: "https://x.com/lumaa_dev",
	},
	{
		title: "Mastodon",
		link: "https://techhub.social/lumaa_dev",
	},
	{
		title: "Bluesky",
		link: "https://bsky.app/profile/lumaa.fr",
	},
	{
		title: "YouTube",
		link: "https://youtube.com/@Lumaa_PRO",
	},
];
</script>
