<template>
  <Header :is-compact="false" v-on:scroll="console.log(scroll)"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import { useScroll, useMotionValueEvent, animate } from 'motion-v';
const scroll = useScroll();

var lastScroll = 0.0;
var lastCompact = false;

var isCompact = false

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
  window.scroll(0, 0)
})

if (openDate <= new Date()) {
  useSeoMeta({
    ogImage: "/assets/og/banner.png",
    twitterImage: "/assets/og/banner.png",
    twitterCard: "summary_large_image"
  })
}
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
</style>