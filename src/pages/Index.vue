<template>
    <q-page padding class="flex flex-center column">
        <BackgroundGallery v-once />
        <LogoText />
    </q-page>
</template>

<script>
import BackgroundGallery from "components/BackgroundGallery";
import LogoText from "components/LogoText";

export default {
    name: "PageIndex",
    components: {
        BackgroundGallery,
        LogoText
    }
};
</script>
