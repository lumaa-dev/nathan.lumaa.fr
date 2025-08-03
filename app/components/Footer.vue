<template>
    <div class="footer">
        <div class="row">
            <p class="title">Nathan</p>
            <a :href="url.link" v-for="url in links" :key="url.link">
                {{ url.title }}
            </a>
            <span class="inline">
                <img src="/assets/hero.svg" draggable="false">
                © Nathan 2025
            </span>
        </div>
        <div class="row">
            <p class="title">Lumaa</p>
            <a :href="url.link" v-for="url in lumaa" :key="url.link">
                <span class="inline" v-if="url.title == 'Cider Collective'">
                    <img src="/assets/cc.svg" />
                    {{ url.title }}
                </span>
                <p v-else>{{ url.title }}</p>
            </a>
        </div>
        <div class="row">
            <p class="title">Socials</p>
            <a :href="url.link" v-for="url in socials" :key="url.link">
                {{ url.title }}
            </a>
        </div>
        <div class="row">
            <p class="title">Build</p>
            <a :href="`https://github.com/lumaa-dev/nathan.lumaa.fr/tree/${APP_COMMIT}`">Version {{ APP_COMMIT }}</a>
            <a href="https://nuxt.com/">
                <span class="inline">
                    <img src="/assets/nuxt.svg" />
                    Built with Nuxt
                </span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(to top, #ffffff30, transparent);
    padding: 100px 15vw;
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

p, a {
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
const links = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Projects",
        link: "/projects"
    },
    {
        title: "Vinyl",
        link: "/vinyl"
    }
]

const lumaa = [
    {
        title: "About",
        link: "https://lumaa.fr/"
    },
    {
        title: "Apps",
        link: "https://apps.lumaa.fr/"
    },
    {
        title: "Cider Collective",
        link: "https://cider.sh/about"
    }
]

const socials = [
    {
        title: "Twitter",
        link: "https://twitter.com/lumaa_dev"
    },
    {
        title: "Mastodon",
        link: "https://techhub.social/lumaa_dev"
    },
    {
        title: "Bluesky",
        link: "https://bsky.app/profile/lumaa.fr"
    },
    {
        title: "YouTube",
        link: "https://youtube.com/@Lumaa_PRO"
    }
]
</script>