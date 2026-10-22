<template>
    <q-layout view="hHh lpR fFf" :class="'page-' + currentRouteName">
        <q-header reveal elevated class="bg-primary text-white">
            <q-toolbar>
                <q-avatar>
                    <img src="/statics/img/graphics/logo_tomoe_s.svg" />
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

        <drawer v-model="rightDrawerOpen" />

        <q-page-container>
            <router-view v-slot="{ Component }">
            <transition
                appear
                name="transitions"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                mode="out-in"
            >
                <component :is="Component" class="router-view" />
            </transition>
            </router-view>
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
import Drawer from "components/Drawer";

export default {
    name: "MainLayout",

    components: {
        Drawer
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
            rightDrawerOpen: false
        };
    }
};
</script>
