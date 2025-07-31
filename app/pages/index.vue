<template>
    <div class="paged">
        <div class="presentation">
            <img src="/assets/hero.svg" draggable="false" />
            <p class="word">Nathan</p>
            <span class="indicator">&#8595;</span>
        </div>
        <span class="overview">
            <img src="" draggable="false"/>
            <img src="" draggable="false"/>
            <img src="" draggable="false"/>
            <img src="" draggable="false"/>
        </span>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const overviews = ["global_icon.png", "dttd.png", "B-Side-dark.png", "Fraca-dark.png", "Solong-dark.png"];

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

    var cop = overviews;
    for (let i = 0; i < 4; i++) {
        let j = Math.round(Math.random() * (cop.length - 1))
        const src = cop[j];
        cop.splice(j, 1);
        

        let img = document.querySelector(`.overview > img:nth-child(${i + 1})`)
        img.src = `/assets/icons/${src}`;
    }
})
</script>

<style scoped>
.paged {
    display: block;
    height: calc(100vh - 100px - 3em);
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

@media screen and (max-width: 800px) {
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
}
</style>