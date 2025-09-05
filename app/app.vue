<template>
  <div v-if="hasLoaded">
    <Header :is-compact="isCompact" :lang="lang" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer :lang="lang" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useScroll, useMotionValueEvent, animate } from 'motion-v';

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
    animate("header", { width: isCompact ? 100 : 1000 }, { type: "spring", stiffness: 249, damping: 63, mass: 3.4, bounce: 0.0 })
    document.querySelector("header").setAttribute("compact", isCompact ? "true" : "false");
    lastCompact = isCompact;
  }
})

onMounted(() => {
  console.log("onMounted triggered");
  try {
    const route = useRoute()
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
})

useSeoMeta({
  ogImage: "/assets/og/banner.png",
  twitterImage: "/assets/og/banner.png",
  twitterCard: "summary_large_image",
  themeColor: "#1e1e1e"
})
</script>

<style>
:root {
  --brand: #1688c5;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #1e1e1e;
  color: #fff;
  font-family: system-ui, "SF Pro", "SF Pro Text", "SF Pro Display", "SF Compact", "SF Compact Text", "SF Compact Display", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a.nostyle {
  font-weight: inherit !important;
  color: inherit !important;
  text-decoration: none !important;
}
</style>