<template>
    <div class="paged">
        <div class="presentation">
            <img src="/assets/hero.svg" draggable="false" />
            <p class="word">Nathan</p>
            <span class="indicator">&#8595;</span>
        </div>
    </div>
    <div class="leftright">
        <span>
            <p class="big">Who am I?</p>
            <motion.p
                :initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
                :whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
                :transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }"
            >I am <b>Nathan</b>, indie developer and music lover. I'm French and live in Angers. I am deeply passionate about Apple software, music and making fully-fleshed projects like <a href="https://apps.lumaa.fr/app/fraca">Fraca</a> or <a href="https://record.lumaa.fr/">Record Link</a>.</motion.p>
        </span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Angers_OSM_01.png" alt="Angers on a map" draggable="false" />
    </div>
    <div class="txt fontless">
        <p class="big">Project Highlight</p>
        <Pill class="highlight" src="/assets/icons/global_icon.png">
            <h2><a href="https://record.lumaa.fr/">Record Link</a> (ALPHA)</h2>
            <p>Record Link is an upcoming service that allows linking songs, albums or playlists through whatever music streaming platform your friends, family or community use! Built using Nuxt, Record Link will be available for everyone on the web, and later-on on iOS and Android. The linking feature is available for <a href="https://spotify.com/">Spotify</a>®, <a href="https://apple.com/music">Apple Music</a>® and <a href="https://cider.sh/">Cider</a>. Record Link is not affiliated with any music streaming platform, artists or music labels.</p>
        </Pill>
        <motion.a href="/projects" class="pill"
            :initial="{ scale: 1.0, boxShadow: '0 0 0px #fff', zIndex: 1 }"
            :transition="{ default: { type: 'spring', duration: 0.85, bounce: 0.5 } }"
            :whileHover="{ scale: 1.3, boxShadow: '0 0 15px #fff', zIndex: 999 }" 
        >View more projects</motion.a>
    </div>
    <div class="txt bg">
        <p class="big">Schools</p>
        <p style="text-align: center;">Enjoy the pleasure of 🇫🇷 French schools</p>
        <span class="schools">
            <Timeline name="Lycée privé Saint-Benoît" date="2022-2023">
                Seconde Générale (Section européenne)
            </Timeline>
            <Timeline name="Lycée Chevrollier" date="2023-2026" :finished="false">
                Sciences et Technologies de l’Industrie et du Développement Durable (Système d’Information et Numérique)
            </Timeline>
            <Timeline name="Université d'Angers" date="2026-20??" :finished=false>
                <span style="filter: blur(10px); user-select: none;">
                    There is nothing to discover here
                    <br />Just the name of the school
                    <br />And the year I'm entering (hopefully)
                </span>
            </Timeline>
        </span>
    </div>
    <div class="txt">
        <p class="big">Interests</p>
        <p class="badge">Coding</p>
        <motion.p
            :initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
            :whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }"
        >In 2021, I started making Discord bots in JavaScript using <a href="https://discord.js.org">discord.js</a>, then I made a few websites in native HTML, CSS and JavaScript. After making websites, I made a few <a href="https://fabricmc.net/">Minecraft Fabric</a> in Java and I started making iOS apps using <a href="https://developer.apple.com/documentation/swiftui">SwiftUI</a> in 2022. I am heavily interested in iOS development & web dev...<br /><br />Most of these projects can be found on <a href="https://github.com/lumaa-dev?tab=repositories">my GitHub profile</a>.</motion.p>
        <p class="badge" style="margin-top: 3em">Music</p>
        <motion.p
            :initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
            :whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }"
        >I often compare music to my day-to-day life support. I've been listening to many many different genres of music since 2018, and lately I've been mainly focused on rock and alternative music with a little bit of US rap.
        <br />
        <br />Also, recently, I started buying vinyl of albums while listing them on <a href="https://d.lumaa.fr/vinyl">my Discogs account</a> and on the <a href="/vinyl">vinyl tab</a> of this site which also includes my wish list for future vinyl.</motion.p>    
        <p class="badge" style="margin-top: 3em">Editing</p>
        <motion.p
            :initial="{ filter: 'blur(15px)', translateY: -50, opacity: 0 }"
            :whileInView="{ filter: 'blur(0px)', translateY: 0, opacity: 1 }"
            :transition="{ type: 'spring', stiffness: 567, damping: 132, mass: 3.4 }"
        >For a few of my projects, I produce trailer videos which depict main features or newly added features. I make them using Adobe After Effects and/or with Final Cut Pro, while syncing a copyrighted song that are available in <a href="https://music.apple.com/playlist/pl.u-yZyVE3XIdW3rXm2">this playlist</a>.
        <br />
        <br />They always end up on <a href="https://youtube.com/@Lumaa_PRO">YouTube</a>, sometimes on <a href="https://twitter.com/lumaa_dev">Twitter</a>, sometimes they end up as <a href="https://instagram.com/@lumaa_dev">Instagram Reels</a>. But they're always available.</motion.p>
    </div>
    <div class="txt">
        <p class="big">Contact</p>
        <div class="platforms">
            <a href="https://discordapp.com/users/474231265059405845">
                <span class="discord">
                    <img src="/assets/discord.svg" />
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
import { motion } from 'motion-v';
import { onMounted } from 'vue';
import Timeline from '~/components/Timeline.vue';

