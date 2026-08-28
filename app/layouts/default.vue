<template>
  <div>
	<Header :is-compact="isCompact" />
	<slot />
	<Footer />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useScroll, useMotionValueEvent, animate } from "motion-v";

const scroll = useScroll();
const head = useLocaleHead();

var lastScroll = 0.0;
var lastCompact = false;

var isCompact = false;

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
	window.scroll(0, 0);
});

// <html lang="..."> + hreflang alternates, driven by the active locale
useHead(() => ({
	htmlAttrs: head.value.htmlAttrs ?? {},
	link: head.value.link ?? [],
	meta: head.value.meta ?? [],
}));

useSeoMeta({
	ogImage: "/assets/og/banner.png",
	twitterImage: "/assets/og/banner.png",
	twitterCard: "summary_large_image",
	themeColor: "#1e1e1e",
});
</script>
