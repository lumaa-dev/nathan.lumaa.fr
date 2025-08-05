<template>
    <h1 class="head">Projects</h1>
    <span class="projects">
        <Pill src="/assets/icons/global_icon.png">
            <h2><a href="https://record.lumaa.fr/">Record Link</a> (ALPHA)</h2>
            <p>Record Link is an upcoming service that allows linking songs, albums or playlists through whatever music streaming platform your friends, family or community use! Built using Nuxt, Record Link will be available for everyone on the web, and later-on on iOS and Android. The linking feature is available for <a href="https://spotify.com/">Spotify</a>®, <a href="https://apple.com/music">Apple Music</a>® and <a href="https://cider.sh/">Cider</a>. Record Link is not affiliated with any music streaming platform, artists or music labels.</p>
        </Pill>
        <Pill src="/assets/icons/Fraca-dark.png">
            <h2><a href="https://apps.lumaa.fr/app/fraca">Fraca</a></h2>
            <p>Fraca is handy native app that allows many conversions from imperial units to metric units, it was specifically made for Canadians going to France, or French people going to Canada. It also features all the timezones in Canada and a <i>Tax Calculator</i> for all provinces. This app is available on <a href="https://d.lumaa.fr/fraca">all Apple devices</a> (except Apple TV), in both French and English, for free and no in-app purchases.</p>
        </Pill>
        <Pill src="/assets/icons/B-Side-dark.png">
            <h2>B-Side</h2>
            <p>B-Side is a little and simple SwiftUI app made to display the currently playing vinyl, with optionally additional information about the track and the lyrics on the screen if you want to read or sing along. B-Side uses <a href="https://shazam.com/">Shazam</a>® to identify the playing song, <a href="https://apple.com/music">Apple Music</a>® for the song's primary information and album cover color scheme and <a href="https://discogs.com/">Discogs</a> for vinyl information.</p>
        </Pill>
        <Pill src="/assets/icons/Solong-dark.png">
            <h2>Solong</h2>
            <p>In the simplest way possible: Block specific numbers from calling you.<br />Longer explanation: There are often huge waves of scam calls about car insurance, solar panels, or whatever scam is going on. Solong allows you to block a number from calling you through the share sheet, or you can manually write phone numbers. All this natively.</p>
        </Pill>
    </span>
</template>

<script setup>
import Pill from '~/components/Pill.vue';

useSeoMeta({
    title: "Nathan's Projects",
    ogTitle: "Nathan's Projects",
    twitterTitle: "Nathan's Projects",
    description: "View my current, past and potentially future projects with an additional description.",
    ogDescription: "View my current, past and potentially future projects with an additional description.",
    twitterDescription: "View my current, past and potentially future projects with an additional description."
})
</script>

<style scoped>
h1.head {
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-top: 0.5em;
}

a {
    color: var(--brand);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.projects {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 2em 0;
}
</style>