<template>
  <div>
	<Header :is-compact="isCompact" :lang="lang" />
	<slot />
	<Footer :lang="lang" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useScroll, useMotionValueEvent, animate } from "motion-v";

const scroll = useScroll();

var lastScroll = 0.0;
var lastCompact = false;

var isCompact = false;
var lang = ref("en");
var hasLoaded = ref(false);

useMotionValueEvent(scroll.scrollY, "change", (latest) => {
	isCompact = latest > lastScroll;
	lastScroll = latest;

	if (isCompact !== lastCompact) {
		animate(
			"header",
			{ width: isCompact ? 100 : 1000 },
			{ type: "spring", stiffness: 249, damping: 63, mass: 3.4, bounce: 0.0 }
		);
		const header = document.querySelector("header");
		if (header) {
			header.setAttribute("compact", isCompact ? "true" : "false");
		}
		lastCompact = isCompact;
	}
});

onMounted(() => {
	console.log("onMounted triggered");
	try {
		const route = useRoute();
		window.scroll(0, 0);

		if (route.path.startsWith("/fr")) {
			document.documentElement.setAttribute("lang", "fr");
			lang.value = "fr";
		} else {
			document.documentElement.setAttribute("lang", "en");
			lang.value = "en";
		}
		console.log(`LANG: ${lang.value}`);
		hasLoaded.value = true; // This should trigger the template to render
		console.log(`hasLoaded set to: ${hasLoaded.value}`);
	} catch (error) {
		console.error("Error in onMounted:", error);
	}
});

useSeoMeta({
	ogImage: "/assets/og/banner.png",
	twitterImage: "/assets/og/banner.png",
	twitterCard: "summary_large_image",
	themeColor: "#1e1e1e",
});
</script>