<template>
    <q-layout view="hHh lpR fFf" :class="'page-' + currentRouteName">
        <q-header reveal elevated class="bg-primary text-white">
            <q-toolbar>
                <q-avatar>
                    <img src="statics/img/graphics/logo_tomoe_s.svg" />
                </q-avatar>
                <q-toolbar-title>
                    <span>Daniel Sixl</span>
                </q-toolbar-title>
                <q-btn
                    dense
                    flat
                    round
                    icon="fas fa-bars"
                    aria-label="Menu"
                    @click="rightDrawerOpen = !rightDrawerOpen"
                />
            </q-toolbar>
        </q-header>

        <q-drawer v-model="rightDrawerOpen" side="right">
            <q-scroll-area>
                <div class="q-pa-md q-gutter-sm text-center">
                    <SocialLink v-for="link in linksSocial" :key="link.link" v-bind="link" />
                </div>

                <q-list>
                    <q-item-label header>Menü</q-item-label>
                    <MainMenuLink v-for="link in linksInternal" :key="link.title" v-bind="link" />

                    <q-item-label header>Externe Links</q-item-label>
                    <MainMenuLink v-for="link in linksExternal" :key="link.title" v-bind="link" />

                    <q-item-label header>Kontakt</q-item-label>
                    <MainMenuLink v-for="link in linksContact" :key="link.title" v-bind="link" />
                </q-list>
            </q-scroll-area>
            <q-img
                id="profile-image-bg"
                class="absolute-top"
                src="/statics/img/profile/profile-bg.jpg"
                draggable="false"
            >
                <div class="absolute-bottom bg-transparent text-right">
                    <div class="text-weight-bold">Daniel Sixl</div>
                    <div class="text-weight-thin">Web Development</div>
                </div>
            </q-img>
        </q-drawer>

        <q-page-container>
            <transition
                appear
                name="transitions"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                mode="out-in"
            >
                <router-view class="router-view"></router-view>
            </transition>
            <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
                <q-btn fab icon="fas fa-arrow-up" color="primary"></q-btn>
            </q-page-scroller>
            <q-page-scroller expand position="top" :scroll-offset="150" :offset="[0, 0]">
                <div
                    class="col cursor-pointer q-pa-sm bg-accent text-white text-center"
                >Zurück nach oben scrollen&hellip;</div>
            </q-page-scroller>
        </q-page-container>
    </q-layout>
</template>

<script>
import MainMenuLink from "components/MainMenuLink";
import SocialLink from "components/SocialLink";

export default {
    name: "MainLayout",

    components: {
        MainMenuLink,
        SocialLink
    },

    computed: {
        currentRouteName() {
            let route = this.$route.path.replace(/^\/+/, "");
            route = route == "" ? "home" : route;
            return route;
        }
    },

    data() {
        return {
            rightDrawerOpen: false,
            linksInternal: [
                {
                    title: "Startseite",
                    icon: "fas fa-home",
                    link: "/"
                },
                {
                    title: "Datenschutz",
                    icon: "fas fa-shield-alt",
                    link: "/datenschutz"
                },
                {
                    title: "Impressum",
                    icon: "fas fa-id-badge",
                    link: "/impressum"
                }
            ],
            linksExternal: [
                {
                    title: "Private Cloud",
                    caption: "cloud.sixl.org",
                    icon: "fas fa-cloud",
                    link: "https://cloud.sixl.org/",
                    target: "_blank"
                },
                {
                    title: "Poi-Kurs",
                    caption: "poi-kurs.de",
                    icon: "fas fa-fire",
                    link: "https://poi-kurs.de/",
                    target: "_blank"
                }
            ],
            linksContact: [
                {
                    title: "Telefon",
                    caption: "+49 911 92370377",
                    icon: "fas fa-phone",
                    link: "tel:+4991192370377"
                },
                {
                    title: "Mobil",
                    caption: "+49 176 56896000",
                    icon: "fas fa-mobile-alt",
                    link: "tel:+4917656896000"
                },
                {
                    title: "E-Mail",
                    caption: "sixl@sixl.org",
                    icon: "fas fa-at",
                    link: "sixl@sixl.org"
                }
            ],
            linksSocial: [
                {
                    icon: "fab fa-linkedin",
                    link: "https://www.linkedin.com/in/daniel-sixl/"
                },
                {
                    icon: "fab fa-github",
                    link: "https://github.com/Sixl-Daniel/"
                },
                {
                    icon: "fab fa-stack-overflow",
                    link: "https://stackoverflow.com/users/story/7233016"
                },
                {
                    icon: "fab fa-codepen",
                    link: "https://codepen.io/Sixl/"
                }
            ]
        };
    }
};
</script>
