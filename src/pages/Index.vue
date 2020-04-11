<template>
    <q-page padding class="flex flex-center column">
        <BackgroundGallery v-once />
        <img alt="Quasar logo" src="statics/img/graphics/quasar-logo-full.svg" />
    </q-page>
</template>

<script>
import BackgroundGallery from "components/BackgroundGallery";

export default {
    name: "PageIndex",
    components: {
        BackgroundGallery
    }
};
</script>