onMounted(() => {
    const word = document.querySelector(".word");
    const parentElm = word.parentElement;
    const chars = word.innerText.split("");

    const div = document.createElement("div");
    div.classList.add("split");
    div.setAttribute("split-word", word.innerText)

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];

        let elm = document.createElement("span");
        elm.classList.add("char");
        elm.style.display = "inline-block";
        elm.style.transition = "transform ease-out 0.6s, filter ease-out 0.4s, opacity ease-out 0.4s";
        elm.style.transform = "translate(200px)";
        elm.style.filter = "blur(15px)";
        elm.style.opacity = 0
        elm.innerText = char;

        setTimeout(() => {
            elm.style.transform = `translate(0px)`
            elm.style.filter = "blur(0)";
            elm.style.opacity = 1
        }, 0.2*1000*(i + 1));

        div.appendChild(elm);
    }

    parentElm.replaceChild(div, word);
})

useSeoMeta({
    title: "I'm Nathan",
    ogTitle: "I'm Nathan",
    twitterTitle: "I'm Nathan",
    description: "I am Nathan, indie developer and music lover. I'm French and live in Angers. I am deeply passionate about Apple software, music and making fully-fleshed projects like Fraca or Record Link.",
    ogDescription: "I am Nathan, indie developer and music lover. I'm French and live in Angers. I am deeply passionate about Apple software, music and making fully-fleshed projects like Fraca or Record Link.",
    twitterDescription: "I am Nathan, indie developer and music lover. I'm French and live in Angers. I am deeply passionate about Apple software, music and making fully-fleshed projects like Fraca or Record Link."
})
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
}

.paged {
    display: block;
    height: 90vh;
}

.presentation {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-size: 6em;
    font-weight: 700;
    gap: 4vw;
    z-index: 10;
    overflow: hidden hidden !important;
}

.presentation > img {
    width: 250px;
    height: 250px;
}

.presentation .indicator {
    display: inline-block;
    position: absolute;
    bottom: 50px;
    left: calc(50vw - 10vw);
    text-align: center;
    width: 20vw;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff40;
    animation: arrowJump 0.8s ease-in-out infinite alternate;
    pointer-events: none;
    user-select: none;
}

.overview {
    overflow: hidden hidden !important;
}

.overview > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 85px;
    height: 85px;
    max-width: 500px;
    max-height: 500px;
    opacity: 0.3;
    z-index: 5;
}

.overview > img[src=""] {
    display: none;
}

.overview > img:nth-child(1) {
    animation: overview1 3.4s ease-in-out infinite alternate;
    transform: rotate(30deg);
}

.overview > img:nth-child(2) {
    animation: overview2 4.1s ease-in-out infinite alternate;
    transform: rotate(-20deg);
}

.overview > img:nth-child(3) {
    animation: overview3 2.9s ease-in-out infinite alternate;
    transform: rotate(-15deg);
}

.overview > img:nth-child(4) {
    animation: overview4 3.7s ease-in-out infinite alternate;
    transform: rotate(25deg);
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

.txt.bg {
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

.txt .big, .leftright .big {
    font-size: 4em;
    font-weight: 700;
}

.txt .badge {
    font-size: 0.8em;
    font-weight: 700;
    text-align: center;
    border: #ffffff30 1px solid;
    padding: 0.3em 0.7em;
    width: fit-content;
    border-radius: 100px;
}

.highlight {
    margin: 20px 0;
}

.schools {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
        transform: translateY(0px)
    }

    to {
        transform: translateY(-30px)
    }
}

@keyframes overview1 {
    from {
        top: 30vh;
        left: 24vw;
    }
    to {
        top: 24vh;
        left: 18vw;
    }
}

@keyframes overview2 {
    from {
        top: 63vh;
        left: 28vw;
    }
    to {
        top: 79vh;
        left: 12vw;
    }
}

@keyframes overview3 {
    from {
        top: 61vh;
        left: calc(82vw - 85px);
    }
    to {
        top: 82vh;
        left: calc(90vw - 85px);
    }
}

@keyframes overview4 {
    from {
        top: 35vh;
        left: calc(75vw - 85px);
    }
    to {
        top: 15vh;
        left: calc(85vw - 85px);
    }
}

@media screen and (max-width: 1000px) {
    .presentation {
        flex-direction: column;
        font-size: 4em;
        gap: 35px;
    }

    .presentation img {
        width: 170px;
        height: 170px;
    }

    .overview {
        display: none;
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

    .txt, .leftright {
        padding: 0.75em 0.9em;
    }

    .txt .big, .leftright .big {
        font-size: 2.5em;
    }

    .schools {
        width: 100%;
        font-size: 0.7em;
    }
}
</style>