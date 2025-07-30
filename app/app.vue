<template>
  <Header :is-compact="false" v-on:scroll="console.log(scroll)"/>
  <NuxtLayout>
    <span class="web">
      <NuxtPage />
    </span>
  </NuxtLayout>
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
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #1e1e1e;
  color: #fff;
}

.web {
  display: block;
  padding: 0.5em 1em;
}
</style>